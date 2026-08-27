import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import education from "../../data/education";

function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-100">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-gray-500 text-lg">My Academic Journey</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gemini-blue via-gemini-purple to-gemini-red"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div 
                key={edu.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center justify-between md:justify-normal group ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-8 h-8 rounded-full bg-white border-4 border-gemini-blue transform -translate-x-1/2 flex items-center justify-center shadow-md z-10">
                  <div className="w-2 h-2 rounded-full bg-gemini-blue group-hover:bg-gemini-purple transition-colors"></div>
                </div>

                <div className="ml-20 md:ml-0 w-full md:w-[45%]">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <GraduationCap className="text-gemini-blue" size={24} />
                      <h3 className="text-xl font-bold text-gray-900">{edu.title}</h3>
                    </div>
                    <div className="text-gemini-purple font-semibold mb-2">{edu.course}</div>
                    <div className="text-gray-600 mb-4">{edu.college}</div>
                    
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
                      <span className="text-sm font-medium bg-gray-50 text-gray-600 px-3 py-1 rounded-full">{edu.year}</span>
                      <span className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1 rounded-full">CGPA: {edu.cgpa}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
