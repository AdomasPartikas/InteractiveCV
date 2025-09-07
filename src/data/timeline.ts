import type { TimelineEvent, ContactInfo } from '../types';

export const timelineData: TimelineEvent[] = [
  {
    id: '1',
    year: '2000',
    title: 'First Computer Experience',
    subtitle: 'Age 6',
    description: 'Introduced to computers through Counter-Strike on the family PC',
    details: [
      'Started with launching Mozilla Firefox',
      'Watched first YouTube videos',
      'Began experimenting with software and games'
    ],
    category: 'personal'
  },
  {
    id: '2',
    year: '2014',
    title: 'First PC Build',
    subtitle: 'Age 14',
    description: 'Built my first computer and developed strong interest in hardware and software',
    category: 'personal'
  },
  {
    id: '3',
    year: '2019',
    title: 'NKKM - Year One',
    subtitle: 'Naujos Kartos Kompiuterių Mokykla',
    description: 'Comprehensive computer science foundation',
    details: [
      'Building PCs from scratch',
      'Installing operating systems (Windows 95 to Ubuntu)',
      'Windows registry editing',
      'VB programming introduction',
      'System administration basics'
    ],
    category: 'education'
  },
  {
    id: '4',
    year: '2020',
    title: 'Software Engineering Specialization',
    subtitle: 'NKKM - Year Two',
    description: 'Discovered programming passion through C# (C Sharp)',
    details: [
      'Initially chose System Administration (class didn\'t form)',
      'Enrolled in Software Engineering instead',
      'Fell in love with C# and .NET ecosystem',
      'Built web scrapers for data extraction',
      'Created Discord bots for Steam player monitoring',
      'Developed Windows Forms automation tools',
      'Built custom system interaction tools'
    ],
    category: 'education'
  },
  {
    id: '5',
    year: '2021',
    title: 'High School Graduation',
    subtitle: 'IT Exam Excellence',
    description: 'Scored 92/100 on IT exam, reflecting programming enthusiasm',
    details: [
      'C# experience improved C++ skills through cross-language learning',
      'System Administration group was later disbanded',
      'Lucky placement in Software Engineering set the right career path'
    ],
    category: 'achievement'
  },
  {
    id: '6',
    year: '2021',
    title: 'University & First Job',
    subtitle: 'Vilnius Tech University',
    description: 'Started Software Engineering studies and professional career',
    details: [
      'Began studies at Vilnius Tech University',
      'First job at TopoCentras',
      'Gained real-world development experience'
    ],
    category: 'education'
  },
  {
    id: '7',
    year: '2022',
    title: 'Barbora',
    subtitle: 'Career Development',
    description: 'Continued professional growth in software development',
    category: 'work'
  },
  {
    id: '8',
    year: '2023',
    title: 'Danske Bank',
    subtitle: 'Full Stack Mainframe Engineer (Student)',
    description: 'Specialized in C# backend development with professional practices',
    details: [
      'Writing clean, maintainable code',
      'Unit and integration testing',
      'Code reviews and collaboration',
      'Deployment processes',
      'Docker containerization',
      'API design and development',
      'Working with NSwag and Postman',
      'Confirmed passion for backend engineering'
    ],
    category: 'work'
  }
];

export const contactInfo: ContactInfo = {
  email: 'your.email@example.com', // Replace with actual email
  linkedin: 'https://linkedin.com/in/patrikas-adomaitis', // Replace with actual LinkedIn
  github: 'https://github.com/patrikas-adomaitis', // Replace with actual GitHub
  location: 'Vilnius, Lithuania'
};
