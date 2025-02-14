// const BIM =()=>{
//     return(
//         <div >bim page</div>
//     )
// }

// function Page(){
//     return (
//         <div>BIM Page</div>

//     )
// }

// "use client";
// import Image from "next/image";
// import React from "react";
// import SlickSlider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };
//   const bim = () => {
//     return (
//         <div>
// <SlickSlider {...settings}>
//       <div className="h-[332px] ">
//         <Image 
//          height={1000}
//          width={1000}
//          className="w-full h-full" 
//          alt="image"
//          src="https://img.lazcdn.com/us/domino/70d96363-eff1-41d6-beb4-0d24afc1ba70_NP-1976-688.png_2200x2200q80.png"/>
//         <h3>1</h3>
//       </div>
//       <div className="h-[332px]">
//         <Image 
//         height={1000}
//         width={1000}
//         className="w-full h-full" 
//          alt="image"
//         src="https://img.lazcdn.com/us/domino/30cbe60d-3206-4ed5-9d64-38d2edf6bdde_NP-1976-688.jpg_2200x2200q80.jpg"/>
//         <h3>2</h3>
//       </div>
//       <div className="h-[332px]">
//         <Image 
//        height={1000}
//        width={1000}
//        className="w-full h-full"  
//         alt="image"
//        src="https://img.lazcdn.com/us/domino/c43e1348-5647-4ed4-986b-452c17256269_NP-1976-688.jpg_2200x2200q80.jpg"/>

//         <h3>3</h3>
//       </div>
//       <div>
//         <h3>4</h3>
//       </div>
//       <div>
//         <h3>5</h3>
//       </div>

//     </SlickSlider>
//         </div>
//     );
// }

"use client";
import Image from "next/image";
import React from "react";
import SlickSlider from "react-slick";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-photo-view/dist/react-photo-view.css';


const imageGallery = [
    "https://img.lazcdn.com/us/domino/70d96363-eff1-41d6-beb4-0d24afc1ba70_NP-1976-688.png_2200x2200q80.png",
    "https://img.lazcdn.com/us/domino/30cbe60d-3206-4ed5-9d64-38d2edf6bdde_NP-1976-688.jpg_2200x2200q80.jpg",
    "https://img.lazcdn.com/us/domino/c43e1348-5647-4ed4-986b-452c17256269_NP-1976-688.jpg_2200x2200q80.jpg"

];
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};
const Bim = () => {
    return (
        <PhotoProvider>
            <SlickSlider {...settings}>
                {imageGallery.map((item) => (
                    <div className="h-[332px] " key={item}>
                        <PhotoView src={item}>
                        <Image
                            height={1000}
                            width={1000}
                            className="w-full h-full"
                            alt="image"
                            src={item} />
                        </PhotoView>
                        
                    
                    </div>
                ))}
                {/* <div className="h-[332px] ">
                    <Image
                        height={1000}
                        width={1000}
                        className="w-full h-full"
                        alt="image"
                        src="https://img.lazcdn.com/us/domino/70d96363-eff1-41d6-beb4-0d24afc1ba70_NP-1976-688.png_2200x2200q80.png" />
                    <h3>1</h3>
                </div>
                <div className="h-[332px]">
                    <Image
                        height={1000}
                        width={1000}
                        className="w-full h-full"
                        alt="image"
                        src="https://img.lazcdn.com/us/domino/30cbe60d-3206-4ed5-9d64-38d2edf6bdde_NP-1976-688.jpg_2200x2200q80.jpg" />
                    <h3>2</h3>
                </div>
                <div className="h-[332px]">
                    <Image
                        height={1000}
                        width={1000}
                        className="w-full h-full"
                        alt="image"
                        src="https://img.lazcdn.com/us/domino/c43e1348-5647-4ed4-986b-452c17256269_NP-1976-688.jpg_2200x2200q80.jpg" />

                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div> */}

            </SlickSlider>
        </PhotoProvider>

    );
}
export default Bim;