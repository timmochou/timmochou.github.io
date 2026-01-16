import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const colorMap = {
  green: 'bg-accent-green',
  blue: 'bg-accent-blue',
  orange: 'bg-accent-orange',
};

export default function ProgressBar({ name, percent, color = 'green' }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-text-primary font-medium text-sm md:text-base">{name}</span>
        <span className="text-primary font-semibold">{percent}%</span>
      </div>
      <div className="h-3 bg-dark-700 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${colorMap[color]} rounded-full`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${percent}%` } : { width: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
