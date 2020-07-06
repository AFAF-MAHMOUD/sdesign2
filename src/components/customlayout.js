import  CustomNavbar from './customnav.js';
import Footer from "./footer";
import Head from 'next/head';

const CustomLayout = (props) => (
    <div>
        <Head>

            <meta charset="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />


            <title>S'Design</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"></link>
            <link rel="stylesheet" href="index.css" />
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4"
                crossOrigin="anonymous"></script>
            <script type="text/javascript" src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
            <script src="assets/js/script.min.js"></script>
            <script src="./clientlogo.js"></script>
          
            <script src="https://kit.fontawesome.com/a076d05399.js"></script>
            <script src="https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyAkADq7R0xf6ami9YirAM1N-yl7hdnYBhM "></script>

            

        </Head>

        < CustomNavbar />








        {props.children}
        
        <Footer />
        <style jsx>
            {`
    
  * {
    font-size: 12px;
  }

    `}
        </style>
    </div>

)
export default CustomLayout;