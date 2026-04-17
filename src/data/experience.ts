export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  description: string;
  type: 'work' | 'education';
}

export const experience: ExperienceItem[] = [
  {
    role: 'Full-Stack Software Engineer',
    org: 'DS Innovators Ltd.',
    period: '2017 – Present',
    description:
      'Built and maintained enterprise software systems across Java, Python, and JavaScript stacks. Delivered ERP integrations, government-facing platforms, ETL pipelines, and ML-powered document processing tools.',
    type: 'work',
  },
  {
    role: 'B.Sc. Computer Science & Engineering',
    org: 'Mawlana Bhashani Science and Technology University',
    period: '2012 – 2017',
    description:
      'Graduated with a degree in Computer Science and Engineering.',
    type: 'education',
  },
];
