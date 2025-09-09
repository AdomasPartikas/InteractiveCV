import { motion } from 'framer-motion';
import './PageHeader.css';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  symbol?: string;
}

const PageHeader = ({ title, subtitle, symbol = '$' }: PageHeaderProps) => {
  return (
    <motion.header
      className="page-header"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="page-header__title">
        <span className="font-mono text-accent">{symbol}</span> {title}
      </h1>
      <p className="page-header__subtitle">{subtitle}</p>
    </motion.header>
  );
};

export default PageHeader;
