import { tagTypes } from "../tagTypes/tag-types";
import { baseApi } from "./baseApi";

const USER_URL = "/user";
export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    user: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${USER_URL}/single/${id}/`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    teacherList: build.query({
      query: () => ({
        url: `${USER_URL}/teachers/`,
        method: "GET",
      }),
      providesTags: [tagTypes.teacher],
    }),
    acceptTeacher: build.query({
      query: (id: number | null | undefined) => ({
        url: `${USER_URL}/approve-teacher/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.teacher],
    }),
  }),
});

export const { useUserQuery, useTeacherListQuery, useAcceptTeacherQuery } =
  userApi;
