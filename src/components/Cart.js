import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import FoodItem from "./FoodItem";
import { clearCart} from "../utils/cartSlice";
import EmptyCart from "./EmptyCart";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };


  // const [quantity, setQuantity] = useState(1);

  // const getItemTotal = () => {
  //   const cartItems = useSelector((store) => store.cart.items);
  //   let total =
  //     cartItems &&
  //     Object.values(cartItems)
  //       .map((item) => (item.price / 100) * item.quantity)
  //       .reduce((acc, curr) => acc + curr, 0);

  //   return total;
  // };


  return cartItems.length !== 0 ? (
    <>
      <div className="h-[100%] w-[100%]">
        <div className="flex justify-between">
          <h1 className="font-bold text-3xl text-center m-5">
            Cart Items - {cartItems.length}
          </h1>
          <button
            className="bg-red-600 p-2 m-5 rounded-lg text-white font-bold"
            onClick={() => handleClearCart()}
          >
            Clear Cart
          </button>
        </div>
        <div className="flex flex-wrap">
          <div className="namePrice flex justify-center items-center bg-violet-600 text-white h-16 w-full font-bold px-10 ">
            <h1 className="w-[10%] text-center">Veg / Non-Veg</h1>
            <h1 className="w-[30%] text-center">Name</h1>
            <h1 className="w-[20%] text-center">Quantity</h1>
            <h1 className="w-[20%] text-center">Image</h1>
            <h1 className="w-[20%] text-center">Price</h1>
          </div>
          {cartItems.map((item) => (
            <>
              {console.log(item)}
              <FoodItem key={item.id} {...item} />
            </>
          ))}
          {/* <div className="flex justify-between">
            <p className="font-bold text-sm">To Pay</p>
            <p className="font-bold  text-sm">{"₹ " + getItemTotal()}</p>
          </div> */}
        </div>
      </div>
    </>
  ) : (
    <>
      <EmptyCart />
    </>
  );
};
export default Cart;









{/* <div className="btn flex justify-between items-center gap-3 py-1 px-3 border-2 border-slate-500">
                <button onClick={() => quantity >= 2 ? dispatch(decrQuantity(item?.id)) : dispatch(removeItem(item?.id))}>-</button>
            <div className="w-2 flex justify-center items-center">{quantity}</div>
            <button onClick={() => dispatch(incrQuantity(item?.id))}>+</button>
            </div> */}