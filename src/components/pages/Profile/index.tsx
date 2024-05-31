"use client";

import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/useCurrentUser";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";

const Profile = () => {
  const session = useCurrentUser();
  const onClick = () => {
    logout();
  };

  return !session ? (
    redirect("/")
  ) : (
    <div className="flex flex-col space-y-20 items-center justify-center pt-32 px-8 landing">
      <Card className="p-2 sm:w-[350px] w-[300px]">
        <CardHeader>
          <CardTitle>Your Profile</CardTitle>
          <CardDescription>See your profile details here.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1 my-2">
            <Label htmlFor="name" className="text-xl font-semibold">
              Name
            </Label>
            <h2>{session?.name}</h2>
          </div>
          <div className="space-y-1 my-2">
            <Label htmlFor="email" className="text-xl font-semibold">
              Email
            </Label>
            <h2>{session?.email}</h2>
          </div>
        </CardContent>
        <CardFooter className="mt-2">
          <Button type="submit" variant="default" onClick={onClick}>
            Sign Out
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Profile;
