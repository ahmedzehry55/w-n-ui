import React from "react";
import Header from "../components/Header/Header";
import styles from "./layout.module.css";
export const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main>{children}</main>
    </div>
  );
};
