function SkillCard ({nombre, nivel}){
    return(
        <div>
             <div className="skills-item">
      <div className="skills-item-info">
        <span className="skills-span">{nombre}</span>
        <span>{nivel}%</span>
      </div>

      <div className="skills-barra-track">
        <div
          className="skills-barra-fill"
          style={{ width: `${nivel}%` }}
        ></div>
      </div>
    </div>

        </div>
    )
}

export default SkillCard