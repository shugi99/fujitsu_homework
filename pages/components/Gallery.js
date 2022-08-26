import React from "react";

const Gallery = () => {
  return (
    <div className="flex flex-col sm:px-8  xl:px-[9rem] 2xl:px-[24rem] pb-12">
      <div className="flex justify-between pt-10 ">
        <div>
          <img
            src="/images/003.jpg"
            className="w-40 h-40 mx-auto mt-4 rounded-full sm:h-56 sm:w-60 "
          />
          <div className="p-4 text-center">Lorem ipsum dolor sit amet</div>
        </div>
        <div>
          <img
            src="/images/004.jpg"
            className="w-40 h-40 mx-auto mt-4 rounded-full sm:h-56 sm:w-60"
          />
          <div className="p-4 text-center">Lorem ipsum dolor sit amets</div>
        </div>
        <div className="hidden lg:block">
          <img
            src="/images/005.jpg"
            className="w-40 h-40 mx-auto mt-4 rounded-full sm:h-56 sm:w-60"
          />
          <div className="p-4 text-center">Lorem ipsum dolor sit amet</div>
        </div>
      </div>
      <div className="lg:hidden">
        <img
          src="/images/005.jpg"
          className="w-40 h-40 mx-auto rounded-full sm:h-56 sm:w-60 mt-50"
        />
        <div className="w-full p-4 text-center">Lorem ipsum dolor sit amet</div>
      </div>
    </div>
  );
};

export default Gallery;
