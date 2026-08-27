import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import Projects from "./components/projects/Projects";
import Certifications from "./components/certifications/Certifications";
import Experience from "./components/experience/Experience";
import Contact from "./components/contacts/Contact";

function App(){
    return (<div className="bg-white min-h-screen text-gray-800">
        <Navbar/>
        <Hero/>
        <About/>
        <Education/>
        <Experience/>
        <Skills/>
        <Projects/>
        <Certifications/>
        <Contact/>
    </div>);
}
export default App;