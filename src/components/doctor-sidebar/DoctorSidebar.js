import React from 'react';
import { RxDashboard } from "react-icons/rx";
import * as IoIcons from 'react-icons/io';
import { CgProfile } from "react-icons/cg";
import { FaUserDoctor } from "react-icons/fa6";
import { FaNotesMedical } from "react-icons/fa6";

export const DoctorSidebarData = [
  
  {
    title: 'Patients',
    path: '/patientList',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  
  {
    title: 'Logout',
    path: '/',
    icon: <CgProfile />,
    cName: 'nav-text'
  }
];