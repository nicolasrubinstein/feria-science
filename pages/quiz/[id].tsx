import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import WebcamCapture from "../../components/webcam/WebcamCapture";
import { exampleImage } from "../../example";

const Quiz = () => {
  const router = useRouter();
  const micNumber = Number(router.query.id);

  useEffect(() => {
    if (micNumber !== 1 && micNumber !== 2) {
      router.push("/404");
    }
  }, []);

  return (
    <div>
      <WebcamCapture
        micNumber={micNumber as 1 | 2}
        goalImg={micNumber === 1 ? "/microscopio1.jpeg" : "/microscopio2.jpeg"}
      />
    </div>
  );
};

export default Quiz;
