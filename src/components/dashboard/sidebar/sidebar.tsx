import React from "react";
import Styles from "./sidebar.module.css";
import { MdDashboard } from "react-icons/md";
import {
  MdSupervisedUserCircle,
  MdSettings,
  MdHelp,
  MdLogout,
} from "react-icons/md";
import { MdShoppingBag } from "react-icons/md";
import MenuLink from "./menu-link/menuLink";
import Image from "next/image";

const menuItems = [
  {
    title: "pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
    ],
  },
  {
    title: "Analysis",
    list: [
      {
        title: "Revenue",
        path: "/analysis/revenue",
        icon: <MdDashboard />,
      },
      {
        title: "Reports",
        path: "/analysis/reports",
        icon: <MdSupervisedUserCircle />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/user/settings",
        icon: <MdSettings />,
      },
      {
        title: "Help",
        path: "/user/help",
        icon: <MdHelp />,
      },
    ],
  },
];

const sidebar = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.user}>
        <Image
          className={Styles.imageClass}
          src="/user.png"
          alt=""
          width="50"
          height="50"
        />
        <div className={Styles.userDetails}>
          <span className={Styles.userName}>Sheikh Tuhin</span>
          <span className={Styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul>
        {menuItems.map((catagories) => (
          <li className={Styles.list} key={catagories.title}>
            <span className={Styles.catagory}>{catagories.title}</span>
            {catagories.list.map((catList) => (
              <MenuLink item={catList} key={catList.title} />
            ))}
          </li>
        ))}
      </ul>

      <button className={Styles.logout}>
        <MdLogout />
        logout
      </button>
    </div>
  );
};

export default sidebar;
