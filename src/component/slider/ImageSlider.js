import React from "react";
import "./ImageSlider.css";
class ImageSlider extends React.Component {
  static defaultProps = {
    Images: []
  };
  render() {
    return (
      <div>
        <div className="slider">
          <figure>
            {this.props.Images.map(item => {
              return <img className="image" src={item.src} />;
            })}
          </figure>
        </div>
      </div>
    );
  }
}

export default ImageSlider;
