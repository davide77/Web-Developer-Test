import React, { Component } from "react";
import { hot } from "react-hot-loader";

 
import articleOne from "../assets/images/image.jpg"
import articleTwo from "../assets/images/image@2x.jpg"
import articleThree from "../assets/images/image@3x.jpg"
import HeroImage from "./HeroImage";

class Main extends Component {


  render() {
    return (
<div>
      <section  className="hero full-bleed">
          <div className="bcg"> 
          <HeroImage />
          </div>
          <div className="container flow">
            <div className="wrap">
                <header>
                    <span className="hero__paragraph flow">
                    <p>Apps unveils new studio</p></span>
                    <h1 className="hero__title">Lagom</h1>
                </header>
              </div>
          </div>
      </section>



      <section className="home-section article full-bleed has-bg-light-grey">
        <div className="container flow ">
              <header className="col-12">
                  <h2 className="section__title">Innovation and experience design agency.</h2>
                  <p className="section_paragraph">Apps is an innovation and experience design agency.<br/> We exist to create a better future with you.</p>
              <button className="button primary">Products</button>
              </header>
          </div>
      </section>
 


      <section className="home-section article image-content full-bleed">
              <picture className="col-12 md-col-6">
              <img 
              srcSet={`${articleTwo} 300w, ${articleThree} 1000w`}
              src={articleOne}
                className="image" decoding="async" alt="snowy mountain peak" />
              </picture>
              <header  className="col-12 md-col-6">
                  <h2>The imaginative application of art and science.</h2>
                  <p className="section_paragraph">We architect, design and deliver iconic experiences, services and products that improve people’s lives. </p>
                  <button className="button primary">Read Latest</button>
              </header>
      </section>
      </div>
    );
  }
}

export default hot(module)(Main);
