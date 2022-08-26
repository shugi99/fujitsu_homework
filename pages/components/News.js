import { news_section } from "pages/utils/config";

const News = () => {
  return (
    <div className="px-8 py-16 xl:px-[7rem] 2xl:px-[19rem]">
      <div className="text-2xl font-bold text-center xl:text-3xl">Heading</div>
      {news_section.map((section, i) => (
        <div key={i}>
          <div
            className={`${i % 2 === 0 ? "" : "hidden lg:block "} my-2 lg:my-6`}
          >
            <hr />
          </div>
          <div className="grid grid-cols-3 lg:my-4 ">
            <div className="">{section.title}</div>
            <div className="col-span-2">{section.details}</div>
          </div>
          <div className="my-2 ">
            <hr />
          </div>
        </div>
      ))}

      {/* <div className="hidden my-2 lg:block lg:my-6">
        <hr />
      </div>
      <div className="grid grid-cols-3 px-8 lg:my-4">
        <div className="">yyyymmdd</div>
        <div className="col-span-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt{" "}
        </div>
      </div>
      <div className="my-2 ">
        <hr />
      </div> */}
    </div>
  );
};

export default News;
