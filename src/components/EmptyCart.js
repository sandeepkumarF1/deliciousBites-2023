// import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const EmptyCart = () => {
    // const loginToken = useSelector(store => store?.login?.loginToken);
    const {isAuthenticated, loginWithRedirect} = useAuth0();
    const navigate = useNavigate();
    return (

        isAuthenticated ?



            <Link to={"/"} className="w-full flex flex-col justify-center items-center gap-2 h-[80%] pb-10 lg:pb-5   lg:h-full">
                <div className="w-[50%] p-5">
                    <img src="https://cdn.dribbble.com/userupload/5509547/file/original-b54081830c6e764b5910b9affe33a0c1.gif" alt="" className="w-full" />
                </div>
                        <div className="heading font-semibold lg:text-xl pt-2">
                            Your cart is empty
                        </div>
                        <div className="disc p-2 flex justify-center items-center  text-center pb-4">
                            You can go to home page to view more restaurants
                        </div>
                    <button className="bg-violet-700 text-white rounded-lg p-2 lg:text-xl font-semibold px-4" onClick={() => navigate('/')}>SEE RESTAURANTS NEAR YOU</button>

            </Link>

            :
            <div className=" flex justify-center items-center bg-black/10">
                <div className="div flex justify-around gap-4 items-center m-10 flex-col rounded-full ">
                    
                    <button onClick={() => navigate(loginWithRedirect())} className="p-2 lg:text-xl font-semibold px-4 w-[70%]"><img src="https://cdn.dribbble.com/users/3873964/screenshots/15271950/media/5bab97a095006c5e78929cc6d37b34c8.gif" alt="" /></button>
                    <button onClick={() => navigate(loginWithRedirect())} className="bg-violet-700 text-white rounded-lg p-2 lg:text-xl font-semibold px-4">LOGIN TO VIEW</button>
                
                </div>
            </div>
            
            
            )
        }
        
        export default EmptyCart
        // </div>
        // <div className='login-main flex  justify-center items-center text-sociogram bg-black/20 lg:rounded-xl'>