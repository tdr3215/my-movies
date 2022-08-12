import { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="navbar bg-light">
        <Link to="/">home</Link> |<Link to="/action">Action</Link>
      </div>
    );
  }
}

export default Nav;
