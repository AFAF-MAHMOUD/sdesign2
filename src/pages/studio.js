import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from "../components/layout";
const Studio = (props) =>{
  const [studio, setStudio] = useState([]);
  return(
    <Layout>
    <div className="section-padding section-found-your-future " id="studio">
      <div className="container text-center" >
        <div className="row text-center">
          <div className="col-md-12 text-center">
            <div className="qui-sommes-nous" id="qui-sommes-nous" style={{ marginTop: "40px" }}>
              <h3 style={{ marginTop: "130px" }} >{props.studio.acf.Qui_sommes_nous} </h3>
              <p >{props.studio.acf.description} </p>
            </div>
          </div>
        </div>
        <div className="notre-equipe text-center " id="notre-equipe"  >
          <h3 className="text-center">{props.studio.acf.notre_equipe}</h3>


          <div className="row text-center ">
            {props.studio.acf.membre_dequipe ?(
               <React.Fragment>
                 {props.studio.acf.membre_dequipe.map((membre,index)=>(
                  <div className="card" key={index}>
                  <img src={membre.img_de_membre.url} />
                  <div className="container">
                 <h4>{membre.nom_de_membre}</h4>
                 <div className="title">{membre.poste_de_membre}</div>
                  </div>
                </div>
                 ))}
               </React.Fragment>
            ):""}
            
            
           
           
          </div>
        </div>
      </div>
    </div>
    <style jsx>
      {`
*{
  box-sizing: border-box;
    font-size: 12px;
  }
  
  
 .navbar{
     margin-top:0px !important;
 }                 
  .section-padding {
    padding: 50px;
    margin-top: 12px;
  }

  .section-padding img {
    max-width: 100%;
    height: 500px;

  }
  .section-padding  h3{
    font-size: 25px;
  }
  .section-padding .col-md-12 {
    padding: 0;
    margin:5px;
  }

 

  .section-padding .h1 {
    margin: 16px;
  }

  .section-padding p {
    margin: 20px 200px;
    line-height: 1.8;
    font-size: 12px;
    text-align: justify;
    margin-bottom:100px;
  }

  .section-padding span {
    font-weight: bold;
    font-style: italic;
  }
  
  /*our team style*/
  html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.column {
 
  float: left;
  width: 50%;

  margin-bottom: 20px;
  padding: 20px 20px;
}

@media screen and (max-width: 650px) {
  .column {
    
    display: block;
  }
}

.card {
  padding-bottom: 50px;
  width: 500px;
 height: 400px;
  margin: 20px auto;
 
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.card img{
  margin: 40px auto;
  width: 200px;
 height: 200px;
 border-radius:10px;

  
 
}
.container {
  padding: 0 16px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}


 
`}
    </style>
  </Layout>
  )
  
}

Studio.getInitialProps = async ({ req }) => {

  const wordpressUrl = "https://limitless-shore-58551.herokuapp.com/wp-json";
  const studio = await axios.get(`${wordpressUrl}/wp/v2/pages?slug=studio`);
  console.log("slug",  studio.data[0].title.rendered)
  console.log("studio:", studio)

  return { studio: studio.data[0] }

}
export default Studio;
