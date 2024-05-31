// User Button Avatar
"use client";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { useRouter } from "next/navigation";

const UserButton = () => {
  const session = useCurrentUser();
  const router = useRouter();
  const onClick = () => {
    router.push("/auth/register");
  };

  return (
    <>
      {!session ? (
        <Button
          type="submit"
          onClick={onClick}
          className="p-[2px] font-semibold rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 h-10"
        >
          <div className="flex items-center px-5 h-full bg-zinc-800 rounded-md transition duration-300 text-white hover:bg-transparent text-base">
            Sign Up
          </div>
        </Button>
      ) : (
        <Link href="/profile">
          <Avatar>
            {session.image ? (
              <AvatarImage
                src={session.image ? session.image : ""}
                alt="logo"
                className="shadow-md shadow-black hover:scale-110 transition-transform duration-300  bg-gradient-to-r from-pink-500 to-purple-500"
              />
            ) : (
              <AvatarImage
                src={"/avatar.svg"}
                alt="logo"
                className="shadow-md shadow-black hover:scale-110 transition-transform duration-300  bg-gradient-to-r from-pink-500 to-purple-500 p-0.5"
              />
            )}
          </Avatar>
        </Link>
      )}
    </>
  );
};

export default UserButton;
