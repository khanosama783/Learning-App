"use client";
import React from "react";
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import Heading from "../../../app/utils/Heading";
import CreateCourses from "../../components/Admin/Course/CreateCourses";
import DashboardHeader from "../../../app/components/Admin/DashboardHeader";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Heading
        title="LMS -Admin"
        description="Online learning offers flexible, accessible education through digital platforms, empowering learners to acquire knowledge anytime, anywhere."
        keywords="FULL STACK, DATA SCIENCE, DATA ANALYTICS, DATA ENGINEER, DEVOps, MLOps"
      />
      <div className="flex">
        <div className="1500px:w-[16%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[85%]">
          <DashboardHeader />
          <CreateCourses />
        </div>
      </div>
    </div>
  );
};

export default page;
