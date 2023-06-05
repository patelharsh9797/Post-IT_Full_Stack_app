import Link from "next/link";
import Login from "./Login";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center py-8">
      <Link className="font-bold text-lg" href={"/"}>
        PostIT
      </Link>
      <ul className="flex items-center gap-7">
        <Login />
      </ul>
    </nav>
  );
};

export default Nav;
