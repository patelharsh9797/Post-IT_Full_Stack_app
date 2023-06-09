"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

type LoggedProps = {
  image: string;
};

const Logged = ({ image }: LoggedProps) => {
  return (
    <li className="flex list-none items-center gap-8">
      <Link href={"/dashboard"}>
        <Image
          src={image}
          width={56}
          height={56}
          alt="user image"
          className="rounded-full shadow-lg"
        />
      </Link>
      <button
        onClick={() => signOut()}
        className="rounded-xl bg-teal-600 px-6 py-2 text-sm font-bold text-white hover:opacity-70"
      >
        Sign Out
      </button>
    </li>
  );
};

export default Logged;
