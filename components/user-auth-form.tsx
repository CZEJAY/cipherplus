"use client";

import * as React from "react";
import { useState } from "react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon, GithubIcon, Loader2 } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import axios from "axios";
import * as z from "zod";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const formSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingGithub, setIsLoadingGithub] = useState(false);
  const [isLoadingGoogle, setIsLoadingGoogle] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [passwordId, setPasswordId] = useState("password");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const togglePassWordType = () => {
    const passwordInput = document.getElementById(
      "password"
    ) as HTMLInputElement;
    if (passwordInput.type === "password") {
      setPasswordId("text");
    } else {
      setPasswordId("password");
    }
  }

  const signInGitHub = async () => {
    setIsLoadingGithub(true);
   await signIn("github", {
      callbackUrl: `/`,
      redirect: false,
    });
    setIsLoadingGithub(false);
  }

  const signInGoogle = async () => {
    setIsLoadingGoogle(true)
    await signIn("google", {
      callbackUrl: `/`,
      redirect: false,
    })
    setIsLoadingGoogle(false)
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="name@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-1 mb-2">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel>Password</FormLabel>
                    <FormControl className="relative">
                      <Input id="password" type={passwordId} placeholder="******" {...field} />
                      
                    </FormControl>
                    {
                      isShowPassword ? (
                        <EyeIcon className="absolute right-0 top-6  flex items-center cursor-pointer justify-center px-2" size={37} 
                        onClick={() => {
                          setIsShowPassword(false)
                          togglePassWordType()
                        }}
                        />
                      ) : (
                        <EyeOffIcon className="absolute right-0 top-6  flex items-center  cursor-pointer justify-center px-2" size={37} onClick={() => {
                          setIsShowPassword(true);
                          togglePassWordType()
                        }}/>
                      )
                    }
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Sign In with Email
            </Button>
          </div>
        </form>
      </Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button onClick={() => signInGitHub()} variant="outline" type="button" disabled={isLoading}>
        {isLoadingGithub ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <GithubIcon className="mr-2 h-4 w-4" />
        )}{" "}
        Github
      </Button>
      <Button onClick={() => signInGoogle()} variant="outline" type="button" disabled={isLoading}>
        {isLoadingGoogle ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <FaGoogle size={24} className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </Button>
    </div>
  );
}
