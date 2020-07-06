import CustomLayout from "../components/CustomLayout.js";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jobin from "../images/jobin.jpg";
import phonac from "../images/phonac.jpg";
import mubawab from "../images/mubawab.jpg";
import defile3d from "../images/3ddefilé.jpg";


const Index = (props) => {
  const [home, setHome] = useState([]);
  return (
    <CustomLayout>

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
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>

        </ol>

        <div className="carousel-inner" role="listbox">
          <div className="carousel-item  active" style={{
            backgroundImage: "url(" + `${require("../images/camera7.jpg")}` + ")"
          }} >

          </div>

          {props.home.acf.slider ? (
            <React.Fragment>
              {props.home.acf.slider.map((slid, index) => (
                <div key={index} className="carousel-item " style={{
                  backgroundImage: "url(" + `${slid.image_slider.url}` + ")"
                }} >

                </div>))}

            </React.Fragment>
          ) : " "}



        </div>




        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      {props.home.acf.domaine ? (
        <React.Fragment>
          {props.home.acf.domaine.map((section, index) => (

            <section className="section-padding section-found-your-future text-center" id="domaine-intervention">

              <div className="container">
                <h2 className="section-title">{section.titre_de_domaine}</h2>

                <div className="path-style">
                  <p>
                    {section.description_de_domaine}
                  </p>


                </div>
              </div>
              <div className="parallax" style={{
                backgroundImage: `url( ${section.image_de_domaine.url} )`
              }} > </div>
            </section>

          ))}

        </React.Fragment>
      ) : " "}









      <h2 className="nosclient-title">{props.home.acf.nos_client}</h2>
      <div className="nos-client">

        <div className="carousel slide" data-ride="carousel">

          <div className="carousel-inner">

            <div className="container">

              <div className="carousel-item active">
                {props.home.acf.nos_clients ? (
                  <div className="row">
                    {props.home.acf.nos_clients.map((clt, index) => (
                      <div className="col-sm"><img src={clt.logo_de_client.url} />
                      </div>
                    )
                    )}
                  </div>
                ) : ""} 
                </div>
                <div className="carousel-item ">
                {props.home.acf.nos_clients? (
                  <div className="row">
                    {props.home.acf.nos_clients.map((clt, index) => (
                      <div className="col-sm"><img src={clt.logo_de_client.url} />
                      </div>
                    )
                    )}
                  </div>
                ) : ""} 
                </div>
            </div>
          </div>
        </div>

      </div>
      <style jsx>
        {`
    .upper-bar .infos {
    position: absolute;
    margin: 15px 0;
    top: -60px;
    right: 100px;
  }

   .upper-bar {
    align-items: center;
  }

  .upper-bar .icons i {
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

            *{
                box-sizing: border-box;
            }
  .carousel {
    z-index: 1;
    padding-top: 0;
  }
  .carousel-item {

    height: 100vh;
    min-height: 350px;
    background: no-repeat center center scroll;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

  }
  .section-padding .section-title {
    margin-top: 30px;
    margin-bottom: 30px;
    font-family: bukralight;
    color: red;
    text-transform: uppercase;
    font-size: xx-large;
  }

  .section-padding p {
    margin: 20px 200px;
    font-size: 15px;
    line-height: 1.5;
    font-family: bukralight;
    padding-bottom: 30px;
    text-align: justify;

  }
  .parallax{
    min-height: 400px;
   background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .nosclient-title{
    margin-top: 30px;
    margin-bottom: 30px;
    font-family: bukralight;
    color: red;
    text-transform: uppercase;
    font-size: 25px;
    text-align: center;
  }
.nos-client .carousel .carousel-inner{
text-align: center;
    height: 250px;
}
.carousel .carousel-inner .carousel-item img{
    margin-top: 60px;
    height: 150px;
    border:1px solid red;
    width: 150px;
    border-radius: 50%;
  
}
         `}

      </style>

    </CustomLayout >
  )

}
Index.getInitialProps = async ({ req }) => {

  const wordpressUrl = "https://limitless-shore-58551.herokuapp.com/wp-json";
  const home = await axios.get(`${wordpressUrl}/wp/v2/pages?slug=home`);
  console.log("slug", home.data[0].title.rendered)
  console.log("our data home", home)

  return { home: home.data[0] }

}
export default Index;