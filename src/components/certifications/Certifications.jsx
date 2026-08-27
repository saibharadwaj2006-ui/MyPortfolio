import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';
import certifications from "../../data/certifications";

function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <p className="text-gray-500 text-lg">My Skill Up Certifications</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group flex flex-col h-full"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-gray-50 p-2 border border-gray-100 flex-shrink-0 group-hover:bg-blue-50 transition-colors">
                  {cert.logo ? (
                    <img src={cert.logo} alt={cert.issued} className="w-full h-full object-contain" />
                  ) : (
                    <Award className="w-full h-full text-gemini-blue" />
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 leading-tight mb-1">{cert.title}</h3>
                  <p className="text-sm text-gray-600">{cert.issued}</p>
                </div>
              </div>
              
              <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-50">
                <span className="text-sm text-gray-500 font-medium">
                  {cert.time || "Ongoing"}
                </span>
                
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium text-gemini-blue hover:text-gemini-purple transition-colors"
                  >
                    View <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;