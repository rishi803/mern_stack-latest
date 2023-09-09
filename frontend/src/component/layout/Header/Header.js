import React from "react";
import Navbar from "./Navbar"; // Import your custom Navbar component

const Header = ({ user }) => {
  return (
    <header>
      <Navbar user={user} />
      {/* The rest of your header content */}

    </header>
  );
};

export default Header;
