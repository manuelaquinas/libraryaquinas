import React from "react";
import "../Styles/CardVideo.css";

const CardVideo = ({ title, link, length, description, views }) => {
  return (
    <div className="containerCardVideo">
      <a target="_blank" href={link}>
        <p className="text titleCardVideo">
          <b>{title}</b>
        </p>
      </a>
      <video width="560" height="315" src={link} controls></video>
      {/* <p className="text"><b>Source: </b>{link}</p> */}
      <p className="text"><b>Description: </b>"{description}"</p>
      {/* <p className="text">
        <b>Views: </b>
        {views}
      </p> */}
    </div>
  );
};

export default CardVideo;
