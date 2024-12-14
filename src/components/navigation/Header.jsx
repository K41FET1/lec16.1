import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const [slideShowState, setSlideShowState] = useState("START SLIDESHOW");
  const navigate = useNavigate();
  const location = useLocation(); 

  const isDetailPage = location.pathname.startsWith("/detail");

  return (
    <div className="header-container" style={{ paddingInline: "40px" }}>
      <div className="header-content">
        <h1 className="header-logo">
          <img src="../../assets/shared/logo.svg" alt="Logo" />
        </h1>
        <p
          className="header-slideshow-toggle"
          onClick={() => {
            if (!isDetailPage && slideShowState === "START SLIDESHOW") {
              setSlideShowState("STOP SLIDESHOW");
              navigate("/detail/1");
            } else {
              setSlideShowState("START SLIDESHOW");
              navigate("/");
            }
          }}
        >
          {slideShowState}
        </p>
      </div>
      <hr />
    </div>
  );
}

export default Header;
