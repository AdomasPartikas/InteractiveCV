import type { TimelineEvent } from '../types';

export const timelineData: TimelineEvent[] = [
  {
    id: '1',
    year: '2008',
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
    year: '2015',
    title: 'First PC Build',
    subtitle: 'Age 13',
    description: 'Built my first computer and developed strong interest in hardware and software',
    category: 'personal'
  },
  {
    id: '3',
    year: '2016',
    title: 'Started coding in High School',
    subtitle: 'Age 14',
    description: 'First coding experiences with C++',
    category: 'education'
  },
  {
    id: '4',
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
    id: '5',
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
      'Developed Windows Forms automation tools (mostly scrapers)',
      'Built custom system interaction tools (annoying tools)',
    ],
    category: 'education'
  },
  {
    id: '6',
    year: '2021',
    title: 'High School Graduation',
    subtitle: 'IT Exam',
    description: 'Scored 92/100 on IT exam, reflecting programming enthusiasm',
    details: [
      'C# experience improved C++ skills through cross-language learning',
      'System Administration group was later disbanded',
      'Lucky placement in Software Engineering set the right career path'
    ],
    category: 'achievement'
  },
  {
    id: '7',
    year: '2021',
    title: 'University Enrollment',
    subtitle: 'Vilnius Tech University',
    description: 'Started Software Engineering studies',
    category: 'education'
  },
  {
    id: '8',
    year: '2021',
    title: 'First Job at TopoCentras',
    description: 'Gained initial professional experience',
    category: 'work'
  },
  {
    id: '9',
    year: '2022',
    title: 'Barbora',
    subtitle: 'Career Development',
    description: 'Continued professional growth',
    category: 'work'
  },
  {
    id: '10',
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
  },
  {
    id: '11',
    year: '2025',
    title: 'University Graduation',
    subtitle: 'Vilnius Tech University',
    description: 'Gained a bachelor\'s degree in Software Engineering',
    details: [
      'Learned to design, program, and test complex software systems',
      'Applied both sequential and parallel algorithms',
      'Worked with advanced programming languages and frameworks (C#, Java, SQL, Python, C++)',
      'Ensured software quality and wrote technical documentation',
      'Developed strong teamwork and IT project management skills'
    ],
    category: 'achievement'
  }
];
