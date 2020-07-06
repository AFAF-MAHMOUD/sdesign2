import renderHTML from "react-render-html";
import Layout from "../components/layout";
import cover from "../images/cover.jpg";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from "next/Link";
const Realisation = (props) => {
  const [realisation, setRealisation] = useState([]);
  return (
    <Layout>


      <div className="cover text-center">
        <div>

          <h1> {props.realisation.acf.grand_titre}</h1>
          <p>{props.realisation.acf.mini_titre}</p>
          <i className="fa fa-long-arrow-down" aria-hidden="true"></i>
        </div>
      </div>

      <div className="realisation">
        <div className="container">
          <h2 className=" text-center" style={{ fontSize: "24px" }}>{props.realisation.acf.titre_nos_realisations}</h2>
          
          <div className="row" style={{ marginBttom: "30px", marginTop: "30px" }}>
          {props.realisation.acf.nos_realisations? (
            <React.Fragment>
                  {props.realisation.acf.nos_realisations.map((realisation ,index)=>(
                    <Link href="/details">
                    <div className="col-sm-4">
                      <div className="card">
      
                        <img src={realisation.image_de_realisation.url} className="card-img-top" style={{ height: "300px" }} />
                        <div className="card-body">
                           <h4 className="card-title" style={{ fontSize: "18px" }}>{realisation.titre}</h4>
                          <h6 className="card-subtitle mb-2 text-muted">{realisation.date_de_realisation}</h6>
                          <p className="card-text">{realisation.description_de_realisation_}
                                                                                             </p>
                        <a href={realisation.link_see_more} className="card-link">{props.realisation.acf.voir_plus}</a>
                        </div>
      
                      </div>
      
                    </div>
                  </Link>
                  )
                  )}
            </React.Fragment>
            
          ) : " "}
           
           
            


           
            

          </div>

        </div>


      </div>

      <style jsx>
        {`
      
      .tab-content {
  height: 600px;
  text-align: center;
}

.tab-content img {
  width: 40%;
  padding: 5px;

  border-radius: 5px;
  border: 1px gray solid;
  margin: 10px auto;

  height:600px;
}

.cover {
  
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background-size: cover;
  background-image:  url(${cover});

}

.cover h1 {
  margin-bottom: 50px;
  font-weight: 900;
  font-size: 60px;
  color: rgb(23, 22, 23);
  margin-top: 155px;
}
.cover h1 span {
  font-size: 60px;
  color: rgb(226, 41, 38);
}

.cover p {
 
  font-size: 24px;
  font-weight: 900;

}

.cover i.fa-long-arrow-down{
  
  margin-top: 80px;
   font-size: 100px !important;

 }
 .realisation  h2{
   margin-top: 50px;
 }
 .col-sm-4{
   margin-bottom:10px;
 }

      `}
      </style>
    </Layout>
  )
}
Realisation.getInitialProps = async ({ req }) => {

  const wordpressUrl = "https://limitless-shore-58551.herokuapp.com/wp-json";
  const realisation = await axios.get(`${wordpressUrl}/wp/v2/pages?slug=realisation`);
  console.log("slug", realisation.data[0].title.rendered)
  console.log("our datarealisation", realisation)

  return { realisation: realisation.data[0] }
}
export default Realisation;