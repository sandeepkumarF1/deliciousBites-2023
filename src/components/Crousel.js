import React from "react";
import { CROUSEL_CDN_LINK } from "./Config";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// let box=document.querySelector('.offer-card');
// const cardPrev = ()=>{
//     const width = box.scrollWidth;
//     box.scrollLeft = box.scrollLeft - 500;
// }
// const cardForw = ()=>{
//     const width = box.scrollWidth;
//     box.scrollLeft = box.scrollLeft + 500;
// }



const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Crousel = () => {
  return (
    // <div className="w-full h-[12rem] mb-10 bg-red-200">
      <div className="bg-black h-80 align-middle items-center py-12 ">

        <Carousel responsive={responsive} className="mx-20 p-5 z-[10] px-12 cursor-pointer">
          
    <img
                src={CROUSEL_CDN_LINK + "rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3"}
                alt=""
                className="hover:scale-110 transition-all duration-[0.6s] ease-in-out z-[99999] h-48"
                />
                <img
                  src={CROUSEL_CDN_LINK + "rng/md/carousel/production/oxe97jexxbnxqtbhg2zo"}
                  alt=""
                  className="hover:scale-110 transition-all duration-[0.6s] ease-in-out z-[99999] h-48"
                />
                <img src={CROUSEL_CDN_LINK +"rng/md/carousel/production/qsgjyrelvjr3atzl0ypm"} alt="" className="hover:scale-110 transition-all duration-[0.6s] ease-in-out z-[99999] h-48" />
                <img
                src={CROUSEL_CDN_LINK + "rng/md/carousel/production/s5ug2key6e2sptaxku5v"}
                alt=""
                className="hover:scale-110 transition-all duration-[0.6s] ease-in-out z-[99999] h-48"
                />
              <img src={CROUSEL_CDN_LINK + "rng/md/carousel/production/pneknawbadtvceqzwiep"} alt=""
                className="hover:scale-110 transition-all duration-[0.6s] ease-in-out z-[99999] h-48" />
              <img
                src= {CROUSEL_CDN_LINK + "rng/md/carousel/production/dpqcjrxwruipnt1wyqnh"}
                alt=""
                className="hover:scale-110 transition-all duration-[0.6s] ease-in-out z-[99999] h-48"
              />
              <img
                src={CROUSEL_CDN_LINK + "rng/md/carousel/production/lyn9at38gjithnogzfui"}
                alt=""
                className="hover:scale-110 transition-all duration-[0.6s] ease-in-out z-[99999] h-48"
              />
              <img
                src={CROUSEL_CDN_LINK + "rng/md/carousel/production/jmeoz6zu9fi0h9tw7xrb"}
                alt=""
                className="hover:scale-110 transition-all duration-[0.6s] ease-in-out z-[99999] h-48"
              />
              <img
                src={CROUSEL_CDN_LINK + "rng/md/carousel/production/s5ug2key6e2sptaxku5v"}
                alt=""
                className="hover:scale-110 transition-all duration-[0.6s] ease-in-out z-[99999] h-48"
              />
                </Carousel>
      </div>

    // </div>
    
  );
};

export default Crousel;
// <div class="swiper-slide swiper-slide-active py-10" style="width: 215.75px; margin-right: 55px;">
//     <div class="">
//         <img src="https://corsproxy.io/?https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_504,h_504/rng/md/carousel/production/pneknawbadtvceqzwiep" alt="" class="hover:scale-110 transition-all duration-[0.6s] ease-in-out z-[99999]" />
//     </div>
// </div>

//5 jmeoz6zu9fi0h9tw7xrb
//6 s5ug2key6e2sptaxku5v
//7 oxe97jexxbnxqtbhg2zo
//8 ifi2lbzxeu1hvsqrsip3
