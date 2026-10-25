const ShimmerCard = () => {
  return (
    <div className="h-[300px] w-full overflow-hidden rounded-[10px] border border-[#e3e9e3] bg-white shadow-[0_6px_20px_rgb(25_55_40_/_6%)] flex flex-col justify-between animate-pulse">
      {/* Restaurant Image Placeholder */}
      <div className="w-full h-47.5 bg-gray-200"></div>

      {/* Restaurant Details Placeholder */}
      <div className="flex-1 flex flex-col justify-between p-4">
        <div>
          {/* Restaurant Title Placeholder */}
          <div className="h-5 w-3/4 rounded bg-gray-200 mb-2"></div>
          {/* Restaurant Cuisines Placeholder */}
          <div className="h-3.5 w-1/2 rounded bg-gray-200"></div>
        </div>

        {/* Rating & Cost Placeholder */}
        <div className="flex items-center justify-between pt-1">
          <div className="h-3.5 w-16 rounded bg-gray-200"></div>
          <div className="h-3.5 w-20 rounded bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="w-full">
      {/* Filter Button Placeholder */}
      <div className="w-[90%] mx-auto mb-6">
        <div className="h-9 w-48 rounded-lg bg-gray-200 animate-pulse"></div>
      </div>

      {/* Restaurant Cards Grid Placeholder */}
      <div className="w-[90%] mx-auto grid grid-cols-[repeat(auto-fit,minmax(250px,300px))] gap-[22px] justify-center">
        {Array.from({ length: 12 }).map((_, index) => (
          <ShimmerCard key={index} />
        ))}
      </div>
    </div>
  );
};

export { ShimmerCard };
export default Shimmer;