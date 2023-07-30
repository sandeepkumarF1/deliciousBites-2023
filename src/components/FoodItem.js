import { ImgCdnLink } from "./Config";
import { BiCheckboxSquare } from "react-icons/bi";
import ItemQuantity from "./ItemQuantity";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// import { UseSelector } from "react-redux/es/hooks/useSelector";
import {removeItem} from "../utils/cartSlice";
import { useState } from "react";
const FoodItem = ({ id, imageId, name, description, price, isVeg }) => {
    // const  = props;
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  return (
    <>
      <div className="namePrice flex justify-center items-center border border-b  w-full px-10 py-2">
        <div className="w-[10%] text-center">
          <center>
            {isVeg === 1 ? (
              <span className="text-green-700 text-2xl">
                <BiCheckboxSquare />
              </span>
            ) : (
              <span className="text-orange-600 text-2xl">
                <BiCheckboxSquare />
              </span>
            )}
          </center>
        </div>
        <div className="w-[30%] text-center">
          <h1 className="font-semibold">{name}</h1>
          <p>{description}</p>
        </div>
        {/* // + - */}
        <div className="w-[20%] text-center">
          <center>
            <div className="flex border border-gray-300 px-2 w-20 justify-between items-center">
              <button
                onClick={() => {
                  quantity < 2
                    ? dispatch(removeItem(id))
                    : setQuantity(quantity - 1);
                }}
                className="text-xl "
              >
                -
              </button>
              <p className="text-green text-sm font-semibold">{quantity}</p>
              <button
                className="text-xl"
                onClick={() => {
                  setQuantity(quantity + 1);
                  // dispatch(addItem(id));
                }}
              >
                +
              </button>
            </div>
          </center>
        </div>
        <div className="w-[20%] text-center">
          <center>
            <img className="w-24" src={ImgCdnLink + imageId} />
          </center>
        </div>
        <div className="price w-[20%] text-center ">
          {/* ₹ {(it?.quantity * it?.price).toFixed(2)} */}₹{" "}
          {(price / 100) * quantity}
          {/* {console.log(price)} */}
        </div>
        
    </div>
    </>
  );
};
export default FoodItem;

// <div className="m-4 p-4 w-64 shadow-lg bg-white-50 rounded-md">
//         <img src={ImgCdnLink+imageId} alt="img"></img>
//         <h2 className="font-bold text-lg py-3">{name}</h2>
//         <h3 className="font-medium">{description}</h3>
//         <h4 className="font-medium text-blue-600">Rupees: {price/100}</h4>

//     </div>

// console.log(props)
// const {cloudinaryImageId, name, cuisines, avgRating} = restaurant.info;





        {/* <div className="btn flex justify-between items-center gap-3 py-1 px-3 border-2 border-slate-500">
            <button onClick={() => it?.quantity >= 2 ? dispatch(decrQuantity(it?.id)) : dispatch(removeItem(it?.id))}>-</button>
            <div className="w-2 flex justify-center items-center">{it.quantity}</div>
            <button onClick={() => dispatch(incrQuantity(it?.id))}>+</button>
        </div> */}