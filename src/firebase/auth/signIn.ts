import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config";

import type { UserCredential } from "firebase/auth";

const signIn = async (email: string, password: string) => {
  let result: UserCredential | null = null;
  let error: unknown = null;

  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return {
    result,
    error
  };
};

export default signIn;
