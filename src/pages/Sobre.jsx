import React from "react";
import ModalMenu from "../components/ModalMenu";

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
    <div className="w-[95vw] h-[95vh] bg-[url('/public/img/background-div.png')] bg-cover bg-center rounded-[20px] relative overflow-hidden px-4">
      <ModalMenu />
      <div className="text-white flex flex-col mt-[7vh]">
        <h1 className="text-4xl font-gantari font-bold">Sobre Mim</h1>
        <div className="w-[15vw] h-[1px] bg-red-500 my-3"></div>
        <p className="font-sans font-extralight w-[45vw] text-[1em]">
          {" "}
          Buscando me tornar um desenvolvedor front-end, com foco em React.js.
          Embora ainda não tenha experiência profissional, dedico-me
          intensamente ao aprendizado autodidata e à prática através de projetos
          pessoais. Minha jornada começou com HTML, CSS e JavaScript, mas me
          apaixonei pelo ecossistema React e suas infinitas possibilidades.
          Estou constantemente aprendendo novas tecnologias e aplicando esse
          conhecimento em projetos práticos para desenvolver minhas habilidades.
        </p>
        <div className="w-[25vw] h-[1px] bg-red-500 my-3"></div>
        <div>
          <h3 className="text-4xl font-gantari font-semibold tracking-wider my-4">
            {" "}
            Habilidades Técnicas{" "}
          </h3>
          <div>
            <p> Tecnologias e Ferramentas </p>
            <div className="flex gap-7 mt-5">
              {/* orange-500, blue-500, yellow-400, white */}
              <p
                style={abilityStyle}
                className="border-l-[8px] border-orange-500 shadow-[0_0px_10px_rgba(249,115,22,1)] hover:border-l-[24px] hover:shadow-[0_0px_20px_rgba(234,88,12,1)]"
              >
                {" "}
                HTML{" "}
              </p>
              <p
                style={abilityStyle}
                className="border-l-[8px] border-blue-600 shadow-[0_0px_10px_rgba(37,99,235,1)] hover:shadow-[0_0px_20px_rgba(37,99,235,1)] hover:border-l-[24px]"
              >
                {" "}
                CSS{" "}
              </p>
              <p
                style={abilityStyle}
                className="border-l-[8px] border-yellow-400 shadow-[0_0px_10px_rgba(250,204,21,1)] hover:shadow-[0_0px_20px_rgba(250,204,21,1)] hover:border-l-[24px]"
              >
                {" "}
                JavaScript{" "}
              </p>
              <p
                style={abilityStyle}
                className="border-l-[8px] border-purple-600 shadow-[0_0px_10px_rgba(147,51,234,1)] hover:shadow-[0_0px_20px_rgba(147,51,235,1)] hover:border-l-[24px]"
              >
                {" "}
                Vite{" "}
              </p>
              <p
                style={abilityStyle}
                className="border-l-[8px] border-white shadow-[0_0px_10px_rgba(250,250,250,1)] hover:shadow-[0_0px_20px_rgba(250,250,250,1)] hover:border-l-[24px]"
              >
                {" "}
                Git/GitHub{" "}
              </p>
            </div>
          </div>
          <div>
            <p className="mt-5"> Bibliotecas & Frameworks </p>
            <div className="flex gap-7 mt-5">
              <p
                style={abilityStyle}
                className="border-l-[8px] border-[#68b3c7] shadow-[0_0px_10px_rgba(104,179,199,1)] hover:shadow-[0_0px_20px_rgba(104,179,199,1)] hover:border-l-[24px]"
              >
                {" "}
                React.js{" "}
              </p>
              <p
                style={abilityStyle}
                className="border-l-[8px] border-[#b4202a] shadow-[0_0px_10px_rgba(180,32,42,1)] hover:shadow-[0_0px_20px_rgba(180,32,52,1)] hover:border-l-[24px]"
              >
                {" "}
                React Router{" "}
              </p>
              <p
                style={abilityStyle}
                className="border-l-[8px] border-[#84fcd0] shadow-[0_0px_10px_rgba(132,252,208,1)] hover:shadow-[0_0px_20px_rgba(132,252,208,1)] hover:border-l-[24px]"
              >
                {" "}
                Styled Components{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-6 top-10 flex flex-col align-middle justify-center text-left">
        <h1 className="text-white text-4xl font-gantari font-semibold tracking-wider">
          {" "}
          Cursos Realizados{" "}
        </h1>
        {cursos.map((curso, index) => (
          <div key={index} className="flex flex-col mt-2">
            <div className="w-[32vw] h-[1px] opacity-50 bg-red-500 mb-3"></div>
            <div className="w-[35vw] flex flex-col bg-transparent backdrop-blur-[5px] border border-white rounded-lg p-4 shadow-md">
              <p className="text-white font-quicksand font-bold text-lg">
                {curso.title} | {curso.provider}
              </p>
              <p className="text-white font-sans text-lg">
                Projeto: {curso.project}
              </p>
              <div className="flex flex-wrap gap-5 mt-3 text-white font-oswald">
                <p className="bg-[#333] px-4 py-2 rounded-lg cursor-default">
                  {" "}
                  HTML{" "}
                </p>
                <p className="bg-[#333] px-4 py-2 rounded-lg cursor-default">
                  {" "}
                  CSS{" "}
                </p>
                <p className="bg-[#333] px-4 py-2 rounded-lg cursor-default">
                  {" "}
                  React{" "}
                </p>
                <p className="bg-[#333] px-4 py-2 rounded-lg cursor-default">
                  {" "}
                  Express{" "}
                </p>
                <p className="bg-[#333] px-4 py-2 rounded-lg cursor-default">
                  {" "}
                  Node{" "}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sobre;

{
  /* 

          <div className="w-[32vw] h-[1px] bg-red-500 my-3"></div>
        <p className="text-white font-quicksand font-bold text-lg"> Curso Básico Full-Stack | Hashtag Treinamentos </p>
        <p className="text-white font-sans text-lg"> Projeto: Recriação do site Spotify </p>
        <div className="w-[32vw] h-[1px] bg-red-500 my-3"></div>
        <p className="text-white font-quicksand font-bold text-lg"> Curso Básico Full-Stack | Hashtag Treinamentos </p>
        <p className="text-white font-sans text-lg"> Data: 09/02/25 - 13/02/25 </p>
        <div className="w-[32vw] h-[1px] bg-red-500 my-3"></div>
        <p className="text-white font-quicksand font-bold text-lg"> Curso Básico Full-Stack | Hashtag Treinamentos </p>
        <p className="text-white font-sans text-lg"> Data: 09/02/25 - 13/02/25 </p>
        <div className="w-[32vw] h-[1px] bg-red-500 my-3"></div>

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        body {
            background-color: #121212;
            color: #e0e0e0;
            line-height: 1.6;
        }
        
        .container {
            max-width: 1100px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        
        .about-section {
            display: flex;
            flex-direction: column;
            gap: 50px;
        }
        
        .header {
            text-align: center;
            margin-bottom: 20px;
        }
        
        .header h1 {
            font-size: 3rem;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 15px;
            position: relative;
            display: inline-block;
        }
        
        .header h1::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 4px;
            background-color: #9e9e9e;
        }
        
        .subtitle {
            font-size: 1.2rem;
            color: #9e9e9e;
            margin-top: 10px;
        }
        
        .about-content {
            display: flex;
            flex-direction: row;
            gap: 40px;
            align-items: center;
        }
        
        .about-image {
            flex: 1;
            text-align: center;
        }
        
        .profile-image {
            width: 280px;
            height: 280px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid #333333;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            background-color: #2a2a2a;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 100px;
            color: #666;
        }
        
        .status-badge {
            background-color: #333333;
            color: #9e9e9e;
            font-size: 0.85rem;
            padding: 6px 12px;
            border-radius: 20px;
            margin-top: 15px;
            display: inline-block;
        }
        
        .status-badge span {
            display: inline-block;
            width: 8px;
            height: 8px;
            background-color: #4CAF50;
            border-radius: 50%;
            margin-right: 6px;
        }
        
        .about-text {
            flex: 2;
        }
        
        .about-text h2 {
            font-size: 2.2rem;
            margin-bottom: 15px;
            color: #ffffff;
        }
        
        .about-text p {
            font-size: 1.1rem;
            margin-bottom: 20px;
            color: #b0b0b0;
            line-height: 1.8;
        }
        
        .highlight {
            color: #ffffff;
            font-weight: bold;
        }
        
        .blue-highlight {
            color: #64B5F6;
            font-weight: bold;
        }
        
        .skills {
            margin-top: 30px;
        }
        
        .skills h3 {
            font-size: 1.5rem;
            margin-bottom: 15px;
            color: #ffffff;
        }
        
        .skills-container {
            margin-bottom: 25px;
        }
        
        .skills-category {
            font-size: 1.1rem;
            color: #9e9e9e;
            margin-bottom: 10px;
        }
        
        .skill-list {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom: 20px;
        }
        
        .skill-tag {
            background-color: #333333;
            padding: 8px 16px;
            border-radius: 25px;
            font-size: 0.9rem;
            transition: all 0.3s ease;
        }
        
        .skill-tag:hover {
            background-color: #4a4a4a;
            transform: translateY(-3px);
        }
        
        .skill-tag.advanced {
            border-left: 3px solid #64B5F6;
        }
        
        .skill-tag.intermediate {
            border-left: 3px solid #81C784;
        }
        
        .skill-tag.learning {
            border-left: 3px solid #FFD54F;
        }
        
        .social-links {
            margin-top: 40px;
            display: flex;
            justify-content: center;
            gap: 20px;
        }
        
        .social-icon {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            background-color: #333333;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            color: #e0e0e0;
            transition: all 0.3s ease;
        }
        
        .social-icon:hover {
            background-color: #4a4a4a;
            transform: translateY(-5px);
        }
        
        .projects-section {
            margin-top: 60px;
        }
        
        .projects-section h3 {
            font-size: 1.8rem;
            margin-bottom: 30px;
            text-align: center;
            color: #ffffff;
        }
        
        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 25px;
        }
        
        .project-card {
            background-color: #1e1e1e;
            border-radius: 10px;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            height: 100%;
            display: flex;
            flex-direction: column;
        }
        
        .project-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
        }
        
        .project-image {
            height: 180px;
            background-color: #2a2a2a;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #666;
            font-size: 2rem;
            position: relative;
            overflow: hidden;
        }
        
        .project-status {
            position: absolute;
            top: 10px;
            right: 10px;
            background-color: #333333;
            color: #9e9e9e;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 0.8rem;
        }
        
        .project-content {
            padding: 20px;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
        }
        
        .project-title {
            font-size: 1.3rem;
            color: #ffffff;
            margin-bottom: 8px;
        }
        
        .project-description {
            color: #b0b0b0;
            margin-bottom: 15px;
            flex-grow: 1;
        }
        
        .project-tech {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-top: auto;
        }
        
        .tech-tag {
            background-color: #252525;
            font-size: 0.8rem;
            padding: 4px 8px;
            border-radius: 4px;
            color: #9e9e9e;
        }
        
        .learning-path {
            margin-top: 60px;
        }
        
        .learning-path h3 {
            font-size: 1.8rem;
            margin-bottom: 30px;
            text-align: center;
            color: #ffffff;
        }
        
        .timeline-container {
            position: relative;
            max-width: 900px;
            margin: 0 auto;
        }
        
        .timeline-container::after {
            content: '';
            position: absolute;
            width: 2px;
            background-color: #4a4a4a;
            top: 0;
            bottom: 0;
            left: 50%;
            margin-left: -1px;
        }
        
        .timeline-item {
            padding: 10px 40px;
            position: relative;
            width: 50%;
            box-sizing: border-box;
        }
        
        .timeline-item::after {
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            background-color: #9e9e9e;
            border-radius: 50%;
            top: 20px;
            z-index: 1;
        }
        
        .left {
            left: 0;
            text-align: right;
        }
        
        .right {
            left: 50%;
        }
        
        .left::after {
            right: -10px;
        }
        
        .right::after {
            left: -10px;
        }
        
        .timeline-content {
            padding: 20px;
            background-color: #1e1e1e;
            border-radius: 8px;
            box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
        }
        
        .timeline-content h4 {
            margin-bottom: 5px;
            font-size: 1.2rem;
            color: #ffffff;
        }
        
        .timeline-content .date {
            font-style: italic;
            margin-bottom: 15px;
            display: block;
            color: #9e9e9e;
        }
        
        .timeline-content p {
            line-height: 1.5;
            color: #b0b0b0;
        }
        
        .timeline-content .resource-link {
            display: inline-block;
            margin-top: 10px;
            color: #64B5F6;
            font-size: 0.9rem;
        }
        
        .goals-section {
            margin-top: 60px;
        }
        
        .goals-section h3 {
            font-size: 1.8rem;
            margin-bottom: 30px;
            text-align: center;
            color: #ffffff;
        }
        
        .goals-container {
            display: flex;
            gap: 25px;
        }
        
        .goal-column {
            flex: 1;
            background-color: #1e1e1e;
            border-radius: 10px;
            padding: 25px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        
        .goal-column h4 {
            font-size: 1.4rem;
            color: #ffffff;
            margin-bottom: 20px;
            text-align: center;
            position: relative;
        }
        
        .goal-column h4::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 40px;
            height: 3px;
            background-color: #4a4a4a;
        }
        
        .goal-list {
            list-style-type: none;
        }
        
        .goal-item {
            margin-bottom: 15px;
            padding-left: 25px;
            position: relative;
            color: #b0b0b0;
        }
        
        .goal-item::before {
            content: '•';
            color: #9e9e9e;
            position: absolute;
            left: 0;
            font-size: 1.2rem;
        }
        
        .contact-section {
            margin-top: 60px;
            text-align: center;
        }
        
        .contact-section h3 {
            font-size: 1.8rem;
            margin-bottom: 20px;
            color: #ffffff;
        }
        
        .contact-text {
            max-width: 600px;
            margin: 0 auto 30px;
            color: #b0b0b0;
        }
        
        .contact-button {
            background-color: #333333;
            color: #ffffff;
            border: none;
            padding: 12px 25px;
            border-radius: 25px;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
        }
        
        .contact-button:hover {
            background-color: #4a4a4a;
            transform: translateY(-3px);
        }
        
        .footer {
            margin-top: 60px;
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid #333333;
            color: #9e9e9e;
            font-size: 0.9rem;
        }
        
        @media screen and (max-width: 900px) {
            .goals-container {
                flex-direction: column;
            }
        }
        
        @media screen and (max-width: 768px) {
            .about-content {
                flex-direction: column;
            }
            
            .timeline-container::after {
                left: 40px;
            }
            
            .timeline-item {
                width: 100%;
                padding-left: 70px;
                padding-right: 25px;
            }
            
            .timeline-item::after {
                left: 30px;
                top: 20px;
            }
            
            .left, .right {
                left: 0;
                text-align: left;
            }
            
            .projects-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="about-section">
            <div class="header">
                <h1>Sobre Mim</h1>
                <div class="subtitle">Desenvolvedor Front-end em Formação</div>
            </div>
            
            <div class="about-content">
                <div class="about-image">
                    <div class="profile-image">
                        <span>LM</span>
                    </div>
                    <div class="status-badge">
                        <span></span> Em busca de oportunidades
                    </div>
                </div>
                
                <div class="about-text">
                    <h2>Lucas Mendes</h2>
                    <p>Olá! Sou um <span class="highlight">desenvolvedor front-end em início de carreira</span> com foco em <span class="blue-highlight">React.js</span>. Embora ainda não tenha experiência profissional, dedico-me intensamente ao aprendizado autodidata e à prática através de projetos pessoais.</p>
                    
                    <p>Minha jornada começou com HTML, CSS e JavaScript, mas me apaixonei pelo ecossistema React e suas infinitas possibilidades. Estou constantemente aprendendo novas tecnologias e aplicando esse conhecimento em projetos práticos para desenvolver minhas habilidades.</p>
                    
                    <p>Atualmente, estou cursando <span class="highlight">Análise e Desenvolvimento de Sistemas</span> e complementando minha formação acadêmica com cursos online especializados em desenvolvimento front-end. Tenho me dedicado especialmente a dominar React e seu ecossistema de bibliotecas e ferramentas.</p>
                    
                    <div class="skills">
                        <h3>Habilidades Técnicas</h3>
                        
                        <div class="skills-container">
                            <div class="skills-category">Tecnologias Fundamentais</div>
                            <div class="skill-list">
                                <div class="skill-tag advanced">HTML5</div>
                                <div class="skill-tag advanced">CSS3</div>
                                <div class="skill-tag advanced">JavaScript ES6+</div>
                                <div class="skill-tag intermediate">TypeScript</div>
                                <div class="skill-tag intermediate">Git/GitHub</div>
                            </div>
                        </div>
                        
                        <div class="skills-container">
                            <div class="skills-category">Bibliotecas & Frameworks</div>
                            <div class="skill-list">
                                <div class="skill-tag intermediate">React.js</div>
                                <div class="skill-tag intermediate">React Router</div>
                                <div class="skill-tag learning">Redux</div>
                                <div class="skill-tag learning">Next.js</div>
                                <div class="skill-tag learning">Styled Components</div>
                            </div>
                        </div>
                        
                        <div class="skills-container">
                            <div class="skills-category">Ferramentas & Métodos</div>
                            <div class="skill-list">
                                <div class="skill-tag intermediate">Vite</div>
                                <div class="skill-tag intermediate">npm/yarn</div>
                                <div class="skill-tag learning">Webpack</div>
                                <div class="skill-tag learning">Jest</div>
                                <div class="skill-tag learning">Responsive Design</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="projects-section">
                <h3>Projetos Pessoais</h3>
                <div class="projects-grid">
                    <div class="project-card">
                        <div class="project-image">
                            <span>📝</span>
                            <div class="project-status">Concluído</div>
                        </div>
                        <div class="project-content">
                            <h4 class="project-title">Gerenciador de Tarefas</h4>
                            <p class="project-description">Aplicativo de lista de tarefas completo com funcionalidades de arrastar e soltar, categorias personalizadas, filtros e armazenamento local. Meu primeiro projeto React completo.</p>
                            <div class="project-tech">
                                <span class="tech-tag">React</span>
                                <span class="tech-tag">Context API</span>
                                <span class="tech-tag">React DnD</span>
                                <span class="tech-tag">LocalStorage</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="project-card">
                        <div class="project-image">
                            <span>🎬</span>
                            <div class="project-status">Em progresso</div>
                        </div>
                        <div class="project-content">
                            <h4 class="project-title">Catálogo de Filmes</h4>
                            <p class="project-description">Aplicação que consome a API do TMDB para exibir filmes populares, permitir buscas e salvar favoritos. Implementando autenticação e modo offline.</p>
                            <div class="project-tech">
                                <span class="tech-tag">React</span>
                                <span class="tech-tag">React Router</span>
                                <span class="tech-tag">Axios</span>
                                <span class="tech-tag">Firebase</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="project-card">
                        <div class="project-image">
                            <span>🛒</span>
                            <div class="project-status">Planejado</div>
                        </div>
                        <div class="project-content">
                            <h4 class="project-title">E-commerce React</h4>
                            <p class="project-description">Loja virtual com catálogo de produtos, carrinho de compras, gestão de usuários e integração com API de pagamentos. Em fase de planejamento.</p>
                            <div class="project-tech">
                                <span class="tech-tag">React</span>
                                <span class="tech-tag">Redux</span>
                                <span class="tech-tag">TypeScript</span>
                                <span class="tech-tag">Stripe</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="learning-path">
                <h3>Minha Jornada de Aprendizado</h3>
                <div class="timeline-container">
                    <div class="timeline-item left">
                        <div class="timeline-content">
                            <h4>Primeiros Passos com Web</h4>
                            <span class="date">Janeiro 2023</span>
                            <p>Iniciei meus estudos com HTML e CSS através do curso "Web Development Bootcamp" da Udemy, criando meus primeiros sites estáticos.</p>
                            <span class="resource-link">Projeto: Portfolio Pessoal Simples</span>
                        </div>
                    </div>
                    
                    <div class="timeline-item right">
                        <div class="timeline-content">
                            <h4>Aprendendo JavaScript</h4>
                            <span class="date">Abril 2023</span>
                            <p>Mergulhei nos fundamentos de JavaScript, estudando sintaxe, funções, eventos e manipulação do DOM através da plataforma freeCodeCamp.</p>
                            <span class="resource-link">Projeto: Calculadora Interativa</span>
                        </div>
                    </div>
                    
                    <div class="timeline-item left">
                        <div class="timeline-content">
                            <h4>Início da Faculdade</h4>
                            <span class="date">Agosto 2023</span>
                            <p>Comecei o curso de Análise e Desenvolvimento de Sistemas, aprofundando conceitos de programação e estruturas de dados.</p>
                        </div>
                    </div>
                    
                    <div class="timeline-item right">
                        <div class="timeline-content">
                            <h4>Descobrindo o React</h4>
                            <span class="date">Novembro 2023</span>
                            <p>Iniciei o aprendizado de React através da documentação oficial e do curso "React - The Complete Guide" de Maximilian Schwarzmüller.</p>
                            <span class="resource-link">Projeto: App de Previsão do Tempo</span>
                        </div>
                    </div>
                    
                    <div class="timeline-item left">
                        <div class="timeline-content">
                            <h4>Aprofundamento em React</h4>
                            <span class="date">Fevereiro 2024</span>
                            <p>Avancei nos estudos de React Hooks, Context API, e comecei a usar TypeScript nos meus projetos pessoais.</p>
                            <span class="resource-link">Projeto: Gerenciador de Tarefas</span>
                        </div>
                    </div>
                    
                    <div class="timeline-item right">
                        <div class="timeline-content">
                            <h4>Explorando o Ecossistema React</h4>
                            <span class="date">Junho 2024</span>
                            <p>Focando em Redux, React Router e styled-components para criar aplicações mais complexas e escaláveis.</p>
                            <span class="resource-link">Projeto: Catálogo de Filmes (em andamento)</span>
                        </div>
                    </div>
                    
                    <div class="timeline-item left">
                        <div class="timeline-content">
                            <h4>Expandindo Horizontes</h4>
                            <span class="date">Dezembro 2024</span>
                            <p>Iniciando estudos em Next.js e explorando conceitos de server-side rendering, static generation e API routes.</p>
                            <span class="resource-link">Projeto: Blog Pessoal com Next.js</span>
                        </div>
                    </div>
                    
                    <div class="timeline-item right">
                        <div class="timeline-content">
                            <h4>Atualmente</h4>
                            <span class="date">Abril 2025</span>
                            <p>Desenvolvendo projetos mais complexos para construir um portfólio sólido, participando de comunidades online e buscando oportunidades de estágio ou trainee.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="goals-section">
                <h3>Meus Objetivos</h3>
                <div class="goals-container">
                    <div class="goal-column">
                        <h4>Curto Prazo</h4>
                        <ul class="goal-list">
                            <li class="goal-item">Concluir o desenvolvimento do projeto de Catálogo de Filmes com integração completa da API</li>
                            <li class="goal-item">Dominar conceitos avançados de Redux e gerenciamento de estado global</li>
                            <li class="goal-item">Aprender implementação de testes automatizados com Jest e React Testing Library</li>
                            <li class="goal-item">Criar um projeto utilizando autenticação e banco de dados Firebase</li>
                            <li class="goal-item">Participar ativamente de comunidades como Dev.to e comunidades no Discord</li>
                        </ul>
                    </div>
                    
                    <div class="goal-column">
                        <h4>Médio Prazo</h4>
                        <ul class="goal-list">
                            <li class="goal-item">Desenvolver um e-commerce completo com React, Redux e integrações de pagamento</li>
                            <li class="goal-item">Aprofundar conhecimentos em Next.js, SSR e otimização de performance</li>
                            <li class="goal-item">Contribuir em projetos open source na comunidade React</li>
                            <li class="goal-item">Dominar conceitos de UI/UX para melhorar a qualidade visual dos meus projetos</li>
                            <li class="goal-item">Conseguir um estágio ou vaga júnior em desenvolvimento front-end</li>
                        </ul>
                    </div>
                    
                    <div class="goal-column">
                        <h4>Longo Prazo</h4>
                        <ul class="goal-list">
                            <li class="goal-item">Tornar-me um desenvolvedor front-end React especialista, com domínio pleno do ecossistema</li>
                            <li class="goal-item">Explorar desenvolvimento móvel com React Native para expandir habilidades</li>
                            <li class="goal-item">Aprender Node.js e Express para me tornar um desenvolvedor full-stack</li>
                            <li class="goal-item">Compartilhar conhecimento através de artigos, tutoriais ou mentorias</li>
                            <li class="goal-item">Participar de eventos e conferências relevantes na área de desenvolvimento web</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="contact-section">
                <h3>Vamos Conversar</h3>
                <p class="contact-text">Estou sempre em busca de oportunidades para aprender, colaborar e crescer. Se você tem um projeto interessante, uma oportunidade para iniciantes ou apenas quer trocar ideias sobre desenvolvimento front-end, ficarei feliz em conversar!</p>
                <a href="#" class="contact-button">Entre em Contato</a>
            </div>
            
            <div class="social-links">
                <a href="#" class="social-icon">
                    <span>gh</span>
                </a>
                <a href="#" class="social-icon">
                    <span>in</span>
                </a>
                <a href="#" class="social-icon">
                    <span>tw</span>
                </a>
                <a href="#" class="social-icon">
                    <span>dv</span>
                </a>
            </div>
            
            <div class="footer">
                &copy; 2025 Lucas Mendes. Desenvolvido com React e muito ☕
            </div>
        </div>
    </div>
</body>
</html> */
}
