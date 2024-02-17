"use client";

import SimpleNavbar from "@/components/ui/SimpleNavbar";
import { Layout } from "antd";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <SimpleNavbar />
      <div className="bg-white">{children}</div>
    </Layout>
  );
};

export default AuthLayout;
