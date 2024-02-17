import { tagTypes } from "../tagTypes/tag-types";
import { baseApi } from "./baseApi";

const COURSES_URL = "/user/courses/";
export const coursesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    courses: build.query({
      query: () => {
        return {
          url: `${COURSES_URL}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.courses],
    }),
  }),
});

export const { useCoursesQuery } = coursesApi;
