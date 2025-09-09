import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'bachelor-project-invaise',
    title: 'Invaise - Investment Portfolio Optimization Using Artificial Intelligence',
    description: 'AI-driven investment portfolio optimization tool developed as my bachelor\'s thesis project',
    longDescription: 'A web application designed to optimize a created portfolio of stocks using AI time series prediction models. The project features a microservices architecture with separate services for the frontend, backend API, and AI model processing - making it 5 services in total. The AI component utilizes an LSTM neural network to predict stock prices based on historical data, enabling users to make informed investment decisions. The application is built with modern technologies and was deployed on Azure. The project is no longer deployed.',
    technologies: ['Python', '.Net8', 'React', 'Docker', 'Azure', 'NSwag', 'MySQL', 'PyTorch', 'Pandas', 'NumPy', 'Scikit-learn'],
    githubUrl: 'https://github.com/AdomasPartikas/Invaise.BusinessDomain',
    images: [
        '/images/projects/invaise-mainpage.png',
        '/images/projects/invaise-portfolio.png',
        '/images/projects/invaise-adminpage.png'
    ],
    featured: true,
    status: 'completed',
    category: 'web',
    year: '2025',
    highlights: [
      'AI-based portfolio optimization',
      'LSTM neural network for time series prediction',
      'Microservices architecture',
      'Real-time data processing',
      'Azure cloud deployment',
      'Docker containerization',
      'JWT authentication',
      'Email password reset',
      'Entity Framework Core with MySQL',
      'Hangfire for background tasks',
      'Serilog for logging'
    ]
  },
  {
    id: 'youtrade-trading-simulation',
    title: 'YouTrade - Trading Simulation Platform',
    description: 'A trading simulation platform for practicing stock trading with virtual currency',
    longDescription: 'YouTrade is a web application that simulates stock trading, allowing users to practice trading strategies using virtual currency. The platform provides real-time stock data, portfolio management, and performance tracking. The project was developed as part of my studies and is no longer actively maintained or deployed.',
    technologies: ['C#', '.NET Core', 'React', 'Docker', 'Azure', 'NSwag', 'MySQL', 'Entity Framework Core', 'JWT Authentication', 'Serilog'],
    githubUrl: 'https://github.com/AdomasPartikas/MarketDataDomain',
    images: [
        '/images/projects/youtrade-mainpage.png',
        '/images/projects/youtrade-portfoliopage.png',
        '/images/projects/youtrade-stockpage.png'
    ],
    featured: true,
    status: 'completed',
    category: 'web',
    year: '2024',
    highlights: [
        'Real-time market data ingestion',
        'Data normalization and storage',
        'Historical data retrieval',
        'User authentication and authorization',
        'Portfolio management',
        'Trade execution and management',
        'Integration with external data providers'
    ]
  },
  {
    id: 'housespotter',
    title: 'HouseSpotter - Real Estate Platform',
    description: 'A web application for browsing and managing real estate listings',
    longDescription: 'Housespotter is a real estate platform combining existing Lithuanian real estate listings (by scraping) from multiple sources (Aruodas, Domo, Skelbiu) into one user-friendly interface. The application allows users to search, filter, and view detailed property information. The project is no longer actively maintained or deployed.',
    technologies: ['C#', '.NET Core', 'React', 'HtmlAgilityPack', 'Puppeteer', 'NSwag', 'MySQL', 'Entity Framework Core', 'JWT Authentication'],
    githubUrl: 'https://github.com/AdomasPartikas/HouseSpotterInReact',
    images: [
        '/images/projects/housespotter-mainpage.png',
        '/images/projects/housespotter-productpage.png'
    ],
    featured: true,
    status: 'completed',
    category: 'web',
    year: '2023',
    highlights: [
        'Advanced property search and filtering',
        'User authentication and authorization',
        'Responsive design for mobile and desktop',
        'Integration with external real estate APIs'
    ]
  },
    {
    id: 'rockpaperfight-videogame',
    title: 'Rock Paper Fight - 2D Fighting Game',
    description: 'A 2D fighting game developed using Unity, featuring multiple characters and combat mechanics',
    longDescription: 'Rock Paper Fight is a 2D fighting game created as a personal project to explore game development using the Unity engine. The game features multiple characters, each with unique abilities and combat mechanics. To put simply it\'s a rock-paper-scissors game with a twist. The project is no longer actively maintained or deployed.',
    technologies: ['C#', 'Unity', 'Photoshop'],
    githubUrl: 'https://github.com/AdomasPartikas/RockPaperFight',
    images: [
      '/images/projects/rockpaperfight-mainmenu.png',
      '/images/projects/rockpaperfight-howto.png',
      '/images/projects/rockpaperfight-combat.png',
      '/images/projects/rockpaperfight-combos.png'
    ],
    featured: false,
    status: 'archived',
    category: 'videogame',
    year: '2022'
  },
  {
    id: 'discord-steam-monitor',
    title: 'Vac Status Monitor Bot',
    description: 'Automated Discord bot monitoring Steam players and their ban status changes',
    longDescription: 'A comprehensive Discord bot built with C# that monitors Steam players and sends notifications when their ban status changes. One of my first big`ish projects, created to pass an NKKM assignment. No entity framework due to not knowing it at the time.',
    technologies: ['C#', '.NET Framework', 'Discord.NET', 'Steam Web API', 'MySQL'],
    githubUrl: 'https://github.com/AdomasPartikas/VacStatusMonitorBot',
    images: [
      '/images/projects/discordbot-watch.png',
      '/images/projects/discordbot-check.png',
      '/images/projects/discordbot-monitor.png'
    ],
    featured: false,
    status: 'archived',
    category: 'bot',
    year: '2021',
    highlights: [
      'Real-time Steam API monitoring',
      'Automated Discord notifications',
      'Ban status change detection'
    ]
  }
];