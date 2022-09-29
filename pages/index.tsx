import { Biotech, Coronavirus } from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";

const Home = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    setName(localStorage.getItem("name") || "");
  }, []);
  return (
    <div className={styles.homeContent}>
      <h1>¡Hola!</h1>
      <p>
        ¡Te damos la bienvenida a la <strong>expedición microscópica</strong>!
      </p>
      <p>¿Qué microscopio vas a usar?</p>
      <section className={styles.btns}>
        <Link href="/quiz/1">
          <Button variant="contained" startIcon={<Biotech />}>
            Microscopio 1
          </Button>
        </Link>
        <Link href="/quiz/2">
          <Button variant="contained" color="error" startIcon={<Coronavirus />}>
            Microscopio 2
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
