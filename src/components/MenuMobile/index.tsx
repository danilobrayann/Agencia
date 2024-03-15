import { Container } from "./styles";
import { IoClose } from "react-icons/io5";
import logo from "../../assets/Logo-conativa-1200x542.png";
import Mulher from "../../assets/girl-png-image.png";
import { useEffect } from "react";

interface Menu {
  menuInvisibal: boolean;
  setmenuInvisibal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MenuMobile({ menuInvisibal, setmenuInvisibal }: Menu) {
  useEffect(() => {
    document.body.style.overflowY = menuInvisibal ? "hidden" : "auto";
  }, [menuInvisibal]);
  return (
    <Container isvisible={menuInvisibal}>
      <IoClose size={45} onClick={() => setmenuInvisibal(false)} />
      <nav>
        <img src={logo} alt="logo" />
        <img className="Mulher" src={Mulher} />
        <ul>
          <a href="#">HOME</a>
          <a href="#servico">NOSSOS SERVIÇOS</a>
          <a href="">PROJETOS</a>
          <a href="">WEB STORIES</a>
          <a href=""></a>
          <a
            href="https://api.whatsapp.com/send/?phone=5571996738280&text=ol%C3%A1+tudo+bem%2C+me+chamo+Danilo+e+sou+Desenvolvedor&type=phone_number&app_absent=0"
            target="blank"
            className="orcamento"
          >
            Solicitar Orçamento
          </a>
        </ul>
        <div className="redesocial">
          <a href="" target="blank">
            <i className="bx bxl-tiktok bx-flashing"></i>
          </a>
          <a href="" target="blank">
            <i className="bx bxl-instagram bx-flashing "></i>
          </a>
          <a
            href="https://www.linkedin.com/company/101551231/admin/feed/posts/?feedType=following"
            target="blank"
          >
            <i className="bx bxl-linkedin  bx-flashing"></i>
          </a>
        </div>
      </nav>
    </Container>
  );
}
