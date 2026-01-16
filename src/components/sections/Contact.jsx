import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import SectionHeader from '../ui/SectionHeader';
import { personalData } from '../../data/personal';

const contactItems = [
  {
    icon: FaMapMarkerAlt,
    label: 'My Location',
    value: personalData.location,
  },
  {
    icon: FaPhone,
    label: 'Phone Number',
    value: personalData.phone,
  },
  {
    icon: FaEnvelope,
    label: 'Email Address',
    value: personalData.email,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-dark-800">
      <div className="section-container">
        <SectionHeader title="GET IN TOUCH" />

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            {contactItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 border-2 border-primary rounded-full flex items-center justify-center">
                  <item.icon className="text-primary text-lg" />
                </div>
                <div>
                  <p className="text-text-muted text-sm">{item.label}</p>
                  <p className="text-text-primary font-medium">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <form
              action={`https://formsubmit.co/${personalData.email}`}
              method="POST"
              className="space-y-4"
            >
              {/* Hidden fields for FormSubmit */}
              <input type="hidden" name="_subject" value="New Contact Form Submission" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-6 py-4 bg-dark-700 border border-dark-600 rounded-xl text-text-primary placeholder-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-6 py-4 bg-dark-700 border border-dark-600 rounded-xl text-text-primary placeholder-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none"
                />
              </div>

              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={6}
                className="w-full px-6 py-4 bg-dark-700 border border-dark-600 rounded-xl text-text-primary placeholder-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none resize-none"
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-primary text-dark-900 font-bold rounded-xl hover:bg-primary-light transition-colors duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
