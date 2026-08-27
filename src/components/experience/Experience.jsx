import { motion } from 'framer-motion';
import { Briefcase, Award } from 'lucide-react';
import experience from "../../data/experience";

function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-gray-500 text-lg">My Work History</p>
        </motion.div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-gemini-blue via-gemini-purple to-gemini-red opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  {exp.logo ? (
                    <img src={exp.logo} alt={exp.title} className="w-12 h-12 rounded-lg object-contain bg-gray-50 p-1 border border-gray-100" />
                  ) : (
                    <div className="w-12 h-12 rounded-lg bg-blue-50 text-gemini-blue flex items-center justify-center border border-blue-100">
                      <Briefcase size={24} />
                    </div>
                  )}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                    <h4 className="text-lg text-gemini-purple font-medium">{exp.title}</h4>
                  </div>
                </div>
                <div className="inline-flex items-center justify-center px-4 py-2 bg-gray-50 text-gray-700 rounded-full font-medium text-sm whitespace-nowrap border border-gray-100">
                  {exp.time}
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {exp.description.map((point, i) => (
                  <li key={i} className="flex gap-3 text-gray-600">
                    <span className="text-gemini-blue mt-1">●</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {exp.certificate && (
                <a 
                  href={exp.certificate} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gemini-blue hover:text-gemini-purple font-medium transition-colors"
                >
                  <Award size={18} />
                  View Certificate
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;