import React from "react";
import ModalMenu from "../components/ModalMenu";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const images = [
  {
    title: "Site de Previsão do Tempo",
    button: "Mais Detalhes",
    src: "/img/image-web1.png",
    description:
      "Um site que mostra o clima em tempo real de qualquer lugar do mundo.",
    link: "https://site-previsao-tempo-tau.vercel.app",
  },
  {
    title: "Vaga para Site",
    button: "Mais Detalhes",
    src: "/img/image-vago.png",
    description: "Projeto em desenvolvimento para oportunidades futuras.",
    link: "#",
  },
  {
    title: "Vaga para Site",
    button: "Mais Detalhes",
    src: "/img/image-vago.png",
    description: "Projeto em desenvolvimento para oportunidades futuras.",
    link: "#",
  },
  {
    title: "Vaga para Site",
    button: "Mais Detalhes",
    src: "/img/image-vago.png",
    description: "Projeto em desenvolvimento para oportunidades futuras.",
    link: "#",
  },
];

function Portifolio() {
  return (
    <div className="w-[95vw] h-[95vh] overflow-visible bg-[url('/public/img/background-div.png')] bg-cover bg-center rounded-[20px]">
      <ModalMenu />
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1500}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="overflow-visible w-[95vw] h-[95vh] rounded-[50px] relative left-[5.3vw] bottom-[-15vh]"
      >
        {images.map((images, index) => (
          <SwiperSlide key={index} className="rounded-[50px]">
            <div
              style={{ backgroundImage: `url(${images.src})` }}
              className="w-[85vw] h-[75vh] rounded-[50px] object-cover bg-center bg-cover align-middle hover:scale-105 transition-transform duration-300"
            >
              <div className="flex flex-col items-center justify-center text-center bg-black w-full h-full rounded-[50px] bg-opacity-50">
                <h1 className="text-white text-5xl font-bold">
                  {images.title}
                </h1>
                <p className="mb-3 mt-2 text-white text-[1.1em]">
                  {" "}
                  {images.description}{" "}
                </p>
                <div>
                  <Link
                    to={images.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-red-500 text-white text-2xl px-8 py-3 rounded-md hover:bg-red-600 transition duration-300 font-oswald">
                      Visitar o Site
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Portifolio;
