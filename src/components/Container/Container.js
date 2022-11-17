import styles from "./Container.module.scss";
import FormattedTime from "../FormattedTime/FormattedTime";
import Button from "../Button/Button";
import React, { useState, useEffect } from "react";

function Container () {
  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(true);
  const [clock, setClock] = useState(0);

  useEffect(() => {
    let interval = null;

    if (start && stop === false) {
      interval = setInterval(() => {
        setClock((clock) => clock + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [start, stop]);

  const handleStart = () => {
    setStart(true);
    setStop(false);
  };

  const handleStop = () => {
    setStart(false);
    setStop(true);
  };
  const handleReset = () => {
    setStart(false);
    setClock(0);
  };
  return (
    <div className={styles.container}>
      <FormattedTime time={clock} />
      <div className={styles.buttons}>
        <Button onClick={handleStart}>START</Button>
        <Button onClick={handleStop}>STOP</Button>
        <Button onClick={handleReset}>RESET</Button>
      </div>
    </div>
  );
};

export default Container;