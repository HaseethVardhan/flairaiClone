import Hero from "./components/Hero"
import { Navbar } from "./components/Navbar"

function App() {

  return (
    <div className="w-screen h-full bg-[#161616] py-6">
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
