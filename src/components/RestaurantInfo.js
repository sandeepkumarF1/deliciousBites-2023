import { useParams } from "react-router-dom";
import { ImgCdnLink } from "./Config";
import { MenuShimmer } from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { BiCheckboxSquare } from "react-icons/bi";
import {GiSolidLeaf} from "react-icons/gi"
const RestaurantInfo = () => {
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);

  const dispatch = useDispatch();
  // const handleAddItem =() =>{
  //     dispatch(addItem("pay"));

  // }

  const addFoodItem = (inItem) => {
    dispatch(addItem(inItem));
  };

  return !restaurant ? (
    <MenuShimmer />
  ) : (
    <div className="flex flex-col md:w-2/3 m-auto w-full">
      {/* Stats here */}
      {/* {console.log(restaurant.info)} */}
      <div className="flex flex-col justify-between p-4  border-b md:flex-row gap-3 w-full">
        <div className="flex flex-col gap-1">
          {/* <h1>Restraunt id: {resId}</h1> */}
          <span className="text-xl font-bold">{restaurant?.info?.name}</span>
          <span className="">{restaurant?.info?.cuisines.join(", ")}</span>
          <span className="">
            {restaurant?.info?.areaName}, {restaurant?.info?.locality},{" "}
            {restaurant?.info?.city}{" "}
            {/* <span className="text-orange-600 font-bold">𖡡</span> */}
          </span>
          <span className="flex">
            <span className="flex items-center gap-1 px-1 mr-2 rounded-sm text-white bg-green-600  font-semibold">
              <span className="text-[0.7rem]">
                {restaurant?.info?.avgRating}{" "}
              </span>
              <span className="text-white text-[0.8rem]">★ </span>
            </span>
            | {restaurant?.info?.totalRatingsString}
          </span>
        </div>
        <img
          className="w-56 h-36 rounded"
          src={ImgCdnLink + restaurant?.info?.cloudinaryImageId}
        />
      </div>

      <div className="flex gap-8 items-center p-4 text-sm md:text-base">
        <div className="flex items-center gap-2 font-semibold">
          <svg
            className="RestaurantTimeCost_icon__8UdT4"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <circle
              r="8.35"
              transform="matrix(-1 0 0 1 9 9)"
              stroke="#3E4152"
              strokeWidth="1.3"
            ></circle>
            <path
              d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
              fill="#3E4152"
            ></path>
          </svg>
          <span className="">{restaurant?.info?.sla?.slaString}..</span>
        </div>
        <div className="flex items-center gap-2 font-semibold">
          <svg
            className="RestaurantTimeCost_icon__8UdT4"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <circle
              cx="9"
              cy="9"
              r="8.25"
              stroke="#3E4152"
              strokeWidth="1.5"
            ></circle>
            <path
              d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z"
              fill="#3E4152"
            ></path>
          </svg>
          <span className="">{restaurant?.info?.costForTwoMessage}</span>
        </div>
      </div>

      <div className="flex gap-10 mb-20 px-5 overflow-hidden">
        {restaurant?.info?.aggregatedDiscountInfoV2?.descriptionList?.map(
          (offer) => (
            <div className=" p-3 border border-gray-300 w-[30%]">
              <h1 className="font-medium">⚡ {offer.meta.toString()}</h1>
            </div>
          )
        )}
      </div>

      <div className="div pt-6 ">
        {restaurant.info?.veg ? <div className="text-green-800 font-medium flex gap-3 justify-start items-center"><GiSolidLeaf /><h1>PURE VEG</h1></div> : ''}
      </div>
{/* {console.log(restaurant.menu)} */}
      <div className="border-t">
        <h1 className="text-2xl font-medium ps-5 my-5">Recommended</h1>
        <ul>
          {restaurant.menu?.map((item, i) =>
            item.map((inItem, j) => (
              <div
                className="flex flex-col border-b ps-5 justify-between pb-6 mb-4 gap-6 md:flex-row"
                key={inItem?.card?.info?.id}
              >
                <div className="flex flex-col gap-2 w-full md:w-3/4">
                  <div className="">
                    {(inItem.card?.info?.isVeg===1) ? <div className="text-green-700 text-2xl"><BiCheckboxSquare /></div> : <div className="text-orange-600 text-2xl"><BiCheckboxSquare /></div>}
                  </div>
                  <span className="font-semibold">
                    {inItem?.card?.info?.name}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">
                      &#8377;
                      {inItem.card?.info.price / 100 ||
                        inItem.card?.info.defaultPrice / 100}
                    </span>
                  </div>
                  <p className="text-sm text-[#535665] ">
                    {inItem?.card?.info?.description}
                  </p>
                </div>

                <div className=" flex flex-col gap-1 relative md:w-1/4 w-auto">
                  <img
                    className="w-32 h-24 rounded self-center object-cover"
                    src={ImgCdnLink + inItem.card?.info.imageId}
                    alt="foodImage"
                  />
                  <button
                    className=" h-9 absolute bottom-[-8px] bg-white shadow-md border self-center text-[0.9rem] py-1 px-2 font-medium rounded  active:scale-90 hover:bg-gray-200 transition-all duration-300 ease-in-out"
                    onClick={() => addFoodItem(inItem?.card?.info)}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantInfo;





















{
  /* ostarts */
}
{
  /* <div>
        <h3 className="font-medium">Restaurant id: {resId}</h3>
        <h1 className="text-3xl font-medium">{restaurant?.info?.name}</h1>
        <img
          className="outline rounded shadow-2xl my-5"
          src={ImgCdnLink + restaurant?.info?.cloudinaryImageId}
          alt="restaurant image"
        />
        <h3 className="font-medium my-1">
          LOCALITY: {restaurant?.info?.locality}
        </h3>
        <h3 className="font-medium my-1">AREA: {restaurant?.info?.areaName}</h3>
        <h3 className="font-medium my-1">CITY: {restaurant?.info?.city}</h3>
        <h3 className="font-medium my-1">
          RATING: {restaurant?.info?.avgRating} stars
        </h3>
        <h3 className="font-medium my-1">
          PRICE FOR 2: {restaurant?.info?.costForTwoMessage}
        </h3>
      </div> */
}
{
  /* <div>
                <button className="bg-blue-200" onClick={() => handleAddItem()}>Add Item</button>
            </div> */
}
{
  /* <div>
        <h1 className="text-3xl font-medium">Menu</h1>
        <ul>
          {restaurant.menu?.map((item, i) =>
            item.map((inItem, j) => (
              <li
                className="font-medium my-1 list-disc"
                key={inItem.card.info.id}
              >
                {inItem.card.info.name} -
                <button
                  className="m-2 px-2 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-900"
                  onClick={() => addFoodItem(inItem.card.info)}
                >
                  Add Item
                </button>
              </li>
            ))
          )}
        </ul>
      </div> */
}
