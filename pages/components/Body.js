import { body_section } from "src/utils/config";

const Body = () => {
  return (
    <div className="px-8 py-12 xl:px-[9rem] 2xl:px-[24rem]">
      <div className="text-2xl font-bold text-center xl:text-3xl">Heading</div>
      <div className="pt-6 text-xl font-bold xl:text-xl">Heading</div>
      {body_section.map((section, i) => (
        <div key={i}>
          <div className="pt-4 ">{section.paragraph_1}</div>
          <div className="justify-between lg:flex lg:flex-row ">
            <div
              className={`mt-4 ${
                i % 2 === 0 ? "lg:pl-8 lg:order-2" : "lg:pr-8"
              }  lg:w-1/2  2xl:w-3/5`}
            >
              <div>{section.paragraph_2}</div>
              <div className="pt-4">{section.paragraph_2}</div>
            </div>
            <img
              src={section.image}
              alt={section.alt}
              className={`${
                i % 2 === 0 ? "lg:order-1" : ""
              } object-cover w-full mt-4  h-1/2 lg:h-[20rem] lg:w-1/2 2xl:w-2/5`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Body;
