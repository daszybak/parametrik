import { useState, useEffect, useRef } from "react";
import { LOADING_TIME } from "../../utils/constants/constants";

import styles from "./loadingBar.module.scss";

const LoadingBar = () => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const interval = setInterval(() => {
      if (!progressRef || !progressRef.current) return;
      let width =
        progressRef.current.getBoundingClientRect().width + LOADING_TIME / 100;

      progressRef.current.style.width = `${width}%`;
      timeout = setTimeout(() => {
        clearInterval(interval);
      }, LOADING_TIME);
    }, LOADING_TIME / 100);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.loadingBar}>
      <div className={styles.progress} ref={progressRef}></div>
    </div>
  );
};

export default LoadingBar;
