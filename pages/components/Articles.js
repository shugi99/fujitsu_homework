import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { article_section } from "src/utils/config";

const Articles = () => {
  return (
    <div className="px-8 pt-20 pb-20 lg:pb-36 bg-gray-200 xl:px-[7rem] 2xl:px-[19.7rem]">
      <div className="text-2xl font-bold text-center xl:text-4xl">Heading</div>
      {article_section.map((section, i) => (
        <div key={i} className="cursor-pointer pt-14 lg:flex">
          <img
            src={section.image}
            alt={section.alt}
            className={`${
              i % 2 === 0 ? "lg:order-2" : ""
            } object-cover w-full pt-6 lg:pt-0 h-96 lg:w-1/2 `}
          />
          <div className="p-6 bg-white lg:p-16 lg:w-1/2 ">
            <div className="text-xl lg:text-2xl">Heading</div>
            <div className="pt-4">{section.paragraph_1}</div>
            <div className="flex pt-4 ">
              <FontAwesomeIcon icon={faComment} className="text-xl" />
              <div className="pl-4">More</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Articles;
