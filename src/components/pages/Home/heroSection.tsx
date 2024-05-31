"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { JoinRoomSchema } from "@/schemas";
import { nanoid } from "nanoid";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DialogBox from "./dialogBox";
import { toast } from "sonner";

const HeroSection = () => {
  const [randomUrl, setRandomUrl] = useState("");
  const [roomId, setRoomId] = useState("");

  const router = useRouter();

  const generateRandomURL = () => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/room/${nanoid(3)}-${nanoid(
      4
    )}-${nanoid(3)}`.toLowerCase();

    setRandomUrl(url);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoomId(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && roomId.length >= 1) {
      handleJoinRoom();
    }
  };

  const handleJoinRoom = () => {
    const result = JoinRoomSchema.safeParse(roomId);

    if (result.success) {
      router.push(`/room/${roomId}`);
    } else {
      const errorMessages = result.error.format()._errors;
      toast.error("Unable to join", {
        description: errorMessages.join(", "),
      });
    }
  };

  useEffect(() => {
    generateRandomURL();
  }, []);

  return (
    <main className="h-[90vh] flex flex-col items-center">
      <div className="pt-32">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
          Video Calls &
          <span
            className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500
          via-pink-500 to-blue-500 pb-2"
          >
            Collaborative Meetings
          </span>
        </h1>
        <p className="text-lg text-center text-muted-foreground my-2 mx-4">
          Experience the power of real-time video calls with collaborative
          meetings and enhancing remote team interactions.
        </p>
      </div>

      <div className="relative flex sm:flex-row flex-col mt-2">
        <div className="flex justify-center sm:justify-normal">
          {" "}
          <DropdownMenu>
            <DropdownMenuTrigger className="mx-4 h-9 sm:px-4 px-8 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90">
              Create your room
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-1">
              <DropdownMenuItem>
                <Link href={`${randomUrl}`}>Create an instant room</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <DialogBox randomUrl={randomUrl} />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Input
            className="mx-4"
            type="text"
            placeholder="Enter room id"
            autoComplete="off"
            value={roomId}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
        </div>
        <div className="flex justify-center mt-4 sm:mt-0">
          <Button
            className={`text-white mx-4 sm:border-none ${buttonVariants({
              variant: "outline",
            })}`}
            disabled={roomId.length < 1}
            onClick={handleJoinRoom}
          >
            Join room
          </Button>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
