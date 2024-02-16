"use client";
import { Button, Col, Row, message } from "antd";
import signupImage from "../../assets/signup.png";
import Image from "next/image";

import FormInput from "@/components/forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import Form from "../forms/Form";
import Link from "next/link";
import { useCreateUserMutation } from "@/redux/api/authApi";

type FormValues = {
  mobile_number: string;
  name: string;
  password: string;
  password2: string;
};

const SignUp = () => {
  const router = useRouter();
  const [createUser] = useCreateUserMutation();
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await createUser({ ...data }).unwrap();
      if (res?.token?.access) {
        router.push("/");
        message.success("Account Created successfully, Please login");
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
        <Image src={signupImage} width={500} alt="login image" />
      </Col>

      <Col sm={12} md={8} lg={10} style={{ padding: "0 15px" }}>
        <h1 className="text-4xl font-bold mb-4">Create your account</h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput
                name="mobile_number"
                placeholder="Phone number"
                type="text"
                size="large"
                label="Enter Phone Number"
              />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="name"
                type="text"
                placeholder="Full Name"
                size="large"
                label="Enter Name"
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
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="password2"
                type="password"
                placeholder="********"
                size="large"
                label="Retype Password"
              />
            </div>
            <Button className="bg-blue-500" type="primary" htmlType="submit">
              Signup
            </Button>
          </Form>
          <div style={{ marginTop: "10px" }}>
            <p>
              Already have an account? <Link href="/login">Login</Link>
            </p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default SignUp;
