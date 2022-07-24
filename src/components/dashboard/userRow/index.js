import {React, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import Tooltip from './tooltip'

import UserImg from "../../../images/user.svg";
import performedDate from "../../../images/performedDate.svg";
import scheduledDate from "../../../images/scheduledDate.svg";
import notifyIcon from "../../../images/notifyBell.svg";
import Arrow from "../../../images/arrow.svg";
import Exclaim from "../../../images/exclaimation.svg"

import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { PieChart } from "react-minimal-pie-chart";

const Row = (props) => {

  // Variable Target. We can change it in Object too by passing setter through props.
  const [nutriTarget,setNutriTarget] = useState(props.user.calorieTarget)
  const [stepTarget,setStepTarget] = useState(props.user.stepsTarget)

  // Toottip
  const [hovered,setHover]=useState(false);
  const tooltip=hovered?<Tooltip user={props.user}/>:'';

  // Date Check
  const [isToday, setDate]=useState('');
  useEffect(()=>{
    if(new Date().getDate()==props.user.scheduledDate.split(' ')[0])
      setDate(styles.redDate);
    else
      setDate('')
  })

  return (
    <div className={styles.rowContainer}>

      {/* User Info */}

      <div className={styles.user}>
        <img src={UserImg} />
        <span>
          <h2>{props.user.name}</h2>
          <h3>{props.user.email}</h3>
        </span>
      </div>



      {/* Steps Section*/}

      <div className={styles.steps}>
        <div className={styles.stepsProgressbar}>
          <CircularProgressbarWithChildren
            value={props.user.stepsWalked}
            maxValue={stepTarget * 1000}
            styles={buildStyles({
              rotation: 0.25,
              pathColor: 'rgba(127, 209, 140, 1)',
              trailColor: 'rgba(255, 255, 255, 1)'
            })}
          >
            <h2>{props.user.stepsWalked}</h2>
            <p>walked</p>
          </CircularProgressbarWithChildren>
        </div>
        <div>
        <div className={styles.miniBtn} onClick={()=>{
          setStepTarget((prev)=>prev+0.5)}}>+</div>
          <h2>{stepTarget}k</h2>
          <p>target</p>
          <div className={styles.miniBtn} onClick={()=>{
            setStepTarget((prev)=>prev>0?prev-0.5:prev)
          }}>-</div>
        </div>
      </div>



      {/* Workout Section */}

      <div className={styles.workout}>
        <div>
          <div className={styles.workoutDate}>
            <img src={performedDate} />
            {props.user.performedDate}
          </div>
          <div className={`${styles.workoutDate} ${isToday}`}>
            <img src={scheduledDate} />
            <p>{props.user.scheduledDate}</p>
          </div>
        </div>

        {props.user.feedback?
        <Link to="/userId/workout" className={styles.sideBtn}><img src={Arrow} /></Link>:
        <Link to="/userId/workout" className={styles.sideBtn} style={{background: 'rgba(204, 56, 56, 1)'}}><img src={Exclaim} /></Link>
        }
        {/* <input type="button" className={styles.sideBtn} value=">" /> */}
      </div>



      {/* Nutrition Section */}

      <div className={styles.nutrition}>
        <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className={styles.pieChart}>
        <PieChart
          data={[
            {
              title: "Protien",
              value: props.user.proteinConsumed,
              color: "#F45C84",
            },
            {
              title: "Carbs",
              value: props.user.carbConsumed,
              color: "#F5C90F",
            },
            { title: "Fats", value: props.user.fatConsumed, color: "#03C7FC" },
          ]}
          lineWidth={25}
          label={(dataEntry) => (
            <text
              x={50}
              key={dataEntry.dataIndex}
              dominantBaseline="central"
              textAnchor="middle"
              style={{
                fontSize: "1.4rem",
                fill: "white",
              }}
            >
              <tspan y={40} style={{fontWeight: "bold", fontSize:"2.2rem"}}>{props.user.calorieIntake}</tspan>
              <tspan x={50} y={60}>calories</tspan>
            </text>
          )}
          labelStyle={{
          }}
          labelPosition={0}
          center={[50, 50]}
          viewBoxSize={[100, 100]}
        />
        {tooltip}
        </div>
        <div>
        <div className={styles.miniBtn} onClick={()=>{
          setNutriTarget((prev)=>parseFloat((prev+0.1).toFixed(1)))}}>+</div>
          <h2>{nutriTarget}k</h2>
          <p>target</p>
          <div className={styles.miniBtn} onClick={()=>{
            setNutriTarget((prev)=>prev>0?parseFloat((prev-0.1).toFixed(1)):prev)
          }}>-</div>
        </div>
        <Link to='/userId/nutrition' className={styles.sideBtn}>
            <img src={Arrow} />
        </Link>
      </div>



      {/* Notify */}

      <div className={styles.notifySection}>
        <label className={styles.notifyBtn}>
          <img src={notifyIcon} />
        </label>
      </div>
    </div>
  );
};

export default Row;
