import React from "react";
import "./Hero.css";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import pic from "/src/assets/girlexample.png";

function Hero() {
  return (
    <>
      <div className='hero' id='hero'>
        <div className='hero__container'>
          {/* <img src={pic} alt='' /> */}
          <div className='hero__text-container'>
            <div className='hero__text-head'>
              <h1>הסטודיו של קאתרין</h1>
            </div>
            <div className='hero__text'>
              <p>להרגיש בבית</p>
              <p>להתמלא בעוצמה</p>
            </div>
            <div className='hero__buttons-container'>
              <a href='https://wa.me/972556620441' className='hero__button'>
                לפרטים נוספים <FaWhatsapp className='hero__button-icon' />
              </a>
              <a href='tel:+972556620441' className='hero__button'>
                חייגו אלינו <FaPhoneAlt className='hero__button-icon' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
