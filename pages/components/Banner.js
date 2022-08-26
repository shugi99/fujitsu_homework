const Banner = () => {
  return (
    <div className="lg:flex">
      <img
        src="/images/kv.jpg"
        alt="fujitsu bg"
        className="object-cover w-full h-[30rem] lg:w-1/2 lg:order-2"
      />
      <div className="relative lg:w-1/2 lg:order-1">
        <img
          src="/images/bg_gradient.png"
          alt="bg image"
          className="h-[15rem] w-full lg:h-[30rem]"
        />
        <div className="absolute w-5/6 ml-10 top-1/3 lg:top-1/3">
          <h1 className="xl:pl-[9rem] 2xl:pl-[17rem] text-3xl xl:text-5xl font-bold">
            Page Title
          </h1>
          <h2 className="xl:pl-[9rem] xl:pt-4 2xl:pl-[17rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor{" "}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
