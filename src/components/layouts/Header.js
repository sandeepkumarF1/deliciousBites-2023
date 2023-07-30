import React from "react";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";
import { useSelector } from "react-redux";
// import store from "../../utils/store";
import { useAuth0 } from "@auth0/auth0-react";
function Header() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <React.Fragment>
      <div
        className="flex justify-between p-3 bg-white shadow h-20 items-center
            sticky top-0 z-20
            "
      >
        <Link to="/" className="flex">
          <img
            className="w-16 h-14 mx-4 my-3"
            src="https://cdn.pixabay.com/photo/2017/02/21/08/49/food-2085075_1280.png"
          ></img>
          <h1 className="my-5 font-bold text-3xl">Foodies Only</h1>
        </Link>

        <ul className="flex font-medium">
          <li className="mx-8 hover:text-violet-800">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="mx-8 hover:text-violet-800">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="mx-8 hover:text-violet-800">
            <Link to={"/help"}>Help</Link>
          </li>
          <li className="mx-8 hover:text-violet-800">
            <Link to={"/instamart"}>Instamart</Link>
          </li>

          <li className="mx-8 hover:text-violet-800">
            <Link to={"/cart"}>Cart - {cartItems.length}</Link>
          </li>
        </ul>
        <h1 className="my-5 font-medium">
          Status : {isOnline ? "Online ✔" : "Offline ❌"}
        </h1>
        {/* {isLoggedIn ? (
          <Link to={"/login"}>
            <button
              className="w-16 m-2 p-[2px] border-2 bg-red-600 text-white"
              onClick={() => setIsLoggedIn(false)}
            >
              Logout
            </button>
          </Link>
        ) : (
          <Link to={"/login"}>
          
            <button
              className="w-16 m-2 p-[2px] border-2 bg-green-600 text-white"
              onClick={() => setIsLoggedIn(true)}
            >
              Login
            </button>
          </Link>
        )} */}
        {isAuthenticated && <h1>Hello! {(user.nickname)}</h1>}
        
        {isAuthenticated ? (
          <button className="bg-violet-700 hover:bg-violet-900 text-white rounded-md px-2 py-1"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        ) : (
          <button className="bg-violet-700 hover:bg-violet-900 text-white rounded-md px-2 py-1" onClick={() => loginWithRedirect()}>Log In</button>
        )}
      </div>
    </React.Fragment>
  );
}
export default Header;
