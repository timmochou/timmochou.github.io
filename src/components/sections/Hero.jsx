import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { personalData } from '../../data/personal';

export default function Hero() {
  const typeSequence = personalData.jobTitles.flatMap((title) => [title, 2000]);

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent-purple/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="section-container">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl text-text-secondary mb-2"
            >
              My name is
            </motion.h3>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold text-text-primary mb-6"
            >
              {personalData.name}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="text-xl md:text-2xl text-text-secondary">I&apos;m a</span>
              <TypeAnimation
                sequence={typeSequence}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-xl md:text-2xl text-primary font-bold"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href={personalData.cvLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-8 py-4 bg-primary text-dark-900 font-bold rounded-full text-lg hover:bg-primary-light hover:shadow-glow-md transition-all duration-300 transform hover:scale-105">
                  Download CV
                </button>
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-purple/20 rounded-full blur-2xl" />
              <img
                src="/images/tim_work.JPG"
                alt="Tim Chou"
                className="relative w-full max-w-md rounded-2xl shadow-2xl border border-dark-600/50"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
