import React from "react";
import styles from "./tooltip.module.css";

const tooltip = (props) => {
  // Percent of target achieved
  const protPercent=((props.user.proteinConsumed/props.user.proteinTarget)*100);
  const protWidth=protPercent>100?100:protPercent;
  const fatPercent=((props.user.fatConsumed/props.user.fatTarget)*100);
  const fatWidth=fatPercent>100?100:fatPercent;
  const carbPercent=((props.user.carbConsumed/props.user.carbTarget)*100);
  const carbWidth=carbPercent>100?100:carbPercent;

  return (
    <div className={styles.tooltip}>
      <div className={styles.arrow} />

      <div className={styles.dataContainer}>
  
        {/* Protien Section */}
        <section>
          <div className={styles.infoContainer}>
            <p>PROTIEN</p>
            <p>{props.user.proteinTarget}g</p>
          </div>
          <div className={styles.barContainer}>
            <div style={{background: '#F45C84', width: `${protWidth}%`}} className={styles.bar}/>
            <p style={{color: '#F45C84'}}>{props.user.proteinConsumed}g</p>
          </div>
        </section>

        {/* Fat Section */}
        <section>
          <div className={styles.infoContainer}>
            <p>FATS</p>
            <p>{props.user.fatTarget}g</p>
          </div>
          <div className={styles.barContainer}>
            <div style={{background: '#03C6FA', width: `${fatWidth}%`}} className={styles.bar}/>
            <p style={{color: '#03C6FA'}}>{props.user.fatConsumed}g</p>
          </div>
        </section>

        {/* Carbs Section */}
        <section>
          <div className={styles.infoContainer}>
            <p>CARBS</p>
            <p>{props.user.carbTarget}g</p>
          </div>
          <div className={styles.barContainer}>
            <div style={{background: '#F0C50F', width: `${carbWidth}%`}} className={styles.bar}/>
            <p style={{color: '#F0C50F'}}>{props.user.carbConsumed}g</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default tooltip;
