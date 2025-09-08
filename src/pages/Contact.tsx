import { motion } from 'framer-motion';
import { contactInfo } from '../data/contacts';
import './Contact.css';

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${contactInfo.email}`;
  };

  const contactItems = [
    {
      label: 'Email',
      value: contactInfo.email,
      icon: '📧',
      action: handleEmailClick,
      copyable: true
    },
    {
      label: 'LinkedIn',
      value: 'LinkedIn Profile',
      icon: '💼',
      action: () => window.open(contactInfo.linkedin, '_blank'),
      copyable: false
    },
    {
      label: 'GitHub',
      value: 'GitHub Profile',
      icon: '🐙',
      action: () => window.open(contactInfo.github, '_blank'),
      copyable: false
    },
    {
      label: 'Location',
      value: contactInfo.location,
      icon: '📍',
      action: undefined,
      copyable: true
    }
  ];

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // You could add a toast notification here if desired
      console.log(`${label} copied to clipboard`);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="contact-page">
      <div className="container">
        <motion.header
          className="contact-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="contact-title">
            <span className="font-mono text-accent">$</span> Get In Touch
          </h1>
          <p className="contact-subtitle">
            Let's connect and discuss opportunities or collaborations
          </p>
        </motion.header>

        <div className="contact-content">
          <motion.div
            className="contact-intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="terminal-block">
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <span className="terminal-button terminal-button--close"></span>
                  <span className="terminal-button terminal-button--minimize"></span>
                  <span className="terminal-button terminal-button--maximize"></span>
                </div>
                <span className="terminal-title">contact.sh</span>
              </div>
              <div className="terminal-content">
                <div className="terminal-line">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-command">cat contact-info.txt</span>
                </div>
                <div className="terminal-output">
                  <p>
                    I'm currently <span className="text-accent">open to new opportunities</span> and 
                    always interested in discussing backend development, 
                    .NET technologies, and innovative projects.
                  </p>
                  <p>
                    Feel free to reach out whether you have a job opportunity, 
                    want to collaborate on a project, or just want to connect!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-methods"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="contact-methods-title">
              <span className="font-mono text-accent">#</span> Contact Methods
            </h2>
            
            <div className="contact-grid">
              {contactItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="contact-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="contact-card-header">
                    <span className="contact-icon">{item.icon}</span>
                    <h3 className="contact-label">{item.label}</h3>
                  </div>
                  
                  <p className="contact-value">{item.value}</p>
                  
                  <div className="contact-actions">
                    {item.action && (
                      <button
                        className="contact-button contact-button--primary"
                        onClick={item.action}
                      >
                        {item.label === 'Email' ? 'Send Email' : `Open ${item.label}`}
                      </button>
                    )}
                    
                    {item.copyable && (
                      <button
                        className="contact-button contact-button--secondary"
                        onClick={() => copyToClipboard(item.value || '', item.label)}
                      >
                        Copy
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="contact-footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="terminal-line">
              <span className="terminal-prompt font-mono">$</span>
              <span className="terminal-text font-mono">
                Looking forward to hearing from you!
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
