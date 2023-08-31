"use client";

import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/firebase/config";

import type { User } from "firebase/auth";
import type { ReactNode } from "react";

type AuthContextType = {
  handleLogout: () => Promise<void>;
  user: User | null;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used within an AuthContextProvider");
  }

  return context;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      router.push("/");
    } catch (error) {
      console.error("Logout error: ", error);
    }
  };

  return (
    <AuthContext.Provider value={{ handleLogout, user }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
