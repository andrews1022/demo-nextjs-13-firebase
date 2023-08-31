"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import signIn from "@/firebase/auth/signIn";

import type { FormEvent } from "react";

const SignInPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/admin");
  };

  return (
    <div className="wrapper pt-10">
      <h1 className="font-bold text-4xl">Sign In</h1>

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

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInPage;
