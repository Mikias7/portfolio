import Dither from "./blocks/Dither/Dither"


function App() {

  return (
    <div className="relative w-full h-screen">

      <div className="absolute inset-0 z-0">
        <Dither />
      </div>

      <div  className="relative z-10 text-white p-8">
        <h1>Hello</h1>
      </div>


    </div>
  )
}

export default App
