import React from "react";
import { exampleImage } from "../../example";
import styles from "./imageComparison.module.scss";

interface IProps {
  authorName: string;
  microscope: number;
  imgB64: string;
}

const ImageComparison: React.FC<IProps> = ({
  authorName,
  microscope,
  imgB64,
}) => {
  return (
    <div className={styles.container}>
      <section className={styles.imagePair}>
        <img src={imgB64} alt="image" width={200} />
        <img
          src={microscope === 1 ? "/microscopio1.jpeg" : "/microscopio2.jpeg"}
          alt="image2"
          width={200}
        />
      </section>
      <p>{authorName}</p>
    </div>
  );
};

export default ImageComparison;
