const Shimmer = ({ items }) => {
  const jsx = Array(items).fill();

  return (
    <div className="flex flex-wrap">
      {jsx.map((value, index) => (
        <div
          className="w-[230px] h-[400px] m-[20px] rounded p-[10px] border-neutral-700 border-2"
          key={index}
        >
          <div className="h-[50%] w-[100%] bg-gray-300"></div>
          <h4></h4>
          <h5></h5>
          <h5></h5>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
