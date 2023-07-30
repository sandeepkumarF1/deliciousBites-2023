import React from "react";
import { ONMIND_CDN_LINK } from "./Config";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// let box=document.querySelector('#menu-card');
//     const cardPrev = ()=>{
//         // const width = box.scrollWidth;
//         box.scrollLeft = box.scrollLeft - 500;
//     }
//     const cardForw = ()=>{
//         // const width = box.scrollWidth;
//         box.scrollLeft = box.scrollLeft + 500;

//     }


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
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

const OnMind = () => {
  return (
    <div className="h-60 align-middle items-center ">

        <h1 className="font-bold text-2xl mx-28 my-5">What's on your mind?</h1>
        <Carousel responsive={responsive} className="mx-20  px-5 z-[10] cursor-pointer">
          
        <img
            src={ ONMIND_CDN_LINK + "v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature.png"}
            alt=""
            className="hover:scale-110 transition-all duration-[0.6s] ease-in-out z-[99999] h-48"
            />
            <img
            src={ONMIND_CDN_LINK + "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png"}
            alt=""
            className="hover:scale-110 transition-all duration-[0.6s] ease-in-out z-[99999] h-48"
            />
          <img src={ONMIND_CDN_LINK + "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Poori.png"} alt=""
            className="hover:scale-110 transition-all duration-[0.6s] ease-in-out z-[99999] h-48" />
          <img src={ONMIND_CDN_LINK + "v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Kachori.png"} alt="" className="hover:scale-110 transition-all duration-[0.6s] ease-in-out z-[99999] h-48" />
          <img
            src={ONMIND_CDN_LINK + "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Sandwich.png"}
            alt=""
            className="hover:scale-110 transition-all duration-[0.6s] ease-in-out z-[99999] h-48"
          />
           <img
            src={ONMIND_CDN_LINK + "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png"}
            alt=""
            className="hover:scale-110 transition-all duration-[0.6s] ease-in-out z-[99999] h-48"
          />
          <img
            src={ONMIND_CDN_LINK + "v1674029849/PC_Creative%20refresh/3D_bau/banners_new/Omelette.png"}
            alt=""
            className="hover:scale-110 transition-all duration-[0.6s] ease-in-out z-[99999] h-48"
          />
          <img
            src={ONMIND_CDN_LINK + "v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Pakodas.png"}            alt=""
            className="hover:scale-110 transition-all duration-[0.6s] ease-in-out z-[99999] h-48"
          />
                </Carousel>
      </div>
  );
};

export default OnMind;
// <div class="swiper-slide swiper-slide-active py-10" style="width: 215.75px; margin-right: 55px;">
//     <div class="">
//         <img src="https://corsproxy.io/?https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_504,h_504/rng/md/carousel/production/pneknawbadtvceqzwiep" alt="" class="hover:scale-110 transition-all duration-[0.6s] ease-in-out z-[99999]" />
//     </div>
// </div>

//5 jmeoz6zu9fi0h9tw7xrb
//6 s5ug2key6e2sptaxku5v
//7 oxe97jexxbnxqtbhg2zo
//8 ifi2lbzxeu1hvsqrsip3



{/* <div className="mx-32 flex justify-between my-5">
        <h1 className="font-bold text-2xl">What's on your mind?</h1>
        <div className="gap-5 flex ">
        <button className="text-2xl bg-gray-300 px-1 rounded-full" onClick={cardPrev}>
          <AiOutlineArrowLeft />
        </button>
        <button className="text-2xl bg-gray-300 px-1 rounded-full" onClick={cardForw}>
          <AiOutlineArrowRight />
        </button>

        </div>
    </div>
    <div className="w-full h-[12rem] cursor-pointer flex items-center justify-center ">
      <div className="w-[80%]  h-56 flex justify-center items-center">
        <div id="menu-card" className="flex gap-16 overflow-hidden z-10 p-2 overflow-x-scroll
            scroll-smooth scrollbar-none
        ">
            <img
            src={ ONMIND_CDN_LINK + "v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature.png"}
            alt=""
            className="hover:scale-110 transition-all duration-[0.6s] ease-in-out z-[99999] h-48"
            />
            <img
            src={ONMIND_CDN_LINK + "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png"}
            alt=""
            className="hover:scale-110 transition-all duration-[0.6s] ease-in-out z-[99999] h-48"
            />
          <img src={ONMIND_CDN_LINK + "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Poori.png"} alt=""
            className="hover:scale-110 transition-all duration-[0.6s] ease-in-out z-[99999] h-48" />
          <img src={ONMIND_CDN_LINK + "v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Kachori.png"} alt="" className="hover:scale-110 transition-all duration-[0.6s] ease-in-out z-[99999] h-48" />
          <img
            src={ONMIND_CDN_LINK + "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Sandwich.png"}
            alt=""
            className="hover:scale-110 transition-all duration-[0.6s] ease-in-out z-[99999] h-48"
          />
           <img
            src={ONMIND_CDN_LINK + "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png"}
            alt=""
            className="hover:scale-110 transition-all duration-[0.6s] ease-in-out z-[99999] h-48"
          />
          <img
            src={ONMIND_CDN_LINK + "v1674029849/PC_Creative%20refresh/3D_bau/banners_new/Omelette.png"}
            alt=""
            className="hover:scale-110 transition-all duration-[0.6s] ease-in-out z-[99999] h-48"
          />
          <img
            src={ONMIND_CDN_LINK + "v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Pakodas.png"}            alt=""
            className="hover:scale-110 transition-all duration-[0.6s] ease-in-out z-[99999] h-48"
          />
        </div>
      </div>
    </div> */}












// <img
//             src={CROUSEL_CDN_LINK + "rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3"}
//             alt=""
//             className="hover:scale-110 transition-all duration-[0.6s] ease-in-out z-[99999] h-48"
//             />
//             <img
//               src={CROUSEL_CDN_LINK + "rng/md/carousel/production/oxe97jexxbnxqtbhg2zo"}
//               alt=""
//               className="hover:scale-110 transition-all duration-[0.6s] ease-in-out z-[99999] h-48"
//             />
//             <img src={CROUSEL_CDN_LINK +"rng/md/carousel/production/qsgjyrelvjr3atzl0ypm"} alt="" className="hover:scale-110 transition-all duration-[0.6s] ease-in-out z-[99999] h-48" />
//             <img
//             src={CROUSEL_CDN_LINK + "rng/md/carousel/production/s5ug2key6e2sptaxku5v"}
//             alt=""
//             className="hover:scale-110 transition-all duration-[0.6s] ease-in-out z-[99999] h-48"
//             />
//           <img src={CROUSEL_CDN_LINK + "rng/md/carousel/production/pneknawbadtvceqzwiep"} alt=""
//             className="hover:scale-110 transition-all duration-[0.6s] ease-in-out z-[99999] h-48" />