import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaMediumM } from 'react-icons/fa';
import SectionHeader from '../ui/SectionHeader';
import { personalData } from '../../data/personal';

const socialIcons = {
  linkedin: FaLinkedinIn,
  github: FaGithub,
  medium: FaMediumM,
};

export default function About() {
  return (
    <section id="about" className="py-20 bg-dark-800">
      <div className="section-container">
        <SectionHeader title="ABOUT" />

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            {personalData.about.map((paragraph, index) => (
              <p key={index} className="text-text-secondary text-lg mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Right Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <div className="glass-card p-6 space-y-4">
              <InfoRow label="Name" value={personalData.name} />
              <InfoRow label="Age" value={personalData.age} />
              <InfoRow label="Email" value={personalData.email} />
              <InfoRow label="Location" value={personalData.location} />

              {/* Social Links */}
              <div className="pt-4 border-t border-dark-600/50">
                <div className="flex gap-4 justify-center">
                  {Object.entries(personalData.social).map(([platform, url]) => {
                    const Icon = socialIcons[platform];
                    return (
                      <motion.a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, scale: 1.1 }}
                        className="w-12 h-12 bg-dark-700 rounded-full flex items-center justify-center text-text-secondary hover:text-primary hover:bg-dark-600 transition-colors duration-300"
                      >
                        <Icon className="text-xl" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between">
      <span className="text-text-muted">{label}:</span>
      <span className="text-text-primary font-medium">{value}</span>
    </div>
  );
}
