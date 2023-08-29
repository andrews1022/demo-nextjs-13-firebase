"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";
import { getAuth, signOut } from "firebase/auth";
import app from "@/firebase/config";
// import logout from "@/firebase/auth/logout";

const AdminPage = () => {
  const auth = getAuth(app);
  const user = useAuthContext();
  const router = useRouter();

  // redirect to home page if user is not a user
  // useEffect(() => {
  //   if (user === null) router.push("/");
  // }, [user]);

  const handleLogout = async () => {
    // signOut(auth).then(() => {
    //   // Sign-out successful.
    // }).catch((error) => {
    //   // An error happened.
    // });

    try {
      //Sign out with the Firebase client
      await signOut(auth);

      //Clear the cookies in the server
      const res = await fetch("http://localhost:3000/api/signOut", {
        method: "POST"
      });

      if (res.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return user ? (
    <div>
      <h1>Admin page</h1>
      <p>Welcome to the admin page and our super secret tech</p>
      <p>You can logout if you want:</p>
      <button
        className="border-solid border-slate-600 border-2 p-2"
        onClick={handleLogout}
        type="button"
      >
        Logout
      </button>
    </div>
  ) : (
    <p>Go away!</p>
  );
};

export default AdminPage;
