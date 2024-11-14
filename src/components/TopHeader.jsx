import React from "react";

// import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const TopHeader = () => {
  //   const navigate = useNavigate();

  return (
    <section className="px-2 bg-purple-100">
      <div className="flex justify-between">
        <div>Email</div>
        <Link to="/login" className="cursor-pointer">
          Login
        </Link>
      </div>
    </section>
  );
};

export default TopHeader;
