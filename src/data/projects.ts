export interface Project {
  title: string;
  description: string;
  tags: string[];
  type: 'work' | 'personal';
  url?: string;
}

export const projects: Project[] = [
  {
    title: 'PDM',
    description: 'Product Development Management system — ERP integration for end-to-end product lifecycle management.',
    tags: ['Java', 'Spring Boot', 'Oracle'],
    type: 'work',
  },
  {
    title: 'DRIMS',
    description: 'Renovation Information Management System with biometric/NID search and DMP integration.',
    tags: ['Java', 'Spring Boot', 'Oracle'],
    type: 'work',
  },
  {
    title: 'NDF',
    description: 'National Dashboard Framework — ETL pipelines feeding interactive Apache Superset dashboards.',
    tags: ['Python', 'ETL', 'Apache Superset', 'SQL'],
    type: 'work',
  },
  {
    title: 'Envize',
    description: 'Document classification system using machine learning for automated categorisation.',
    tags: ['Python', 'PyTorch', 'Scikit-learn', 'NLP'],
    type: 'work',
  },
  {
    title: 'tinkerbd',
    description: 'TypeScript utility library.',
    tags: ['TypeScript'],
    type: 'personal',
    url: 'https://github.com/raihanniloy/tinkerbd',
  },
  {
    title: 'Dash_Stream',
    description: 'Real-time streaming dashboard built with Python.',
    tags: ['Python', 'Streaming', 'Dashboard'],
    type: 'personal',
    url: 'https://github.com/raihanniloy/Dash_Stream',
  },
  {
    title: 'Alchemy_Analytics',
    description: 'Visual query builder for SQLAlchemy — compose complex queries without raw SQL.',
    tags: ['Python', 'SQL', 'SQLAlchemy'],
    type: 'personal',
    url: 'https://github.com/raihanniloy/Alchemy_Analytics',
  },
];
