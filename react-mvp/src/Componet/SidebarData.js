import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    className: "nav-text",
  },
  {
    title: "Journal",
    path: "/journal",
    icon: <IoIcons.IoIosJournal />,
    className: "nav-text",
  },
  {
    title: "Find Workouts",
    path: "/workouts",
    icon: <GiIcons.GiWeightLiftingUp />,
    className: "nav-text",
  },
  {
    title: "Motivational Quotes",
    path: "/quotes",
    icon: <FaIcons.FaQuoteLeft />,
    className: "nav-text",
  },
  {
    title: "User",
    path: "/user",
    icon: <AiIcons.AiOutlineUser />,
    className: "nav-text",
  },
  // {
  //   title: "Sign out?",
  //   path: "/sign-out",
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   className: "nav-text",
  // },
  // {
];
