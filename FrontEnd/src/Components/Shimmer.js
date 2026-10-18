// import {ShimmerTable} from 'shimmer-effects-react'
// const Shimmer = () =>{
// <div></div>
// }

// export default Shimmer;

const ShimmerCard = () => {
  return (
    <div className="shimmer-card m-2.5">
      {/* Restaurant image */}
      <div className="shimmer shimmer-image bg-gray-500 w-33 h-45"></div>

      {/* Restaurant details */}
      <div className="shimmer-content">
        <div className="shimmer shimmer-title"></div>
        <div className="shimmer shimmer-cuisines"></div>

        <div className="shimmer-meta">
          <div className="shimmer shimmer-rating"></div>
          <div className="shimmer shimmer-cost"></div>
        </div>
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="grid-cols-3">
      <ShimmerCard/>
      <ShimmerCard/>
      <ShimmerCard/>
      <ShimmerCard/>
      <ShimmerCard/>
      <ShimmerCard/>
      <ShimmerCard/>
      <ShimmerCard/>
      <ShimmerCard/>
    </div>
  );
};

export default Shimmer;