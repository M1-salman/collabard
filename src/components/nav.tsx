import Link from "next/link";
import UserButton from "./userButton";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center h-16 sm:px-8 px-4">
      <Link href="/" className="flex items-center">
        <h1 className="text-2xl font-bold ">
          <span>collab</span>
          <span className="transition-all duration-300 ease-in-out text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 ">
            ard
          </span>
        </h1>
      </Link>
      <UserButton />
    </nav>
  );
};

export default Nav;
