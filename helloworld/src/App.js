import React from "react";
import logo from "./logo.svg";
import Header from "./Component/Header";
import Slider from "./Component/Slider";
import Card from "./Component/Card";

import "./App.css";
const data = {
  title: "LY LY SHOP",
  menu: ["Áo Quần", "Giày Dép", "Phụ Kiện", "Đồ Bơi"]
};

const cards = [
  {
    img: "/assets/images/img1.png",
    title: "Ví Da"
  },
  {
    img: "/assets/images/img2.png",
    title: "Ví Da Bò"
  },
  {
    img: "/assets/images/img3.png",
    title: "Ví Da Heo"
  },
  {
    img: "/assets/images/img4.png",
    title: "Ví Da Cá Sấu"
  },
  {
    img: "/assets/images/img5.png",
    title: "Ví Da Trâu"
  },
  {
    img: "/assets/images/img6.png",
    title: "Ví Da Ngựa"
  }
];
function App() {
  return (
    <>
      <Header data={data} />
      <Slider />
      <div className="container">
        <div className="row">
          {cards.map(card => {
            return <Card card={card} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
