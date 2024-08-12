import { useState } from "react";

const ItemList = ({ title, children, isSubSection = false }) => {
  const [isVisible, setIsVisible] = useState(!isSubSection); // control state/toggle visibility of item list
  const handleClick = () => {
    isVisible ? setIsVisible(false) : setIsVisible(true);
  };

  return (
    <div
      className={` w-[900px] flex flex-col justify-center items-center ${
        isSubSection ? "pl-4" : ""
      }`}
    >
      <div className="bg-gray-100 flex justify-between m-2 p-5 w-[100%] rounded-lg shadow-lg">
        <span
          className={`text-xl font-semibold ${isSubSection ? "text-base" : ""}`}
        >
          {title} ({children.length})
        </span>
        <button onClick={handleClick}>{isVisible ? "🔼" : "🔽"}</button>
      </div>
      {isVisible && children}
    </div>
  );
};

export default ItemList;
