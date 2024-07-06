import React from "react";

function error() {
  return (
    <div className="mb-4 flex flex-col justify-center items-center h-screen">
      Oops! Page Not Found :(
      <a
        href="/"
        className="mt-4 px-6 py-1 rounded-full border 
    border-neutral hover:-translate-x-3 transition duration-300"
      >
        HOME
      </a>
    </div>
  );
}

export default error;
