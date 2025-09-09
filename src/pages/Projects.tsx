import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';
import { contactInfo } from '../data/contacts';
import ProjectCard from '../components/ui/ProjectCard';
import PageHeader from '../components/ui/PageHeader';
import './Projects.css';

const Projects = () => {
  const featuredProjects = projectsData.filter(project => project.featured);
  const otherProjects = projectsData.filter(project => !project.featured);

  return (
    <div className="projects-page">
      <div className="container">
        <PageHeader 
          title="My Projects"
          subtitle="A showcase of applications I've built throughout my journey"
        />

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <motion.section
            className="projects-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="projects-section-title">
              <span className="font-mono text-accent">#</span> Featured Work
            </h2>
            <div className="projects-grid">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </motion.section>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <motion.section
            className="projects-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="projects-section-title">
              <span className="font-mono text-accent">#</span> Other Projects
            </h2>
            <div className="projects-grid">
              {otherProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index + featuredProjects.length}
                />
              ))}
            </div>
          </motion.section>
        )}

        {/* Call to Action */}
        <motion.section
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="projects-cta-content">
            <h3 className="projects-cta-title">Interested in working together?</h3>
            <p className="projects-cta-text">
              I'm always open to discussing new opportunities.
            </p>
            <div className="projects-cta-actions">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="projects-cta-btn projects-cta-btn--secondary"
              >
                <span className="font-mono">$</span> View GitHub
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="projects-cta-btn projects-cta-btn--primary"
              >
                Get in Touch →
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Projects;