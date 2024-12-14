import React, { useState, useEffect } from "react";
import "./ProgressBar.css"; 

const ProgressBar = ({ currentIndex, totalImages }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    console.log('currentIndex:', currentIndex);
    console.log('totalImages:', totalImages);
    if (totalImages && totalImages.length > 0 && currentIndex >= 0) {
      setProgress(((currentIndex + 1) / totalImages.length) * 100);
    }
  }, [currentIndex, totalImages]);
  
  return (
    <div className="progress-bar-container">
      <hr
        className="progress-bar"
        style={{
          background: `linear-gradient(to right, black ${progress}%, lightgray ${progress}%)`,
        }}
      />
    </div>
  );
};

export default ProgressBar;
