import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="text-gemini-red" size={28} />,
      title: "Email",
      value: "msbharadwajj99@gmail.com",
      link: "mailto:msbharadwajj99@gmail.com"
    },
    {
      icon: <Phone className="text-gemini-blue" size={28} />,
      title: "Phone",
      value: "+91 9014451938",
      link: "tel:+919014451938"
    },
    {
      icon: <MapPin className="text-gemini-purple" size={28} />,
      title: "Location",
      value: "Visakhapatnam, Andhra Pradesh, India",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or exciting projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <div className="w-16 h-16 mx-auto bg-gray-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {info.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
              {info.link ? (
                <a href={info.link} className="text-gray-600 hover:text-gemini-blue transition-colors">
                  {info.value}
                </a>
              ) : (
                <p className="text-gray-600">{info.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <a
            href="https://www.linkedin.com/in/sai-bharadwaj-700095354"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-full font-medium hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <FaLinkedin size={20} />
            LinkedIn
          </a>
          <a
            href="https://github.com/saibharadwaj2006-ui"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <FaGithub size={20} />
            GitHub
          </a>
          <a
            href="/SaiBharadwaj_WebDev_Resume.pdf"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gemini-blue to-gemini-purple text-white rounded-full font-medium hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <FileText size={20} />
            Resume
          </a>
        </motion.div>

        <div className="text-center pt-8 border-t border-gray-100">
          <p className="text-gray-600 font-medium flex items-center justify-center gap-2">
            Thanks for visiting my portfolio <span className="text-red-500 animate-pulse">❤️</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
