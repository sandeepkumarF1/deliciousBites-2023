import { useState, useEffect } from "react";
import { RestMenuLink } from "../components/Config";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(RestMenuLink + resId);
    const json = await data.json();
    const menuItemList =
      json.data.cards[2]["groupedCard"].cardGroupMap.REGULAR.cards;
    const itemCategory =
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    const NestedItemCategory =
      "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";

    const menu = menuItemList.map((item) => {
      if (
        item.card.card["@type"] === itemCategory ||
        item.card.card["@type"] === NestedItemCategory
      ) {
        return item?.card?.card?.itemCards;
      }
    });
    const modifiedData = {
      info: json.data.cards[0]?.card?.card?.info,
      menu: menu.filter((value) => value !== undefined),
    };
    setRestaurant(modifiedData);
  }
  return restaurant;
};

export default useRestaurant;

// +"&submitAction=ENTER"
