import Header from "../../components/Header";
import Carrossel from "../../components/Carrossel";
import ContatoFlutuante from "../../components/ContatoFlutuante/index";
import Parceria from "../../components/SectionParceria";
import Servicos from "../../components/servicos";
import ButtonTop from "../../components/buttontop";

export default function Home() {
  return (
    <>
      <Header />
      <Carrossel />
      <ContatoFlutuante />
      <Parceria />
      <Servicos />
      <ButtonTop />
    </>
  );
}
