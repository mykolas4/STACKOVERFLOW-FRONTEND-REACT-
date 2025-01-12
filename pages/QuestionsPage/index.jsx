import React from "react";
import styles from "@/pages/QuestionsPage/styles.module.css";
import Link from "next/link"
import AllQuestions from "@/components/SideBar/AllQuestions/AllQuestions";
const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.maincontainer}>
        <div className={styles.maintop}>
          <h2>Newest Questions</h2>
         <div className={styles.button}><b>Ask Question</b></div>
          <div className={styles.maindesc}><b></b>
            <div className={styles.mainfilter}>
              <div className={styles.maintabs}>
                <div className={styles.maintab}>Newest</div>
                <div className={styles.maintab}>Active</div>
                <div className={styles.maintab}>More</div>
                <div className={styles.mainfilteritem}>
                  <p>Filter</p>
                </div>
              </div>
              <div className={styles.questions}>
                <div className={styles.question}></div>
                <AllQuestions />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
