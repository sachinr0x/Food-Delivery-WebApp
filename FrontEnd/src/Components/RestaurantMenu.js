// import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const restaurantInfo = resInfo?.data?.cards?.find(
    (entry) => entry?.card?.card?.info,
  )?.card?.card?.info;

  console.log(restaurantInfo);

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
      <section className="restaurant-banner">
        <h1>{restaurantInfo?.name ?? "Restaurant"}</h1>
        <p>{restaurantInfo?.costForTwoMessage}</p>
      </section>
      {categories.map((category) => (
        <section
          key={category.categoryId ?? category.title}
          className="category-container"
        >
          <h2>{category.title}</h2>
          <ul>
            {(category.itemCards ?? []).map((dishCard) => {
              const dish = dishCard?.card?.card?.info ?? dishCard?.card?.info;

              if (!dish) return null;

              const price =
                dish.price ??
                dish.defaultPrice ??
                dish.variantsV2?.pricingModels?.[0]?.price;

              return (
                <li key={dish.id}>
                  {dish.name} -{" "}
                  {price != null ? `₹${price / 100}` : "Price unavailable"}
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default RestaurantMenu;
