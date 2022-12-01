import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import linkedin from "../assests/Linkedin.png";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const logouotofApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header_left">
        <img src={linkedin} alt="linkedin-logo" />
        <div className="search_bar">
          <SearchIcon />
          <input type="text" placeholder="search" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOptions Icon={ChatIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationsIcon} title="Notification" />
        <HeaderOptions title="me" onClick={logouotofApp} avatar={true} />
      </div>
    </div>
  );
};

export default Navbar;
