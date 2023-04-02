import React, { Component, useState } from "react";
import "./Topic.css";
import Research from "../Research/Research";

export default function Topic() {
  const [isClicked, setIsClicked] = useState(false);
  const [pText, setpText] = useState("");

  const changePText = (event) => {
    console.log(event.target.value);
    setpText(event.target.value);
  };

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleClose = () => {
    setIsClicked(false);
  };

  return (
    <div className="topic-container">
      <Research
        image={true} // ya da false
        title="Bir Araştasdadasd dasdadadsasdırma Başlığı"
        description="Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama."
        imageUrl="https://picsum.photos/100"
      />
      <Research
        image={false} // ya da false
        title="Bir Araştırma Başlığı"
        description="Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama."
        imageUrl="https://picsum.photos/200"
      />
      <Research
        image={true} // ya da false
        title="Bir Araştasdadasd dasdadadsasdırma Başlığı"
        description="Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama."
        imageUrl="https://picsum.photos/100"
      />
      <Research
        image={false} // ya da false
        title="Bir Araştırma Başlığı"
        description="Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama."
        imageUrl="https://picsum.photos/200"
      />{" "}
      <Research
        image={true} // ya da false
        title="Bir Araştasdadasd dasdadadsasdırma Başlığı"
        description="Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama."
        imageUrl="https://picsum.photos/100"
      />
      <Research
        image={false} // ya da false
        title="Bir Araştırma Başlığı"
        description="Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama."
        imageUrl="https://picsum.photos/200"
      />{" "}
      <Research
        image={true} // ya da false
        title="Bir Araştasdadasd dasdadadsasdırma Başlığı"
        description="Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama."
        imageUrl="https://picsum.photos/100"
      />
      <Research
        image={false} // ya da false
        title="Bir Araştırma Başlığı"
        description="Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama."
        imageUrl="https://picsum.photos/200"
      />{" "}
      <Research
        image={true} // ya da false
        title="Bir Araştasdadasd dasdadadsasdırma Başlığı"
        description="Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama."
        imageUrl="https://picsum.photos/100"
      />
      <Research
        image={false} // ya da false
        title="Bir Araştırma Başlığı"
        description="Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama."
        imageUrl="https://picsum.photos/200"
      />{" "}
      <Research
        image={true} // ya da false
        title="Bir Araştasdadasd dasdadadsasdırma Başlığı"
        description="Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama."
        imageUrl="https://picsum.photos/100"
      />
      <Research
        image={false} // ya da false
        title="Bir Araştırma Başlığı"
        description="Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama.Bu bir araştırma hakkında bir açıklama."
        imageUrl="https://picsum.photos/200"
      />
      {isClicked && (
        <div className="animation">
          <div className="add-research-container">
            <div
              style={{
                padding: "10px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="text-div">
                <h2>adsad</h2>
                <div className="photo-p-div">
                  <textarea rows="5" type="text" onChange={changePText} />
                  <div
                    style={{
                      flexDirection: "column",
                      display: "flex",
                      gap: 10,
                    }}
                  >
                    <img
                      style={{
                        height: " 100px",
                        width: "auto",
                        marginLeft: "10px",
                        borderRadius: "10px",
                      }}
                      src="https://picsum.photos/200"
                    ></img>
                    <input
                      style={{
                        marginLeft: 10,
                        borderRadius: 5,
                        border: "none",
                      }}
                      type="text"
                      placeholder="Image URL"
                    />
                    <button
                      style={{
                        marginLeft: 10,
                        borderRadius: 5,
                        padding:5,
                        border: "none",
                        backgroundColor: "#9a9696",
                        color: "#fff",
                        transition: "background-color 0.3s ease-in-out",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#757171";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "#9a9696";
                      }}

                      onClick={handleClose}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="button-container">
        <button onClick={handleClick} className="addResBtn">
          +
        </button>
      </div>
    </div>
  );
}
{
  /* <button className="close-button" onClick={handleClose}>
              X
            </button> */
}
