import React from "react";
import styles from "./css/styles.module.css"

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
        <div className={styles.sidebaroption}>

          </div>
          <div className={styles.sidebaroption}>
            <div className={styles.link}>
            <div className={styles.linktag}>
                <p>Home</p>
                <div className={styles.tags}>
                  <p>Questions</p>
                  <p>Tags</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sidebaroption}>
            
            <div className={styles.link}>
            <div className={styles.linktag}>
              <p>Users</p>
                <p>Companies</p>
              </div>
            </div>
          </div>
          <div className={styles.sidebaroption}>
            <div className={styles.link}>
              <div className={styles.linktag}>
              </div>
            </div>
          </div>
          <div className={styles.sidebaroption}>
            <p>LABS</p>
            <div className={styles.link}>
            <div className={styles.linktag}>
                <a>Jobs</a>
                <p>Discussions</p>
              </div>
            </div>
          </div>
        </div>
  );
};

export default SideBar;
