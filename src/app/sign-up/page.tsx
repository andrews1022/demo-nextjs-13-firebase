"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import signUp from "@/firebase/auth/signUp";

import type { FormEvent } from "react";

const SignUpPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailAlreadyInUse, setEmailAlreadyInUse] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { result, error } = await signUp(email, password);

    if (error) {
      setEmailAlreadyInUse(true);
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/admin");
  };

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1 className="mt-60 mb-30">Sign up</h1>

        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="email">
            <p>Email</p>
            <input
              onChange={(event) => setEmail(event.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
              className="block outline"
            />
          </label>

          <label htmlFor="password">
            <p>Password</p>
            <input
              onChange={(event) => setPassword(event.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="block outline"
            />
          </label>

          {emailAlreadyInUse ? (
            <p className="text-red-600">An account with that email already exists</p>
          ) : null}

          <button className="inline-block" type="submit">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
