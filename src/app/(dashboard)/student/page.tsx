"use client";
import {
  useCoursesQuery,
  useEnrollCourseMutation,
} from "@/redux/api/courseApi";
import { useUserQuery } from "@/redux/api/userApi";
import { getUserInfo } from "@/services/auth.service";
import Image from "next/image";

const StudentDashHome = () => {
  const { user_id } = getUserInfo() as any;
  const { data: user } = useUserQuery(user_id);
  const { data } = useCoursesQuery(undefined);
  const [enrollCourse] = useEnrollCourseMutation();
  const enrollCourseFunc = (id: string) => {
    const enrollData = {
      student: user?.id.toString(),
      course: id.toString(),
      status: "enrolled",
    };
    enrollCourse({ ...enrollData });
  };
  return (
    <div>
      <h1 className="text-center text-3xl font-bold py-5 mb-10">
        Available For you
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 w-fit mx-auto gap-5">
        {data?.map((course: any) => (
          <div key={course?.id}>
            <div className="w-80 border-2 border-yellow-500 rounded-2xl overflow-hidden">
              <div className="w-80 overflow-hidden">
                <Image
                  width={400}
                  height={300}
                  className="rounded-t-2xl hover:scale-110 duration-500 hover:cursor-pointer"
                  src="https://i.ibb.co/Y8NQMXF/course.jpg"
                  alt=""
                />
              </div>
              <div className="overflow-hidden bg-white pt-5 p-3 h-32">
                {course?.title?.length > 38 ? (
                  <h3 className="text-xl font-bold text-yellow-700">
                    {course?.title.slice(0, 38)}...
                  </h3>
                ) : (
                  <h3 className="text-xl font-bold text-yellow-700">
                    {course?.title}
                  </h3>
                )}
                <div>
                  <div className="flex justify-between items-center">
                    <div className="flex justify-start items-center gap-2 text-yellow-800">
                      {/* <MdLocalOffer /> */}
                      <p>
                        Special Offer:{" "}
                        <span className="text-red-500">Ended</span>
                      </p>
                    </div>
                    <div className="flex justify-start items-center gap-2 text-green-500 pt-2">
                      {/* <RxArrowTopRight /> */}
                      <p>Ongoing</p>
                    </div>
                  </div>
                  <p>Teacher: {course?.teacher[0]}</p>
                </div>

                <p className="my-3">{course?.status}</p>
              </div>
              <div className="bg-slate-200 w-full h-full bottom-0">
                <div className="flex justify-between items-center p-4 py-2">
                  <p className="h-full bottom-0">
                    <button
                      onClick={() => enrollCourseFunc(course?.id)}
                      className="px-3 py-1 bg-green-500 rounded-xl text-white hover:bg-green-600 duration-150"
                    >
                      Enroll Now
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashHome;
