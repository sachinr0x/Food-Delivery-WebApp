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

export const withPromotedLabel = (RestaurantCard) =>{
    return (props) => {
        return(
            <div className='relative'>
                <label className = "absolute top-0 bg-black text-amber-50 p-1.5 rounded-2xl z-50">PROMOTED</label>
                <RestaurantCard  {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;