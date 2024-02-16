"use client";
import { Button, Col, Row, message } from "antd";
import loginImage from "@/assets/Login.png";
import Image from "next/image";

import FormInput from "@/components/forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import Form from "../forms/Form";
import Link from "next/link";

type FormValues = {
  mobile_number: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();
  const [loginUser] = useUserLoginMutation();
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await loginUser({ ...data }).unwrap();
      if (res?.token?.access) {
        router.push("/");
        message.success("User logged in successfully");
      } else {
        message.error("Rechack your email and password");
      }
      storeUserInfo({ accessToken: res?.token?.access });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={10} lg={10}>
        <Image src={loginImage} width={380} alt="login image" />
      </Col>

      <Col sm={12} md={8} lg={10} style={{ padding: "0 15px" }}>
        <h1 className="text-4xl font-bold mb-4">Login</h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput
                name="mobile_number"
                placeholder="Phone number"
                type="text"
                size="large"
                label="Phone Number"
              />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="password"
                type="password"
                placeholder="********"
                size="large"
                label="Password"
              />
            </div>
            <Button className="bg-blue-500" type="primary" htmlType="submit">
              Login
            </Button>
          </Form>
          <div style={{ marginTop: "10px" }}>
            <p>
              You have not account? <Link href="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
