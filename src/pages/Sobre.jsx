import React from "react";
import ModalMenu from "../components/ModalMenu";
import "./Sobre.css"; // Importe o arquivo CSS criado

const cursos = [
  {
    title: "Curso Básico Full-Stack",
    provider: "Hashtag Treinamentos",
    project: "Recriação do site Spotify",
  },
];

const abilityStyle = {
  cursor: "default",
  paddingLeft: "1.75rem", // 7 * 0.25rem
  paddingRight: "1.75rem",
  paddingTop: "0.75rem", // 3 * 0.25rem
  paddingBottom: "0.75rem",
  backgroundColor: "#333",
  borderRadius: "9999px", // rounded-full em Tailwind
  transition: "all 0.3s ease",
};

function Sobre() {
  return (
    <>
      <div className="sobre-container">
        <ModalMenu />
        <div className="about-container">
          <h1 className="about-title">Sobre Mim</h1>
          <div className="red-line-about-1"></div>
          <p className="about-text">
            {" "}
            Buscando me tornar um desenvolvedor front-end, com foco em React.js.
            Embora ainda não tenha experiência profissional, dedico-me
            intensamente ao aprendizado autodidata e à prática através de
            projetos pessoais. Minha jornada começou com HTML, CSS e JavaScript,
            mas me apaixonei pelo ecossistema React e suas infinitas
            possibilidades. Estou constantemente aprendendo novas tecnologias e
            aplicando esse conhecimento em projetos práticos para desenvolver
            minhas habilidades.
          </p>
          <div className="red-line-about-2"></div>
          <div>
            <h3 className="technical-title"> Habilidades </h3>
            <div>
              <p className="technology-tools"> Tecnologias e Ferramentas </p>
              <div className="technology-container">
                {/* orange-500, blue-500, yellow-400, white */}
                <p style={abilityStyle} className="html">
                  {" "}
                  HTML{" "}
                </p>
                <p style={abilityStyle} className="css">
                  {" "}
                  CSS{" "}
                </p>
                <p style={abilityStyle} className="javascript">
                  {" "}
                  JavaScript{" "}
                </p>
                <p style={abilityStyle} className="vite">
                  {" "}
                  Vite{" "}
                </p>
                <p style={abilityStyle} className="git-github">
                  {" "}
                  Git/GitHub{" "}
                </p>
                <p style={abilityStyle} className="soft-skills">
                  {" "}
                  Soft Skills {" "}
                </p>{" "}
              </div>
            </div>
            <div>
              <p className="library-frameworks"> Bibliotecas & Frameworks </p>
              <div className="frameworks-container">
                <p style={abilityStyle} className="react-js">
                  {" "}
                  React.js{" "}
                </p>
                <p style={abilityStyle} className="react-router">
                  {" "}
                  React Router{" "}
                </p>
                <p style={abilityStyle} className="styled-components">
                  {" "}
                  Styled Components{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="course-container">
          <h1 className="course-accomplished"> Cursos Realizados </h1>
          {cursos.map((curso, index) => (
            <div key={index} className="course-box">
              <div className="red-line-about-3"></div>
              <div className="course-card">
                <p className="course-title">
                  {curso.title} | {curso.provider}
                </p>
                <p className="course-project">Projeto: {curso.project}</p>
                <div className="course-skills">
                  <p className="skill"> HTML </p>
                  <p className="skill"> CSS </p>
                  <p className="skill"> React </p>
                  <p className="skill"> Express </p>
                  <p className="skill"> Node </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sobre;
