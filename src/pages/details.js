import Layout from "../components/layout";
import cover from "../images/cover.jpg";
const Detail =()=>(
<Layout>

<div className="realisation">
    <div className="container">
      <h2 className=" text-center"style={{marginTop:"100px"}}>Job’in – Pass pour l’Emploi</h2>
      
      <div className="row" style={{marginBottom: "30px" ,marginTop: "30px"}}>
        <div className="col-sm">
          <div className="card">

            <img  src={require('../images/jobin.jpg')} className="card-img-top" style= {{height:"300px"}}/>
            <div className="card-body">
              
              <a href="/realisation" className="card-link">Autre projet</a>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card">
            <img src={require('../images/jobin0.jpg')} className="card-img-top"  style= {{height:"300px"}}/>
            <div className="card-body">
              
              <a href="/realisation" className="card-link">Autre projet</a>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card">
            <img src={require('../images/jobin1.jpg')} className="card-img-top"   style= {{height:"300px"}}/>
            <div className="card-body">
              
              <a href="/realisation" className="card-link">Autre projet</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row"style={{marginBottom: "30px" ,marginTop: "30px"}}>
        <div className="col-sm">
          <div className="card">

            <img src={require('../images/jobin2.jpg')} className="card-img-top"  style= {{height:"300px"}}/>
            <div className="card-body">
              
              <a href="/realisation" className="card-link">Autre projet</a>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card">
            <img src={require('../images/jobin3.jpg')} className="card-img-top"  style= {{height:"300px"}}/>
            <div className="card-body">
              
              <a href="/realisation" className="card-link">Autre projet</a>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card">
            <img src={require('../images/jobin4.jpg')} className="card-img-top" style= {{height:"300px"}}/>
            <div className="card-body">
              
              <a href="/realisation" className="card-link">Autre projet</a>
            </div>
          </div>
        </div>
        
      </div>


    </div>

</div>
  

    <style jsx>
        {`
        .realisation{
    margin-top: 120px;
}
  

  ul.nav.nav-tabs {
    margin-top: 120px;
  }

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

    height: 400px;
  }

  .cover {
    
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
 
    background-size: cover;
    background-image: url(${cover});

  }

  .cover h1 {
    margin-bottom: 100px;
    font-weight: 900;
    font-size: 60px;


    color: rgb(23, 22, 23);
  }

  .cover h1 span {
    font-size: 60px;
    color: rgb(226, 41, 38);
  }

  .cover p {
   
    font-size: 24px;
    font-weight: 900;

  }

  .cover i.fa-long-arrow-alt-down{
    
    margin-top: 80px;
     font-size: 100px !important;
 
   }
   .realisation  h2{
     margin-top: 50px;
   }
   
   
        `}
    </style>
</Layout>



 )
 export default Detail;