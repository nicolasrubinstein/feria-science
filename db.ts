import { addDoc, collection } from "firebase/firestore";
import { initApp, initDB } from "./firebase";

const app = initApp();
const db = initDB(app);

export const addImage = async (
  imgB64: string,
  authorName: string,
  microscope: number
) => {
  //   try {
  const docRef = await addDoc(collection(db, "images"), {
    authorName,
    imgB64,
    microscope,
  });
  //   } catch (error) {}
};
