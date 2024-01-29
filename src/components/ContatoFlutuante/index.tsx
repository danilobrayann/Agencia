
import './styles.scss'
import wppimg from '../../assets/whatsapp-logo.b40636d0.png'
export default function Wpp() {

    return(
        <>
        
        <div className="floating-box">
       <a href="https://api.whatsapp.com/send/?phone=5571996738280&text=ol%C3%A1+tudo+bem%2C+me+chamo+Danilo+e+sou+Desenvolvedor&type=phone_number&app_absent=0" target="_blank" ><img src={wppimg} alt="" /></a>
        
    </div>
        
        </>
    )
    
}