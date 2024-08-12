import { IMG_CDN_URL } from "../constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Item = ({ name, description, cost, imageID }) => {
  const dispatch = useDispatch(); // to dispatch an action to the store who forwards it later to the 'reducer'

  const handleAddItem = (name, description, cost, imageID) => {
    dispatch(
      addItem({
        name: name,
        description: description,
        cost: cost,
        imageID: imageID,
      })
    ); // when item added (action), we dispatch it to the store
  };

  return (
    <>
      <div
        className="bg-gray-100 px-2 mx-2 flex justify-between h-[200px]
    w-[100%] rounded"
      >
        <div className="w-[60%]">
          <span className="block py-5 px-2">
            {name} - Rs.{cost / 100}
          </span>
          <p className="block px-2">{description}</p>
        </div>
        <div className="relative p-4">
          <img
            src={IMG_CDN_URL + imageID}
            alt="an image of the dish"
            className="h-36 w-40 p-2"
          ></img>
          <button
            className="bg-blue-600 text-white relative bottom-[80%] left-1/3 p-1 mt-0.5 rounded"
            onClick={() => handleAddItem(name, description, cost, imageID)}
          >
            Add +
          </button>
        </div>
      </div>
      <hr className="border-solid border-gray-100 border"></hr>
    </>
  );
};

export default Item;
