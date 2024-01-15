import logo from '../../assets/Logo-conativa-1200x542.png'
import './styles.scss'
export default function  Header () {
    
    return(

        <>
        <nav>
            <img src={logo} alt="logo" />
<ul>
<a href="">Home</a>
<a href="">Nossos Serviços</a>
<a href="">Projetos</a>
<a href="">Web Stories</a>
<a href=""></a>
<a href="" target='blank' className='orcamento' >Solicitar Orçamento</a>
</ul>
        </nav>
        
        </>
    )
}