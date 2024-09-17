import { Carousel } from "antd";
import b2 from "../../../assets/images/b2.webp";
import b3 from "../../../assets/images/b3.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative w-full">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10 flex items-center justify-center md:justify-start lg:justify-start">
        {/* utils */}
        <div className="text-center lg:p-14 md:text-left md:ml-16 lg:-mt-20 md:-mt-10">
          <h1 className="text-white text-xs md:text-sm lg:text-base font-bold">
            BRING THE CLUB EXPERIENCE HOME
          </h1>
          <h2 className="text-white text-xl md:text-3xl lg:text-6xl font-serif mt-4 mb-5">
            CLUB SERIES+ <br /> CARDIO EQUIPMENT
          </h2>
          <Link
            to="/products"
            className="bg-secondaryColor text-white lg:font-bold font-semibold lg:py-3 lg:px-5  py-2 px-4 rounded-sm hover:bg-primaryColor"
          >
            Explore our products
          </Link>
        </div>
      </div>

      <Carousel className="w-full h-[300px] md:h-[400px] lg:h-[700px]" autoplay>
        <div>
          <img
            loading="lazy"
            className="w-full h-[300px] md:h-[400px] lg:h-[700px] object-cover"
            src={b3}
            alt="Shirtless bodybuilder doing side plank exercise"
          />
        </div>
        <div>
          <img
            loading="lazy"
            className="w-full h-[300px] md:h-[400px] lg:h-[700px] object-cover"
            src="https://i.ibb.co/G2chXCR/Screenshot-2024-08-18-110839.png"
            alt="Couple training together in gym"
          />
        </div>
        <div>
          <img
            loading="lazy"
            className="w-full h-[300px] md:h-[400px] lg:h-[700px] object-cover"
            src="https://i.ibb.co/yhPhGfh/Screenshot-2024-08-18-110831.png"
            alt="Muscular man doing push-ups with one hand"
          />
        </div>
        <div>
          <img
            loading="lazy"
            className="w-full h-[300px] md:h-[400px] lg:h-[700px] object-cover"
            src={b2}
            alt="Young healthy man athlete doing exercise with ropes in gym"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
