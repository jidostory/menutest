import React from "react";
import ReactDOM from "react-dom";
import Menu from "./component/menu/Menu";
import ImageSlider from "./component/slider/ImageSlider";

import "./styles.css";

function App() {
  const menuData = [
    { key: 0, Name: "Home" },
    { key: 1, Name: "About" },
    { key: 2, Name: "Contact" }
  ];

  const images = [
    {
      key: 0,
      src:
        "https://cdn.mapsinternational.co.uk/pub/media/catalog/product/cache/afad95d7734d2fa6d0a8ba78597182b7/p/e/personalised-world-is-art-wall-map-red_ps00271.jpg"
    },
    {
      key: 1,
      src:
        "https://cdn.vox-cdn.com/thumbor/M8MKTTFK9ScU9gV1wUs3_l86-p4=/151x160:1343x1733/1200x800/filters:focal(630x873:870x1113)/cdn.vox-cdn.com/uploads/chorus_image/image/56660707/london.0.jpg"
    },
    {
      key: 2,
      src: "https://makingmaps.files.wordpress.com/2011/12/eduardo_abaroa.png"
    }
  ];

  return (
    <div>
      <div className="App">
        <Menu MenuItem={menuData} />
        <ImageSlider Images={images} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
