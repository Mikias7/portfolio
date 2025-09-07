import Dither from "./blocks/Dither/Dither"
import LiquidEther from "./blocks/LiquidEther/LiquidEther"
import Home from "./pages/Home"
import Nav from "./components/Nav"

function App() {

  return (
    <div className="relative w-full h-screen">

      <div>
        <Nav />
      </div>
      
      <div className="absolute inset-0 z-0">
        <LiquidEther />
      </div>

      <div  className="relative z-10 text-white p-8">
        {/* <h1>Hello</h1> */}

        <section  className="pt-40" data-aos="fade-up" >
          <Home />
        </section>

        <section  className="pt-40" data-aos="fade-up" >
          <Home />
        </section>
      </div>


    </div>
  )
}

export default App
