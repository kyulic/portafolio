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
                <p>Soy desarrolladora Full Stack  | JavaScript | React | CSS | HTML | PYTHON |Node Js </p>
                <button className="button_content">  <a className="cv" href="../CV_karla.pdf" download>Download CV</a></button>
            </div>
            <img className="img_header" src="../descargar.jpg" alt="header_img" />
            
            
            
        </main>
        </div>
      
      <div id="about_me">
      <img className="img_ing" src="../karla.jpg" alt="karla" />
        <div className="about_inf">
        <h2 className="title_about">Acerca de mi</h2>
        
        <section className="paraf_about">
          
          <p className="parrafo_a">
          Soy Ingeniera Electrónica, tecnóloga en mecatrónica
          y desarrolladora Full Stack,
           tengo conocimientos en el lenguaje de programación Python y C enfocado en arduino. 
           Manejo programas educativos como scratch, S4A, zinjay, PIC C.
           He desarrollado diferentes proyectos electrónicos como control de temperara y 
           humedad de un invernadero, casa domótica (maqueta), carrito con control remoto, medidor de 
           tensión y profundidad (python), entre otros. 
           Actualmente continuo mi formación como desarrollador con python
           

          </p>        
          
           
           
          </section>    



        </div>

        <section className="hability">
          <h3 className="title_habilities">Habilidades:</h3>
        <div className="lenguajes">
          <div className="lenguajes_bar" style={{width:'100%'}} >
            <h2>Python</h2>
          </div>
          
        </div>
        <div className="lenguajes">
          <div className="lenguajes_bar" style={{width:'100%'}}>
            <h2> C++</h2>
          </div>
          
        </div>
        <div className="lenguajes">
          <div className="lenguajes_bar" style={{width:'100%'}} >
            <h2> HTML</h2>
          </div>
          
        </div>

        <div className="lenguajes">
          <div className="lenguajes_bar" style={{width:'100%'}}>
            <h2> CSS</h2>
          </div>
          
        </div>

        <div className="lenguajes">
          <div className="lenguajes_bar" style={{width:'100%'}}>
            <h2> JavaScript</h2>
          </div>
          
        </div>

        <div className="lenguajes">
          <div className="lenguajes_bar" style={{width:'100%'}}>
            <h2> Node Js</h2>
          </div>
          
        </div>
          </section>
           
        </div>

        <section id="portafolio">
          <div className="title_my_portafolio">
          <h2 className="title_portafolio">Mi Portafolio</h2>
          <p className="parra_portafolio">Algunos de los repositorios que he desarrollado:</p>
          </div>
       
          <div className="container">

            < div className="container_portafolio">
            
              
              <a className="linkPro" href="https://kyclima.netlify.app"><img className="img_protafolio" src="../clima.jpg" alt="clima" />
             <p className="proyectos">Proyecto que permite visualizar el clima, se desarrolla con:
              html, css,javaScript react</p>
              </a> 
              
            <a className="linkPro" href="https://entregable4ky.netlify.app"> <img  className="img_protafolio"  src="../crud.jpg" alt="" />
            <p className="proyectos">Proyecto que permite de CRUD, se desarrolla con:
              html, css,javaScript react</p> </a> 

            <a className="linkPro" href="https://pokemon-ky.netlify.app"> <img className="img_protafolio"  src="../pokedex.jpg" alt="p" />
            <p className="proyectos">Proyecto poke Api, se desarrolla con:
              html, css,javaScript react</p>  </a> 

            <a className="linkPro" href="https://kyrickandmorty.netlify.app"> <img  className="img_protafolio" src="../rickandmorty.jpg" alt="rick and morty" /> 
            <p className="proyectos">Proyecto Rick and Mort, se desarrolla con:
              html, css,javaScript react</p> </a> 

            <a className="linkPro" href="https://pruebatusuerte.netlify.app"> <img  className="img_protafolio" src="../prueba_suerte.jpg" alt="prueba suerte" />
            <p className="proyectos">Proyecto prueba tu suerte, este proyecto de desarrolla con:
              html, css,javaScript react</p>  </a> 

            <a className="linkPro" href="https://front-api4.netlify.app/#/login"> <img  className="img_protafolio" src="../autenticacion.jpg" alt="autenticacion" /> 
            <p className="proyectos">Proyecto de autenticación, se desarrolla con:
              html, css,javaScript react y Node js</p> </a>

            <a className="linkPro" href="https://front-movies.netlify.app"> <img  className="img_protafolio" src="../movies.jpg" alt="movies" />
            <p className="proyectos">Proyecto de movies, se desarrolla con:
              html, css,javaScript react y Node js</p>  </a> 

            <a className="linkPro" href="https://maquetado4.netlify.app"> <img  className="img_protafolio" src="../maquetado_1.jpg" alt="maquetado" />
            <p className="proyectos">Maquetado, se desarrolla con:
              html, css</p>  </a> 

              <a className="linkPro" href="https://maquetado2.netlify.app"> <img  className="img_protafolio" src="../maquetado_2.jpg" alt="maquetado" />
            <p className="proyectos">Maquetado, se desarrolla con:
              html, css</p>  </a> 

              <a className="linkPro" href="https://www.youtube.com/watch?v=Jqu253726f4"> <img  className="img_protafolio" src="../tension.jpeg" alt="tension" />
            <p className="proyectos">Medidor de profundidad y tensión realizado con: python</p>  </a> 



            
            </div>
            <div className="icons_tecn">
            <i className='bx bxl-html5'></i>
            <i className='bx bxl-css3'></i>
            <i className='bx bxl-javascript'></i>
            <i className='bx bxl-react'></i>
            <i className='bx bxl-nodejs'></i>
            <i className='bx bxl-postgresql'></i>



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

        <footer className="repositorio_footer">

        <a className="repositorio" href="https://github.com/kyulic/portafolio">Karla Yulieth caquimbo Repositorio</a>

        </footer>

     


      
        
        
        </article>
  )
}

export default HeaderPor