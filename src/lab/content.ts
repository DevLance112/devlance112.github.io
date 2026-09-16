import { profile, projects, articles, experience, capabilities } from '../content/siteContent';
export { profile, articles, experience };
export const selected = ['newu-inscribex', 'ai-resume-builder', 'movie-browser'].map(slug => projects.find(p => p.slug === slug)!);
export const skills = [capabilities[0], capabilities[3], capabilities[4], capabilities[6]];
export const caseNotes = [
  { title: 'Context & constraints', text: 'A sponsor’s broad Web3 vision needed explicit communication flows and a delivery plan. Firebase was required, and the team inherited designs from another team.' },
  { title: 'A decision with a cost', text: 'The team initially copied names and avatars into message data. As profile editing approached, the CTO recommended reading from one user record to keep values current. That introduced repeated profile reads.' },
  { title: 'Delivery & reflection', text: 'I coordinated stand-ups, assignments, weekly schedules and stakeholder briefings. The archive records the profile migration as partly complete and Redis as deferred. The resume reports delivery of planned goals; it does not establish a complete production launch.' },
];
export const gaps = '[需要确认团队规模] Resume: 4 people / 8 weeks; archive: four named collaborators / 10 weeks. [需要补充具体结果] Current launch status and read-cost measurements.';
export const directions = [
  {slug:'editorial', letter:'A', name:'Editorial Engineering Journal', short:'The journal', concept:'以索引、旁注与长文节奏，展开工程判断。', motion:'排字揭示 · 分栏进入'},
  {slug:'systems', letter:'B', name:'Systems / Operations Interface', short:'The operating field', concept:'以系统关系、决策记录与交付约束组织证据。', motion:'线路展开 · 顺序装配'},
  {slug:'cinematic', letter:'C', name:'Cinematic Case Study', short:'The unfolding story', concept:'以全屏章节、影像揭示与连续阅读建立记忆。', motion:'幕布开启 · 章节裁切'},
  {slug:'minimal', letter:'D', name:'Minimal Technical Leadership', short:'The considered answer', concept:'以精准文字、大幅留白与清晰职责建立信任。', motion:'基线归位 · 细线展开'},
];
