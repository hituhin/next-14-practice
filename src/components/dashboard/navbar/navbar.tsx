"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Styles from "./navbar.module.css";
import Badge from "@/utils/badge";
import {
  MdOutlineSearch,
  MdOutlineMessage,
  MdNotificationsNone,
  MdPublic,
} from "react-icons/md";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div className={Styles.container}>
      <div className={Styles.title}>{pathName.split("/").pop()}</div>
      <div className={Styles.manue}>
        <div className={Styles.search}>
          <MdOutlineSearch />
          <input
            type="text"
            placeholder="Search..."
            className={Styles.search}
          />
        </div>
        <div >
          <MdOutlineMessage size={20} />
          <MdNotificationsNone size={20} count={10}/>
          
            <Badge variant="success" size="small" ><MdNotificationsNone/></Badge>
         
        </div>
      </div>      
    </div>
  );
};

export default Navbar;
