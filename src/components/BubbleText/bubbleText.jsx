import styles from "./bubble.module.css";
import React from "react";

const BubbleText = ({ text = "Bubble text" }) => {
  const chars = React.useMemo(() => text.split(""), [text]);
  
  return (
    <h2 className="bubble-container">
      {chars.map((char, i) => (
        <span key={i} className={styles.hoverText}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h2>
  );
};

export default React.memo(BubbleText);