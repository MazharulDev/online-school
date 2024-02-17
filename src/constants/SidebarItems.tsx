import { MenuProps } from "antd";
import {
  ProfileOutlined,
  TableOutlined,
  WifiOutlined,
  CarryOutOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./role";
export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [];
  const studentSidebarItem: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}`}>Student</Link>,
      key: `${role}`,
      icon: <ProfileOutlined />,
    },
    {
      label: <Link href={`/${role}/profile`}>Profile</Link>,
      key: `${role}/profile`,
      icon: <ProfileOutlined />,
    },
    {
      label: <Link href={`/${role}/mycourse`}>My Courses</Link>,
      icon: <CarryOutOutlined />,
      key: `/${role}/course`,
    },
  ];

  const teacherSidebarItem: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/students`}>Manage Course</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-course`,
    },
    {
      label: <Link href={`/${role}/services`}>View Students</Link>,
      icon: <WifiOutlined />,
      key: `/${role}/view-student`,
    },
  ];

  const adminSidebarItem: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}`}>Admin</Link>,
      icon: <TableOutlined />,
      key: `/${role}`,
    },
    {
      label: <Link href={`/${role}/user`}>Manage Student</Link>,
      icon: <TableOutlined />,
      key: `/${role}/user`,
    },
  ];

  if (role === USER_ROLE.ADMIN) return adminSidebarItem;
  else if (role === USER_ROLE.TEACHER) return teacherSidebarItem;
  else if (role === USER_ROLE.STUDENT) return studentSidebarItem;
  else {
    return defaultSidebarItems;
  }
};
