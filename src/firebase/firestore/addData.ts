import { doc, getFirestore, setDoc } from "firebase/firestore";
import { app } from "../config";

const db = getFirestore(app);

const addData = async (colllection: string, id: string, data: {}) => {
  let result = null;
  let error = null;

  try {
    result = await setDoc(doc(db, colllection, id), data, {
      merge: true
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
};

export default addData;
