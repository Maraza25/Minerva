import React, { Component } from "react";
import "./Topic.css";
import Research from "../Research/Research";

export default class Topic extends Component {
  render() {
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
        />{" "}
        <Research
          image={false} // ya da false
          title="Bir Araştırma Başlığı"
          description="Bu bir araştırma hakkında bir açıklama."
          imageUrl="https://picsum.photos/200"
        />{" "}
        <Research
          image={false} // ya da false
          title="Bir Araştırma Başlığı"
          description="Bu bir araştırma hakkında bir açıklama."
          imageUrl="https://picsum.photos/200"
        />{" "}
        <Research
          image={false} // ya da false
          title="Bir Araştırma Başlığı"
          description="Bu bir araştırma hakkında bir açıklama."
          imageUrl="https://picsum.photos/200"
        />{" "}
        <Research
          image={false} // ya da false
          title="Bir Araştırma Başlığı"
          description="Bu bir araştırma hakkında bir açıklama."
          imageUrl="https://picsum.photos/200"
        />{" "}
        <Research
          image={false} // ya da false
          title="Bir Araştırma Başlığı"
          description="Bu bir araştırma hakkında bir açıklama."
          imageUrl="https://picsum.photos/200"
        />
      </div>
    );
  }
}
