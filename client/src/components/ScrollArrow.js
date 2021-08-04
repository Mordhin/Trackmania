import React, { useState } from "react";
import { HiArrowCircleUp } from "react-icons/hi";

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <HiArrowCircleUp
      className="scrollArrow"
      onClick={scrollTop}
      style={{ display: showScroll ? "flex" : "none" }}
    />
  );
};

export default ScrollArrow;