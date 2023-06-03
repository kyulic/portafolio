



const HeaderPor = () => {
  return (
    <article>
        <div className="port_init">
        <header className="header">
            <div className="div_img"> <img className="img_logo" src="./public/logo.png" alt="logo" /></div>
            
            <nav className="navbar">
                <ul className="list_navbar">
                    <li><a href="#main">Home</a></li>
                    <li><a href="#about_me">About me</a></li>
                    <li><a href="#">Portafolio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
        <main id="main">
            <div className="inf_content">
                <h1 className="presentation">Hi!!! I'am <span className="name">Karla Yulieth </span>Caquimbo </h1>
                <p>A fronted developer based in Colombia</p>
                <button className="button_content">Download CV</button>            
            </div>
            <img className="img_header" src="./public/imagen_1.png" alt="image1" />
        </main>
        </div>
      
      <div id="about_me">
      <img className="img_ing" src="./public/ingenieria.png" alt="ingenieria" />
        <div className="about_inf">
        <h2 className="title_about">About me</h2>
        
        <p className="paraf_about">I am electronic engineer, 
          also developer full-stack developer,
           I have knowledge of the Python programming language  </p>


        </div>
        


      </div>
      <a className="repositorio" href="https://github.com/kyulic/portafolio">Karla Yulieth caquimbo Repositorio</a>

      
        
        
        </article>
  )
}

export default HeaderPor