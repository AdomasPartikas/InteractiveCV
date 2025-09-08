import { motion } from 'framer-motion';
import type { TimelineEvent } from '../../types';
import { getCategoryColor } from '../../utils/helpers';
import './TimelineCard.css';

interface TimelineCardProps {
  event: TimelineEvent;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}

const TimelineCard = ({ event, isExpanded, onToggle, index }: TimelineCardProps) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      className={`timeline-card-wrapper ${isLeft ? 'timeline-card--left' : 'timeline-card--right'}`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="timeline-card-content">
        <div 
          className="timeline-node"
          style={{ backgroundColor: getCategoryColor(event.category) }}
        >
          <span className="timeline-year">{event.year}</span>
        </div>
        
        <motion.div
          className={`timeline-card ${isExpanded ? 'expanded' : ''}`}
          layout
          onClick={onToggle}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <div className="timeline-card-header">
            <div className="timeline-card-meta">
              <span 
                className="timeline-category" 
                style={{ color: getCategoryColor(event.category) }}
              >
                {event.category.toUpperCase()}
              </span>
              {event.subtitle && (
                <span className="timeline-subtitle-text">{event.subtitle}</span>
              )}
            </div>
            <h3 className="timeline-card-title">{event.title}</h3>
            <p className="timeline-card-description">{event.description}</p>
          </div>

          {event.details && isExpanded && (
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

          {event.details && (
            <div className="timeline-expand-indicator">
              <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
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
  );
};

export default TimelineCard;
