"use client";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import { useTeacherRequestMutation } from "@/redux/api/authApi";
import { Button, Col, Row, message } from "antd";
import { SubmitHandler } from "react-hook-form";

type FormValues = {
  fullName: string;
  email: string;
  phone_number: string;
};

const TeacherRequest = () => {
  const [teacherRequest] = useTeacherRequestMutation();
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await teacherRequest({ ...data }).unwrap();
      if (res?.id) {
        message.success("Request sent successfully");
      }
    } catch (error) {
      message.error("Someting went wrong");
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
      <Col sm={12} md={8} lg={10} style={{ padding: "0 15px" }}>
        <h1 className="text-4xl font-bold mb-4">Teacher Join Request</h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="fullName"
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
                name="email"
                type="email"
                placeholder="Type email"
                size="large"
                label="Enter Email"
              />
            </div>
            <div>
              <FormInput
                name="phone_number"
                placeholder="Phone number"
                type="text"
                size="large"
                label="Enter Phone Number"
              />
            </div>

            <Button
              className="bg-blue-500 mt-4"
              type="primary"
              htmlType="submit"
            >
              Request
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default TeacherRequest;
