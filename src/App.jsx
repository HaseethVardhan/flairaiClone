import AnimatedComponent from "./components/AnimatedComponent"
import Brands from "./components/Brands"
import Content from "./components/Content"
import Hero from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { ShowcaseComponent } from "./components/ShowcaseComponent"
import ShowcaseComponent2 from "./components/ShowcaseComponent2"
import TemplateComponent from "./components/TemplateComponent"

function App() {

  return (
    <div className="w-screen h-full bg-[#161616] py-6 hide-scrollbar">
      <Navbar />
      <Hero />
      <Brands />
      <Content />
      <AnimatedComponent />
      <TemplateComponent />
      <ShowcaseComponent />
      <ShowcaseComponent2 />
    </div>
  )
}

export default App
