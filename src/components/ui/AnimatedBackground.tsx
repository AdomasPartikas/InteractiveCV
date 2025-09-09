import React, { useEffect, useState, useCallback } from 'react';
import './AnimatedBackground.css';

interface FallingItem {
  id: number;
  text: string;
  x: number;
  speed: number;
  fontSize: number;
  opacity: number;
  delay: number;
}

const FALLING_WORDS = [
  // C# Keywords
  'async', 'await', 'class', 'interface', 'namespace', 'public', 'private', 'static',
  'void', 'string', 'int', 'bool', 'var', 'using', 'return', 'if', 'else', 'for',
  'foreach', 'while', 'try', 'catch', 'finally', 'throw', 'new', 'this', 'base',
  'override', 'virtual', 'abstract', 'sealed', 'const', 'readonly', 'enum', 'struct',
  
  // .NET/Backend Terms
  'API', 'REST', 'HTTP', 'JSON', 'SQL', 'EF Core', 'LINQ', 'MVC', 'JWT', 'OAuth',
  'Docker', 'Azure', 'Microservices', 'Repository', 'Service', 'Controller',
  'Middleware', 'DI', 'IoC', 'Task', 'Thread', 'Cache', 'Redis', 'NoSQL',
  
  // Technologies
  'C#', 'ASP.NET', '.Net', 'React', 'TypeScript', 'Node.js', 'Express', 'GraphQL', 'MongoDB', 'PostgreSQL',
  'Git', 'GitHub', 'VS Code', 'Swagger', 'Postman', 'Kubernetes', 'Jenkins',

  // Fun
  'Stack-Overflow', 'Hello World(print)', 'define true = false', 'NaN', 'undefined', 'NullReferenceException',
  'Coffee', 'ChatGPT fix this', 'Thread.Sleep(1000)', '\"Works locally\"', '\"What tests?\"',
  'sudo rm -rf /', 'unexpected \'}\' on line 32', 'Easter eggs?'
];

const AnimatedBackground: React.FC = () => {
  const [fallingItems, setFallingItems] = useState<FallingItem[]>([]);

  const createFallingItem = useCallback((id: number): FallingItem => {
    const randomWord = FALLING_WORDS[Math.floor(Math.random() * FALLING_WORDS.length)];
    
    return {
      id,
      text: randomWord,
      x: Math.random() * 100,
      speed: Math.random() * 2 + 1,
      fontSize: Math.random() * 8 + 12,
      opacity: Math.random() * 0.5 + 0.1,
      delay: Math.random() * 2, 
    };
  }, []);

  const generateInitialItems = useCallback(() => {
    const items: FallingItem[] = [];
    const itemCount = Math.floor(window.innerWidth / 40);
    
    for (let i = 0; i < itemCount; i++) {
      items.push(createFallingItem(i));
    }
    
    return items;
  }, [createFallingItem]);

  useEffect(() => {
    setFallingItems(generateInitialItems());

    const interval = setInterval(() => {
      setFallingItems(current => {
        const newItems = [...current];
        const randomIndex = Math.floor(Math.random() * newItems.length);
        newItems[randomIndex] = createFallingItem(Date.now() + randomIndex);
        return newItems;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [generateInitialItems, createFallingItem]);

  useEffect(() => {
    const handleResize = () => {
      setFallingItems(generateInitialItems());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [generateInitialItems]);

  return (
    <div className="animated-background">
      {fallingItems.map((item) => (
        <div
          key={item.id}
          className="falling-item"
          style={
            {
              '--x-position': `${item.x}%`,
              '--fall-duration': `${item.speed * 10}s`,
              '--font-size': `${item.fontSize}px`,
              '--opacity': item.opacity,
              '--delay': `${item.delay}s`,
            } as React.CSSProperties
          }
        >
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default AnimatedBackground;
