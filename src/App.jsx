import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Components/About";
import Competence from "./Components/Competence";
import Projets from "./Components/Projets";
import Contact from "./Components/Contact";
import Layout from "./Components/Layout"
function App() {
return(

  <Router>
    <Layout>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Competence />} />
      <Route path="/projects" element={<Projets />} />
      <Route path="/contact" element={<Contact />} />
     </Routes>
    </Layout>
  </Router>

)

}
export default App;