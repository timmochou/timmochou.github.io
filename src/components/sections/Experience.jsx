import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { experienceData, experienceSummary } from '../../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-dark-900">
      <div className="section-container">
        <SectionHeader title="PROFESSIONAL EXPERIENCE" subtitle={experienceSummary} />

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-dark-600 hidden md:block" />

          {/* Timeline Items */}
          {experienceData.map((exp, index) => (
            <TimelineItem key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ experience, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex flex-col md:flex-row mb-12 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className={`w-full md:w-[calc(50%-2rem)] ${isEven ? 'md:pr-8' : 'md:pl-8'}`}
      >
        <motion.div
          whileHover={{ y: -5, boxShadow: '0 0 30px rgba(0, 212, 170, 0.2)' }}
          className="glass-card p-6 transition-all duration-300"
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-4">
            <img
              src={experience.logo}
              alt={experience.company}
              className="w-12 h-12 object-contain"
            />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-text-primary">
                {experience.company}
              </h3>
              <span className="text-primary text-sm">{experience.period}</span>
            </div>
          </div>

          {/* Position */}
          <h4 className="text-lg text-text-secondary font-medium mb-4">
            {experience.position}
          </h4>

          {/* Achievements */}
          <ul className="space-y-2 mb-4">
            {experience.achievements.map((achievement, i) => (
              <li key={i} className="text-text-muted text-sm flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                {achievement}
              </li>
            ))}
          </ul>

          {/* Learn More Button */}
          <a
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-4 py-2 bg-dark-700 text-text-secondary rounded-lg hover:bg-primary hover:text-dark-900 transition-all duration-300 text-sm font-medium">
              Learn More
            </button>
          </a>
        </motion.div>
      </motion.div>

      {/* Timeline Dot */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-dark-900 top-6" />

      {/* Spacer for the other side */}
      <div className="hidden md:block w-[calc(50%-2rem)]" />
    </div>
  );
}
