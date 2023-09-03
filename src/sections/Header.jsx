import Navbar from "./../components/Navbar";
import image from "../assets/images/header-bg-desk.svg";
import { Button } from "../components";

const Header = () => {
  return (
    <header className="bg-gradient-to-br from-light-red/90 to-v-light-header-gradient z-10 rounded-bl-[17%] max-w-screen mb-[15%] lg:mb-[10%]">
      <div className="w-full h-[85vh]">
        <img src={image} alt="" className="w-full h-full  object-cover" />
      </div>
      <Navbar />
      <section className={headerStyle()}>
        <div className="relative">
          <h1 className="m-auto text-2xl py-2 sm:text-5xl md:text-5xl text-text-white xl:text-6xl ">
            A modern publishing platform
          </h1>
          <p className="px-6 py-2 sm:p-4 text-xl md:text-5xl md:p-8 lg:text-4xl xl:text-3xl text-text-white ">
            Grow your audience and build your online brand
          </p>
        </div>
        <div className=" mt-2 lg:mt-4">
          <Button text="Start For Free" />
          <Button id="btn-learn-more" text="Learn More" />
        </div>
      </section>
    </header>
  );
};

export default Header;
const headerStyle = () =>
  "absolute top-[25%] text-center w-full h-2/5 flex flex-col justify-center";
