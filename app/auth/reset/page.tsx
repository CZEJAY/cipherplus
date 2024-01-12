"use client";

import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "@/components/auth/register";
import { cn } from "@/lib/utils";

import React from "react";
import ResetForm from "@/components/auth/ResetForm";

const page = () => {
  return (
    <>
      <div className="">
        <ResetForm />
      </div>
    </>
  );
};

export default page;
