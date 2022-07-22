import React from "react";
import styles from "./index.module.css";
import UserImg from "../../../images/user.svg";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Row = (props) => {
  return (
    <div className={styles.rowContainer}>
      <div className={styles.user}>
        <img src={UserImg} />
        <span>
          <h2>{props.user.name}</h2>
          <h3>{props.user.email}</h3>
        </span>
      </div>

      <div className={styles.steps}>
        <div className={styles.stepsProgressbar}>
        <CircularProgressbarWithChildren
          value={props.user.stepsWalked}
          maxValue={props.user.stepsTarget * 1000}
        >
          <h2>{props.user.stepsWalked}</h2>
          <p>walked</p>
        </CircularProgressbarWithChildren>
        </div>
        <div>
          <h2>{props.user.stepsTarget}k</h2>
          <p>target</p>
        </div>
      </div>
      <div className={styles.workout}></div>
      <div className={styles.nutrition}></div>
      <div className={styles.notifyBtn}></div>
    </div>
  );
};

export default Row;
