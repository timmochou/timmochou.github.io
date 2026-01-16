import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import ProgressBar from '../ui/ProgressBar';
import { skillsData } from '../../data/skills';

const categories = [
  { key: 'frontend', label: 'Front-End' },
  { key: 'backend', label: 'Back-End' },
  { key: 'other', label: 'Other' },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const currentSkill = skillsData[activeCategory];

  return (
    <section id="skills" className="py-20 bg-dark-900">
      <div className="section-container">
        <SectionHeader title="SKILLS" />

        {/* Category Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-semibold uppercase tracking-wide transition-all duration-300 border-2 ${
                activeCategory === cat.key
                  ? 'bg-primary text-dark-900 border-primary'
                  : 'bg-transparent text-text-secondary border-dark-600 hover:border-primary hover:text-primary'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Skills Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col lg:flex-row gap-12"
          >
            {/* Description */}
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">
                {currentSkill.title}
              </h2>
              <p className="text-text-secondary whitespace-pre-line leading-relaxed">
                {currentSkill.description}
              </p>
            </div>

            {/* Progress Bars */}
            <div className="flex-1">
              {currentSkill.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProgressBar
                    name={skill.name}
                    percent={skill.percent}
                    color={currentSkill.color}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
