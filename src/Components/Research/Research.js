import React from "react";
import "./Research.css";
import { Padding } from "@mui/icons-material";

function Research(props) {
  const { image, title, description, imageUrl } = props;
  if (image) {
    return (
      <div
        style={{
          padding: "10px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="text-div">
          <h2>{title}</h2>
          <div className="photo-p-div">
            <p>{description} </p>
            <img
              style={{
                height: " 100px",
                width: "auto",
                marginLeft: "10px",
                borderRadius: "10px",
              }}
              src={imageUrl}
            ></img>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          padding: "10px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="text-div">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{ backgroundColor: "red", width: "50px", height: "50px",borderRadius:"10px",marginRight:"20px" }}
            ></div>
                        <h2 style={{ flexGrow: 1 }}>{title}</h2>

          </div>

          <p>{description} </p>
        </div>
      </div>
    );
  }
}

export default Research;

