// import Carousel from "better-react-carousel";

const Gallery = () => {
  return (
    <div className="carousel w-11/12 m-auto">
      <div id="slide1" className="carousel-item relative w-44 h-44">
        <img
          src="https://res.cloudinary.com/ddqu2owjp/image/upload/v1695729878/cld-sample-5.jpg"
          className=" w-full h-full object-cover"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative">
        <img
          src="https://res.cloudinary.com/ddqu2owjp/image/upload/v1695729875/samples/cup-on-a-table.jpg"
          className=""
        />
        <div className="absolute flex justify-between transform left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative ">
        <img
          src="https://res.cloudinary.com/ddqu2owjp/image/upload/v1695729870/samples/shoe.jpg"
          className=""
        />
        <div className="absolute flex justify-between  left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative">
        <img
          src="https://res.cloudinary.com/ddqu2owjp/image/upload/v1695729876/cld-sample.jpg"
          className=""
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
    //       <div className="w-11/12 m-auto">
    //           <Carousel dot={MyDot} cols={2}  gap={5} loop >
    //       <Carousel.Item>
    //         <img
    //           width="100%"
    //           src="https://res.cloudinary.com/ddqu2owjp/image/upload/v1695729878/cld-sample-5.jpg"
    //         />
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <img
    //           width="100%"
    //           src="https://res.cloudinary.com/ddqu2owjp/image/upload/v1695729876/cld-sample.jpg"
    //         />
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <img
    //           width="100%"
    //           src="https://res.cloudinary.com/ddqu2owjp/image/upload/v1695729870/samples/shoe.jpg"
    //         />
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <img
    //           width="100%"
    //           src="https://res.cloudinary.com/ddqu2owjp/image/upload/v1695729870/samples/shoe.jpg"
    //         />
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <img
    //           width="100%"
    //           src="https://res.cloudinary.com/ddqu2owjp/image/upload/v1695729875/samples/cup-on-a-table.jpg"
    //         />
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <img
    //           width="100%"
    //           src="https://res.cloudinary.com/ddqu2owjp/image/upload/v1695729872/samples/look-up.jpg"
    //         />
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <img
    //           width="100%"
    //           src="https://res.cloudinary.com/ddqu2owjp/image/upload/v1695729872/samples/look-up.jpg"
    //         />
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         {/* anything you want to show in the grid */}
    //       </Carousel.Item>
    //       {/* ... */}
    //     </Carousel>

    //       </div>
  );
};

export default Gallery;
