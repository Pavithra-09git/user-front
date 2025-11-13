// import React from "react";

// const NotFound = () => {
//   return <div>NotFound</div>;
// };

// export default NotFound;

import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.cs";

const NotFound = () => {
  const nav = useNavigate();

  return (
    <div className="notfound-container">
      <div className="mist-circle"></div>
      <h1 className="notfound-title">404</h1>
      <p className="notfound-text">Oops! The page you’re looking for doesn’t exist.</p>
      <button className="back-btn" onClick={() => nav("/")}>
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;

