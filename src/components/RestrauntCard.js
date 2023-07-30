import { ImgCdnLink } from "./Config";

const RestrauntCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  sla,
  slaString,
  costForTwoString ,
  costForTwo ,
}) => {
  // console.log(props)
  // const {cloudinaryImageId, name, cuisines, avgRating} = restaurant.info;
  return (
    <div
      className="m-4 p-4 shadow-sm bg-white-50 rounded-md
          hover:shadow-lg hover:border border-gray-300
          gap-1 text-[0.8rem] text-[#535665] lg:w-72
          ">
      <img
        className="rounded object-cover"
        src={ImgCdnLink + cloudinaryImageId}
      />
      <h2 className="font-semibold text-lg text-black py-2">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      {/* //Rating */}
      <div className="flex justify-between items-center my-2 font-medium">
        {avgRating < 4 ? (
          <div className="flex items-center gap-1 px-1 text-white bg-orange-500  font-semibold">
            <span className="text-white text-[0.8rem]">★</span>
            <span className="text-[0.7rem]">
              {avgRating === "--" ? "4.2" : avgRating}
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-1 px-1 text-white bg-green-600  font-semibold">
            <span className="text-white text-[0.8rem]">★</span>
            <span className="text-[0.7rem]">
              {avgRating === "--" ? "4.2" : avgRating}
            </span>
          </div>
        )}

        <div className="w-[4px] h-[4px] rounded-full bg-black"></div>
        <span className="">{(slaString === undefined) ? sla.slaString : slaString} AWAY</span>
        <div className="w-[4px] h-[4px] rounded-full bg-black"></div>
        <span className="">{(costForTwoString === undefined)? costForTwo : costForTwoString}</span>
      </div>
    </div>
  );
};
export default RestrauntCard;



// costForTwoString 