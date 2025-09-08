import { contactInfo } from '../../data/contacts';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__info">
            <p className="footer__text">
              Built with <span className="footer__accent">React</span> & <span className="footer__accent">TypeScript</span>
            </p>
            <p className="footer__copyright">
              © {currentYear} Patrikas Adomaitis. All rights reserved.
            </p>
          </div>
          
          <div className="footer__links">
            {contactInfo.github && (
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
                aria-label="GitHub Profile"
              >
                GitHub
              </a>
            )}
            {contactInfo.linkedin && (
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
                aria-label="LinkedIn Profile"
              >
                LinkedIn
              </a>
            )}
            {contactInfo.email && (
              <a
                href={`mailto:${contactInfo.email}`}
                className="footer__link"
                aria-label="Send Email"
              >
                Email
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
