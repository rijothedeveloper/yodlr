import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <p>
        <Link to="/signup">Registration Page</Link>
        <br />
        <Link to="/admin">Admin Page</Link>
      </p>
    </div>
  );
};
