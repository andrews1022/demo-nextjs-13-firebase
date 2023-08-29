import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

import app from "../config";

const auth = getAuth(app);

const logout = async () => {
  const router = useRouter();

  // signOut(auth).then(() => {
  //   // Sign-out successful.
  // }).catch((error) => {
  //   // An error happened.
  // });

  try {
    //Sign out with the Firebase client
    await signOut(auth);

    //Clear the cookies in the server
    const response = await fetch("http://localhost:3000/api/signOut", {
      method: "POST"
    });

    if (response.status === 200) {
      router.push("/login");
    }
  } catch (error) {
    console.log("error: ", error);
  }
};

export default logout;
