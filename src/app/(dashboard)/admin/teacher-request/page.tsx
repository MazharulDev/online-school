"use client";
import OSTable from "@/components/ui/ISTable";
import {
  useAcceptTeacherQuery,
  useTeacherListQuery,
} from "@/redux/api/userApi";
import { Button } from "antd";
import dayjs from "dayjs";
import { useState } from "react";

const TeacherRequest = () => {
  const [acceptId, setAcceptId] = useState<number>();
  console.log(acceptId);
  const { data, isLoading } = useTeacherListQuery(undefined);
  const { data: accept } = useAcceptTeacherQuery(acceptId);
  console.log(accept);
  const teacherList = data;
  const columns = [
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },

    {
      title: "Phone Number",
      dataIndex: "phone_number",
    },
    {
      title: "Updated at",
      dataIndex: "updated_at",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Created at",
      dataIndex: "created_at",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <>
            <Button
              className="bg-blue-500"
              onClick={() => {
                setAcceptId(data);
              }}
              type="primary"
            >
              Accept
            </Button>
          </>
        );
      },
    },
  ];
  return (
    <div>
      <h1 className="text-center text-3xl font-bold py-4 mb-10">
        Requested Teacher
      </h1>
      <OSTable
        loading={isLoading}
        columns={columns}
        dataSource={teacherList}
        showSizeChanger={true}
        showPagination={true}
      />
    </div>
  );
};

export default TeacherRequest;
