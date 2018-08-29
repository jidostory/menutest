import React from "react";
import "./Menu.css";

class Menu extends React.Component {
  static defaultProps = {
    menuitem: {
      menu_item: [
        {
          key: 1,
          Name: "Home",
          onClick: () => {
            alert("Home Value");
          }
        },
        {
          key: 2,
          Name: "About",
          onClick: () => {
            alert("About value");
          }
        },
        {
          key: 3,
          Name: "Contact",
          onClick: () => {
            alert("Contact value");
          }
        }
      ]
    }
  };
  render() {
    const { menu_item } = this.props.menuitem;
    return (
      <div>
        <div>
          <nav className="nav">
            <ul className="nav__menu">
              {menu_item.map(item => {
                return (
                  <li classNeme="nav_menu-item">
                    <a onClick={item.onClick}>{item.Name}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div>{JSON.stringify(this.props.menuitem)}</div>
      </div>
    );
  }
}
export default Menu;
