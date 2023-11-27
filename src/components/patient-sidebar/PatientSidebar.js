import React from 'react';
import { RxDashboard } from "react-icons/rx";
import * as IoIcons from 'react-icons/io';
import { CgProfile } from "react-icons/cg";
import { FaUserDoctor } from "react-icons/fa6";
import { FaNotesMedical } from "react-icons/fa6";

export const PatientSidebarData = [
  {
    title: 'Dashboard',
    path: '/patient-dashboard',
    icon: <RxDashboard />,
    cName: 'nav-text'
  },
  {
    title: 'Chat with Doctor',
    path: '/channelledDoctor',
    icon: <FaUserDoctor />,
    cName: 'nav-text'
  },
  {
    title: 'Channelling Details',
    path: '/channelingDeails',
    icon: <FaNotesMedical />,
    cName: 'nav-text'
  },
  {
    title: 'Medications',
    path: '/view-all-medical-hisory',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/',
    icon: <CgProfile />,
    cName: 'nav-text'
  }
];