import Image from "next/image";
import React, { useState } from "react";
import Webcam from "react-webcam";
import styles from "./webcamCapture.module.scss";
import { Button } from "@mui/material";
import { addImage } from "../../db";
import ConfirmPopup from "../confirmPopup/ConfirmPopup";
export const height = 250;
export const width = 300;
const videoConstraints = {
  width,
  height,
  facingMode: "environment",
};

const WebcamCapture = ({
  goalImg,
  micNumber,
}: {
  goalImg: string;
  micNumber: 1 | 2;
}) => {
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [micNum, setMicNum] = useState<1 | 2>(1);

  return (
    <div className={styles.cam}>
      {showConfirmPopup && (
        <ConfirmPopup
          micNumber={micNum}
          authorName={authorName}
          imageSrc={imageSrc}
          onClose={() => setShowConfirmPopup(false)}
        />
      )}
      <h1>¡Coincidí la imágen con la de abajo!</h1>
      <p>
        Cuando estés conforme con la coincidencia, hacé click en
        &quot;capturar&quot;
      </p>
      <Webcam
        audio={false}
        height={height}
        screenshotFormat="image/jpeg"
        width={width}
        videoConstraints={videoConstraints}
      >
        {/* @ts-ignore */}
        {({ getScreenshot }) => (
          <Button
            variant="contained"
            onClick={() => {
              const imageSrc = getScreenshot();
              setImageSrc(imageSrc || "");
              setAuthorName(localStorage.getItem("name") || "");
              setMicNum(micNumber);
              setShowConfirmPopup(true);
            }}
            className={styles.captureBtn}
          >
            Capturar
          </Button>
        )}
      </Webcam>
      <Image src={goalImg} alt={"Image"} width={width} height={height} />
    </div>
  );
};

export default WebcamCapture;
