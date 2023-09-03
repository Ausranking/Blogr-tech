import { bg_circle, phones } from "../assets/images";

const SmartPhoneSection = () => {
  console.log(typeof (-4 + 3 + "8"))
  console.log(-4 +3 + '18')

  return (
    <section className=" bg-desaturated-blue dark:bg-white/5 rounded-tr-[19%] rounded-bl-[19%] mt-20 ">
      <div className="flex flex-col flex-grow items-center space-x-8 w-[90%] m-auto relative h-[60vh] md:flex-row">
        <div className="flex-1 h-full w-full absolute left-0 top-[-19%] ">
          <img
            src={phones}
            alt=""
            className=" bg-circle-bg bg-left-top bg-cover "
          />
        </div>
        <div className="flex-1 absolute left-[20%]">
          <h2 className="mt-5">State of the Art Infrastructure</h2>
          <p>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are,keeping your
            site competitive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SmartPhoneSection;
