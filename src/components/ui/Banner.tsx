import bannerImg from "@/assets/banner1.gif";
import playstoreicon from "@/assets/playstoreicon.png";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="max-w-[1200px] mx-auto min-h-[600px] relative overflow-hidden">
      <div className="flex flex-col-reverse justify-center py-6 mx-auto sm:py-12 lg:py-[100px] lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center py-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leadi sm:text-6xl primary-text">
            Softmax <br /> Online School
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 ">
            Become Job-Ready through Module Based Study Plan and Guided Journey
          </p>
          <div className="flex md:px-0 px-10  flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              href="/packages"
              className="relative inline-flex items-center justify-center md:justify-start overflow-hidden font-medium transition-all"
            >
              <button className="mx-3 my-2 bg-">Get Started Now</button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center py-6 px-5 md:px-0 mt-8 lg:mt-0 ">
          <Image
            src={bannerImg}
            alt="global map"
            height={500}
            width={500}
            className="object-contain "
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
