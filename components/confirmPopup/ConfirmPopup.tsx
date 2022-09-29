import { Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { addImage } from "../../db";
import { exampleImage } from "../../example";
import { height, width } from "../webcam/WebcamCapture";
import styles from "./confirmPopup.module.scss";

const ConfirmPopup = ({
  imageSrc,
  authorName,
  micNumber,
  onClose,
}: {
  imageSrc: string;
  authorName: string;
  micNumber: 1 | 2;
  onClose: any;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async () => {
    setIsLoading(true);
    await addImage(
      imageSrc as string,
      localStorage.getItem("name") as string,
      micNumber
    );
    setIsLoading(false);
    localStorage.setItem("participated", "true");
    router.push("/yaparticipo");
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* <div>
          <button className={styles.close} onClick={onClose}>
            Cerrar
          </button>
        </div> */}
        <h2>Estás a punto de enviar la siguiente comparación:</h2>
        <section className={styles.images}>
          <div>
            <Image src={imageSrc} alt="Image" width={width} height={height} />
            <p>Tu foto</p>
          </div>
          <div>
            <Image
              src={exampleImage}
              alt="Image"
              width={width}
              height={height}
            />
            <p>La foto que tenías que coincidir</p>
          </div>
        </section>

        <div className={styles.buttons}>
          <Button onClick={handleSubmit} color={"success"} variant="contained">
            {isLoading ? "Enviando..." : "Enviar"}
          </Button>
          <Button onClick={onClose} color="warning" variant="contained">
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPopup;
