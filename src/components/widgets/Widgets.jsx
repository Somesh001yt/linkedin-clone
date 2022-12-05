import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      {newsArticle("React is superb library", "Top news - 9099 readers")}
      {newsArticle(
        "Why Javascript is so popular today",
        "Top news - 130280 readers"
      )}
      {newsArticle(
        "Which one is better - React or Angular",
        "Top news - 11038 readers"
      )}
      {newsArticle(
        "Why tailwind is getting popular day by day",
        "Top news - 14934 readers"
      )}
      {newsArticle(
        "Is is important to learn javascript",
        "Top news - 134299 readers"
      )}
      {newsArticle("Why coding is important", "Top news - 14329 readers")}
    </div>
  );
};

export default widgets;
