import { useRouter } from "next/router";
import React, { useState } from "react";
import WebcamCapture from "../../components/webcam/WebcamCapture";
import { exampleImage } from "../../example";

const Quiz = () => {
  const router = useRouter();
  const micNumber = Number(router.query.id);

  if (micNumber !== 1 && micNumber !== 2) {
    return router.push("/404");
  }

  return (
    <div>
      <WebcamCapture micNumber={micNumber} goalImg={exampleImage} />
    </div>
  );
};

export default Quiz;
