import React from "react";

const StarterMenu = ({handleLinkLogin, handleLinkRegister}) => (
  <div className="self-center text-dc-gold text-lg">
    <span className="px-4 text-center cursor-pointer" onClick={handleLinkLogin}>
      Login
    </span>
    |
    <span className="px-4 text-center cursor-pointer" onClick={handleLinkRegister}>
      Register
    </span>
  </div>
)


export default StarterMenu;