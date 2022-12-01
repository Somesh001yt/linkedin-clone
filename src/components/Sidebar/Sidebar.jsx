import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import "./Sidebar.css";

const Sidebar = () => {
  const user = useSelector(selectUser);

  const recentItem = (item) => (
    <div className="sidebar_recentitem">
      <span className="sidebar_hash">#</span>
      <p>{item}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img
          src="https://images.unsplash.com/photo-1669058867645-3347bf98d7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar-avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Who viewed</p>
          <p className="sidebar-statnumber">2312</p>
        </div>
        <div className="sidebar-stat">
          <p>Views on post</p>
          <p className="sidebar-statnumber">2912</p>
        </div>
      </div>

      <div className="sidebar-bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("nodejs")}
        {recentItem("front-end")}
        {recentItem("programming")}
      </div>
    </div>
  );
};

export default Sidebar;
