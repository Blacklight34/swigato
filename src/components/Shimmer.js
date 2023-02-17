export const Shimmer = () => {
  // console.log()
  return (
    <div className="cards-layout">
      {Array(50)
        .fill("")
        .map((e) => {
          return (
            <div className="shimmer-card">
              <div className="shimmer-img"></div>
              <div className="shimmer-name"></div>
              <div className="shimmer-opaque-text"></div>
              <div className="shimmer-info"></div>
            </div>
          );
        })}
    </div>
  );
};
// export default Shimmer;
export const ShimmerMenu = () => {
  return (
    // <div>Shimmer Loading.....</div>
    <div className="shimmer-menu-body">
      {Array(50)
        .fill("")
        .map((e) => {
          return <div className="shimmer-menu-card">
            <div className="shimmer-item-desc">
              <h2></h2>
              <p></p>
              <p id="shimmer-para"></p>
            </div>
            <div className="shimmer-item-img"></div>
          </div>;
         })}
    </div>
  );
};
