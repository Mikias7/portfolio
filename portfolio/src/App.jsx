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

function App() {

  useEffect(() => {
    AOS.init({ duration: 3000 }); // animation duration in ms
  }, []);

  return (
    <div className="relative w-full h-screen" style={{height: "410vh"}}>

      <div>
        <Nav />
      </div>

      <div className="absolute inset-0 z-0">
        <LiquidEther />
      </div>

      <div  className="relative z-10 text-white  ">
        {/* <h1>Hello</h1> */}

        <section  className="pt-40 h-screen" data-aos="fade-up" style={{height: "100vh"}} >
          <Home />
        </section>

        <section  className="pt-40 pb-40 h-screen" data-aos="fade-up" style={{height: "130vh"}} >
          <div className="text-6xl grid flex justify-center p-10 text-neutral-950">
            <h1>Experience</h1>
          </div>
          <div>
            <div><Experience /></div>
            {/* <div><Experience /></div> */}
          </div>
        </section>
        
        <section  data-aos="fade-up" className="flex justify-center pt-40 pb-100 h-screen" style={{height: "170vh"}} >
          <Projects />
        </section>

        <section className="pt-40 h-screen" style={{height: "50vh", background: "#5f5464" }} data-aos="fade-up" >
          <Contact />
        </section>

      </div>


    </div>
  )
}

export default App
