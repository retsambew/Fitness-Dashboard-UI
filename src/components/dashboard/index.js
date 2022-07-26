import React from "react";
import Row from "./userRow";
import styles from './index.module.css';
import StepsIcon from '../../images/stepsIcon.svg';
import WorkoutIcon from '../../images/workoutIcon.svg';
import NutritionIcon from '../../images/nutritionIcon.svg';

const Dashboard = () => {
  const users = [
    {
      userid: 1,
      name: "Charvie Sharma",
      email: "charviesharma.cs@gmail.com",
      stepsWalked: 2547,
      stepsTarget: 4,
      performedDate: "15 Oct",
      scheduledDate: "27 Oct",
      calorieIntake: 2547,
      calorieTarget: 2.5,
      proteinConsumed: 45,
      proteinTarget: 70,
      carbConsumed: 50,
      carbTarget: 70,
      fatConsumed: 30,
      fatTarget: 70,
      feedback: false
    },

    {
      userid: 2,
      name: "Charvie Sharma",
      email: "charviesharma.cs@gmail.com",
      stepsWalked: 2547,
      stepsTarget: 4,
      performedDate: "15 Oct",
      scheduledDate: "29 Oct",
      calorieIntake: 2547,
      calorieTarget: 2.5,
      proteinConsumed: 45,
      proteinTarget: 70,
      carbConsumed: 50,
      carbTarget: 70,
      fatConsumed: 30,
      fatTarget: 70,
      feedback: false
    },

    {
      userid: 3,
      name: "Charvie Sharma",
      email: "charviesharma.cs@gmail.com",
      stepsWalked: 2547,
      stepsTarget: 4,
      performedDate: "15 Oct",
      scheduledDate: "30 Oct",
      calorieIntake: 2547,
      calorieTarget: 2.5,
      proteinConsumed: 45,
      proteinTarget: 70,
      carbConsumed: 50,
      carbTarget: 70,
      fatConsumed: 30,
      fatTarget: 70,
      feedback: true
    },
  ];

  // Like this we can change the value in object after passing it through props.
  // const addCalorieTarget= (userid, val) => {
  //   const index = users.findIndex(ob => ob.userid==userid);
  //   users[index].calorieTarget=users[index].calorieTarget+val;
  //   console.log(users[index])
  // }

  return (
    <div className={styles.dashboardContainer}>
        <div className={styles.dashboard}>
            
            {/* Column Description */}
            <div className={styles.columnDesc}>
                <div/>
                <div>
                  <img src={StepsIcon}/>
                  <h2>Steps</h2>
                </div>
                <div>
                  <img src={WorkoutIcon}/>
                  <h2>Workout</h2>
                </div>
                <div>
                  <img src={NutritionIcon}/>
                  <h2>Nutrition</h2>
                </div>
            </div>
            
            {/* Columns */}
            {users.map((user) => <Row key={user.userid} user={user}/>)}
        </div>
    </div>
  );
};

export default Dashboard;
