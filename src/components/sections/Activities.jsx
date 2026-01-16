import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { activitiesData } from '../../data/activities';

const categories = [
  { key: 'club', label: 'Basketball Team' },
  { key: 'competition', label: 'Competition' },
  { key: 'workshop', label: 'Workshop' },
];

export default function Activities() {
  const [activeCategory, setActiveCategory] = useState('club');
  const currentActivities = activitiesData[activeCategory];

  return (
    <section id="activities" className="py-20 bg-dark-900">
      <div className="section-container">
        <SectionHeader title="ACTIVITIES" />

        {/* Category Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <motion.button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === cat.key
                  ? 'bg-primary text-dark-900'
                  : 'bg-dark-700 text-text-secondary hover:bg-dark-600'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Horizontal Timeline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-x-auto pb-4"
          >
            <div className="flex gap-6 min-w-max px-4">
              {currentActivities.events.map((event, index) => (
                <ActivityCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ActivityCard({ event, index }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="w-80 flex-shrink-0"
    >
      <div className="glass-card overflow-hidden h-full flex flex-col">
        {/* Year Badge */}
        <div className="bg-primary text-dark-900 px-4 py-2 text-center font-bold">
          {event.year}
        </div>

        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="text-lg font-bold text-text-primary mb-2">
            {event.title}
          </h3>

          <motion.p
            className={`text-text-secondary text-sm leading-relaxed ${
              isExpanded ? '' : 'line-clamp-3'
            }`}
          >
            {event.description}
          </motion.p>

          {event.description.length > 100 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary text-sm mt-2 hover:underline self-start"
            >
              {isExpanded ? 'Show Less' : 'Read More'}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
