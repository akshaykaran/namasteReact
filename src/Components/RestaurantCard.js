import { CARD_IMG } from "../utils/constants";
import star from "../assets/images/star2.png";
import book from "../assets/images/book.png";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRatingString, cuisines } = resData?.info;

  return (
    <div className="border-2 border-orange-500 p-4 m-4 w-64 h-[27rem] rounded-lg bg-orange-100 hover:bg-orange-200">
      <img
        className="border border-black rounded-lg w-56 h-48"
        src={CARD_IMG + `${cloudinaryImageId}`}
        alt="Mummy's Kitchen"
      />
      <h3 className="mt-4 font-bold text-center border-b-2 border-black">
        {name}
      </h3>
      <h4 className="pt-4 flex gap-3">
        <img
          src={star}
          alt="stars"
          className="w-6 h-6 border border-black rounded-xl"
        />
        {avgRatingString}
      </h4>
      <h4 className="pt-4 flex gap-3 italic">
        <img
          src={book}
          alt="book"
          className="w-6 h-6 border border-black rounded-xl"
        />
        {cuisines.join(", ")}
      </h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-2 p-2 bg-black text-white rounded-lg">
          {" "}
          Promoted{" "}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
