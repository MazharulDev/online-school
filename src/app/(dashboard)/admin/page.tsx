"use client";
import Profile from "@/components/auth/Profile";
import { useUserQuery } from "@/redux/api/userApi";
import { getUserInfo } from "@/services/auth.service";
import React from "react";

const AdminPageRoot = () => {
  const { user_id } = getUserInfo() as any;
  const { data } = useUserQuery(user_id);
  return (
    <div>
      <Profile data={data} />
    </div>
  );
};

export default AdminPageRoot;
