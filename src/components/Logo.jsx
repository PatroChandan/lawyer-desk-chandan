import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <img
        src="https://advocase.ai/assets/images/brand_round/advocase_full.png"
        alt=""
      />
    </Link>
  );
};

export default Logo;
