import { useState } from "react";
import "../css/Skills.css";

const skills = [
  { nombre: "React", nivel: 90 },
  { nombre: "JavaScript", nivel: 85 },
  { nombre: "CSS", nivel: 80 },
  { nombre: "Git", nivel: 70 },
  { nombre: "HTML", nivel: 85 },
  { nombre: "C#", nivel: 60 },
];

function Skills() {

  
  const [mostrar, setMostrar] = useState(false);

  return (
    <section className="skills" id="skills">
      <h2 className="skills-titulo">Skills</h2>
      <p className="skills-descripcion">
        Estas son algunas de las tecnologías con las que vengo trabajando y sigo
        mejorando en cada proyecto!
      </p>

      <button className="skills-btn" onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Ocultar skills" : "Mostrar skills"}
      </button>

      {mostrar && (<div className="skills-lista">
          {skills.map((s) => (
            <div className="skills-item" key={s.nombre}>
              <div className="skills-item-info">
                <span className="skills-span">{s.nombre}</span>
                <span>{s.nivel}%</span>
              </div>
              <div className="skills-barra-track">
                <div
                  className="skills-barra-fill"
                  style={{ width: `${s.nivel}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
export default Skills;
