import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, Tech, About, Projects ,Contact} from './components'
import { StarCanvas } from "./components/canvas";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Tech />
      <About />
      <Projects />
      <div className="contact-star-cont">
      <Contact/>
      <StarCanvas/>
      </div>
    </BrowserRouter>
  )
}