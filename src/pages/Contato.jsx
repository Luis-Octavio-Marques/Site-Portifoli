import { Send, Mail, User } from "lucide-react";
import ModalMenu from "../components/ModalMenu";
import "./ContatoQuery.css"; // Importe o arquivo CSS criado

function Contato() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    fetch("https://formsubmit.co/luisoctavio0425@gmail.com", {
      method: "POST",
      body: data,
    })
      .then((response) => {
        if (response.ok) {
          alert("Mensagem enviada com sucesso!");
          form.reset();
        } else {
          alert("Ocorreu um erro ao enviar sua mensagem.");
        }
      })
      .catch(() => {
        alert("Erro na conexão. Tente novamente.");
      });
  };

  return (
    <>
    <div id="contato-container" className="w-[95vw] h-[95vh] bg-[url('/public/img/background-div.png')] bg-cover bg-center rounded-[20px] p-10 text-white contact-container">
      <ModalMenu />
      <h1 className="absolute left-[11.5vw] top-6 font-gantari mt-5 text-[2.5em] font-bold">
        {" "}
        Entre em Contato{" "}
      </h1>
      <div className="absolute left-[11.5vw] top-[16.3vh] w-[25vw] h-[1px] bg-red-500 mt-0 red-line"></div>
      <div className="max-w-5xl mx-auto mt-16 form-container">
        <div className="bg-transparent backdrop-blur-lg p-8 rounded-lg border border-white shadow-md">
          <h3 className="text-2xl font-semibold mb-6">Envie uma Mensagem</h3>

          <form onSubmit={handleSubmit}>
            <input type="hidden" name="_captcha" value="false" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="name"
                  className="flex items-center gap-2 text-sm font-medium mb-1"
                >
                  Nome <User />
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-[#333] border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="flex items-center gap-2 text-sm font-medium mb-1"
                >
                  Email <Mail />
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-[#333] border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>
            </div>

            <div className="mb-6 message">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full px-4 py-3 bg-[#333] border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-colors duration-300"
            >
              <span>Enviar Mensagem</span>
              <Send className="ml-2 w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default Contato;