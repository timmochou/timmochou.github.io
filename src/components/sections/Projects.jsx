import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionHeader from '../ui/SectionHeader';
import { projectsData } from '../../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-dark-800">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <SectionHeader
            title="PROJECTS"
            subtitle="Exploring × Experimenting × Executing"
          />
          <a
            href="https://github.com/timmochou"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary text-dark-900 font-semibold rounded-lg hover:bg-primary-light transition-colors duration-300"
            >
              View All
            </motion.button>
          </a>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="glass-card overflow-hidden transition-all duration-300"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Images */}
        <div className="lg:w-1/2 p-6">
          <div className={`flex gap-4 ${project.isPhoneScreenshot ? 'justify-center' : ''}`}>
            {project.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${project.title} ${i + 1}`}
                className={`rounded-lg border border-dark-600/50 ${
                  project.isPhoneScreenshot
                    ? 'w-48 h-auto object-contain'
                    : 'w-full h-64 object-cover'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="lg:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-text-primary mb-4">
            {project.title}
          </h2>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-dark-700 text-primary rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-text-secondary whitespace-pre-line leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <span className="text-text-muted">{project.date}</span>
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  <FaGithub className="text-xl" />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  <FaExternalLinkAlt className="text-xl" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
