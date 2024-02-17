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
  }),
});

export const { useUserQuery } = userApi;
