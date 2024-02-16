import { tagTypes } from "../tagTypes/tag-types";
import { baseApi } from "./baseApi";

const AUTH_URL = "/user";
export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/login/`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    createUser: build.mutation({
      query: (userData) => ({
        url: `${AUTH_URL}/register/`,
        method: "POST",
        data: userData,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useUserLoginMutation, useCreateUserMutation } = authApi;
