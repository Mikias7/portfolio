import Dither from "./blocks/Dither/Dither"
import LiquidEther from "./blocks/LiquidEther/LiquidEther"
import Home from "./pages/Home"
import Nav from "./components/Nav"
import Experience from "./pages/Experience"
import Projects from "./pages/Projects"

function App() {

  return (
    <div className="relative w-full h-screen" style={{height: "350vh"}}>

      <div>
        <Nav />
      </div>

      <div className="absolute inset-0 z-0">
        <LiquidEther />
      </div>

      <div  className="relative z-10 text-white p-8">
        {/* <h1>Hello</h1> */}

        <section  className="pt-40" data-aos="fade-up" style={{height: "100vh"}} >
          <Home />
        </section>

        <section  className="pt-40" data-aos="fade-up" style={{height: "100vh"}} >
          <div className="text-6xl grid flex justify-center p-10 text-neutral-950">
            <h1>Experience</h1>
          </div>
          <div>
            <div><Experience /></div>
            {/* <div><Experience /></div> */}
          </div>
        </section>
        
        <section  className="pt-40" data-aos="fade-up" style={{height: "100vh"}} >
          <Projects />
        </section>

      </div>


    </div>
  )
}

export default App
