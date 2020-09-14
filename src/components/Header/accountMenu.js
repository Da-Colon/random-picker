import React from "react";
import { Link } from "react-router-dom";

const Header = ({user}) => (
  <div className="self-center">
    <Link to="/account" className="mx-2 cursor-pointer text-white">
      <i className="fas fa-user-circle mr-2" />
      {user.id && <span>{user.first_name.substr(0, 1)}. {user.last_name}</span>}
      <i className="fas fa-angle-down ml-2" />
    </Link>
  </div>
)


export default Header;