

const Footer =()=>(
    <footer className="footer">
      <div className="container">
        <div className="row">
         
           
          <div className="copyright-wrapper w-100 text-center">
            © 2020 S'design. All rights reserved.
          </div>
        </div>
      </div>
      <style jsx>
        {`
        *{
          box-sizing: border-box;
        }
        .footer {
         
         margin-bottom:0;
    background-color: black;
    color: #fff;
    padding: 20px;
  }

  .footer a {

    color: red;
  }

  .footer h3 {
    color: white;
    font-size:20px;
  }

  .footer .description-wrapper p {
   /* margin-bottom: 20px;*/
  }

  .footer .footer-nav-wrapper .nav-item {
    border-bottom: 1px solid #fff;

  }

  .footer .copyright-wrapper {
    padding: 20px 0 0;
  }
        `}
      </style>
    </footer>

)
export default Footer;