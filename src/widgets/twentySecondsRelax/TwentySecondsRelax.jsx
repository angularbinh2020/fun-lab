//@ts-check

import React, { useCallback, useRef, useState } from "react";
import styles from "./TwentySecondsRelax.module.scss";

const TwentySecondsRelax = (props) => {
  const [isRunning, setRunning] = useState(false);
  const [isCompletedRelax, setCompletedRelax] = useState(false);
  const countRef = useRef();
  const startCount = useCallback(() => {
    setRunning(true);

    let timeRelax = 20;

    const idInterval = setInterval(() => {
      timeRelax--;
      countRef.current.innerText = `${timeRelax} s`;
      if (!timeRelax) {
        clearInterval(idInterval);
        setCompletedRelax(true);

        setTimeout(() => {
          setCompletedRelax(false);
          setRunning(false);
        }, 5000);
      }
    }, 1000);
  }, []);

  if (isRunning) {
    if (isCompletedRelax)
      return (
        <div className={styles.container}>
          <p>Hoàn thành thư giãn, quay lại với công việc nào </p>
        </div>
      );

    return (
      <div className={styles.container}>
        <p ref={countRef}>20 s</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <button onClick={startCount}>Bắt đầu thư giãn</button>
    </div>
  );
};

export default TwentySecondsRelax;
