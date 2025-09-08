import { useEffect } from "react"

import Dither from "./blocks/Dither/Dither"
import LiquidEther from "./blocks/LiquidEther/LiquidEther"
import Home from "./pages/Home"
import Nav from "./components/Nav"
import Experience from "./pages/Experience"
import Projects from "./pages/Projects"

import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./pages/Contact"
import GradientText from "./blocks/GradientText/GradientText"
function App() {

  useEffect(() => {
    AOS.init({ duration: 3000 }); // animation duration in ms
  }, []);

  return (
    <div className="relative w-full h-screen" style={{height: "460vh", background: "#e7b2ee50"}}>

      <div>
        <Nav />
      </div>

      <div className="absolute inset-0 z-0">
        <LiquidEther />
      </div>

      <div  className="relative z-10 text-white  ">
        {/* <h1>Hello</h1> */}

        <section id="home" className="pt-80 h-screen" data-aos="fade-up" style={{height: "100vh"}} >
          <Home />
        </section>

        <section id="experience" className="pt-40 pb-40 h-screen" data-aos="fade-up" style={{height: "130vh"}} >
          <div className="text-6xl grid flex justify-left p-10 text-neutral-950">
            {/* <h1>Experience</h1> */}
            <GradientText
                colors={["#000000ff", "#ff40dfff", "#ff40dfff", "#ff40dfff", "#ff40dfff"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class"
                >
                Experience
            </GradientText>
          </div>
          <div>
            <div><Experience /></div>
            {/* <div><Experience /></div> */}
          </div>
        </section>
        
        <section id="projects" data-aos="fade-up" className="flex justify-center pt-40 pb-100 h-screen" style={{height: "180vh"}} >
          <Projects />
        </section>

        <section id="contact" className="pt-30 h-screen" style={{height: "50vh", background: "#5f546450" }} data-aos="fade-down" >
          <Contact />
        </section>

      </div>
    </div>
  )
}

export default App
