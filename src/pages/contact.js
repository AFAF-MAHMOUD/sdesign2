import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Layout from "../components/layout";
const Contact = (props) =>{
    const [contact, setContact] = useState([]);
    return(
        <Layout>
        <div id="wrapper">

            <div classNameName="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-hidden="true" style={{display: "none"}}>
                <div classNameName="modal-dialog">
                    <div className="modal-content">

                        <div id="div-forms">
                            <form id="login-form">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span className="flaticon-add" aria-hidden="true"></span>
                                </button>
                                <div className="modal-body">
                                    <input className="form-control" type="text" placeholder="What you are looking for?" required/>
                                 </div>
                             </form>
                         </div>
                    </div>
                </div>
            </div>
            <section className="section gb nopadtop">
            <div className="container">
                <div className="boxed boxedp4">

                    <div id="map" className="wow slideInUp"></div>

                    <div className="row contactv2 text-center">
                        <div className="col-md-4">
                            <div className="small-box">
                            <i className="fa fa-envelope-open-o" aria-hidden="true"></i>
    <h4>{props.contact.acf.title}</h4>
                                <small>{props.contact.acf.telephone_label} {props.contact.acf.tel_num}</small>
                                <small>{props.contact.acf.fax_label} {props.contact.acf.fax_num}</small>
                                <p><a href="mail:to">{props.contact.acf.siteweb}</a></p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="small-box">
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                                <h4>{props.contact.acf.titre}</h4>
                                <small>{props.contact.acf.adress}</small>
                                
                                <p><a href="#">{props.contact.acf.link}</a></p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="small-box">
                            <i className="fa fa-share-alt" aria-hidden="true"></i>
                                <h4>{props.contact.acf.be_socialbe}</h4>
                                <small>{props.contact.acf.twitter_label} {props.contact.acf.twitter_compte}</small>
                                <small>{props.contact.acf.facebook_label}{props.contact.acf.facebook_compte}</small>
                                <p><a href="#">{props.contact.acf.courriel}</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 form">
                            <div className="section-title ">
                                <h3>{props.contact.acf.form}</h3>
                                
                            </div>
                            
                            <form className="big-contact-form" role="search">
                                <input type="text" className="form-control" placeholder={props.contact.acf.nom}/>
                                <input type="email" className="form-control" placeholder={props.contact.acf.email}/>
                                <input type="text" className="form-control" placeholder={props.contact.acf.phone}/>
                                <input type="text" className="form-control" placeholder={props.contact.acf.sujet}/>
                                <textarea className="form-control" placeholder={props.contact.acf.message}></textarea>
                                <button type="submit" className="btn btn-primary">{props.contact.acf.bouton}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>


      

   
       


      <style jsx>
          {`
          body{
        background-color: transparent !important;
      }
      *{
        font-size: 12px;
      }  
     
 .section.gb{
    background-color: transparent !important;
  }
  .section.gb i{
    font-size: 40px;
    color: red;
  }   
  .section.gb button{
    background-color: red;
    color: white !important;
  }
  .boxed.boxedp4 {
    margin-top: 195px;
}
      .form{
        text-align: center;
        margin: auto;
      }




/******************************************
IMPORT
******************************************/

@font-face {
    font-family: "Flaticon";
    src: url("fonts/Flaticon.eot");
    src: url("fonts/Flaticon.eot?#iefix") format("embedded-opentype"),
     url("fonts/Flaticon.woff") format("woff"), 
     url("fonts/Flaticon.ttf") format("truetype"),
      url("fonts/Flaticon.svg#Flaticon") format("svg");
    font-weight: normal;
    font-style: normal;
}

@media screen and (-webkit-min-device-pixel-ratio:0) {
    @font-face {
        font-family: "Flaticon";
        src: url("fonts/Flaticon.svg#Flaticon") format("svg");
    }
}

[class^="flaticon-"]:before,
[class*=" flaticon-"]:before,
[class^="flaticon-"]:after,
[class*=" flaticon-"]:after {
    font-family: Flaticon;
    font-style: normal;
}

.flaticon-email:before {
    content: "\f100";
}

.flaticon-map-with-position-marker:before {
    content: "\f101";
}

.flaticon-share:before {
    content: "\f102";
}

.flaticon-html5:before {
    content: "\f103";
}

.flaticon-black-graduation-cap-tool-of-university-student-for-head:before {
    content: "\f104";
}

.flaticon-computer-tool-for-education:before {
    content: "\f105";
}

.flaticon-download-business-statistics-symbol-of-a-graphic:before {
    content: "\f106";
}

.flaticon-arrows:before {
    content: "\f107";
}

.flaticon-monitor-tablet-and-smartohone:before {
    content: "\f108";
}

.flaticon-css-3:before {
    content: "\f109";
}

.flaticon-online-course:before {
    content: "\f10a";
}

.flaticon-coffee-cup:before {
    content: "\f10b";
}

.flaticon-add:before {
    content: "\f10c";
}

.flaticon-html-coding:before {
    content: "\f10d";
}


/******************************************
SKELETON
******************************************/

body {
    background-color: #f6f6f6;
    line-height: 1.6;
    font-size: 16px;
    color: #a2a2a2;
}

body,
p,
li,
a {
    font-family: 'Roboto', sans-serif;
}

.course-details h4 a,
.readmore,
.testimonial strong,
h1,
h2,
h3,
h4,
h5,
h6 {
    color: #000;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    line-height: 1.5;
}

.cop-logo img,
a {
    color: #000;
    text-decoration: none !important;
    -webkit-transition: all ease 0.3s;
    -moz-transition: all ease 0.3s;
    transition: all ease 0.3s;
}

.check li:before {
    content: "\f00c";
    font-family: "FontAwesome";
    font-size: 16px;
    left: 0;
    padding-right: 10px;
    position: relative;
    top: 2px;
}

.check li {
    list-style: none;
    margin-bottom: 8px;
}

.check li:last-child {
    margin-bottom: 0;
}

.check {
    margin-left: 0;
    padding-left: 0
}

.check li a {}

.authorbox,
blockquote {
    border: 0;
    margin: 30px 0;
    position: relative;
    padding: 4rem 3rem;
    font-family: 'Droid Serif', sans-serif;
    font-style: italic;
    border: 1px solid #eaeaea;
    background-color: #f6f6f6;
}

blockquote:after {
    content: "\f10e";
    padding: 5px;
    font-family: FontAwesome;
    position: absolute;
    bottom: 0px;
    color: #f6f6f6;
    font-size: 24px;
    right: 10px;
}

blockquote:before {
    content: "\f10d";
    padding: 5px;
    font-family: FontAwesome;
    position: absolute;
    top: 0;
    color: #f6f6f6;
    font-size: 24px;
    left: 10px;
}


/******************************************
HEADER
******************************************/

.topbar {
    background-color: #000;
    margin-bottom: 30px;
    padding: 12px 0 14px;
}

.topbar a,
.topbar p {
    color: #fff;
    font-size: 14px;
    margin: 0;
}

.topbar .text-left p {
    margin-top: 3px;
}

.topbar .text-left i {
    padding-right: 3px;
}

.header {
    position: absolute;
    z-index: 111;
    left: 0;
    top: 0;
    right: 0;
    padding: 0;
    background-color: transparent;
    text-decoration: none !important;
    -webkit-transition: all .3s ease-in-out;
    -moz-transition: all .3s ease-in-out;
    -ms-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
}

.header.without-topbar {
    padding: 30px 0;
}

.header-normal {
    position: relative;
    padding: 0 0 24px;
    background-color: #fff;
}

.header-normal .navbar-default .nav>li>a {
    color: #848484 !important;
}

.header.affix {
    position: fixed;
    top: 0;
    z-index: 100;
    background-color: #000;
    left: 0;
    padding: 15px 0;
    right: 0,
}

.header.header-normal.affix {
    background-color: #ffffff;
}

.header.affix .topbar {
    visibility: hidden;
    opacity: 0;
    display: none;
}

.navbar-default {
    margin: 0;
    background-color: transparent;
    background: none;
    border: 0;
}

.navbar-default .nav>li>a {
    color: #fff !important;
    text-transform: capitalize;
    font-size: 15px;
    font-weight: 500;
    outline: none;
}

.navbar-nav .has-submenu .dropdown-menu li a {
    padding: 14px 20px;
}

.navbar-default .dropdown-menu {
    box-shadow: none;
}

.navbar-default .dropdown-menu li a {
    color: #222;
    font-size: 14px;
}

.navbar-default .fa-angle-right {
    position: absolute;
    right: 30px;
}

.navbar-brand img {
    margin: 0 !important;
}

.social a {
    font-size: 12px;
    color: #fff !important;
    display: inline-block;
    background-color: rgba(255, 255, 255, 0.1);
    width: 25px;
    text-align: center;
    border-radius: 1px;
    margin-left: 2px;
    height: 25px;
    line-height: 25px;
}

.social a:hover {
    opacity: 0.8;
}

.navbar-default .navbar-nav .open .dropdown-menu>li>a,
.navbar-default .navbar-nav>.open>a,
.navbar-default .navbar-nav>.open>a:hover,
.navbar-default .navbar-nav>.open>a:focus {
    background-color: transparent !important;
}

.navbar-brand {
    padding: 0 10px 0 0;
}

.social a.facebook {
    background-color: #3b5998;
}

.social a.pinterest {
    background-color: #bd081c;
}

.social a.twitter {
    background-color: #1da1f2;
}

.social a.google {
    background-color: #34a853;
}

.social a.linkedin {
    background-color: #0077b5;
}

.modal {
    top: 40%;
    margin: -20px auto;
}

.modal-backdrop.in {
    opacity: 1;
    background: url(images/pattern.png) repeat center center rgba(0, 0, 0, 1);
}

.modal-header {
    border-bottom: 0;
    padding: 15px;
    background: none;
}

.modal-content {
    background-clip: padding-box;
    background-color: transparent;
    border: 0;
    border-radius: 6px;
    box-shadow: none !important;
    outline: 0 none;
    position: relative;
}

.modal .close {
    font-size: 13px;
    height: 40px;
    padding: 0;
    position: absolute;
    right: 14px;
    top: 27px;
    width: 40px;
    z-index: 111;
    transform: rotate(315deg);
}

.close,
.close:focus,
.close:hover {
    color: #ffffff;
    opacity: 1;
    text-shadow: none;
}

.modal .form-control {
    background-color: transparent;
    background-image: none;
    border: 0;
    border-radius: 0;
    font-family: 'Droid Serif', sans-serif;
    box-shadow: none;
    color: #555;
    display: block;
    font-size: 16px;
    line-height: 1.42857;
    font-style: italic;
    padding: 6px 12px;
    width: 100%;
    border-bottom: 4px solid #222;
    height: 70px;
    padding-left: 0;
}

.iconitem a {
    padding-left: 8px !important;
}


/******************************************
MEGA MENU
******************************************/

.yamm .nav,
.yamm .collapse,
.yamm .dropup,
.yamm .dropdown {
    position: static;
}

.yamm .dropdown.yamm-fw {
    position: static;
}

.yamm .container {
    position: relative;
}

.yamm .dropdown.yamm-fw .dropdown-menu {}

.yamm .dropdown {
    position: relative;
}

.hassubmenu .dropdown-menu,
.yamm .dropdown.yamm-fw.yamm-half .dropdown-menu {
    left: auto;
    right: auto;
}

.yamm h4 {
    font-size: 16px;
    padding-top: 0;
    margin-top: 0;
    margin-bottom: 20px;
}

.yamm .dropdown-menu ul {
    padding: 0 !important;
    list-style: none;
}

.yamm .dropdown-menu li {
    padding: 0px;
    margin: 10px 0;
}

.yamm .dropdown-menu li a {
    padding: 0 !important;
    color: #848484;
}

.yamm .dropdown-menu li:hover a {
    padding-left: 10px !important;
    background-color: transparent;
}

.yamm-fw .dropdown-menu li:hover a {
    padding-left: 0 !important;
}

.yamm .dropdown .dropdown-menu {
    border-radius: 0;
    margin-top: 30px;
    min-width: 200px;
}

.yamm .dropdown .dropdown-menu {
    border-radius: 0;
    border-top: 3px solid #ddd;
    background-color: #fff !important;
    margin-top: 24px;
    padding: 20px 30px;
}

.header.affix .yamm .dropdown .dropdown-menu {
    margin-top: 15px !important;
}

.yamm .dropdown .dropdown-menu .show-left {
    margin-top: 0
}

.yamm ul {
    padding: 0;
}

.menu-widget {
    padding: 0 10px;
}

.menu-widget img {
    border-radius: 6px 6px 0 0;
}

.menu-widget small {
    display: block;
    font-size: 16px;
    font-weight: bold;
}

.menu-widget h5,
.menu-widget h5 a {
    font-size: 16px !important;
    font-weight: 700;
    margin: 0 !important;
    padding: 10px 0 5px !important;
    color: #000 !important;
}

.yamm .dropdown-menu li:hover .menu-button,
.yamm .dropdown-menu li .menu-button {
    border-radius: 0 !important;
    font-size: 13px !important;
    border: 1px solid #fff;
    font-weight: bold;
    color: #ffffff !important;
    display: block;
    background-color: #111;
    padding: 5px 20px !important;
    max-width: 140px;
    margin: 10px auto 0;
    text-transform: capitalize;
}


/******************************************
PAGES
******************************************/

.page-title h3 {
    margin-bottom: 10px !important;
}

.breadcrumb {
    background-color: transparent;
    border-radius: 0;
    color: #aaa;
    font-size: 13px;
    list-style: outside none none;
    margin-bottom: 0;
    padding: 0;
}

.breadcrumb>li a,
.breadcrumb>li+li::before,
.breadcrumb>.active {
    color: #aaa;
}

.section.cb .breadcrumb>li a,
.section.cb .breadcrumb>li+li::before,
.section.cb .breadcrumb>.active {
    color: #fff;
}

.section.cb {
    padding: 40px 0 !important;
}

.section.cb .breadcrumb {
    margin-top: 10px;
}

.section.cb h3 {
    font-size: 24px;
    padding: 0 !important;
    margin: 0 !important;
}

.breadcrumb>li+li::before {
    content: "\f107";
    vertical-align: middle;
    padding-left: 5px;
    font-family: "Flaticon";
    font-size: 11px;
    padding: 0 6px 0 3px;
}

.tags-widget a {
    color: #ffffff !important;
    padding: 4px 10px;
    border-radius: 2px;
    font-size: 14px;
}

.pagination>li:first-child>a,
.pagination>li:first-child>span,
.pagination>li:last-child>a,
.pagination>li:last-child>span {
    border-radius: 0;
}

.pagination {
    margin: 0;
}

.pager {
    margin: 0;
}

.pagination>li>a,
.pagination>li>span {
    background-color: #fff;
    border: 1px solid #eeeeee !important;
    color: #999;
    float: left;
    line-height: 1.42857;
    margin-left: 0;
    margin-right: 5px;
    padding: 8px 15px;
    position: relative;
    text-decoration: none;
}

.pager li>a,
.pager li>span {
    background-color: #2c2f33;
    border: 1px solid #2c2f33;
    color: #fff;
    float: none;
    line-height: 1.42857;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 11px;
    margin-right: 10px;
    margin-left: 0;
    border-radius: 0;
    padding: 8px 15px;
    display: inline-block;
    position: relative;
    text-decoration: none;
}

.pager i {
    font-size: 13px;
    vertical-align: baseline;
}


/******************************************
EVENTS
******************************************/

.event-title.tagline-message h3 {
    font-size: 64px;
}

.event-title p {
    font-size: 18px;
    padding: 10px 0 20px;
}

.event-boxes .box {
    padding: 10px;
}

.event-desc {
    padding: 20px 20px 10px;
}

.box .event-desc h4 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 15px;
    padding: 0;
}

.box .event-desc small {
    background-color: #111;
    color: #ffffff;
    padding: 0 10px;
}

.teammembers img {
    width: 100%;
}

.teammembers:hover {
    cursor: pointer;
}

teammembers .magnifier {
    overflow: hidden;
}

.teammembers .magnifier p {
    padding-bottom: 10px;
}

.teammembers:hover .magnifier,
.entry:hover .magnifier {
    zoom: 1;
    filter: alpha(opacity=100);
    opacity: 1;
}

.teammembers {
    overflow: hidden;
    position: relative;
}

.visible-buttons1 {
    visibility: hidden;
    margin: 0 auto;
    opacity: 0;
    position: absolute;
    text-align: center;
    -webkit-transition: all 0.7s ease 0s;
    -moz-transition: all 0.7s ease 0s;
    -ms-transition: all 0.7s ease 0s;
    -o-transition: all 0.7s ease 0s;
    transition: all 0.7s ease 0s;
    bottom: -50%;
    left: 0;
    right: 0;
    padding: 50px 20px 40px;
    position: absolute;
    text-align: center;
}

.visible-buttons1 h4 {
    padding: 0;
    margin: 0;
    font-size: 18px;
}

.teammembers .magnifier {
    left: 0 !important;
    bottom: 0 !important;
    right: 0 !important;
    top: 0 !important;
}

.entry:hover .visible-buttons1 {
    opacity: 1;
    bottom: 0;
    visibility: visible;
}

.teambuttons p {
    color: #ffffff;
    padding: 0 30px 10px;
}

.teammembers .social-links i {
    color: #ffffff;
}

.teammembers .social-links a {
    color: #ffffff;
    display: inline-block;
    position: relative;
    width: 30px;
    font-size: 20px;
}

.teamdesc {
    border: 1px solid #eee;
    padding: 30px 30px;
}

.teamdesc h4 {
    padding: 0;
    margin: 0 0 5px;
    font-weight: 700;
    font-size: 18px;
}

.teamdesc p {
    display: block;
    font-style: italic;
    padding-bottom: 0;
    margin: 0;
}


/******************************************
CONTACT
******************************************/

.contactv2 {
    margin: 60px 0;
}

.small-box i {
    font-size: 54px;
    color: #232323;
    display: block;
}

.small-box h4 {
    font-weight: 600;
    font-size: 20px;
    margin: 20px 0;
    padding: 0;
    line-height: 1;
}

.small-box small {
    font-size: 18px;
    margin: 5px 0;
    display: block;
}

.small-box a {
    margin-top: 15px;
    display: block;
    text-decoration: underline !important;
    font-weight: 600;
    font-size: 16px;
}

.big-contact-form .form-control {
    margin-bottom: 10px;
    border-radius: 0;
    border-color: #eaeaea;
    height: 45px;
    box-shadow: none;
    color: #b9b9b9;
}

.big-contact-form textarea {
    height: 120px !important;
}

.big-contact-form .form-control::-moz-placeholder {
    color: #b9b9b9;
    opacity: 1;
}

.big-contact-form .form-control:-ms-input-placeholder {
    color: #b9b9b9;
}

.big-contact-form .form-control::-webkit-input-placeholder {
    color: #b9b9b9;
}

#map {
    height: 350px;
    position: relative;
    width: 100%;
    z-index: 1;
}

.mapv2 {
    padding: 10px;
    background-color: #f0f1f2;
    border: 1px solid #eee;
}

#map img {
    max-width: inherit;
}

.loader {
    margin-left: 10px;
}

.map {
    position: relative;
}

.map .row {
    position: relative;
}

.infobox img {
    width: 100% !important;
}

.map .searchmodule {
    padding: 18px 10px;
}

.infobox {
    display: block;
    margin: 0;
    padding: 0 0 10px;
    position: relative;
    width: 260px;
    z-index: 100;
}

.infobox .title {
    font-size: 13px;
    line-height: 1;
    margin-bottom: 0;
    margin-top: 15px;
    padding-bottom: 5px;
    text-transform: capitalize;
}


/******************************************
SECTIONS
******************************************/

.event-section {
    height: 100vh;
    height: 100%;
    padding: 30rem 0;
}

.parallax {
    background-attachment: fixed;
    background-position: 50% 0;
    background-repeat: no-repeat;
    height: 100%;
    position: relative;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

.parallax.parallax-off {
    background-attachment: scroll;
    display: block;
    height: 100%;
    min-height: 100%;
    overflow: hidden;
    position: relative;
    background-position: top center;
    vertical-align: sub;
    width: 100%;
    z-index: 2;
}

.no-scroll-xy {
    overflow: hidden !important;
    -webkit-transition: all .4s ease-in-out;
    -moz-transition: all .4s ease-in-out;
    -ms-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
}

.boxed {
    box-shadow: 0 30px 50px 0 rgba(1, 1, 1, 0.18);
    padding: 8rem 4rem 8rem;
    background-color: #ffffff;
    margin-top: -60px;
}

.boxed.boxedp4 {
    padding-top: 4rem;
}

.section {
    background-color: #ffffff;
    padding: 8rem 0;
    position: relative;
    display: block;
}

.section-title {
    margin-bottom: 45px;
}

.text-widget h3,
.section-title h3 {
    margin: 0 0 25px;
    padding: 0;
    line-height: 1;
    font-size: 30px;
    font-weight: 700;
}

.section-title p {
    max-width: 800px;
    margin: 0 auto;
    padding: 0;
    font-size: 16px;
    font-family: 'Droid Serif', sans-serif;
    font-style: italic;
}

.section.gb {
    background-color: #f6f6f6;
}

.section.db {
    background-color: #000000;
}

.overlay {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    background: url(images/pattern.png) repeat center center rgba(0, 0, 0, 0.7);
}

.video-section {
    position: relative;
}

.slider-bottom {
    position: absolute;
    bottom: 40px;
    left: 0;
    font-size: 10px;
    text-transform: uppercase;
    color: #ffffff;
    letter-spacing: 3px;
    z-index: 11;
    right: 0;
    margin: auto;
    text-align: center;
}

.slider-bottom i {
    display: block;
    font-size: 14px;
    padding: 10px;
}

.home-text-wrapper {
    display: table;
    width: 100%;
    height: 100%;
    max-width: 900px;
    position: relative;
    text-align: center;
    z-index: 11;
}

.home-content {
    position: relative;
}

.home-message {
    display: table-cell;
    height: 100%;
    vertical-align: middle;
}

.home-message p {
    font-size: 54px;
    color: #ffffff;
    padding: 0;
    margin: 0;
    font-weight: 700;
}

.home-message small {
    font-size: 16px;
    font-family: 'Droid Serif', sans-serif;
    font-style: italic;
    display: block;
    padding: 20px 0 35px;
    margin: 0;
}

.nopadtop {
    padding-top: 0 !important;
}

.box {
    background-color: #ffffff;
    padding: 4rem;
    position: relative;
    z-index: 11;
}

.box p {
    padding: 0;
    margin-bottom: 15px;
}

.box i {
    margin-bottom: 30px;
    display: inline-block;
    line-height: 1;
    font-size: 46px
}

.box h4 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
    padding: 0;
}

.m30 {
    margin-top: -60px;
}

.readmore {
    font-weight: 700;
    font-size: 15px;
}

.readmore:after {
    content: "\f107";
    vertical-align: middle;
    padding-left: 5px;
    font-family: "Flaticon";
    font-size: 11px;
}

.image-box {
    position: relative;
}

.image-box .overlay {
    background-image: none;
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0.2);
}

.image-box img {
    width: 100%;
}

.image-box h4 a,
.image-box h4 {
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    top: 50%;
    z-index: 1;
    font-size: 20px;
    margin: -7px auto;
    color: #ffffff;
}

hr.invis {
    border: 0;
    margin: 30px 0;
}


/******************************************
COURSE MODULES
******************************************/

.course-box {
    border-radius: 6px 6px 0 0;
    background-color: #ffffff;
    border: 1px solid #eaeaea;
}

.course-box img {
    border-radius: 6px 6px 0 0;
    width: 100%;
}

.course-details {
    padding: 3rem 2rem;
}

.course-details h4 {
    font-size: 18px;
    padding: 0 0 1.5rem;
    font-weight: 700;
    margin: 0;
}

.course-box small {
    display: block;
    font-size: 80%;
    margin-bottom: 10px;
}

.course-details p {
    padding-bottom: 0;
    margin-bottom: 0;
}

.course-footer ul {
    padding-bottom: 0;
    margin-bottom: 0;
    font-size: 14px;
}

.course-footer a {
    color: #aaa;
}

.course-footer i {
    padding-right: 3px;
}

.course-footer {
    border-top: 1px solid #eaeaea;
    padding: 15px;
}

.course-footer .pull-right a {
    font-weight: bold;
    font-size: 16px;
    line-height: 1;
    font-family: Arial
}

.entry {
    position: relative;
}

.magnifier {
    position: absolute;
    bottom: 0;
    left: 0;
    visibility: hidden;
    right: 0;
    opacity: 0;
    top: 0;
    background-color: rgba(1, 186, 207, 0.8);
    -webkit-transition: visibility 0.35s ease-in-out, opacity 0.35s ease-in-out, top 0.35s ease-in-out, bottom 0.35s ease-in-out, left 0.35s ease-in-out, right 0.35s ease-in-out;
    -moz-transition: visibility 0.35s ease-in-out, opacity 0.35s ease-in-out, top 0.35s ease-in-out, bottom 0.35s ease-in-out, left 0.35s ease-in-out, right 0.35s ease-in-out;
    -o-transition: visibility 0.35s ease-in-out, opacity 0.35s ease-in-out, top 0.35s ease-in-out, bottom 0.35s ease-in-out, left 0.35s ease-in-out, right 0.35s ease-in-out;
    transition: visibility 0.35s ease-in-out, opacity 0.35s ease-in-out, top 0.35s ease-in-out, bottom 0.35s ease-in-out, left 0.35s ease-in-out, right 0.35s ease-in-out;
}

.entry:hover .magnifier {
    opacity: 1;
    z-index: 1000;
    left: 5%;
    top: 5%;
    right: 5%;
    bottom: 5%;
    position: absolute;
    visibility: visible;
}

.magnifier a {
    position: absolute;
    top: 50%;
    text-align: center;
    left: 0;
    right: 0;
    margin: -20px auto;
    font-size: 30px;
    color: #fff !important;
}


/************************************
WIDGETS
************************************/

.sidebar .widget {
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid #eaeaea;
}

.sidebar .widget-title {
    font-weight: 600;
    color: #000000;
}

.sidebar .tags-widget li {
    margin-bottom: 10px;
}

.sidebar .widget .form-control {
    margin-bottom: 10px;
    border-radius: 0;
    border-color: #eaeaea;
    height: 45px;
    box-shadow: none;
    color: #b9b9b9;
}

.sidebar .newsletter-widget .form-control {
    min-width: 260px;
    margin-bottom: 0;
    height: 48px;
}

.sidebar .alignleft {
    float: left;
    margin-right: 20px;
}

.sidebar .mt-0 {
    font-size: 16px;
    padding: 0;
    margin-bottom: 5px;
    margin-top: 0;
}

.sidebar .media {
    display: block;
    margin-bottom: 30px;
}

.sidebar .media:last-child {
    margin-bottom: 0;
}


/************************************
BLOG
************************************/

.site-publisher img {
    float: left;
    margin: 0 20px 0 0;
    max-width: 60px;
}

.authorbox img {
    margin: 10px 30px 0 0;
    min-width: 130px;
}

.site-small-desc h4,
.site-publisher h4 {
    font-weight: 700;
    margin: 5px 0 15px;
    padding: 0;
}

.authorbox {
    background-color: #ffffff;
}

.authorbox p {
    margin-top: 10px;
    color: #b9b9b9;
}

.authorbox small {
    text-transform: capitalize;
    font-style: normal;
    padding-right: 5px;
}

.about-message small {
    text-transform: uppercase;
    letter-spacing: 2px;
}

.small-about-message .small-title {
    font-size: 24px;
    line-height: 24px;
    padding-bottom: 0;
    margin-bottom: 20px;
}

.user_name {
    font-size: 18px;
    font-weight: bold;
    padding: 0 0 5px;
}

.media-right,
.media>.pull-right {
    color: #999 !important;
    font-size: 11px;
    letter-spacing: 2px;
    padding-left: 10px;
    text-transform: uppercase;
}

.boxed-comment {
    border: 1px solid #eee;
    padding: 3rem;
    margin-top: 6rem;
    display: block;
}

.comments-list .media {
    padding: 15px;
    margin-bottom: 15px;
}

.media-body .btn-primary {
    padding: 5px 10px !important;
    font-size: 11px !important;
}

.last-child {
    margin-bottom: 0 !important;
}

.comments-list img {
    max-width: 80px;
    margin-right: 30px;
}

.authorbox-social li a {
    color: #999;
}

.authorbox-social ul {
    padding: 10px 0;
    margin-bottom: 0;
}

.authorbox {
    margin-bottom: 30px;
}

.authorbox img {
    min-width: 130px;
    margin: 10px 30px 0 0 !important;
}

.blog-list {
    padding-bottom: 30px;
    margin-bottom: 30px;
}

.blog-meta .list-inline li span {
    font-style: italic;
    color: #999;
    text-transform: none;
    letter-spacing: 0;
    font-size: 14px;
    padding-right: 5px;
}

.blog-meta h3 {
    padding: 0;
    margin: 10px 0;
    font-size: 30px;
    font-weight: 700;
}

.blog-meta small,
.blog-meta .list-inline li,
.blog-meta .list-inline li a {
    font-size: 13px;
    font-weight: 500;
    text-transform: uppercase;
    color: #000;
}

.blog-meta .list-inline li {
    color: #b9b9b9;
    letter-spacing: 0;
}

.blog-media img {
    width: 100%;
}

.blog-media {
    display: block;
    margin: 25px 0;
}

.blog-desc-big .lead {
    color: #000000;
    font-weight: 600;
}

.blog-desc-big .btn {
    margin-top: 15px;
}

.image-wrap img {
    width: 100%;
}

.image-wrap:after {
    content: "";
    width: 60px;
    height: 4px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #111;
    right: 0;
}

.blog-box {
    background-color: #ffffff;
    border-radius: 6px 6px 0 0;
    border: 1px solid #eaeaea;
}

.blog-box .magnifier {
    border-radius: 6px 6px 0 0;
    top: 0 !important;
    bottom: 0 !important;
    left: 0 !important;
    right: 0 !important;
}

.blog-box img {
    width: 100%;
    border-radius: 6px 6px 0 0;
}

.post-meta {
    padding: 15px 30px 10px;
    margin-top: -5px;
    border-top: 1px solid #eaeaea;
    line-height: 1;
}

.post-meta a {
    font-size: 13px;
    color: #aaa;
}

.post-meta .list-inline>li {
    padding-left: 0;
    padding-right: 0;
    margin-right: 10px;
}

.post-meta li:last-child:after {
    content: ""
}

.blog-desc {
    padding: 3rem 2rem;
    display: block;
    position: relative;
}

.blog-desc h4 a,
.blog-desc h4 {
    font-size: 18px;
    font-weight: 700;
    padding: 0 0 15px;
    margin: 0;
    color: #000000;
}

.blog-desc p {
    padding: 0;
    margin: 0;
}

.stat-count h3,
.stat-count h4 {
    color: #ffffff;
}

.stat-count h4 {
    font-size: 44px;
    line-height: 1;
    padding: 0;
    margin: 0;
}

.stat-count h3 {
    padding: 30px 0 25px;
    margin: 0;
    line-height: 1;
    font-size: 20px;
}

.stat-count h3 i {
    padding-right: 10px;
    border-right: 1px solid #fff;
    margin-right: 10px;
}

.stat-count p {
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-family: 'Droid Serif', sans-serif;
    font-style: italic;
}

.blog-grid .col-md-6,
.blog-grid .col-md-4 {
    margin-bottom: 30px
}


/******************************************
TESTIMONIAL
******************************************/

.testimonial {
    border: 1px solid #eaeaea;
}

.testimonial p {
    font-style: italic;
    margin-bottom: 0;
}

.testimonial p.testiname {
    font-style: normal;
    font-size: 18px;
    display: block;
    padding-bottom: 0;
    margin-left: 20px;
    margin-bottom: 20px;
    margin-top: 0px;
}

.testimonial p.testiname strong {
    font-weight: 600;
    letter-spacing: -0.6px;
}

.testimonial img {
    margin-right: 10px;
    max-width: 40px;
}

.testimonial:after {
    content: "\f10e";
    padding: 5px;
    font-family: FontAwesome;
    position: absolute;
    bottom: 0px;
    color: #f6f6f6;
    font-size: 21px;
    right: 10px;
}

.testimonial:before {
    content: "\f10d";
    padding: 5px;
    font-family: FontAwesome;
    position: absolute;
    top: 0;
    color: #f6f6f6;
    font-size: 21px;
    left: 10px;
}

.testimonial .rating {
    margin-top: 20px;
}

.rating {
    display: block;
}

.rating i {
    color: #f4af0b !important;
    margin-bottom: 0;
    padding-bottom: 0;
    line-height: 1;
    display: inline-block;
    font-size: 15px;
}

.p120 {
    padding-bottom: 120px !important;
}

.section.lb {
    border-top: 1px solid #eee;
}

.tagline-message h3 {
    padding: 0;
    font-size: 34px;
    margin: 0;
    color: #ffffff;
    font-weight: bold;
}

.section.lb .tagline-message h3,
.section.gb .tagline-message h3 {
    color: #000;
}

.callout h3 {
    font-size: 90px;
    line-height: 90px;
    margin-top: 0;
    color: #ffffff;
    font-weight: 900;
}

.callout h4 {
    color: #ffffff;
}

.callout h3 sup {
    font-size: 34px;
    top: -0.2em;
    vertical-align: super;
}

.callout .lead {
    color: #ffffff;
    font-size: 29px;
    font-weight: bold;
    line-height: 36px;
    padding: 30px 8px 0;
}

.p40l {
    padding-left: 4rem;
}

.custom-module h2 {
    font-size: 28px;
    font-weight: bold;
    margin: 20px 0 30px;
    padding: 0;
}

.custom-module mark {
    line-height: 1;
    color: #ffffff;
    padding: 0 10px;
}

.custom-module p {
    padding: 0;
    margin: 0;
}


/******************************************
SHOP
******************************************/

.shop-top {
    margin-bottom: 30px;
    padding: 20px 0;
    display: block;
}

.shop-top p,
.shop-box.course-details h4 {
    padding: 0;
    margin-bottom: 0;
}

.shop-wrapper {
    border: 0;
}

.shop-wrapper .course-details {
    padding: 2rem;
}

.shop-wrapper.course-box small {
    margin-bottom: 0;
    margin-top: 5px;
}

.shop-grid .col-md-3 {
    margin-bottom: 30px;
}

.btn-group.open .dropdown-toggle,
.bootstrap-select>.dropdown-toggle {
    background: #ffffff none repeat scroll 0 0 !important;
    box-shadow: none !important;
    color: #b9b9b9 !important;
    padding: 0;
    border: 0 !important;
    outline: none;
    width: 100%;
    z-index: 1;
}

.shop-desc small {
    font-size: 20px;
    font-weight: bold;
    display: block;
    margin-bottom: 10px;
}

.shop-meta {
    display: block;
    position: relative;
    margin: 30px 0;
    padding: 30px 0;
    border-top: 3px solid #f6f6f6;
    border-bottom: 3px solid #f6f6f6;
}

.shop-meta ul {
    margin-bottom: 0;
    padding-bottom: 0;
    margin-top: 20px;
}

.shop-media .image-wrap::after {
    display: none;
}

.shop-extra {
    margin-top: 40px;
    padding: 60px 60px 40px;
    border: 3px solid #f6f6f6;
}

.shop-extra .nav-tabs>li>a {
    background-color: #ffffff !important;
    border: 0 !important;
    border-bottom: 3px solid transparent !important;
    border-radius: 0;
    font-weight: 700;
    outline: none !important;
    font-size: 17px;
    line-height: 1.42857;
    padding: 10px 30px;
    box-shadow: none !important;
    margin-right: 15px;
}

.shop-extra .nav-tabs {
    border-bottom: 3px solid #f6f6f6 !important;
}

.shop-extra .nav-tabs>li:hover a,
.shop-extra .nav-tabs>li.active a {
    border-bottom-color: #111 !important;
}

.shop-extra .tab-content {
    padding: 40px 0 30px;
}

.shop-extra strong {
    color: #000000;
}

.shop-extra .tab-content h3 {
    font-size: 20px;
    padding: 0 0 30px;
    margin: 0;
}

.shop-extra .form-control {
    margin-bottom: 20px;
}

.related-products {
    display: block;
    margin-top: 80px;
}

.related-products .text-widget h3 {
    font-size: 20px;
    padding-bottom: 10px;
}


/******************************************
FOOTER
******************************************/

.section.footer {
    padding: 12rem 0;
    background-color: #000
}

.social-links i {
    color: #aeaeae;
}

.widget-title {
    color: #ffffff;
    font-size: 20px;
    padding: 0 0 30px;
    margin: 0;
    line-height: 1;
}

.small-title {
    color: #000;
    font-size: 20px;
    padding: 0 0 30px;
    margin: 0;
    line-height: 1;
}

.copyrights {
    background-color: #000;
    border-top: 1px solid #181818;
    padding: 30px 0;
}

.copyrights li a {
    color: #aaa;
}

.copyrights ul {
    padding: 0 !important;
    margin: 15px 0 0 !important;
}

.copyrights ul li {
    line-height: 1;
    font-size: 15px;
    margin: 0 0 0 8px !important;
}

.cop-logo img {
    margin-top: 9px;
    opacity: 0.5;
    -webkit-filter: grayscale(100%);
    /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
}

.cop-logo img:hover {
    opacity: 1;
    -webkit-filter: grayscale(0);
    /* Safari 6.0 - 9.0 */
    filter: grayscale(0);
}

.newsletter-widget .form-control {
    border-radius: 0;
    font-size: 14px;
    box-shadow: none !important;
    height: 48px;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.2);
    min-width: 280px;
}

.newsletter-widget img {
    display: block;
    max-width: 280px;
    margin-top: 40px;
}

.newsletter-widget p {
    margin-bottom: 30px;
}

.newsletter-widget .btn {
    padding-left: 23px;
    padding-right: 23px;
}

.footer ul {
    list-style: none;
    padding: 0;
}

.footer .list-widget li {
    margin: 0 0 5px !important;
}

.footer .tags-widget li {
    margin-bottom: 5px;
    margin-top: 5px;
}

.footer .form-control,
.footer p,
.footer a {
    color: #aaa;
}

.footer a:hover {
    color: #ffffff;
}

.absolute-widget {
    border-top: 0 none;
    display: block;
    margin-top: -45%;
    padding: 6rem 4rem;
    position: relative;
    background: url(upload/formbg.jpg) no-repeat top center #161616;
}

.absolute-widget .form-control {
    background-color: transparent;
    border: 0 solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0;
    font-size: 14px;
    height: 40px;
    padding-bottom: 15px;
    box-shadow: none !important;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 15px;
}

.absolute-widget textarea.form-control {
    height: 100px;
}

.absolute-widget .form-control::-moz-placeholder {
    color: rgba(255, 255, 255, 0.6);
    opacity: 1;
}

.absolute-widget .form-control:-ms-input-placeholder {
    color: rgba(255, 255, 255, 0.6);
}

.absolute-widget .form-control::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.6);
}


/******************************************
BUTTONS
******************************************/

.btn {
    border-radius: 0;
    font-size: 14px;
    border: 1px solid #fff;
    font-weight: bold;
    color: #ffffff !important;
    padding: 13px 40px;
    text-transform: capitalize;
}

.btn-transparent {
    color: #ffffff;
    border: 1px solid #fff;
}


/************************************
MICS
************************************/

.loader {
    display: block;
    margin: 20px auto 0;
    vertical-align: middle;
}

#preloader {
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #fff;
    z-index: 11000;
    position: fixed;
    display: block
}

.preloader {
    position: absolute;
    margin: 0 auto;
    left: 1%;
    right: 1%;
    top: 47%;
    width: 65px;
    height: 65px;
    background: center center no-repeat none;
    background-size: 65px 65px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%
}


/******************************************
COLOR BLUE
******************************************/

.yamm .dropdown .dropdown-menu {
    border-top-color: #01bacf;
}

.iconitem a.shopicon i {
    color: #01bacf !important;
}

.shop-desc small,
.shop-meta a,
.authorbox small,
blockquote:before,
blockquote:after,
.blog-meta small a,
.small-box i,
.copyrights ul li:hover a,
.footer .readmore,
.breadcrumb>li a,
.yamm h4,
.yamm-content li:hover a,
.yamm .hassubmenu li:hover a,
.check li:before,
.stat-count h3,
.blog-desc h4:hover a,
.post-meta li:after,
.course-box small,
.course-details h4:hover a,
.course-footer i,
a:hover,
a:focus,
.box i,
.topbar .text-left i {
    color: #01bacf;
}

.shop-extra .nav-tabs>li:hover a,
.shop-extra .nav-tabs>li.active a,
.modal .form-control,
.form-control:focus,
.btn-transparent {
    border-color: #01bacf !important;
}

.cb,
.box .event-desc small,
.pagination a,
.pagination>.active>a,
.pagination>.active>a:focus,
.pagination>.active>a:hover,
.pagination>.active>span,
.pagination>.active>span:focus,
.pagination>.active>span:hover,
.tags-widget a,
.owl-theme-01 .owl-nav [class*="owl-"]:hover,
.yamm .dropdown-menu li:hover .menu-button,
.yamm .dropdown-menu li .menu-button,
mark,
.bgcolor1,
.image-wrap:before,
.image-wrap:after,
.btn-primary {
    border-color: #01bacf;
    background-color: #01bacf;
    box-shadow: inset 0 0 0 0 #00a8bd;
    -webkit-transition: all ease 0.5s;
    -moz-transition: all ease 0.5s;
    transition: all ease 0.5s;
}

.pagination a:hover,
.tags-widget a:hover,
.btn-primary:hover {
    color: #ffffff !important;
    box-shadow: inset 0 100px 0 0 #00a8bd;
    border-color: #00a8bd;
}


/******************************************
COLOR GREEN
******************************************/

.menu-widget small,
.course-footer .pull-right a {
    color: #82b440;
}

.btn-default {
    border-color: #82b440;
    background-color: #82b440;
    box-shadow: inset 0 0 0 0 #74a632;
    -webkit-transition: all ease 0.5s;
    -moz-transition: all ease 0.5s;
    transition: all ease 0.5s;
}

.btn-default:hover {
    box-shadow: inset 0 100px 0 0 #74a632;
    border-color: #74a632;
}


/******************************************
RESPONSIVE
******************************************/

@media (max-width: 992px) {
    .p120 {
        padding-bottom: 8rem !important;
    }
    .boxed {
        margin-top: 4rem;
    }
    .blog-box,
    .testimonial,
    .stat-count {
        margin: 30px 0;
    }
    .m30 {
        margin-top: 30px;
    }
    .absolute-widget {
        background-image: none;
    }
    .sidebar {
        margin-top: 30px;
    }
    .container {
        min-width: 100% !important;
    }
    .footer .widget {
        margin: 30px 0;
    }
}

@media (max-width: 768px) {
    .shop-extra .nav-tabs>li>a,
    .shop-extra .nav-tabs>li {
        float: none;
        display: block;
        width: 100%;
        text-align: center;
    }
    .shop-extra {
        padding: 30px 10px;
    }
    .home-message p {
        font-size: 28px;
    }
    .topbar .text-left {
        text-align: center;
    }
    .authorbox img {
        float: none;
        margin: 0 0 30px !important;
        min-width: 100px;
    }
    .media-left,
    .media>.pull-left {
        display: block;
        float: none;
        margin: 0 0 30px;
        padding-right: 10px;
    }
}

@media (max-width: 468px) {
    .blog-meta h3 {
        font-size: 20px;
    }
}

@media (min-width: 992px) {
    .yamm-fw {
        position: relative;
    }
    .hassubmenu:hover>ul,
    .yamm-fw:hover>ul {
        visibility: visible;
        opacity: 1;
        top: 100%;
    }
    .hassubmenu ul,
    .navbar-nav .yamm-fw ul {
        -webkit-transition: visibility 0.35s ease-in-out, opacity 0.35s ease-in-out, top 0.35s ease-in-out, bottom 0.35s ease-in-out, left 0.35s ease-in-out, right 0.35s ease-in-out;
        -moz-transition: visibility 0.35s ease-in-out, opacity 0.35s ease-in-out, top 0.35s ease-in-out, bottom 0.35s ease-in-out, left 0.35s ease-in-out, right 0.35s ease-in-out;
        -o-transition: visibility 0.35s ease-in-out, opacity 0.35s ease-in-out, top 0.35s ease-in-out, bottom 0.35s ease-in-out, left 0.35s ease-in-out, right 0.35s ease-in-out;
        transition: visibility 0.35s ease-in-out, opacity 0.35s ease-in-out, top 0.35s ease-in-out, bottom 0.35s ease-in-out, left 0.35s ease-in-out, right 0.35s ease-in-out;
    }
    .yamm-fw .dropdown-menu {
        min-width: 240px;
        padding: 0;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
    }
    .hassubmenu>ul,
    .yamm-fw>ul {
        position: absolute;
        top: 160%;
        visibility: hidden;
        display: block;
        opacity: 0;
    }
    .yamm-fw>ul li {
        position: relative;
    }
    .yamm-fw>ul li:hover>ul {
        visibility: visible;
        opacity: 1;
        left: 100%;
    }
}

@media (max-width: 1200px) {
    .nav>li>a {
        padding: 1em 0.7em;
    }
}









          `}
    </style>  

        

       
                             

    </Layout>
    )
   
}
Contact.getInitialProps = async ({ req }) => {

    const wordpressUrl = "https://limitless-shore-58551.herokuapp.com/wp-json";
    const contact = await axios.get(`${wordpressUrl}/wp/v2/pages?slug=contact`);
    console.log("slug",  contact.data[0].title.rendered)
    console.log("contact:", contact)
  
    return {contact: contact.data[0] }
  
  }
export default Contact;