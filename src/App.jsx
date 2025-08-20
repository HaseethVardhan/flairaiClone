import AnimatedComponent from "./components/AnimatedComponent"
import Brands from "./components/Brands"
import ComparisionComponent from "./components/ComparisionComponent"
import Content from "./components/Content"
import FooterBanner from "./components/FooterBanner"
import Hero from "./components/Hero"
import LargeNavbar from "./components/LargeNavbar"
import MainFooter from "./components/MainFooter"
import { Navbar } from "./components/Navbar"
import ShowcaseComponent from "./components/ShowcaseComponent"
import ShowcaseComponent2 from "./components/ShowcaseComponent2"
import TemplateComponent from "./components/TemplateComponent"

function App() {

  return (
    <div className="w-screen h-full bg-gradient-to-b from-[#161616] to-[#111111] py-6 hide-scrollbar">
      {typeof window !== "undefined" && window.matchMedia("(min-width:1024px)").matches ? (
        <LargeNavbar />
      ) : (
        <Navbar />
      )}

      <Hero />
      <Brands />
      <Content />
      <AnimatedComponent />
      <TemplateComponent />
      <ShowcaseComponent />
      <ShowcaseComponent2 />
      <ComparisionComponent />
      <FooterBanner />
      <MainFooter />
    </div>
  )
}

export default App
