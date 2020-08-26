import React from "react";

type HeaderProps = {
  user: {
    first_name: string,
    last_name: string
  },
}

const Header = ({user}: HeaderProps) => (
  <div className="self-center">
    <span data-cy="account-menu-click" className="mx-2 cursor-pointer">
      <i className="fas fa-user-circle mr-1" />
      {user.first_name.substr(0, 1)}. {user.last_name}
    </span>
  </div>
)


export default Header;