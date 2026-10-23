import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Inicio from "./pages/Inicio";
import SideBar from "./components/SideBar";
import Layout from "./layouts/Layout";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* <div className="layout"> */}
      {/* <SideBar /> */}

      {/* <main className="contenido"> */}
      <Routes>
        <Route element={<Layout />} >
        <Route index element={<Inicio />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      {/* </main> */}
      {/* // </div> */}
    </BrowserRouter>
  );
}

export default App;
