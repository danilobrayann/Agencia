import logo from '../../assets/Logo-conativa-1200x542.png'
import './styles.scss'
export default function  Header () {
    
    return(

        <>
        <nav>
            <img src={logo} alt="logo" />
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