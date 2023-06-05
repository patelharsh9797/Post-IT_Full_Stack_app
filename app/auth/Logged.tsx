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
          className="rounded-full"
        />
      </Link>
      <button
        onClick={() => signOut()}
        className="rounded-md bg-teal-600 px-6 py-2 text-sm font-semibold text-black hover:bg-teal-500 hover:text-white"
      >
        Sign Out
      </button>
    </li>
  );
};

export default Logged;
