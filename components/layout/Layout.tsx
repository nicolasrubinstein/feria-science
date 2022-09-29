import React from "react";
import styles from "./layout.module.scss";

const Layout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <div>
      <header className={styles.header}>
        <h1>Feria de ciencias</h1>
      </header>
      {children}
    </div>
  );
};

export default Layout;
