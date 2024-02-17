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
    updateUser: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/${data.email}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    updateUserById: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/update/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    updateSuperAdmin: build.mutation({
      query: (data) => ({
        url: `/all-users/${data.email}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    deleteUser: build.mutation({
      query: (id) => ({
        url: `${USER_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.user],
    }),
    userById: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${USER_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useUserQuery,
  useUpdateUserMutation,
  useUpdateSuperAdminMutation,
  useUpdateUserByIdMutation,
  useDeleteUserMutation,
  useUserByIdQuery,
} = userApi;
