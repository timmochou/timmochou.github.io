import { motion } from 'framer-motion';

export default function SectionHeader({ title, subtitle }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 tracking-wide">
        {title}
      </h1>
      {subtitle && (
        <p className="text-text-secondary text-lg max-w-3xl">
          {subtitle}
        </p>
      )}
    </motion.header>
  );
}
