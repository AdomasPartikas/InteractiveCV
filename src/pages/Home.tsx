import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <motion.div
            className="hero__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="hero__greeting"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="hero__greeting-sign font-mono">$ </span>
              <span className="hero__greeting-text font-mono">whoami</span>
            </motion.div>
            
            <motion.h1
              className="hero__title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hi, I'm <span className="hero__name">Patrikas</span>
            </motion.h1>
            
            <motion.h2
              className="hero__subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Backend C# Developer from Lithuania
            </motion.h2>
            
            <motion.p
              className="hero__description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Passionate about building robust backend systems with the .NET framework.

              <p className="invisible-selectable-text">And pizza. Maybe coffee too.</p>
            </motion.p>
            
            <motion.div
              className="hero__actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Link to="/timeline" className="btn btn--primary">
                <span className="font-mono">./</span>explore-journey
              </Link>
              <Link to="/contact" className="btn btn--secondary">
                Get in touch
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="terminal">
              <div className="terminal__header">
                <div className="terminal__buttons">
                  <span className="terminal__button terminal__button--close"></span>
                  <span className="terminal__button terminal__button--minimize"></span>
                  <span className="terminal__button terminal__button--maximize"></span>
                </div>
                <div className="terminal__title">terminal</div>
              </div>
              <div className="terminal__body">
                <div className="terminal__line">
                  <span className="terminal__prompt">$</span>
                  <span className="terminal__command">dotnet --version</span>
                </div>
                <div className="terminal__output">8.0.100</div>
                <div className="terminal__line">
                  <span className="terminal__prompt">$</span>
                  <span className="terminal__command">docker-compose "future" up -d --build</span>
                </div>
                <div className="terminal__output">Creating...</div>
                <div className="terminal__output">Building...</div>
                <div className="terminal__output-colored">✓ future started ...</div>
                <div className="terminal__line">
                  <span className="terminal__prompt">$</span>
                  <span className="terminal__cursor">_</span>
                  <span className="invisible-selectable-text">unexpected '{"}"}' in line 32</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <section className="skills-preview">
        <div className="container">
          <motion.div
            className="skills-preview__content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="skills-preview__title">Core Technologies</h3>
            <div className="skills-preview__tags">
              {['C#', 'ASP.NET', 'SQL', 'Entity Framework', 'Docker', 'CI/CD', 'Azure', 'REST APIs', 'Unit/Integration Testing', 'Git'].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
