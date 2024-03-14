import { useState } from "react"
import Header from "../../components/Header"
import Carrossel from '../../components/Carrossel'
import ContatoFlutuante from '../../components/ContatoFlutuante/index'
import Parceria from "../../components/SectionParceria"
import Servicos from "../../components/servicos"
import ButtonTop from '../../components/buttontop'
import MenuMobile from '../../components/MenuMobile'
export default function Home () {
const [menuInvisibal, setmenuInvisibal] = useState(false);


return (

    <>
    <MenuMobile
    menuInvisibal={menuInvisibal}
    setmenuInvisibal={setmenuInvisibal}
    />
   <Header setmenuInvisibal={setmenuInvisibal}/>
   <Carrossel/>
   <ContatoFlutuante/>
   <Parceria/>
   <Servicos/>
   <ButtonTop/>
    </>
)


    
}