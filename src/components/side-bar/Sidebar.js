import React from 'react';
import { RxDashboard } from "react-icons/rx";
import * as IoIcons from 'react-icons/io';
import { CgProfile } from "react-icons/cg";
import { FaUserDoctor } from "react-icons/fa6";
import { FaNotesMedical } from "react-icons/fa6";

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/admin-dashboard',
    icon: <RxDashboard />,
    cName: 'nav-text'
  },
  {
    title: 'Patients',
    path: '/patient',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Doctors',
    path: '/list-view',
    icon: <FaUserDoctor />,
    cName: 'nav-text'
  },
  {
    title: 'Appointments',
    path: '/appointments',
    icon: <FaNotesMedical />,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/report',
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