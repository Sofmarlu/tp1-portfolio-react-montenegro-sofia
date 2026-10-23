import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Inicio from "./pages/Inicio";
import Layout from "./layouts/Layout";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* <div className="layout"> */}
      {/* <SideBar /> */}

      {/* <main className="contenido"> */}
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route
            path="about"
            element={
              <About
                descripcion="Soy una estudiante de Programación en la UTN Facultad Regional Tucumán, formándome en desarrollo web y ciberseguridad. Me considero una persona curiosa y autodidacta, interesada en entender cómo funcionan las tecnologías y seguir aprendiendo a través de nuevos proyectos."
                anios={2}
                proyectosRealizados={2}
              />
            }
          />
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
