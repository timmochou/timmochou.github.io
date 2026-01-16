import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { educationData } from '../../data/education';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-dark-800">
      <div className="section-container">
        <SectionHeader title="EDUCATION" subtitle={educationData.summary} />

        {/* Degrees */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {educationData.degrees.map((degree, index) => (
            <motion.div
              key={degree.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5, boxShadow: '0 0 30px rgba(0, 212, 170, 0.2)' }}
              className="glass-card p-8 text-center cursor-pointer transition-all duration-300"
            >
              <img
                src={degree.image}
                alt={degree.school}
                className="w-32 h-32 object-contain mx-auto mb-6"
              />
              <h2 className="text-xl font-bold text-text-primary mb-2">
                {degree.degree}
              </h2>
              <h3 className="text-lg text-primary mb-4">{degree.school}</h3>
              <p className="text-text-secondary text-sm whitespace-pre-line">
                {degree.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
            Certification
          </h2>
          <p className="text-text-secondary mb-8 max-w-3xl">
            {educationData.certificationSummary}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {educationData.certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 text-center transition-all duration-300"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-contain mb-4"
                />
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  {cert.title}
                </h3>
                <p className="text-primary text-sm">{cert.skills}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
