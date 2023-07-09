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
                    <li><a href="#">Contacto</a></li>
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
                <p>Soy desarrolladora fronted y backend  | JavaScript | ReactJS | CSS | HTML | PYTHON </p>
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
          tambien soy  desarrolladora frontend y backend node Js,
           tengo conocimientos en el lenguaje de programación Python y C enfoncado en arduino. 
           Manejo programas educativos como scratch, S4A, zinjay, PIC C.
           Estoy desarrollando mis estudios de como desarrollador frontend en Academlo

        <div className="lenguajes">
          <div className="lenguajes_bar" >
            <h2>50%</h2>
          </div>
          
        </div>
        <div className="lenguajes">
          <div className="lenguajes_bar">
            <h2>50%</h2>
          </div>
          
        </div>
        <div className="lenguajes">
          <div className="lenguajes_bar">
            <h2>50%</h2>
          </div>
          
        </div>
           
           
          </p>


           



        </div>
        </div>

        <section id="portafolio">
        <h2 className="title_portafolio">My Portafolio</h2>
          <p className="parra_portafolio">The following are some of the repositories 
            that have been developed</p>
            <h3 className="project_section">Project Description</h3>
            <ul>
              <li> <a href="https://kyclima.netlify.app"></a> 
              
              <i class="fa-brands fa-github"></i>
              </li>
              <li> <a href=""></a> </li>
              <li> <a href=""></a> </li>
              <li> <a href=""></a> </li>
            </ul>


        </section>
        
      <a className="repositorio" href="https://github.com/kyulic/portafolio">Karla Yulieth caquimbo Repositorio</a>

      
        
        
        </article>
  )
}

export default HeaderPor