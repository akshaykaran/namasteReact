import { CARD_IMG } from "../utils/Constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRatingString, cuisines } = resData?.info;

  return (
    <div className="border-2 border-black p-4 m-4 w-52 h-96 rounded-lg">
      <img
        className="border border-black"
        src={CARD_IMG + `${cloudinaryImageId}`}
        alt="Mummy's Kitchen"
      />

      <h3 className="mt-4 font-bold">{name}</h3>
      <h4>{avgRatingString}</h4>
      <h4>{cuisines.join(" , ")}</h4>
    </div>
  );
};

export default RestaurantCard;
