import { tagTypes } from "../tagTypes/tag-types";
import { baseApi } from "./baseApi";

const COURSES_URL = "/user";
export const coursesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    courses: build.query({
      query: () => {
        return {
          url: `${COURSES_URL}/courses/`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.courses],
    }),
    enrollCourse: build.mutation({
      query: (enrollData) => ({
        url: `${COURSES_URL}/enroll-course/`,
        method: "POST",
        data: enrollData,
      }),
      invalidatesTags: [tagTypes.courses],
    }),
  }),
});

export const { useCoursesQuery, useEnrollCourseMutation } = coursesApi;
