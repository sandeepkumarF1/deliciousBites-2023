import React from "react";
import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import {
  filterRestraunt,
  filterRating,
  filterTime,
  filterPricehtl,
  filterPricelth,
} from "../utils/helper";
import useOnline from "../utils/useOnline";
import Crousel from "./Crousel";
import OnMind from "./OnMind";
import { HOME_RESTAU_LIST } from "./Config";

const Home = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  // console.log(allRestaurants);
  const [filteredRestraunList, setFilteredRestraunList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    // try{
    //   const data = await fetch(
    //     "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.3260152&lng=75.57618289999999"
    //   );
    //   const json = await data.json();
    //   // console.log(json?.data?.cards[2]?.data?.data?.cards)

    //   // console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle.restaurants);
    //     if(json?.data?.cards[2]?.data?.data?.cards === undefined){
    //             setAllRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle.restaurants);
    //     }
    //     else{
    //       setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    //     }
    //   // setAllRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle.restaurants);
    //   if(json?.data?.cards[2]?.data?.data?.cards === undefined){
    //     setFilteredRestraunList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle.restaurants);
    //   }
    //   else{
    //     setFilteredRestraunList(json?.data?.cards[2]?.data?.data?.cards);
    //   }
    //   // setFilteredRestraunList(json?.data?.cards[2]?.data?.data?.cards);
    //   // setFilteredRestraunList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle.restaurants);

    // }
    // catch(error){
    //   console.log(error);
    // }

    const mock_data = HOME_RESTAU_LIST;
    // console.log(mock_data)
    setAllRestaurants(mock_data?.data?.cards[2]?.data?.data?.cards);

    setFilteredRestraunList(mock_data?.data?.cards[2]?.data?.data?.cards);
  }
  // console.log(filteredRestraunList)
  const status = useOnline();
  if (!status) {
    return (
      <>
        <img
          src="C:\Users\Apple\Desktop\React\React reacts\FoodDel\public\assets\images\offline.png"
          alt="error"
        />
        <h1>🔴⭕You are Offline⭕🔴</h1>
      </>
    );
  }

  // if (!allRestaurants) return null;
  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <Crousel />
      <OnMind />
      <div className="p-5 my-2 flex flex-wrap gap-x-24 gap-y-5">
        <div>
          <input
            type="text"
            className="w-72 h-9 mx-5 bg-gray-100 border border-black"
            placeholder="Search for restaurants & food"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
              const data = filterRestraunt(searchInput, allRestaurants);
              setFilteredRestraunList(data);
            }}
          ></input>
          <button
            className="p-2 bg-violet-700 text-white rounded-full w-20 hover:bg-violet-500 font-medium"
            onClick={() => {
              const data = filterRestraunt(searchInput, allRestaurants);
              setFilteredRestraunList(data);
            }}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        {/* Filters Start Here */}
        <div className="flex gap-x-10">
          <button
            className="p-2 bg-transparent border border-black rounded-md font-medium focus:outline-none focus:ring focus:ring-violet-500 "
            onClick={() => {
              const ratings = filterRating(filteredRestraunList);
              setFilteredRestraunList(ratings);
              const data = filterRestraunt(searchInput, filteredRestraunList);
              setFilteredRestraunList(data);
            }}
          >
            Rating
          </button>

          <button
            className="p-2 bg-transparent border border-black rounded-md font-medium focus:outline-none focus:ring focus:ring-violet-500"
            onClick={() => {
              const duraTime = filterTime(filteredRestraunList);
              setFilteredRestraunList(duraTime);
              const data = filterRestraunt(searchInput, filteredRestraunList);
              setFilteredRestraunList(data);
            }}
          >
            Durataion Time
          </button>

          <button
            className="p-2 bg-transparent border border-black rounded-md font-medium focus:outline-none focus:ring focus:ring-violet-500"
            onClick={() => {
              const price = filterPricelth(filteredRestraunList);
              setFilteredRestraunList(price);
              const data = filterRestraunt(searchInput, filteredRestraunList);
              setFilteredRestraunList(data);
            }}
          >
            Price : Low to High
          </button>

          <button
            className="p-2 bg-transparent border border-black rounded-md font-medium focus:outline-none focus:ring focus:ring-violet-500"
            onClick={() => {
              const price = filterPricehtl(filteredRestraunList);
              setFilteredRestraunList(price);
              const data = filterRestraunt(searchInput, filteredRestraunList);
              setFilteredRestraunList(data);
            }}
          >
            Price : High to Low
          </button>
        </div>
      </div>

      {/* Restaurants Cards */}
      <div className="flex flex-wrap justify-start">
        {filteredRestraunList.map((restraunt) => {
          // let case1 = restraunt;
          // console.log(case1)
          // if(case1.info === undefined){
          //   case1 = restraunt.data;
          //   console.log("a")
          // }
          // else{
          //   case1 = restraunt.info;
          //   console.log("b")
          // }
          return (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/restaurant/" + restraunt.data.id}
              key={restraunt.data.id}
            >
              <RestrauntCard {...restraunt.data} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Home;
