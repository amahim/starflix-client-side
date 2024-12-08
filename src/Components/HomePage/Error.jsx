import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-center justify-center flex flex-col gap-4 mt-40">
      <h1 className="text-2xl text-red-500">404 ERROR!</h1>
      <p className="text-error text-xl">No page found ⚠</p>
      <div>
        <Link to="/" className="btn rounded-lg text-white bg-[#37f51e]">
          Go To Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
