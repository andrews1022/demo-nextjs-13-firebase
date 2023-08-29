// create a new user with their email and password

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import type { UserCredential } from "firebase/auth";

import app from "../config";

const auth = getAuth(app);

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
