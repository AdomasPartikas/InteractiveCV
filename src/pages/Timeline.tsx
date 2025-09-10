import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { timelineData } from '../data/timeline';
import { getCategoryColor } from '../utils/helpers';
import PageHeader from '../components/ui/PageHeader';
import './Timeline.css';

const Timeline = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state after component mounts to trigger initial animations
    const timer = setTimeout(() => setHasLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="timeline-page">
      <div className="container">
        <PageHeader 
          title="My Journey"
          subtitle="From first computer experience to professional C# developer"
        />

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {timelineData.map((event, index) => (
            <motion.div
              key={event.id}
              className={`timeline-item ${index % 2 === 0 ? 'timeline-item--left' : 'timeline-item--right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={hasLoaded && index < 2 ? { opacity: 1, x: 0 } : undefined}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px", amount: 0.3 }}
              transition={{ duration: 0.6, delay: hasLoaded && index < 2 ? index * 0.15 : 0 }}
            >
              <div className="timeline-content">
                <div 
                  className="timeline-node"
                  style={{ backgroundColor: getCategoryColor(event.category) }}
                >
                  <span className="timeline-year">{event.year}</span>
                </div>
                
                <motion.div
                  className={`timeline-card ${expandedId === event.id ? 'expanded' : ''}`}
                  layout
                  onClick={() => toggleExpanded(event.id)}
                >
                  <div className="timeline-card-header">
                    <div className="timeline-card-meta">
                      <span className="timeline-category" style={{ color: getCategoryColor(event.category) }}>
                        {event.category.toUpperCase()}
                      </span>
                      {event.subtitle && (
                        <span className="timeline-subtitle-text">{event.subtitle}</span>
                      )}
                    </div>
                    <h3 className="timeline-card-title">{event.title}</h3>
                    <p className="timeline-card-description">{event.description}</p>
                  </div>

                  <AnimatePresence>
                    {expandedId === event.id && event.details && (
                      <motion.div
                        className="timeline-card-details"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="timeline-details-content">
                          <h4 className="timeline-details-title">Key Highlights:</h4>
                          <ul className="timeline-details-list">
                            {event.details.map((detail, detailIndex) => (
                              <motion.li
                                key={detailIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: detailIndex * 0.1 }}
                              >
                                {detail}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {event.details && (
                    <div className="timeline-expand-indicator">
                      <motion.span
                        animate={{ rotate: expandedId === event.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="expand-arrow"
                      >
                        ↓
                      </motion.span>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="timeline-footer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <p className="timeline-footer-text">
            <span className="font-mono text-accent">$ </span>
                Thank you for exploring my journey!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Timeline;
