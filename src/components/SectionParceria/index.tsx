import "./styles.scss";
import mulher from "../../assets/mulher.png";
import mensagem from "../../assets/mensagem.png";
import { motion } from "framer-motion";

export default function Parceria() {
  const textVariants = {
    initial: { opacity: 0.9, x: 55 },
    animate: { opacity: 0, x: 22 },
  };

  const textTransition = {
    repeat: Infinity,
    duration: 1, // Tempo total da animação em segundos
    repeatType: "reverse", // Inverte a animação a cada repetição
  };

  return (
    <section className="Parceria">
      <div className="about">
        <p>ACELERE O CRESCIMENTO DA SUA EMPRESA</p>
        <motion.h1
          variants={textVariants}
          initial="initial"
          animate="animate"
          transition={textTransition}
        >
          Definimos objetivos, criamos as rotas e executamos os processos!
        </motion.h1>
        <p>
          Por meio de nossas estratégias criativas e inovadoras de marketing
          digital, sua empresa poderá se tornar mais visível e lucrativa.
        </p>
        <button className="buttonConsulta">
          <a
            href="https://api.whatsapp.com/send/?phone=5571996738280&text=ol%C3%A1+tudo+bem%2C+me+chamo+Danilo+e+sou+Desenvolvedor&type=phone_number&app_absent=0"
            target="_blank"
          >
            <img className="mensagem" src={mensagem} alt="" /> Consultoria
            Gratuita
          </a>
        </button>
      </div>
      <img src={mulher} alt="imagem" />
    </section>
  );
}
