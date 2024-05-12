import React from "react";
import styles from "../../css/components/container.module.css";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${styles.container} w-full min-h-screen`}>{children}</div>
  );
};

export default Container;
