import { CARD_IMG } from "../utils/Constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRatingString, cuisines } = resData?.info;

  return (
    <div className="restaurant-cards">
      <img
        className="res-img"
        src={CARD_IMG + `${cloudinaryImageId}`}
        alt="Mummy's Kitchen"
      />

      <h3>{name}</h3>
      <h4>{avgRatingString}</h4>
      <h4>{cuisines.join(" , ")}</h4>
    </div>
  );
};

export default RestaurantCard;
