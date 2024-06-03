"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CardWrapper } from "./CardWrapper";
import { useTransition, useState } from "react";
import { login } from "@/actions/login";
import { useSearchParams } from "next/navigation";

import { FormError } from "@/components/FormError";
import { FormSuccess } from "@/components/FormSuccess";
import Link from "next/link";

const LoginForm = () => {
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider!"
      : "";

  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    startTransition(() => {
      login(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  return (
    <CardWrapper
      headerTitle="Login"
      showSocial
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="TylerDurden@gmail.com"
                      type="email"
                      autoComplete="on"
                      className="bg-zinc-900 text-slate-100"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="••••••••"
                      {...field}
                      disabled={isPending}
                      type="password"
                      autoComplete="off"
                      className="bg-zinc-900 text-slate-100"
                    />
                  </FormControl>
                  <Button
                    size="sm"
                    variant="link"
                    className="px-0 "
                    type="button"
                  >
                    <Link href="/auth/reset">Forgot Password?</Link>
                  </Button>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>

          <FormError message={error || urlError} />
          <FormSuccess message={success} />
          <Button
            disabled={isPending}
            type="submit"
            className="p-[3px] relative font-semibold w-full bg-transparent"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[5px] w-full h-11" />
            <div className="py-1 mt-2 w-full bg-zinc-800 rounded-[5px] relative group transition duration-200 text-white hover:bg-transparent text-lg">
              {!isPending ? "Login →" : "Logging in..."}
            </div>
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;
