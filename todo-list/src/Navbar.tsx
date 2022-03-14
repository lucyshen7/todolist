import React from "react";
import "./App.scss";

interface Props {
  user: User;
}

export const Navbar: React.FC<Props> = ({ user }) => {
  return (
    <div className="nav">
      <div> 
        <span>Logged in as {user.name}</span>
      </div>
    </div>
  );
};
