import Link from "next/Link";

import React, {useEffect , useState} from "react";
import axios from 'axios';

const CustomNavbar = (props) => {
  const[menu ,setMenu]=useState([]);
  console.log("menu:","??????")
    return(
   <nav className="navbar navbar-expand-lg navbar-light  fixed-top">
    
      <div className="upper-bar">
    <div className="container">
      <div className="row icons">

        <div className="col-sm text-right infos text-center text-sm-right">
          <span><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></span>
          <span><i className="fa fa-phone" aria-hidden="true"></i></span>
          <span> <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></span>
        </div>

      </div>
    </div>
  </div>


      <div className="container">
          <Link href="/">
              <div className="logo"id ="logo">
                  <a className="navbar-brand" >
                      <img src={require('../images/logo.png')} />
                  </a>
              </div>
          </Link>


          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
              aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>



          <div className="collapse navbar-collapse" id="navbarResponsive">
              <span className="logo-text"> AGENCE DE DESIGN D’ESPACES EVENEMENTIELS</span>
              <ul className="navbar-nav ml-auto">
                  <Link href="/">
                      <li className="nav-item active">
                          <a href='/' className="nav-link">Home
              <span className="sr-only">(current)</span>
                          </a>
                      </li>
                  </Link>


                  <Link href="/studio">
                      <li className="nav-item dropdown">
                          <a href="/studio" className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Studio </a>
                          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" >
                              <Link href="/studio#qui-sommes-nous"  ><a className="dropdown-item">Qui sommes-nous</a></Link>
                              <Link href="/studio#notre-equipe" ><a className="dropdown-item">Notre équipe</a></Link>
                          </div>
                      </li>
                  </Link>

                  <Link href="/services">
                      <li className="nav-item dropdown">
                          <a href="/services" className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Services </a>
                          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" >
                              <Link href="/services"  ><a className="dropdown-item">Etude de projet</a></Link>
                              <Link href="/services#conception" ><a className="dropdown-item">Conception et aménagement des espaces évènnementiels</a></Link>
                              <Link href="/services#fabrication"  ><a className="dropdown-item">Fabrication de stand sur mesure</a></Link>
                              <Link href="/services#location" ><a className="dropdown-item">Location de stand modulaire</a></Link>
                              <Link href="/services#serv"  ><a className="dropdown-item">Services annexes pour events</a></Link>
                              <Link href="/services#logistique" ><a className="dropdown-item" >Logistique</a></Link>
                          </div>
                      </li>
                  </Link>


                  <Link href="/realisation">
                      <li className="nav-item">
                          <a href="/realisation" className="nav-link" >Realisation</a>
                      </li>
                  </Link>

                  <Link href="/simulation">
                      <li className="nav-item">
                          <a className="nav-link">Simulation 3D</a>
                      </li>
                  </Link>

                  <Link href="/contact">
                      <li className="nav-item">
                          <a href="/contact" className="nav-link" >Contact</a>
                      </li>
                  </Link>
              </ul>
          </div>
      </div>

    

 
  
      <style jsx>{`
                                                                                         
                                                                                          
  *{
      font-size: 12px;
      box-sizing: border-box;
  }
  .navbar .upper-bar .infos {
  position: absolute;
  margin: 15px 0;
  top: -60px;
  right: 20px;
}

.navbar .upper-bar {
  align-items: center;
}

.navbar .upper-bar .icons i {
  margin-left: 15px;
  line-height: 2;
  color: gray;
  text-align: center;
  background-color: black;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-bottom: 20px;

}


.navbar {
  background-color: rgba(0, 0, 0, .4);
  height: 50px;
  margin-bottom: 0;
  margin-top: 60px;

}

.navbar .nav-link,
.navbar .logo-text {
  color: #F5F5F5 !important;
  font-weight: 300;
  font-size: 18px;


}
.navbar .logo-text{
  letter-spacing: 2px;
}
.navbar .navbar-brand img {
  width: 250px;
  border: 0;
  display: block;
  position: absolute;
  top: 55px;
  left: 55px;
}
.navbar-nav .dropdown-menu {
  background: transparent;
  position: static;
  float: none;

}
.dropdown-item {
 
background-color: rgba(0, 0, 0, .4);
  margin-bottom: 2px;
  color: white;
  display: block;
  width: 100%;
  padding: .25rem 1.5rem;
  clear: both;
  font-weight: 400;
  text-align: inherit;
  white-space: nowrap;

  border: 0;
  font-size: 15px;
}

.dropdown-menu.show {
  border: none;
}

.navbar-nav .dropdown-menu {
  position: absolute;
}
.dropdown{
  position:relative;
}


@media(max-width:576px) {
  .upper-bar .infos:first-child {
    margin-bottom: 0;
  }
}


`}
</style>
  </nav >
  )

    


}
  


CustomNavbar.getInitialProps = async ({ req }) => {


  const wordpressUrl = "https://limitless-shore-58551.herokuapp.com/wp-json";
  const menu = await axios.get(`${wordpressUrl}/menus/v1/menus/navbar`);
 
  console.log("menu:", menu)

  return { menu: menu.data}
  

}


export default  CustomNavbar;


                 