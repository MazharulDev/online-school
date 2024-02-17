"use client";
import Profile from "@/components/auth/Profile";
import { getUserInfo } from "@/services/auth.service";

const ProfilePage = () => {
  const { user_id } = getUserInfo() as any;
  return (
    <div>
      <Profile />
    </div>
  );
};

export default ProfilePage;
