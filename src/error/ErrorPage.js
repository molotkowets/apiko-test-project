import React from "react";
import styles from "./ErrorPage.module.css";
import { useLocation } from "react-router-dom";

function ErrorPage() {
  let location = useLocation();

  return (
    <div className={styles.errorBlock}>
      <h1>
        Page named <code>{location.pathname}</code> doesn't exist. Error 404
      </h1>
    </div>
  );
}

export default ErrorPage;
