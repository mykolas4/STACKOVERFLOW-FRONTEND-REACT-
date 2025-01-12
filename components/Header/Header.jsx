import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import logo from "@/assets/logo.svg";
import search from "@/assets/search.svg";
import avatar from "@/assets/avatar.svg";

const Header = () => {
  return (
    <header>
      <div className={styles.headercontainer}>
        <div className={styles.headerleft}>
          
        <Link href="/">  
            <img
              src={logo.src}
              alt="Logo"
              style={{ width: "100px", height: "100px" }}
            />{" "}
          </Link>{" "}
          <Link href="/QuestionsPage">ASK A QUESTION</Link>
        </div>
        <div className={styles.headermiddle}>
          <div className={styles.headersearchcontainer}>
            <Link href="/">
              <img
                src={search.src}
                alt="search"
                style={{ width: "20px", height: "100px" }}
              />{" "}
            </Link>{" "}
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        <div className={styles.headerright}>
          <div className={styles.headerrightcontainer}></div>
          <Link href="/">
            <img
              src={avatar.src}
              alt="avatar"
              style={{ width: "50px", height: "100px" }}
            />{" "}
          </Link>{" "}
        </div>
      </div>
    </header>
  );
};

export default Header;
