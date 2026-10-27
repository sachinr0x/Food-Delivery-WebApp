const RestaurantBanner = (props) => {
  const { resName, costForTwo } = props;
  return (
    <div className="restaurant-banner-container">
      <span>
        <h1 className="text-2xl font-bold">{resName} </h1>
      </span>
      <span>
        <h1 className="text-2xl font-bold">{costForTwo}</h1>
      </span>
    </div>
  );
};
export default RestaurantBanner;
