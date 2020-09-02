import React, { useState, useEffect } from "react";
import arrowUpCircleFill from "@iconify/icons-bi/arrow-up-circle-fill";
import { Icon } from "@iconify/react";
import { useWindowScroll } from "react-use";

function Scroll() {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisiblity] = useState(false);

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisiblity(true);
    } else {
      setVisiblity(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) {
    return false;
  }

  return (
    <div onClick={scrollToTop}>
      <Icon className="main_arrowIcon" icon={arrowUpCircleFill} />
    </div>
  );
}

export default Scroll;
