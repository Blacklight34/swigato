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
