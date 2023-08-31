import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config";

import type { UserCredential } from "firebase/auth";

const signUp = async (email: string, password: string) => {
  let result: UserCredential | null = null;
  let error: unknown = null;

  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return {
    result,
    error
  };
};

export default signUp;
