import AnimatedComponent from "./components/AnimatedComponent"
import Brands from "./components/Brands"
import Content from "./components/Content"
import Hero from "./components/Hero"
import { Navbar } from "./components/Navbar"

function App() {

  return (
    <div className="w-screen h-full bg-[#161616] py-6 hide-scrollbar">
      <Navbar />
      <Hero />
      <Brands />
      <Content />
      <AnimatedComponent />
    </div>
  )
}

export default App
