import { Metadata } from "next";
import SignUp from "@/components/auth/SignUp";

export const metadata: Metadata = {
  title: "OS|Registration",
};

const SignUpPage = () => {
  return (
    <>
      <SignUp />
    </>
  );
};

export default SignUpPage;
