import React from "react";
import Link from "next/link";
import styles from "./styles.module.css"
const AllQuestions = () => {
  return (
    <div className={styles.allquestions}>
      <div className={styles.allquestionscontainer}>
        <div className={styles.allquestionsleft}>
          <div className={styles.alloptions}>
            <div className={styles.alloption}>
              <p>0</p>
              <span>Votes</span>
            </div>
            <div className={styles.alloption}>
              <p>0</p>
              <span>Answers</span>
            </div>
            <div className={styles.alloption}>
              <p>0</p>
              <small>0 views</small>
            </div>
            <div className={styles.questionanswer}>
              <Link href="/">Changesets Missing Links to Work Items During Migration from TFS to Azure DevOps Server</Link>
              <div>I was trying out Huggingface's new framework to build agents, named 'smolagents', and one think struck out to me when i ran the tool_calling_agents and the code_agents as well.</div>
              <span className={styles.questiontags}>react</span>
              <span className={styles.questiontags}>antd</span>
              <span className={styles.questiontags}>frontend</span>
            </div>
            <div className={styles.author}>
                <small>Timestamp</small>
                <div className={styles.authordetails}>react</div>
                <p>UserName</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllQuestions;
