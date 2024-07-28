import React from "react";
import Header from "../../components/Header/header";
import SideBar from "../../components/Sidebar";
import styles from "./dashboard.module.css";
export default function Dashboard() {
  return (
    <div>
      <Header />
      <div className={styles.contentContainer}>
        <SideBar />
        <p>HELLo</p>
      </div>
    </div>
  );
}
