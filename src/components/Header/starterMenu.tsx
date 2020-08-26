import React from "react";

type HeaderProps = {
  handleLinkLogin: () => void,
  handleLinkRegister: () => void,
}

const StarterMenu = ({handleLinkLogin, handleLinkRegister}: HeaderProps) => (
  <div className="self-center text-dc-gold text-lg">
    <span data-cy="login" className="px-4 text-center cursor-pointer" onClick={handleLinkLogin}>
      Login
    </span>
    |
    <span data-cy="register" className="px-4 text-center cursor-pointer" onClick={handleLinkRegister}>
      Register
    </span>
  </div>
)


export default StarterMenu;