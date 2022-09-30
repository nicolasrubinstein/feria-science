import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../styles/YaParticipo.module.scss";

const YaParticipo = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  useEffect(() => {
    if (!localStorage.getItem("participated")) {
      router.push("/");
    }

    setName(localStorage.getItem("name") || "");
  }, []);
  return (
    <div className={styles.container}>
      <h1>¡Gracias por haber participado, {name}!</h1>
      <h2>Esperamos que te hayas divertido</h2>
      <h3>¡Fijate si podes ver tu foto en la pantalla!</h3>
    </div>
  );
};

export default YaParticipo;
