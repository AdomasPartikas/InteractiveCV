import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import type { Project } from '../../types';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const images = project.images || [];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openImageModal = () => {
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  const nextImageInModal = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImageInModal = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeImageModal();
      }
    };

    if (isImageModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent body scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isImageModalOpen]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'var(--color-text-green)';
      case 'in-progress': return 'var(--color-accent)';
      case 'archived': return 'var(--color-text-muted)';
      default: return 'var(--color-text-secondary)';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'in-progress': return 'In Progress';
      case 'archived': return 'Archived';
      default: return status;
    }
  };

  return (
    <>
      <motion.div
        className={`project-card ${isExpanded ? 'project-card--expanded' : ''}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        whileHover={{ y: -5 }}
      >
      {/* Image Section */}
      <div className="project-card__image-section">
        {images.length > 0 && (
          <div className="project-card__image-container">
            <img
              src={images[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className="project-card__image"
              onClick={openImageModal}
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                e.currentTarget.src = `https://via.placeholder.com/400x250/2a2a2a/a0a0a0?text=${encodeURIComponent(project.title)}`;
              }}
            />
            
            {images.length > 1 && (
              <>
                <button 
                  className="project-card__nav-btn project-card__nav-btn--prev"
                  onClick={previousImage}
                  aria-label="Previous image"
                >
                  <span>‹</span>
                </button>
                <button 
                  className="project-card__nav-btn project-card__nav-btn--next"
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  <span>›</span>
                </button>
                
                <div className="project-card__image-indicators">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      className={`project-card__indicator ${
                        index === currentImageIndex ? 'active' : ''
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="project-card__content">
        <div className="project-card__header">
          <div className="project-card__meta">
            <span className="project-card__category">
              {project.category.toUpperCase()}
            </span>
            <span className="project-card__year">{project.year}</span>
            <span 
              className="project-card__status"
              style={{ color: getStatusColor(project.status) }}
            >
              {getStatusText(project.status)}
            </span>
          </div>
          
          <h3 className="project-card__title">{project.title}</h3>
        </div>

        <div className="project-card__body">
          <p className="project-card__description">
            {project.description}
          </p>

          {/* Expanded Content */}
          {isExpanded && (
            <motion.div
              className="project-card__expanded-content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {project.longDescription && (
                <p className="project-card__long-description">
                  {project.longDescription}
                </p>
              )}

              {project.highlights && project.highlights.length > 0 && (
                <div className="project-card__highlights">
                  <h4 className="project-card__highlights-title">Key Features:</h4>
                  <ul className="project-card__highlights-list">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="project-card__highlight">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          )}

          <div className="project-card__technologies">
            <h4 className="project-card__tech-title">Technologies:</h4>
            <div className="project-card__tech-list">
              {project.technologies.map((tech, index) => (
                <span key={index} className="project-card__tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="project-card__actions">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__btn project-card__btn--secondary"
              >
                <span className="font-mono">$</span> View Code
              </a>
            )}
            
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__btn project-card__btn--primary"
              >
                Live Demo →
              </a>
            )}
          </div>
        </div>

        {/* Expand Button */}
        <button
          className="project-card__expand-btn"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
        >
          {isExpanded ? 'Less Details' : 'More Details'}
        </button>
      </div>
      </motion.div>

      {/* Image Modal - Rendered using Portal */}
      {isImageModalOpen && createPortal(
        <motion.div
          className="image-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeImageModal}
        >
          <motion.div
            className="image-modal-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="image-modal-close"
              onClick={closeImageModal}
              aria-label="Close image modal"
            >
              ✕
            </button>

            <div className="image-modal-image-container">
              <img
                src={images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="image-modal-image"
              />

              {images.length > 1 && (
                <>
                  <button
                    className="image-modal-nav image-modal-nav--prev"
                    onClick={previousImageInModal}
                    aria-label="Previous image"
                  >
                    <span>‹</span>
                  </button>
                  <button
                    className="image-modal-nav image-modal-nav--next"
                    onClick={nextImageInModal}
                    aria-label="Next image"
                  >
                    <span>›</span>
                  </button>

                  <div className="image-modal-indicators">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        className={`image-modal-indicator ${
                          index === currentImageIndex ? 'active' : ''
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="image-modal-info">
              <h3 className="image-modal-title">{project.title}</h3>
              <p className="image-modal-counter">
                {currentImageIndex + 1} of {images.length}
              </p>
            </div>
          </motion.div>
        </motion.div>,
        document.body
      )}
    </>
  );
};

export default ProjectCard;
