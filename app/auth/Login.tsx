"use client";

import { signIn } from "next-auth/react";

import React from "react";

const Login = () => {
  return (
    <li className="list-none">
      <button
        onClick={() => signIn()}
        className="text-sm bg-teal-600 hover:bg-teal-500 hover:text-white text-black font-semibold px-6 py-2 rounded-md"
      >
        Sign In
      </button>
    </li>
  );
};

export default Login;
