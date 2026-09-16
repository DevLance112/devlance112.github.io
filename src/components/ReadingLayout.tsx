import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import type { Section, Source } from '../content/types';

const KEYWORDS = new Set(
  'async await break case catch class const continue def delete do elif else except export false finally for from function if import in interface let new None null of pass raise return self static switch this throw true try type typeof undefined var void while with yield SELECT FROM WHERE JOIN ON AS AND OR GROUP BY ORDER LIMIT INSERT INTO VALUES UPDATE SET CREATE TABLE'.split(' '),
);

/** Small, escaped React-only highlighter for the short examples in the journal. */
function HighlightedCode({ value, language }: { value: string; language: string }) {
  const commentPattern = /^(python|py|bash|sh|shell|yaml|yml)$/i.test(language)
    ? '#[^\n]*'
    : /^(sql)$/i.test(language)
      ? '--[^\n]*'
      : '\\/\\/[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/';
  const tokens = new RegExp(
    `(${commentPattern})|("(?:\\\\.|[^"\\\\])*"|'(?:\\\\.|[^'\\\\])*'|\x60(?:\\\\.|[^\x60\\\\])*\x60)|(\\b\\d+(?:\\.\\d+)?\\b)|(\\b[A-Za-z_$][\\w$]*\\b)`,
    'g',
  );
  const output: ReactNode[] = [];
  let cursor = 0;
  for (const match of value.matchAll(tokens)) {
    const offset = match.index ?? 0;
    if (offset > cursor) output.push(value.slice(cursor, offset));
    const tokenType = match[1]
      ? 'comment'
      : match[2]
        ? 'string'
        : match[3]
          ? 'number'
          : KEYWORDS.has(match[4])
            ? 'keyword'
            : undefined;
    output.push(tokenType ? <span key={offset} className={`code-token-${tokenType}`}>{match[0]}</span> : match[0]);
    cursor = offset + match[0].length;
  }
  if (cursor < value.length) output.push(value.slice(cursor));
  return <>{output}</>;
}

function CodeBlock({ code }: { code: NonNullable<Section['code']> }) {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'failed'>('idle');
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const aliveRef = useRef(true);
  const statusId = useId();

  useEffect(() => {
    aliveRef.current = true;
    return () => {
      aliveRef.current = false;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  async function copyCode() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard is unavailable');
      await navigator.clipboard.writeText(code.value);
      if (!aliveRef.current) return;
      setCopyState('copied');
    } catch {
      if (!aliveRef.current) return;
      setCopyState('failed');
    }
    timeoutRef.current = setTimeout(() => setCopyState('idle'), 5000);
  }

  return (
    <figure className="code-block">
      <figcaption className="code-header">
        <span>{code.language}</span>
        <button type="button" onClick={copyCode} aria-describedby={statusId} aria-label={`Copy ${code.language} code`}>
          {copyState === 'copied' ? 'Copied' : 'Copy code'}
        </button>
      </figcaption>
      <pre tabIndex={0} aria-label={`${code.language} code example`}><code><HighlightedCode value={code.value} language={code.language} /></code></pre>
      <span className="code-copy-status" id={statusId} role="status">
        {copyState === 'copied' ? 'Code copied to clipboard.' : copyState === 'failed' ? 'Copy unavailable. Select the code to copy it manually.' : ''}
      </span>
    </figure>
  );
}

function wrapLabel(label: string, lineLength = 19) {
  const words = label.split(/\s+/);
  const lines: string[] = [];
  for (const word of words) {
    if (!lines.length || lines[lines.length - 1].length + word.length + 1 > lineLength) lines.push(word);
    else lines[lines.length - 1] += ` ${word}`;
  }
  return lines;
}

function SystemDiagram({ diagram }: { diagram: NonNullable<Section['diagram']> }) {
  const instanceId = useId().replace(/:/g, '');
  const nodeWidth = 184;
  const gap = 44;
  const margin = 18;
  const wrappedNodes = diagram.nodes.map((node) => wrapLabel(node));
  const nodeHeight = Math.max(90, ...wrappedNodes.map((lines) => lines.length * 18 + 40));
  const height = nodeHeight + margin * 2;
  const width = Math.max(nodeWidth + margin * 2, diagram.nodes.length * (nodeWidth + gap) - gap + margin * 2);

  return (
    <figure className="prose-figure system-diagram">
      <div className="diagram-scroll" tabIndex={0} role="region" aria-label={`${diagram.title}, horizontally scrollable diagram`}>
        <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height} role="img" aria-labelledby={`${instanceId}-title ${instanceId}-description`}>
          <title id={`${instanceId}-title`}>{diagram.title}</title>
          <desc id={`${instanceId}-description`}>{diagram.nodes.join(' → ')}</desc>
          <defs>
            <marker id={`${instanceId}-arrow`} markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
              <path d="M0,0 L7,3.5 L0,7 Z" fill="currentColor" />
            </marker>
          </defs>
          {wrappedNodes.map((lines, index) => {
            const x = margin + index * (nodeWidth + gap);
            return (
              <g key={`${index}-${diagram.nodes[index]}`}>
                {index > 0 && <line x1={x - gap + 8} x2={x - 10} y1={height / 2} y2={height / 2} stroke="currentColor" strokeWidth="1.5" markerEnd={`url(#${instanceId}-arrow)`} />}
                <rect className="diagram-node" x={x} y={margin} width={nodeWidth} height={nodeHeight} rx="4" fill="none" stroke="currentColor" strokeWidth="1" />
                <text className="diagram-step" x={x + 14} y={margin + 19} fill="currentColor" fontSize="10">{String(index + 1).padStart(2, '0')}</text>
                <text x={x + nodeWidth / 2} y={height / 2 - (lines.length - 1) * 9 + 8} textAnchor="middle" fill="currentColor" fontSize="13">
                  {lines.map((line, lineIndex) => <tspan key={lineIndex} x={x + nodeWidth / 2} dy={lineIndex === 0 ? 0 : 18}>{line}</tspan>)}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <figcaption><span>{diagram.title}.</span> {diagram.caption}</figcaption>
    </figure>
  );
}

export function ReadingLayout({ sections, children }: { sections: Section[]; children?: ReactNode }) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? '');
  const [tocOpen, setTocOpen] = useState(false);
  const tocId = useId();
  const contentRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;
    const sectionElements = Array.from(content.querySelectorAll<HTMLElement>('.prose-section'));
    let frame = 0;

    function updateReadingPosition() {
      frame = 0;
      if (!content || !progressRef.current) return;
      const bounds = content.getBoundingClientRect();
      const range = bounds.height - window.innerHeight + 144;
      const progress = range > 0 ? Math.max(0, Math.min(1, (144 - bounds.top) / range)) : bounds.top <= 144 ? 1 : 0;
      progressRef.current.style.transform = `scaleX(${progress})`;
      progressRef.current.setAttribute('aria-valuenow', String(Math.round(progress * 100)));

      const current = sectionElements.reduce<HTMLElement | undefined>((previous, element) =>
        element.getBoundingClientRect().top <= 160 ? element : previous, undefined);
      setActiveId(current?.id ?? sectionElements[0]?.id ?? '');
    }

    function scheduleUpdate() {
      if (!frame) frame = window.requestAnimationFrame(updateReadingPosition);
    }

    const observer = typeof IntersectionObserver === 'undefined' ? null : new IntersectionObserver(scheduleUpdate, {
      rootMargin: '-120px 0px -55% 0px',
      threshold: 0,
    });
    const resizeObserver = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(scheduleUpdate);
    sectionElements.forEach((element) => observer?.observe(element));
    resizeObserver?.observe(content);
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    scheduleUpdate();

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
      resizeObserver?.disconnect();
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
    };
  }, [sections]);

  return (
    <>
      <div ref={progressRef} className="reading-progress" role="progressbar" aria-label="Reading progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={0} style={{ transform: 'scaleX(0)' }} />
      <div className="reading-layout">
        <aside className="reading-toc">
          <button className="toc-toggle" aria-expanded={tocOpen} aria-controls={tocId} onClick={() => setTocOpen(open => !open)}>On this page <span aria-hidden="true">{tocOpen ? '−' : '+'}</span></button>
          <nav id={tocId} data-open={tocOpen} aria-label="On this page">
            <p className="toc-label">On this page</p>
            <ol>
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} aria-current={activeId === section.id ? 'location' : undefined}>
                    <span className="toc-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>
        <div className="reading-content" ref={contentRef}>
          {children}
          {sections.map((section, index) => (
            <section className="prose-section" id={section.id} key={section.id} tabIndex={-1} aria-labelledby={`${section.id}-heading`}>
              <h2 className="section-heading" id={`${section.id}-heading`}><span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>{section.title}</h2>
              {section.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}
              {section.bullets && <ul>{section.bullets.map((bullet, bulletIndex) => <li key={bulletIndex}>{bullet}</li>)}</ul>}
              {section.quote && <blockquote><p>{section.quote.text}</p><cite>{section.quote.attribution}</cite></blockquote>}
              {section.image && <figure className="prose-figure"><img src={section.image.src} alt={section.image.alt} loading="lazy" decoding="async" /><figcaption>{section.image.caption}</figcaption></figure>}
              {section.diagram && <SystemDiagram diagram={section.diagram} />}
              {section.table && <div className="table-scroll" tabIndex={0} role="region" aria-label={`${section.title} comparison table`}><table><thead><tr>{section.table.headers.map((header, headerIndex) => <th scope="col" key={headerIndex}>{header}</th>)}</tr></thead><tbody>{section.table.rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}</tr>)}</tbody></table></div>}
              {section.code && <CodeBlock code={section.code} />}
            </section>
          ))}
        </div>
      </div>
    </>
  );
}

export function SourceNotes({ sources }: { sources: Source[] }) {
  if (!sources.length) return null;
  return (
    <section className="source-notes" aria-label="Sources and references">
      <h2>Sources & references</h2>
      <ol>{sources.map((source, index) => <li key={`${source.href}-${index}`}><a href={source.href} target="_blank" rel="noopener noreferrer">{source.label}<span className="sr-only"> (opens in a new tab)</span></a>{source.note && <p className="source-note">{source.note}</p>}</li>)}</ol>
    </section>
  );
}
