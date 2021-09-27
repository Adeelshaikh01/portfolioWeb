import { Header,Footer } from '../../components';
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import "animate.css";
import './css/style.css'

function Home() {
    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ["HTML", "CSS", "Bootstrap", "Javascript ES6","Firebase","React"], 
        startDelay: 1000,
        typeSpeed: 100,
        backSpeed: 100,
        loop:true,
        showCursor: false,
      });
  
      // Destropying
      return () => {
        typed.destroy();
      };
    },);
    return (
        <>
            <Header/>
            <div className="banner-image">
        <div className="container pb-5">
          <div className="row py-5 align-items-center">
            <div className="col-lg-6">
              <h5 className="display-1 mb-4 font-weight-bold animate__animated animate__fadeIn ">Future <strong>Full Stack</strong> Developer</h5>
              <h5 className="display-6 mb-4 font-weight-bold animate__animated animate__fadeIn ">I'm a <strong className="text-white" >Student</strong></h5>
              <p className="h4 aa mb-4 pb-3 animate__animated animate__fadeInLeft">I Know <span className="animatedText" ref={el}/></p>
            </div>
          </div>
        </div>
      </div>
            <Footer />
        </>
    )
}

export default Home