export function filterRestraunt(searchInput, restraunList){
     
    return restraunList.filter((restraunt) => 
    
    // {(restraunt.info === undefined) ? 
    //     restraunt?.data?.name?.toLowerCase()?.includes(searchInput) ||
    //     restraunt?.data?.cuisines.join(", ").toLowerCase().includes(searchInput) 
    //     : 
    //     restraunt?.info?.name?.toLowerCase()?.includes(searchInput) ||
    //     restraunt?.info?.cuisines.join(", ").toLowerCase().includes(searchInput)
    // }
    
    restraunt?.data?.name?.toLowerCase()?.includes(searchInput) ||
    restraunt?.data?.cuisines.join(", ").toLowerCase().includes(searchInput)

    );

}

export function filterRating(restraunList){
    // const ratingCard = restraunList.sort((a,b)=>{
    //         return b.data.avgRating - a.data.avgRating;
    //     }) or
    // a.data.avgRating<b.data.avgRating ? 1 : -1 
    // console.log(restraunList)

    const ratingCard = restraunList.sort((a,b)=> b.data.avgRating-a.data.avgRating );
    return ratingCard;
}

export function filterTime(restraunList){
    const duraTime = restraunList.sort((a,b)=> a.data.sla.deliveryTime - b.data.sla.deliveryTime);
    return duraTime;
}

export function filterPricelth(restraunList){
    const price = restraunList.sort((a,b)=> a.data.costForTwoString.slice(1,4) - b.data.costForTwoString.slice(1,4));
     return price;
}

export function filterPricehtl(restraunList){
    const price = restraunList.sort((a,b)=> b.data.costForTwoString.slice(1,4) - a.data.costForTwoString.slice(1,4));
     return price;
}


