import { bg_circle, phones } from "../assets/images";

const SmartPhoneSection = () => {
  return (
    <section className="w-screen min-h-[55vh] mt-32 p-6 relative rounded-tr-[19%] rounded-bl-[19%]  md:flex justify-between lg:max-h-[30vh] items-center mb-28 bg-desaturated-blue">
      <div className=" w-full flex-1">
        <img
          src={phones}
          alt=""
          className="bg-circle-bg bg-no-repeat bg-cover object-cover "
        />
      </div>
      <div className=" w-full flex-1 grid place-items-center">
        <h3 className="text-2xl text-text-white text-center p-2 ">
          State of the Art Infrastructure
        </h3>
        <p className=" text-text-white/70 px-4 text-2xl max-sm:text-center">
          With reliability and speeding in mind, worldwide data centers provide
          the backbone for ultra-fast connectivity. This ensures your site will
          load instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </div>
    </section>
  );
};

export default SmartPhoneSection;
