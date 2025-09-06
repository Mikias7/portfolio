import Dither from "./blocks/Dither/Dither"
import LiquidEther from "./blocks/LiquidEther/LiquidEther"
import Home from "./pages/Home"

function App() {

  return (
    <div className="relative w-full h-screen">

      <div className="absolute inset-0 z-0">
        <LiquidEther />
      </div>

      <div  className="relative z-10 text-white p-8">
        {/* <h1>Hello</h1> */}

        <section  className="pt-40" data-aos="fade-up" style={{ height: "100vh"}}>
          <Home />
        </section>
      </div>


    </div>
  )
}

export default App
