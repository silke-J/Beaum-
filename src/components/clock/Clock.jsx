import { useEffect, useState } from "react";
import styles from "./Clock.module.css";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.Clock}>
      <p>{time}</p>
    </div>
  );
};

export default Clock;
