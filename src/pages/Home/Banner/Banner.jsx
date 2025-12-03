import { Link } from "react-router";
import BannerImg from "../../../assets/BannerImg.jpg";

const Banner = () => {
  return (
    <section className="bg-linear-to-r from-zinc-900  to-indigo-900 text-white">
      <div className="container mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight font-playfair">
            Unlock Your Potential <br /> with 
            <span className="text-indigo-400"> Edu Tech</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-playfair">
            Master modern web development, programming, and digital skills with
            our expertly designed courses. Learn at your own pace and accelerate
            your career growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
            <Link to="/courses">
              <button className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg transition duration-300">
                Explore Courses
              </button>
            </Link>

            <button className="px-6 py-3 border border-white hover:bg-white hover:text-indigo-900 text-white font-semibold rounded-lg transition duration-300">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end mb-10 md:mb-0">
          <img
            src={BannerImg}
            alt="EdTech Banner"
            className="w-72 md:w-96 lg:w-[450px] rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
