import { motion } from 'framer-motion';
import { GraduationCap, Code2, Rocket, Trophy } from 'lucide-react';

function About() {
  const cards = [
    {
      icon: <GraduationCap size={32} className="text-gemini-blue" />,
      title: "Education",
      desc1: "B.Tech 2023 - 2027",
      desc2: "Data Science Engineering",
      desc3: "ANITS",
    },
    {
      icon: <Code2 size={32} className="text-gemini-purple" />,
      title: "Top Skills",
      content: (
        <div className="flex flex-col gap-2 mt-2">
          <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium w-fit border border-blue-100">⚛️ React</span>
          <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium w-fit border border-green-100">🌐 Django</span>
          <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium w-fit border border-gray-200">🐍 Python</span>
        </div>
      )
    },
    {
      icon: <Rocket size={32} className="text-gemini-red" />,
      title: "Projects",
      desc1: "AI RoadMap Generator",
      desc2: "Generates personalized roadmaps using AI.",
      desc3: "Tech: React • Django • Gemini AI",
      link: "https://roadmap-frontend-eulz.onrender.com"
    },
    {
      icon: <Trophy size={32} className="text-gemini-yellow" />,
      title: "Achievements",
      desc1: "✔ GeeksForGeeks Campus Mantri",
      desc2: "✔ Runners in State Senior Softball Championship",
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="about">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
            I'm a Computer Science student with a passion for creating modern,
            responsive, and scalable web applications. I enjoy solving
            real-world problems through software development and continuously
            expanding my knowledge of full stack technologies. By combining
            strong technical foundations with practical project experience,
            I'm preparing myself to contribute effectively as a Software
            Engineer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4 bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center border border-gray-100">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
              {card.content ? card.content : (
                <div className="space-y-2">
                  <p className="text-gray-800 font-medium">{card.desc1}</p>
                  <p className="text-gray-600 text-sm">{card.desc2}</p>
                  {card.desc3 && <p className="text-gray-500 text-sm mt-2">{card.desc3}</p>}
                  {card.link && (
                    <a href={card.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-gemini-blue hover:underline text-sm font-medium">
                      Visit Project →
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
