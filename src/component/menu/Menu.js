import React from "react";
import "./Menu.css";

class Menu extends React.Component {
  static defaultProps = {
    MenuItem: [
      { key: 0, Name: "Home" },
      { key: 1, Name: "About" },
      { key: 2, Name: "Contact" }
    ]
  };

  render() {
    return (
      <div>
        <div>
          <nav className="nav">
            <ul className="nav__menu">
              {this.props.MenuItem.map(item => {
                return (
                  <li classNeme="nav_menu-item">
                    <a>{item.Name}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
export default Menu;
