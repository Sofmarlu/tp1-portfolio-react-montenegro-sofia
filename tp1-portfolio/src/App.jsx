import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Inicio from "./pages/Inicio";
import SideBar from "./components/SideBar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <SideBar />

        <main className="contenido">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
