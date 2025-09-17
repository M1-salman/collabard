"use client";

import { BackButton } from "@/components/pages/Auth/BackButton";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { useSearchParams } from "next/navigation";

export const ErrorCard = () => {
  const params = useSearchParams();
  const code = params?.get("error");

  const message =
    code === "Configuration"
      ? "Database is paused, contact: salmanmasood917@gmail.com"
      : "Something went wrong 🧐";

  return (
    <Card className="shadow-xl rounded w-[400px] ">
      <CardHeader>
        <p className="font-bold text-center text-2xl">{message}</p>
      </CardHeader>
      <CardFooter>
        <BackButton label="Return back to login" href="/auth/login" />
      </CardFooter>
    </Card>
  );
};
