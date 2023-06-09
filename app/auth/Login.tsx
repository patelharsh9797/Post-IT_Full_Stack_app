"use client";

import { signIn } from "next-auth/react";

import React from "react";

const Login = () => {
  return (
    <li className="list-none">
      <button
        onClick={() => signIn()}
        className="rounded-xl bg-teal-600 px-6 py-2 text-sm font-bold text-white hover:opacity-70"
      >
        Sign In
      </button>
    </li>
  );
};

export default Login;
