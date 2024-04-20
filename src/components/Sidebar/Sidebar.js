import React from "react";
import XIcon from "@mui/icons-material/X";
import "./Sidebar.css";
import SideBarOption from "./SideBarOption";
import { GoHome } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { RiNotification2Line } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { BiMessageSquareEdit } from "react-icons/bi";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import { CiBookmark } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@mui/material";
function Sidebar() {
  return (
    <div className="w-[20%]">
      <XIcon />

      <SideBarOption Icon={GoHome} text="Home" />
      <SideBarOption Icon={IoSearch} text="Explore" />
      <SideBarOption Icon={RiNotification2Line} text="Notifications" />
      <SideBarOption Icon={CiMail} text="Messages" />
      <SideBarOption Icon={BiMessageSquareEdit} text="Grok" />
      <SideBarOption Icon={FeaturedPlayListOutlinedIcon} text="Lists" />
      <SideBarOption Icon={CiBookmark} text="Bookmarks" />
      <SideBarOption Icon={IoPeopleOutline} text="Communities" />
      <SideBarOption Icon={FaXTwitter} text="Premium" />
      <SideBarOption Icon={IoPersonOutline} text="Profile" />
      <SideBarOption Icon={CiCircleMore} text="More" />
      <Button className="sidebar_bu" variant="outlined" fullWidth>
        Post
      </Button>
    </div>
  );
}

export default Sidebar;
