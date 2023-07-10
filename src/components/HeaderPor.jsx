import { useState } from "react"




const HeaderPor = () => {
  const [isOpen, setIsOpen] = useState(false)
  const hanbleClick=()=>setIsOpen(!isOpen)
  return (
    <article>
        <div className="port_init">
        <header className="header">
            
            
            <nav className="navbar">
               <div className="nav_logo"></div>
                <ul className={`list_navbar ${isOpen && "open"}`}>
                    <li><a href="#main">Home</a></li>
                    <li><a href="#about_me">Acerca de mi</a></li>
                    <li><a href="#portafolio">Portafolio</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
                <div className={`nav_toggle ${isOpen && "open"}`} onClick={hanbleClick}>
                  <spa><i className='bx bx-list-ul'></i></spa>
                  <spa></spa>
                  <spa></spa>
                </div>
            </nav>
           
        </header>
        <div className="div_img"> <img className="img_logo" src="../logo.png" alt="logo" /></div>
        <main id="main">
            <div className="inf_content">
                <h1 className="presentation">Hola!!! Mi nombre es <span className="name">Karla Yulieth </span>Caquimbo </h1>
                <p>Soy desarrolladora fronted y backend  | JavaScript | React | CSS | HTML | PYTHON </p>
                <button className="button_content">Download CV</button>
            </div>
            
            <img className="img_header" src="../descargar.jpg" alt="header_img" />
        </main>
        </div>
      
      <div id="about_me">
      <img className="img_ing" src="../karla.jpg" alt="karla" />
        <div className="about_inf">
        <h2 className="title_about">Acerca de mi</h2>
        
        <p className="paraf_about">Soy Ingeniera Electrónica, 
          y desarrolladora frontend y backend node Js,
           tengo conocimientos en el lenguaje de programación Python y C enfoncado en arduino. 
           Manejo programas educativos como scratch, S4A, zinjay, PIC C.
           Estoy desarrollando mis estudios de como desarrollador frontend en Academlo

          <h3>Habilidades:</h3>
        <div className="lenguajes">
          <div className="lenguajes_bar" style={{width:'60%'}} >
            <h2>Python 60%</h2>
          </div>
          
        </div>
        <div className="lenguajes">
          <div className="lenguajes_bar" style={{width:'50%'}}>
            <h2> C- 50%</h2>
          </div>
          
        </div>
        <div className="lenguajes">
          <div className="lenguajes_bar" style={{width:'70%'}} >
            <h2> HTML 70%</h2>
          </div>
          
        </div>

        <div className="lenguajes">
          <div className="lenguajes_bar" style={{width:'70%'}}>
            <h2> CSS- 70%</h2>
          </div>
          
        </div>

        <div className="lenguajes">
          <div className="lenguajes_bar" style={{width:'70%'}}>
            <h2> JavaScript- 70%</h2>
          </div>
          
        </div>  
           
           
          </p>


           



        </div>
        </div>

        <section id="portafolio">
          <div className="title_my_portafolio">
          <h2 className="title_portafolio">Mi Portafolio</h2>
          <p className="parra_portafolio">Algunos de los repositorios que he desarrollado:</p>
          </div>
       
          <div className="container">

            < div className="container_portafolio">
            
              
              <a href="https://kyclima.netlify.app"><img className="img_protafolio" src="../clima.jpg" alt="clima" /></a> 
              
            <a  href="https://crudky.netlify.app"> <img  className="img_protafolio"  src="../crud.jpg" alt="" /></a> 
            <a  href="https://pokemon-ky.netlify.app"> <img className="img_protafolio"  src="../pokedex.jpg" alt="p" /> </a> 
            <a  href="https://kyrickandmorty.netlify.app"> <img  className="img_protafolio" src="../rickandmorty.jpg" alt="rick and morty" /> </a> 
            <a  href="https://pruebatusuerte.netlify.app"> <img  className="img_protafolio" src="../prueba_suerte.jpg" alt="rick and morty" /> </a> 
            <div className="icons_tecn">
            <i className='bx bxl-html5'></i>
            <i className='bx bxl-css3'></i>
            <i className='bx bxl-javascript'></i>
            <i className='bx bxl-react'></i>

            </div>

            </div>
          </div>
        </section>
        
        <section id="contacto">
          <h2 className="title_contact">contacto</h2>
          <div className="container_enlaces">
          <a className="enlaces" href="https://t.me/Kycaquimbo"><i className='bx bxl-telegram'></i> </a>
          <a className="enlaces" href="https://www.linkedin.com/in/karla-yulieth-caquimbo-4950635b/"><i className='bx bxl-linkedin'></i></a>
          <a className="enlaces" href="https://wa.me/+573204167015"><i className='bx bxl-whatsapp'></i></a>
          <a className="enlaces" href="mailto:kycaquimbo@hotmail.com"><i class='bx bx-envelope'></i></a>

          </div>

        </section>


      <a className="repositorio" href="https://github.com/kyulic/portafolio">Karla Yulieth caquimbo Repositorio</a>


      
        
        
        </article>
  )
}

export default HeaderPor