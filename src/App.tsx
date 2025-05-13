import Header from "./components/Header"
import AboutMe from "./components/sections/AboutMe"
import Contact from "./components/sections/Contact"
import Footer from "./components/sections/Footer"
import Hero from "./components/sections/Hero"
import Services from "./components/sections/Services"
import TechStack from "./components/sections/TechStack"

const App = () => {
  return (
    <div className="px-4 md:mx-8 max-w-screen mx-auto overflow-x-hidden">
      <Header/>
      <Hero/>
      <AboutMe/>
      <Services/>
      <TechStack/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App