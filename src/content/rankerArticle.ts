import type { Article } from './types';

export const rankerArticle: Article = {
  slug: 'designing-a-search-ranker',
  title: 'Designing a search ranker: frequency, emphasis, and relevance',
  summary: 'The weighting formula I designed for our academic search engine, how it fed cosine similarity, and what I would verify before trusting its top five results.',
  category: 'Architecture & Systems',
  tags: ['Search', 'Ranking', 'TF-IDF', 'Cosine similarity', 'Technical decisions'],
  date: '2026-09-06',
  readingTime: '7 min read',
  featured: true,
  relatedProjects: ['webcrawler-indexer-ranker'],
  sources: [{
    label: 'Original crawler, indexer, and ranker project record',
    href: 'https://github.com/DevLance112/DevLance112.github.io/blob/main/old_content/devlance112.github.io/Webcrawler-Indexer-Ranker-Project-Detail.html',
  }],
  editorialNote: '',
  sections: [
    {
      id: 'the-ranking-problem', title: 'Finding a page is not the same as ranking it',
      paragraphs: [
        'Our six-week academic project connected a crawler, an indexer, and a ranker. I worked with Anthony Wen, Van Pham, and Aileen Tran under Professor Alberto Krone-Martins and designed the TF-IDF weighting within the shared search engine.',
        'The indexer answered which documents contained a term. The ranker had a different job: put the most useful matches first. Counting matches alone would miss the distinction between a word repeated throughout a page, a rare word that distinguishes its topic, and a word emphasized in its markup.',
        'The assignment required local file storage rather than a database, and the full inverted index could not be loaded into memory. The query path therefore had to retrieve relevant postings before comparing documents. The output was deliberately small: the top five scored URLs.',
      ],
    },
    {
      id: 'signals-and-weights', title: 'Three signals I wanted the score to express',
      paragraphs: [
        'In the original account, I described term frequency relative to the amount of text, logarithmic scaling to moderate large ratios, and inverse document frequency to give uncommon terms more influence. The implementation also tracked “special” or font-emphasized occurrences.',
        'These signals represent different judgments. A term’s frequency within one document is not the same as its rarity across the collection. Emphasis adds a clue about structure.',
      ],
      table: {
        headers: ['Signal', 'Intended contribution', 'What needs checking'],
        rows: [
          ['Within-document frequency', 'Give repeated topical terms more influence', 'Long pages, short pages, and repeated boilerplate'],
          ['Collection rarity', 'Give distinguishing terms more influence', 'Typos, unusual identifiers, and noisy rare tokens'],
          ['Emphasized occurrences', 'Use document formatting as an additional signal', 'Which tags count and whether repeated emphasis overwhelms relevance'],
        ],
      },
    },
    {
      id: 'the-archived-formula', title: 'The formula in the project record',
      paragraphs: [
        'The image below shows the project’s expression. Here f is the regular frequency of the term, s is its special/font-emphasized frequency, L is the total regular-word count in the document, N is total_count, and df is document_frequency.',
        'The expression adds emphasized frequency to both the numerator and denominator of the local-frequency ratio, then multiplies that transformed ratio by a collection-rarity term.',
      ],
      image: {
        src: '/assets/legacy/tf-idf%20visualization.JPG',
        alt: 'Archived formula: weight equals one plus log base ten of regular plus special frequency divided by total regular count plus special frequency, multiplied by log base ten of total count divided by document frequency.',
        caption: 'Original formula image from the search-project archive. The readable transcription below preserves its structure.',
      },
      code: { language: 'text', value: 'weight(t, d) = (1 + log10((f + s) / (L + s))) * log10(N / df)\n\nf  = regular occurrences of term t in document d\ns  = special/font-emphasized occurrences of t\nL  = total regular-word count of d\nN  = total_count\ndf = document_frequency' },
    },
    {
      id: 'reviewing-the-math', title: 'A normalization detail I would revisit',
      paragraphs: [
        'Reading the formula again exposes an important edge case. A positive frequency ratio can still produce a negative transformed TF value. In a constructed example with f = 2, s = 0, and L = 100, the ratio is 0.02 and 1 + log10(0.02) is approximately -0.699. At a ratio of 0.1, the transformed value is zero.',
        'This is not a conventional nonnegative log-frequency weight. Its sign can interact with query representation and cosine normalization, so I would reproduce those details before deciding whether to retain the expression.',
        'I would compare it with a nonnegative log-frequency baseline such as log10(1 + f), holding collection rarity fixed. I would also check zero counts, empty documents, terms absent from the collection, and terms present in every document before any logarithm or division.',
      ],
    },
    {
      id: 'from-postings-to-scores', title: 'From postings to a comparable score',
      paragraphs: [
        'The team stored weighted postings in an inverted index and used a term-to-byte-position map to read relevant data from disk. Compact document IDs linked the scoring path back to URLs. Retrieving postings avoided loading the whole index, but scoring still depended on the amount of matching data.',
        'The documented ranker compared a document’s TF-IDF vector with the query using cosine similarity: their dot product divided by the product of their magnitudes. To make that comparison meaningful, term coordinates must agree. A document norm must be computed over the defined document vector, rather than silently shrinking to just the terms matched by the current query.',
        'Query weighting, full norm computation, and candidate matching determine how the formula behaves in practice.',
      ],
      diagram: {
        title: 'The documented ranking path',
        nodes: ['Query terms', 'Read weighted postings', 'Cosine comparison', 'Top five document IDs', 'Return URLs'],
        caption: 'From query terms to the top five ranked URLs.',
      },
      code: { language: 'text', value: 'cosine(q, d) = sum(q[t] * d[t]) / (norm(q) * norm(d))\nnorm(v) = sqrt(sum(v[t] ** 2))\n\nThe summation for each norm covers its defined full vector.\nA zero norm needs an explicit policy instead of division by zero.' },
    },
    {
      id: 'an-inspectable-scorer', title: 'Keep a small scorer that can be inspected',
      paragraphs: [
        'The Python example below illustrates the cosine step. It accepts already-weighted query and document vectors so that weighting choices can be tested separately.',
        'The example returns zero for a zero-magnitude vector. A production search experience would also need to decide whether that case means no results, ignored terms, or a useful message to the user. Separating these decisions makes a ranking failure easier to explain.',
      ],
      code: { language: 'python', value: 'from math import sqrt\n\ndef cosine(query, document):\n    query_norm = sqrt(sum(w * w for w in query.values()))\n    document_norm = sqrt(sum(w * w for w in document.values()))\n    if query_norm == 0 or document_norm == 0:\n        return 0.0\n    dot = sum(w * document.get(term, 0.0)\n              for term, w in query.items())\n    return dot / (query_norm * document_norm)\n\nassert abs(cosine({"search": 1}, {"search": 2}) - 1) < 1e-12\nassert cosine({"search": 1}, {"recipe": 2}) == 0\nassert cosine({}, {"search": 2}) == 0\nassert cosine({"search": 1}, {"search": 2, "recipe": 2}) < 1' },
    },
    {
      id: 'evaluate-the-top-five', title: 'Evaluate the top five, not just the stopwatch',
      paragraphs: [
        'The project record reports search execution within 100 ms. I would evaluate speed and relevance separately.',
        'For a follow-up, I would assemble a small set of explicit query intents: a known page, a broad topic, a multi-term query, a rare token, and a query with no useful match. I would inspect which returned pages satisfy each intent, then compare the archived weighting, a simpler baseline, and emphasis enabled or disabled on the same data.',
        'I would record ties and make their ordering deterministic, inspect duplicate URLs, and separate time spent reading postings from time spent scoring and selecting results.',
      ],
    },
    {
      id: 'what-this-design-taught-me', title: 'Make the ranking decision explainable',
      paragraphs: [
        'The useful part of this project record is the chain of choices: which text to count, how to weight it, how to compare vectors, and how to return a short result list under a storage constraint. My contribution was the weighting design within that shared system.',
        'The next step would be to recover the exact tokenizer, query weights, emphasis rules, candidate policy, norm computation, and executable benchmark. Until then, the formula and its edge cases are concrete evidence to examine; a familiar algorithm name is not a substitute for checking what the score actually does.',
      ],
    },
  ],
};
