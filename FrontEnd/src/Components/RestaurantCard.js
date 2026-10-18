import {CDN_URL} from  '../Constants/constants.js'

const RestaurantCard = (props) =>{
    const {resData} = props
    const info = resData?.info
    return (<div className = "restaurant-card">
        <img className = "restaurant-image" src={CDN_URL + info?.cloudinaryImageId} alt="Restaurant" />
        <h3>{info?.name}</h3>
        <p>{[info?.cuisines].join(", ")}</p>
        <div className = "rating-container">
        <span>Rating: {info?.avgRating}</span>
        <span>Cost for Two: {info?.costForTwo}</span>
        </div>
    </div>)
}

export default RestaurantCard;