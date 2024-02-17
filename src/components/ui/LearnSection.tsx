import Image from "next/image";

const LearnSection = () => {
  return (
    <div className="px-6 py-10 mt-16 space-y-8 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <Image
          className="rounded-xl"
          width={500}
          height={300}
          src="https://i.ibb.co/58R5qX5/learn.jpg"
          alt="Learning Image"
        />
        <div>
          <h2 className="text-3xl font-bold">Learn for Free</h2>
          <p className="py-5">
            Skill development is easy now, totally free. Join multiple live
            webinars, live courses and recorded courses from 8 different
            categories and 40 different skills.
          </p>
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-xl text-white duration-150">
            Learn Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearnSection;
