import { Router } from "@mui/icons-material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { collection, doc, onSnapshot, query } from "firebase/firestore";
import { initApp, initDB } from "../firebase";
import ImageComparison from "../components/imageComparison/ImageComparison";
import styles from "../components/imageComparison/imageComparison.module.scss";
interface IImage {
  authorName: string;
  imgB64: string;
  microscope: number;
}

const Pantalla = () => {
  const router = useRouter();
  const [images, setImages] = useState<IImage[]>([]);
  useEffect(() => {
    const app = initApp();
    const db = initDB(app);
    const q = query(collection(db, "images"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const images: IImage[] = [];
      querySnapshot.forEach((doc) => {
        images.push(doc.data() as IImage);
      });
      setImages(images);
    });
  }, []);
  useEffect(() => {
    if (localStorage.getItem("contraseña") !== "FeriaScience2022Tarbut") {
      router.push("/");
    }
  }, []);

  return (
    <div>
      <h1 className={styles.title}>
        ¡Fijate si podés ver la foto que sacaste!
      </h1>
      <div className={styles.wrapper}>
        {images.map((image) => {
          return <ImageComparison {...image} key={Date.now()} />;
        })}
      </div>
    </div>
  );
};

export default Pantalla;
