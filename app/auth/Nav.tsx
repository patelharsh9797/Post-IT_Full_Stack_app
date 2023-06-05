import Link from "next/link";
import Login from "./Login";
import Logged from "./Logged";
import { getSession } from "../utils/session";

const Nav = async () => {
  const session = await getSession();
  console.log(session);

  return (
    <nav className="flex items-center justify-between py-8">
      <Link className="text-lg font-bold" href={"/"}>
        PostIT
      </Link>
      <ul className="flex items-center gap-7">
        {!session?.user && <Login />}
        {session?.user && <Logged image={session.user.image || ""} />}
      </ul>
    </nav>
  );
};

export default Nav;
