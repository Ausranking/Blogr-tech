import { laptop } from "../assets/images";
import { blogLists } from "../constants";

// const blog = () =>
//   blogLists.map((item) => (
//     <div>
//       <h2 className="text-text-white">{item.blogTitle}</h2>
//       <p>{item.blogDesc}</p>
//     </div>
//   ));

const BlogSection = () => {
  return (
    <section className=" grid grid-cols-2 auto-cols-fr auto-rows-fr place-items-center w-full max-sm:block mt-10 relative">
      <div className=" w- h-full">
        <img src={laptop} alt="laptop illustration" className="object-cover animate-pulse  "/>
      </div>
      <div className=" ">
        {blogLists.map((item) => (
          <div key={item.blogTitle}>
            <h2 className="text-center text-xl md:text-2xl p-2 md:text-start">{item.blogTitle}</h2>

            <p className="px-2 text-center text-md md:text-start">
              {item.blogDesc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
