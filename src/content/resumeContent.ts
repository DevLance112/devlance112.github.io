// Complete achievements and skills transcribed from the supplied 2026 resume.
// Kept separate from the shorter editorial summaries used on About.
export const resumeAchievements: Record<string, string[]> = {
  'Project Coordinator': [
    'Led the Health Care Academy team, designing and implementing a standard operating procedure (SOP) to streamline operations and ensure consistency for future cohorts.',
    'Managed government-funded programming for 82 students, with an 88% graduation rate and a 95% work placement rate among graduates through targeted curriculum oversight and stakeholder coordination.',
  ],
  'Career Advisor': [
    'Coordinated a large-scale workforce development initiative that served 909 individuals and placed 792 in employment, achieving an 87% job placement rate across the program.',
  ],
  'Lead Developer & Founder': [
    'Designed and developed a multifunctional AI-powered resume builder over 12-week cycles, featuring job description parsing and resume tailoring to match job requirements.',
    'Architected and implemented a PostgreSQL database with Strapi v5, designing a schema for scalability and data integrity, with hosting on Render.com.',
    'Initiated an AI-powered virtual secretary to handle incoming calls, screen unwanted callers, schedule appointments, and sync with the user’s calendar. The prototype passed 80% of manual test cases.',
  ],
  'Team Lead / Project Coordinator': [
    'Directed a 4-person cross-functional team during an 8-week product development cycle, coordinating daily stand-ups, task assignments, and progress check-ins to maintain timeline adherence and productivity.',
    'Created and oversaw weekly project schedules, meeting agendas, and milestone reports, delivering 100% of planned development goals on time and improving stakeholder satisfaction.',
    'Organized and presented weekly stakeholder briefings to share progress and identify blockers promptly, reporting a 15% reduction in project risks.',
  ],
};

export const resumeSkills = [
  { category: 'Project management', items: ['Jira', 'Agile / Scrum', 'Airtable', 'Slack', 'Zoom / Teams'] },
  { category: 'Operations', items: ['Cross-functional team coordination', 'Stakeholder briefings', 'SOP design', 'Time management', 'Professional communication', 'Team leadership'] },
  { category: 'Development', items: ['C++ / C#', 'Python', 'Java', 'JavaScript', 'HTML / CSS', 'Flutter', 'SQL', 'NoSQL', 'Git', 'Ubuntu Linux', 'API tuning', 'AWS', 'GCP'] },
];

export const resumeEducation = {
  university: 'University of California, Irvine',
  date: 'June 2024',
  degrees: [
    { degree: 'B.S. Computer Science', school: 'Donald Bren School of Information and Computer Sciences' },
    { degree: 'B.A. Business Administration and Management', school: 'The Paul Merage School of Business', focus: 'Information Systems' },
  ],
  coursework: ['Management of IT', 'Negotiation', 'Foundation of Teams', 'Business Intelligence for Analytical Decisions', 'Management Science', 'Managing Organizational Behavior', 'Strategic Management'],
};
