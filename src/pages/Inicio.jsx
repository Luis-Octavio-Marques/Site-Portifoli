import React from "react";
import { useState, useRef } from "react";
import ModalMenu from "../components/ModalMenu";
import "./InicioQuery.css"; // Importe o arquivo CSS criado

function Inicio() {
  const [showTooltip, setShowTooltip] = useState(false);

  const copiarEmail = () => {
    navigator.clipboard.writeText("luisoctavio0425@gmail.com");
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 1500);
  };

  const imgRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState("translate(0px, 0px)");

  const handleMouseMove = (e) => {
    const { width, height, left, top } = imgRef.current.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;

    const moveX = x * 0.2; // ajuste a intensidade aqui
    const moveY = y * 0.2;

    setTransformStyle(`translate(${moveX}px, ${moveY}px)`);
  };

  const handleMouseLeave = () => {
    setTransformStyle("translate(0px, 0px)");
  };

  return (
    <>
      <div
        id="inicio-container"
        style={{
          backgroundImage: `url(/img/background-div.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "95vw",
          height: "95vh",
        }}
        className="rounded-[20px] relative overflow-hidden px-10"
      >
        <ModalMenu />
        <div className="h-full flex justify-between items-baseline text-white content-flex">
          <div className="left-section">
            <div className="w-[25vw] max-w-screen h-[1px] bg-red-500 mt-20 red-line-1"></div>
            <h1 className="font-gantari mt-5 text-6xl font-bold w-screen">
              {" "}
              Luís Octávio
            </h1>
            <p className="mb-8 text-gray-200 ">
              {" "}
              Desenvolvedor Front-End Junior
            </p>
            <p className="w-[30vw] font-sans font-extralight left-text">
              {" "}
              Sou um desenvolvedor front-end júnior dando os primeiros passos no
              universo da programação. Tenho me dedicado a transformar ideias em
              sites visualmente atrativos, modernos e funcionais, sempre
              buscando unir criatividade com boas práticas de desenvolvimento.
              Neste portfólio, você poderá conferir uma seleção dos projetos que
              venho desenvolvendo — desde criações pessoais, onde exploro minha
              imaginação e aprendizados, até trabalhos profissionais que
              demonstram minha evolução técnica e compromisso com resultados de
              qualidade.{" "}
            </p>
            <div className="flex items-center gap-5 mt-5 social-icons">
              <div className="relative flex items-center justify-center group">
                <button onClick={copiarEmail}>
                  <img
                    className="w-10 hover:scale-125 transition-all duration-300 ease-in-out"
                    src="/img/gmail-icon.png"
                    alt="Copiar e-mail"
                  />
                </button>

                {showTooltip && (
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded">
                    Copiado!
                  </span>
                )}
              </div>

              <a
                href="https://www.instagram.com/marques_0425/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-10 hover:scale-125 transition-all duration-300 ease-in-out"
                  src="/img/instagram-icon.png"
                  alt="Instagram"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/luis-octavio-marques-developer/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-10 hover:scale-125 transition-all duration-300 ease-in-out"
                  src="/img/linkedin-icon.png"
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>
          <div
            className="absolute top-[15vh] left-[37%] image-section"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={imgRef}
          >
            <img
              id="foto-perfil"
              className="w-[25vw] transition-transform duration-300 ease-out profile-image"
              src="/img/picture-example.png"
              alt="Homem"
              style={{ transform: transformStyle }}
            />
          </div>
          <p className="absolute right-[6vw] bottom-10 w-[25vw] font-sans text-base font-extralight mb-5 right-text">
            {" "}
            Estou começando na área de programação e venho aprendendo o básico
            de front-end, e me tornando mais experiente em algumas linguagens
            como HTML, CSS e um pouco de JavaScript. Gosto de brincar com
            layouts, testar efeitos visuais e aprender como deixar os sites mais
            bonitos e fáceis de usar. Cada projeto é uma chance de descobrir
            algo novo e me divertir enquanto aprendo. Para saber mais, clique na
            aba de "Sobre mim" no botão acima{" "}
          </p>
          <div className="absolute right-[6vw] bottom-8 flex items-end w-[25vw] h-[1px] bg-red-500 my-4 red-line-2"></div>
        </div>
      </div>
    </>
  );
}

export default Inicio;
