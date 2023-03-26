import React, { Component, useState } from "react";
import "./Topic.css";
import Research from "../Research/Research";

export default function Topic() {
  const [isClicked, setIsClicked] = useState(false);

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
      /> <Research
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
    /> <Research
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
  /> <Research
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
/> <Research
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
      /> <Research
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
          <div className="add-research">
          </div>
        </div>
          </div>
        )}
        
        <div className="button-container">
          <button onClick={handleClick}>Animasyonlu Div'i Göster</button>
        </div>
      </div>
  );
}
 {/* <button className="close-button" onClick={handleClose}>
              X
            </button> */}