import "./styles.scss";
import mulher from "../../assets/mulher.png";
export default function Parceria() {
  return (
    <section className="Parceria">
      <div className="about">
        <p>ACELERE O CRESCIMENTO DA SUA EMPRESA</p>
        <h1>
          Definimos objetivos, criamos as rotas e executamos os processos!
        </h1>
        <p>
          Por meio de nossas estratégias criativas e inovadoras de marketing
          digital, sua empresa poderá se tornar mais visível e lucrativa.
        </p>
        <button className="buttonConsulta">
          <a
            href="https://api.whatsapp.com/send/?phone=5571996738280&text=ol%C3%A1+tudo+bem%2C+me+chamo+Danilo+e+sou+Desenvolvedor&type=phone_number&app_absent=0"
            target="_blank"
          >
            Consultoria Gratuita
          </a>
        </button>
      </div>
      <img src={mulher} alt="imagem" />
    </section>
  );
}
