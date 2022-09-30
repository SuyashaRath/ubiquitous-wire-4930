import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
// import * as BiListUl from "react-icons/bi";
import * as RiLoginBox from "react-icons/ri";

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Internships',
    path: '/internships',
    icon: <FaIcons.FaList/>,
    cName: 'nav-text'
  },
  {
    title: 'Jobs',
    path: '/jobs',
    icon: <FaIcons.FaSuitcase />,
    cName: 'nav-text'
  },
  {
    title: 'Post Internship',
    path: '/post',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Courses',
    path: 'courses',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Contact Us',
    path: '/contact',
    icon: <FaIcons.FaPhoneAlt />,
    cName: 'nav-text'
  },
  {
    title: 'Register',
    path: '/register',
    icon: <FaIcons.FaAlignLeft />,
    cName: 'nav-text'
  },
  {
    title: 'Login',
    path: '/login',
    icon: <RiLoginBox.RiLoginBoxFill />,
    cName: 'nav-text'
  }
 
 

];