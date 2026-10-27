// import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantBanner from "./RestaurantBanner";
import CategoryItems from "./CategoryItems";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);

  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo);

  const restaurantInfo = resInfo?.data?.cards?.find(
    (entry) => entry?.card?.card?.info,
  )?.card?.card?.info;

  const regularCards =
    resInfo?.data?.cards?.find(
      (entry) => entry?.groupedCard?.cardGroupMap?.REGULAR,
    )?.groupedCard?.cardGroupMap?.REGULAR?.cards ?? [];

  console.log(regularCards);

  const categories = regularCards.flatMap((entry) => {
    const category = entry?.card?.card;
    const type = category?.["@type"];

    if (type?.endsWith(".ItemCategory")) {
      return [category];
    }

    if (type?.endsWith(".NestedItemCategory")) {
      const itemCards = (category.categories ?? []).flatMap(
        (subcategory) => subcategory.itemCards ?? [],
      );

      return itemCards.length ? [{ ...category, itemCards }] : [];
    }

    return [];
  });

  return (
    <div className="restaurantmenu-container">
      <RestaurantBanner
        resName={restaurantInfo?.name ?? "Restaurant"}
        costForTwo={restaurantInfo?.costForTwoMessage}
      />
      {categories.map((category, index) => ( 
        <CategoryItems
          key={category.categoryId ?? category.title}
          category={category}
          showItems={index === showIndex}
          setShowIndex={() => setShowIndex(index === showIndex ? -1 : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
