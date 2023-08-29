// sign in an existing user with their email/password

import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import type { UserCredential } from "firebase/auth";

import app from "../config";

const auth = getAuth(app);

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
