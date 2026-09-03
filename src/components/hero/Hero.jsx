import { motion } from 'framer-motion';
import { Mail, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import photo from "../../assets/Images/Myimage.png";

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white" id="hero">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          <motion.div
            className="w-full md:w-1/2 flex justify-center order-1 md:order-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-gemini-blue via-gemini-purple to-gemini-red rounded-full blur opacity-30 animate-pulse"></div>
              <img
                src={photo}
                alt="Sai Bharadwaj"
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-white z-10"
              />
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 text-center md:text-left order-2 md:order-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 variants={itemVariants} className="text-xl md:text-2xl text-gray-500 font-medium mb-2">
              Hello! I am
            </motion.h2>
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 tracking-tight">
              Sai <span className="text-gradient">Bharadwaj</span>
            </motion.h1>
            <motion.h3 variants={itemVariants} className="text-xl md:text-3xl text-gray-600 mb-8 font-light">
              Aspiring Full Stack Developer
            </motion.h3>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/sai-bharadwaj-700095354"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all border border-gray-100"
              >
                <FaLinkedin size={20} className="text-gemini-blue" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/saibharadwaj2006-ui"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all border border-gray-100"
              >
                <FaGithub size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="mailto:msbharadwaj99@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all border border-gray-100"
              >
                <Mail size={20} className="text-gemini-red" />
                <span>Email</span>
              </a>
              <a
                href="/SaiBharadwaj_WebDev_Resume.pdf"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gemini-blue to-gemini-purple text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <FileText size={20} />
                <span>Resume</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
