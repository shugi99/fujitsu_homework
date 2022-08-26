const ContactUs = () => {
  return (
    <div className="relative w-full h-[24rem] xl:h-[30rem] bg-gray-300">
      <img
        src="/images/bg_contact.jpg"
        className="absolute object-cover w-full h-full mix-blend-overlay"
      />
      <div className="absolute w-5/6 ml-10 top-[2rem] lg:top-1/4 xl:px-[7rem] 2xl:px-[17rem]">
        <div className="2xl:text-[56px] text-2xl font-bold pt-14">Join Us</div>
        <div className="pt-4 lg:text-xl md:w-2/3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </div>
        <button className="items-center lg:text-xl w-[12rem] mt-4  h-[3rem] text-white bg-black">
          Contact
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
