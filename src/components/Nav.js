import { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="navbar bg-light">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/action">
              <a className="nav-link">Action</a>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
