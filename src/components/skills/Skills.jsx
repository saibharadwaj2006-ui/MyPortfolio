import { motion } from 'framer-motion';
import skills from "../../data/skills"

function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills</h2>
          <p className="text-gray-500 text-lg">
            Technologies and Tools I use to build modern applications
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-2xl border border-gray-100 group-hover:bg-gradient-to-br group-hover:from-gemini-blue group-hover:to-gemini-purple transition-all duration-300">
                  <span className="group-hover:scale-110 transition-transform">{skill.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{skill.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skill.skills.map((s, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium border border-gray-100 hover:border-gemini-blue hover:text-gemini-blue transition-colors cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
