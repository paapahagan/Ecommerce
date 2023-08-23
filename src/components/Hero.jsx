import { Link } from "react-router-dom";
import woman_hero from "../img/woman_hero.png";

function Hero() {
  return (
    <section className=" bg-pink-200 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around">
        {/* text */}
        <div className="flex flex-col justify-center">
          <div>
            {/* pretitle */}
            <div className=" font-semibold uppercase flex items-center">
              <div className=" w-10 bg-red-500 h-[2px] mr-3"></div>New Trends
            </div>
            {/* title */}
            <h1 className=" text-[70px] font-light leading-[1.1] mb-4">
              AUTUMN SALE STYLISH <br />
              <span className=" font-semibold">WOMENS</span>
            </h1>
            <Link
              to={"/"}
              className=" self-start font-semibold uppercase border-b-2 border-gray-700"
            >
              Discover More
            </Link>
          </div>
        </div>
        {/* image */}
        <div className=" hidden lg:block">
          <img src={woman_hero} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
