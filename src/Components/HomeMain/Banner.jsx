import React, { useContext } from "react";
import "../../Components/HomeMain/Banner.css";
import item1 from "../../assets/Car1Bg.jpg";
import item2 from "../../assets/item2.jpg";
import item3 from "../../assets/item3.jpg";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Banner = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="carousel w-full">
        {/* item1 */}
        <div id="slide1" className=" carousel-item relative w-full item1-bg">
          <div className="flex md:flex-row flex-col justify-between py-10 w-4/5 mx-auto items-center md:gap-0 gap-4">
            <div className="space-y-4 text-center md:text-start">
              <p className="text-white text-xl md:text-2xl lg:text-5xl font-medium">
                Explore the universe of <br />
                movies with
                <span className="text-[#37f51e]"> S</span>tar
                <span className="text-[#37f51e]">F</span>lix
              </p>
              <div>
                {user && user?.email ? (
                  <Link
                    to="/all-movies"
                    className="btn bg-[#37f51e81] border-2 border-[#37f51e] text-white rounded-lg"
                  >
                    Get Started
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="btn bg-[#37f51e81] border-2 border-[#37f51e] text-white rounded-lg"
                  >
                    Get Started
                  </Link>
                )}
              </div>
            </div>
            <div>
              <img src={item1} className="lg:w-64 lg:h-82 w-36 " />
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-outline">
              ❮
            </a>
            <a href="#slide2" className="btn btn-outline">
              ❯
            </a>
          </div>
        </div>
        {/* item2 */}
        <div id="slide2" className=" carousel-item relative w-full item2-bg">
          <div className="flex md:flex-row flex-col justify-between py-10 w-4/5 mx-auto items-center md:gap-0 gap-4">
            <div className="space-y-4 text-center md:text-start">
              <p className="text-white text-xl md:text-2xl lg:text-5xl font-medium">
                Know about science fiction
                <br />
                movies in
                <span className="text-[#37f51e]"> S</span>tar
                <span className="text-[#37f51e]">F</span>lix
              </p>
              <div>
                {user && user?.email ? (
                  <Link
                    to="/all-movies"
                    className="btn bg-[#37f51e81] border-2 border-[#37f51e] text-white rounded-lg"
                  >
                    Get Started
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="btn bg-[#37f51e81] border-2 border-[#37f51e] text-white rounded-lg"
                  >
                    Get Started
                  </Link>
                )}
              </div>
            </div>
            <div>
              <img src={item2} className="lg:w-64 lg:h-82 w-36" />
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-outline">
              ❮
            </a>
            <a href="#slide3" className="btn btn-outline">
              ❯
            </a>
          </div>
        </div>
        {/* item3 */}
        <div id="slide3" className=" carousel-item relative w-full item3-bg">
          <div className="flex md:flex-row flex-col justify-between py-10 w-4/5 mx-auto items-center md:gap-0 gap-4">
            <div className="space-y-4 text-center md:text-start">
              <p className="text-white text-xl md:text-2xl lg:text-5xl font-medium">
                {" "}
                Animated movies are
                <br /> available in
                <span className="text-[#37f51e]"> S</span>tar
                <span className="text-[#37f51e]">F</span>lix
              </p>
              <div>
                {user && user?.email ? (
                  <Link
                    to="/all-movies"
                    className="btn bg-[#37f51e81] border-2 border-[#37f51e] text-white rounded-lg"
                  >
                    Get Started
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="btn bg-[#37f51e81] border-2 border-[#37f51e] text-white rounded-lg"
                  >
                    Get Started
                  </Link>
                )}
              </div>
            </div>
            <div>
              <img src={item3} className="lg:w-64 lg:h-82 w-36" />
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-outline">
              ❮
            </a>
            <a href="#slide1" className="btn btn-outline">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
