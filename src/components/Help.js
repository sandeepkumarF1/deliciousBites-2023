import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { FAQ } from "./Config";

const Section = ({id, title, description, isVisible, setIsVisible }) => {
  
  return (
    
    <div className="flex flex-col border border-violet-300 rounded-md p-2.5 m-2.5">
      <div className="flex justify-between items-center"> 
        <h3 className="font-semibold text-lg text-title">{title}</h3>
        {
        isVisible ? (
        <SlArrowUp onClick={() => setIsVisible(false)} className="cursor-pointer" />
      ) : (
        <SlArrowDown onClick={() => setIsVisible(true)} className="cursor-pointer" />
      )}
      </div>
      {isVisible && <p className="text-bio text-base">{description}</p>}
    </div>
  );
};

const Help = () => {
  const [visibleSection, setVisibleSection] = useState(""); /* Initially description of all questions are hidden */

  return (
    <div className="container">
      <div className="card-container">
      <h1 className="card-container-title p-5 text-3xl font-semibold text-center"> FAQ</h1>
      {FAQ.map((question) => {
        return (
          <Section key={question.id} id={question.id} title={question.title} description={question.description}
          isVisible={visibleSection === question.id }
          setIsVisible={(display) => {
            if(display) {
              setVisibleSection(question.id);
            } else {
              setVisibleSection(" ");
            }
          }
          } />
  
        )
      }
      )}
      </div>
    </div>
  );
};

export default Help;

























// {
  /* <img src=""></img>
                <h3>Burger King</h3>
                <h4>American, Pepsi</h4>
                <h5>4.3 Stars Rating</h5> */
// }
// -----------------------------------------------
// console.log(searchInput)
// console.log(restraunList,"fil")
// // console.log(RestrauntList)
// const filteredRestraunt = restraunList.filter((restraunt) =>{
//     restraunt.info.name.includes(searchInput)
// });
// console.log(restraunList.filter((restraunt) =>{
//     restraunt.info.name.includes(searchInput)
// }));
// console.log(filteredRestraunt,"filldata")
// return filteredRestraunt;

// {
  /* <p>{searchInput}</p> */
// }
// {
  /* ///     WORK START FORM HERE */
// }
// {
  /* <span className="mx-20">
                    <button className="p-2 bg-gray-600 text-white rounded-md w-20 hover:bg-blue-500 font-medium" 
                    onClick={() => {
                       
                        const ratings = filterRating(allRestaurants);
                        setFilteredRestraunList(ratings);
                        // allRestaurants.map((rst)=>{
                        //     // console.log(rst.data.avgRating+"  "+rst.data.id)
                            
                        // })
                        // setFilteredRestraunList(ratingCard);
                        // allRestaurants(ratingCard);
                        
                        
                        // const ratings = allRestaurants.map((restraunts) => restraunts?.data?.avgRating);
                        // const ratingCard = filterRating( ratings, allRestaurants);
                        // console.log(ratingCard);
                    }} x>Rating</button>
                </span> */
// }
// {
  /* restraunList.filter((restraunt) => 
    restraunt?.data?.name?.toLowerCase()?.includes(searchInput) */
// }

// const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=31.3260152&lng=75.57618289999999");
// setAllRestaurants(json?.data?.success?.cards[5]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
// setFilteredRestraunList(json?.data?.success?.cards[5]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
