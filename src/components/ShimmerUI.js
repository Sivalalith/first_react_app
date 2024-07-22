const Shimmer = ({ items }) => {
  const jsx = Array(items).fill();

  return (
    <div className="card-list">
      {jsx.map((value, index) => (
        <div className="card" key={index}>
          <div style={{ height: "200px", backgroundColor: "#DEDEDE" }}></div>
          <h4 style={{ height: "20px" }}></h4>
          <h5 style={{ height: "18px" }}></h5>
          <h5 style={{ height: "18px" }}></h5>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
