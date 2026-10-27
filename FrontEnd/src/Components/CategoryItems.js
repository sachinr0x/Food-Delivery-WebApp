import { CDN_URL } from "../Constants/constants";

const CategoryItems = (props) => {
  const { category, showItems, setShowIndex } = props;

  const handleClick = () => {
    setShowIndex?.();
  };

  return (
    <div className="category-items-container">
      <section
        className="category-info"
        onClick={handleClick}
      >
        <h2>
          {category.title} ({category?.itemCards?.length ?? 0})
        </h2>
        <span>{showItems ? "⬆️" : "⬇️"}</span>
      </section>
      {showItems && (
        <section className="category-items-list">
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
                  <div className="flex">
                    <img src={CDN_URL + dish.imageId} alt={dish.name} />
                    {dish.name} -{" "}
                    {price != null ? `₹${price / 100}` : "Price unavailable"}
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </div>
  );
};

export default CategoryItems;

