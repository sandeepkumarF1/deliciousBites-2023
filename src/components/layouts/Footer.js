import React from "react";
import {AiFillHeart} from "react-icons/ai"
const Footer = () =>{
    return(
        <React.Fragment>
            <div className="w-full flex justify-center items-center hover:bg-black hover:text-yellow-400 cursor-grab bg-violet-700 text-white font-bold text-xl py-1">
                <h1>MADE WITH</h1>
                <h1 className="px-1 text-red-600 font-bold text-2xl"><AiFillHeart /> </h1>
                <h1> by SANDEEP KUMAR 2023</h1>
            </div>
            <div className="bg-gray-900 text-white py-1">
               <center >
                    <div className="row primary">
                        <div className="my-5">
                            <h2 className="text-xl font-semibold">Connect</h2>
                            <p>
                            <i className="fa fa-map-marker mx-2 my-1" aria-hidden="true"></i>
                            Sienna towers, service road, bangalore
                            </p>
                            <div className="social my-1">
                            <i className="mx-5 fa-xl fa fa-facebook-square"></i>
                            <i className="mx-5 fa-xl fa fa-twitter-square"></i>
                            <i className="mx-5 fa-xl fa fa-linkedin-square"></i>
                            <i className="mx-5 fa-xl fa fa-instagram"></i>
                            </div>
                        </div>

                        <div className="my-5">
                            <h2 className="text-xl font-semibold my-1">Links</h2>
                            <ul className="flex justify-center">
                            <li><a className="mx-5" href="#home">Home</a></li>
                            <li><a className="mx-5" href="#team">Team</a></li>
                            <li><a className="mx-5" href="#blogs">Blogs</a></li>
                            <li><a className="mx-5" href="#support">Support</a></li>
                            </ul>
                        </div>

                        <div className="my-5">
                            <h2 className="text-xl font-semibold my-1">Newsletter</h2>
                            <div>
                            <input className="w-40 h-6 mx-5 bg-orange-50 " type="email" placeholder="Your email id here" />
                            <button className="bg-red-700 p-[2px] rounded" >Subscribe</button>
                            </div>
                        </div>
                    </div>

               </center>

                <center >
                    <hr></hr>
                    <p>&copy; All rights reserved.</p>
                    <p>Made with &hearts; in India.</p>
                </center>
            </div>
        </React.Fragment>
    );
}
export default Footer;