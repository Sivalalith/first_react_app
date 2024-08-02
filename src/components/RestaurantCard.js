import { Link } from "react-router-dom"; // Provides 'to' route -> when clicked the URL changes to it
import { IMG_CDN_URL } from "../constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({
  id,
  name = "",
  imageId = "",
  cuisines = [],
  rating = "",
}) => {
  const { user } = useContext(UserContext);
  return (
    <Link to={"/restaurant/" + id}>
      <div
        className="w-[230px] h-[400px] m-[20px] border-neutral-700 border-2 rounded p-[10px] 
      hover:h-[380px] hover:my-[30px] hover:mr-[20px] hover:p-[10px] hover:shadow-gray-500/50 hover:shadow-lg"
      >
        <img src={IMG_CDN_URL + imageId} className="h-[50%] w-[100%]" />
        <h4 className="w-auto p-2 font-bold">{name}</h4>
        <h5 className="w-auto p-2">{cuisines.join(", ")}</h5>
        <h5 className="p-2">{rating} stars</h5>
        <h5 className="p-2 font-bold">
          {user.name}-{user.email}
        </h5>
      </div>
    </Link>
  );
};

export default RestaurantCard;
