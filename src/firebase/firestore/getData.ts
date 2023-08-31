import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from "../config";

const db = getFirestore(app);

const getDoument = async (collection: string, id: string) => {
  let docRef = doc(db, collection, id);

  let result = null;
  let error = null;

  try {
    result = await getDoc(docRef);
  } catch (e) {
    error = e;
  }

  return {
    result,
    error
  };
};

export default getDoument;
