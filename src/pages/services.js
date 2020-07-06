import React, { useState, useEffect } from 'react';
import Layout from "../components/layout";
import axios from 'axios';

const Services = (props) => {

  const [services, setServices] = useState([]);

  console.log("rere", services)
  return (

    <Layout>

      <div className="nos-services " id="service">
        <div className="container-fluid">

          <h1 className="text-center" style={{ marginBottom: "40px", color: "red", fontSize: "30px" }}>{props.services.title.rendered}</h1>

          {props.services.acf.service.length ? (
            <React.Fragment>

              {props.services.acf.service.map((service, index) => 
                {
                  if (index %2 == 0) {
                  return ( <div className="row" key={index} >
                       <div className="col-md-6 image">
                         <img src={service.img_de_service.url} />
                       </div>
                       <div className="col-md-6 description text-center one" style={{ backgroundColor: "#EE2F2B", color: "white" }}>
                         <h4 className="h1">{service.titre_de_service}</h4>
                         <p>{service.description_de_service}</p>
                       </div>
                     </div>)
                   } else {
                     return (<div className="row">
                     <div className="col-md-6 description text-center two">
                       <h4 className="h1">{service.titre_de_service}</h4>
                       <p>{service.description_de_service}</p>
                     </div>
                     <div className="col-md-6 image" id="conception">
                       <img src={service.img_de_service.url} />
                     </div>
                   </div>)
   
                   }
                  }

              )}

            </React.Fragment>
          ) : " "}


        </div>
      </div>

      <style jsx>
        {`

    .nos-services {
    margin-top: 160px;
  }

  .nos-services .description {
    background-color: #F2F2F2;
  }

  .nos-services .image {
    margin: 0;
    padding: 0;
  }

  .nos-services img {
    width: 100%;
    max-height: 350px;

  }

  .nos-services .col-md-6 {
    padding: 0;
  }

  .nos-services .h1 {
    margin: 20px;
    font-size:30px;

  }

  .nos-services p {
    padding-left: 20px;
    padding-right: 20px;
    text-align: left;
    margin: 20px;
    line-height: 1.2;
    font-size: 16px;

  }
    `}
      </style>
    </Layout>
  );
}


Services.getInitialProps = async ({ req }) => {

  const wordpressUrl = "https://limitless-shore-58551.herokuapp.com/wp-json";
  const services = await axios.get(`${wordpressUrl}/wp/v2/pages?slug=services`);
  console.log("slug", services.data[0].title.rendered)
  console.log("our services", services)

  return { services: services.data[0] }

}

export default Services;

/*import Layout from "../components/layout";
const Services =()=>(
    <Layout>

    <div className="nos-services "id="service">
    <div className="container-fluid">
      <h1 className="text-center" style={{marginBottom : "40px", color:"red",fontSize:"30px"}}>NOS SERVICES</h1>
      <div className="row">
        <div className="col-md-6 image">
          <img   src={require('../images/etude.jpg')}   />
        </div>
        <div className="col-md-6 description text-center one" style={{backgroundColor: "#EE2F2B",color: "white"}}>
          <h4 className="h1">Etude de projet</h4>
          <p>Notre agence prend en charge l'étude de votre demande et de vos besoins en terme d'espace ephémère pour
            toutes events auquels vous programmez participer, Nous étudions l'aspect technique, financier, artistique,
            de marketing, de faisabilité, ainsi que le planning et un calendrier de réalisation.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 description text-center two">
          <h4 className="h1">Conception et aménagement des espaces évènnementiels</h4>
          <p>Conception et aménagement des espaces évènnementiels Notre équipe, composée d'architectes et de graphistes,
            met à votre disposition son savoir-faire afin de déssiner et transformer vos idées en images et en espaces.
            Il vous propose des nouvelles configurations spatiales à travers ses recherches en créant et en modelant les
            anciennes installations. Cette approche permet d'attribuer un nouveau look répondant à un besoin continue de
            changement de l'image promotionnelle de votre stand.</p>
        </div>
        <div className="col-md-6 image" id="conception">
          <img src=  {require('../images/conception.jpg')}/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 image ">
          <img  id='fabrication' src= {require('../images/fabrication.jpg')}/>
        </div>
        <div className="col-md-6 description text-center three" id="fabrication" style={{backgroundColor: "#EE2F2B",color: "white"}}>
          <h4 className="h1">Fabrication de stand sur mesure</h4>
          <p>Fabrication de stand sur mesure C'est la phase la plus importante du processus du développement d'un projet
            de stand qui nous permet de passer du virtuel au concrêt. Nos partenaires spécialisés; menuisiers,
            fourgerons, peintres, fournisseurs de matériaux et notre réseaux de sous-traitants de proximité sont les
            facteurs de concrétisation de votre stand. Nos architectes surveillent, controlent et coordinent entre ces
            différents corps de métiers afin de garantir une qualité supérieure à notre prestation.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 description text-center four" id="location">
          <h4 className="h1">Location de stand modulaire</h4>
          <p>La location de stand modulaire devient de plus en plus une tendance commerciale et une approche financière
            et de marketing adoptées par la plus part des sociétés qui: - n'est pas sûr du nombre de foires et
            d'évènements auquels vont participés sur un moyen et un long terme; - veulent se démarquer, dans chaque
            event, par une image visuelle différente de celle précédente; une liberté de graphisme et de modélisation de
            l'espace dans toute apparition futures - cherchent zéro engagement d'achat qui nécessite une connaissance et
            une maîtrise du produit, un montage et démontage à chaque expositions, mise à part le stockage et
            l'entretien.</p>
        </div>
        <div className="col-md-6 image">
          <img src= {require('../images/location.jpg')}/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 image">
          <img src= {require('../images/service-annexe.jpg')} id="serv"/>
        </div>
        <div className="col-md-6 description text-center five"  style={{backgroundColor: "#EE2F2B",color: "white"}}>
          <h4 className="h1">
            Services annexes pour events</h4>
          <p>Acceuil ( hôte et hôtesse) , photo- vidéo, visites virtuelles</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 description text-center six" id="logistique">
          <h4 className="h1">Logistique</h4>
          <p>Nous savons que vous n'avez pas toujours la possibilité de stocker et d'entretien de vos équipements
            d'event. Nous mettons à votre dispositions des espaces de stockage surveillé avec un plus qui est la
            maintenance pour une future réutilisation et acheminement vers le prochain site d'exposition avec toujours
            le service de montage / démontage et stockage de nouveau. Notre équipe logistique se charge de transporter
            et d'installer votre stand. Cette étape est crusciale et se fait en présence du chef du projet qui veille au
            bon déroulement du montage.</p>
        </div>
        <div className="col-md-6 image">
          <img src={require('../images/logistique.jpg')}/>
        </div>
      </div>

    </div>

  </div>

<style jsx>
    {`

    .nos-services {
    margin-top: 160px;
  }

  .nos-services .description {
    background-color: #F2F2F2;
  }

  .nos-services .image {
    margin: 0;
    padding: 0;
  }

  .nos-services img {
    width: 100%;
    max-height: 350px;

  }

  .nos-services .col-md-6 {
    padding: 0;
  }

  .nos-services .h1 {
    margin: 20px;
    font-size:30px;

  }

  .nos-services p {
    padding-left: 20px;
    padding-right: 20px;
    text-align: left;
    margin: 20px;
    line-height: 1.2;
    font-size: 16px;

  }
    `}
</style>
    </Layout>
)
export default Services;*/

/*<div className="row"key={index} >
                  <div className="col-md-6 image">
                    <img src={service.img_de_service.url} />
                  </div>
                  <div className="col-md-6 description text-center one" style={{ backgroundColor: "#EE2F2B", color: "white" }}>
                   <h4 className="h1">{service.titre_de_service}</h4>
                   <p>{service.description_de_service}</p>
                  </div>
                </div> */
/* if (index %2 === 0) {
                  
                 ( <div className="row" key={index} >
                    <div className="col-md-6 image">
                      <img src={service.img_de_service.url} />
                    </div>
                    <div className="col-md-6 description text-center one" style={{ backgroundColor: "#EE2F2B", color: "white" }}>
                      <h4 className="h1">{service.titre_de_service}</h4>
                      <p>{service.description_de_service}</p>
                    </div>
                  </div>)
                } else {
                  (<div className="row">
                  <div className="col-md-6 description text-center two">
                    <h4 className="h1">{service.titre_de_service}</h4>
                    <p>{service.description_de_service}</p>
                  </div>
                  <div className="col-md-6 image" id="conception">
                    <img src={service.img_de_service.url} />
                  </div>
                </div>)

                } */