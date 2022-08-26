const VideoBanner = () => {
  return (
    <div className="px-8 py-20 bg-gray-200 xl:px-[9rem] 2xl:px-[24rem]">
      <div className="text-2xl font-bold text-center xl:text-3xl">Heading</div>
      <div className="pt-4 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
      </div>
      <div className="pt-4 ">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </div>
      <iframe
        className="w-full pt-8 h-[30rem]  "
        src="https://www.youtube.com/embed/EWIr5Hqj2ys"
        allowFullScreen
        title="Youtube Video"
      ></iframe>
    </div>
  );
};

export default VideoBanner;
