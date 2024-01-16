import logo from '../../assets/Logo-conativa-1200x542.png'
import './styles.scss'
import tiktok from '../../assets/bxl-tiktok.svg'
import instagram from '../../assets/bxl-instagram.svg'
import linkedin from '../../assets/bxl-linkedin-square.svg'
export default function  Header () {
    
    return(

        <>
        <nav>
            <img src={logo} alt="logo" />
            <div className='redesocial'>
                <a href="" target='blank'><img src={tiktok} alt=""  className='imagemSocial'/></a>
                <a href="" target='blank'><img src={instagram} alt=""  className='imagemSocial'/></a>
                <a href=""target='blank'><img src={linkedin} alt=""  className='imagemSocial'/></a>
            </div>
<ul>
<a href="">HOME</a>
<a href="">NOSSOS SERVIÇOS</a>
<a href="">PROJETOS</a>
<a href="">WEB STORIES</a>
<a href=""></a>
<a href="" target='blank' className='orcamento' >Solicitar Orçamento</a>
</ul>
        </nav>
        
        </>
    )
}