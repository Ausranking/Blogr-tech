import React from "react";
import { editorBlog } from "../constants";
import { editor, bg_circle, laptop, phones } from "../assets/images";

//find out the correct way to make all children in a grid container have same height and not overflow against another

const Main = () => {
  return (
    <main className="max-w-screen h-max ">
      <h2 className=" text-center max-sm:text-2xl md:text-3xl  mb-4">
        Designed for the future
      </h2>
      <div className="grid grid-cols-2 auto-rows-fr place-contents-center justify-center h-max gap-10  w-11/12 m-auto max-lg:flex  flex-col-reverse flex-grow">
        <div className="flex-1 h-full">
          {editorBlog.map((item, index) => (
            <div key={index}>
              <h3 className="text-center text-2xl p-4">{item.blogTitle}</h3>
              <p className="text-md  max-sm:text-center lg:text-lg">
                {item.blogDesc}
              </p>
            </div>
          ))}
        </div>
        <div className=" h-full w-full">
          <img
            src={editor}
            alt="editor illlustration"
            className=" h-full w-full object-cover"
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
