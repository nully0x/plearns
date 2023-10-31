"use client";

import PasswordStrength from "@/components/auth/PasswordStrength";
import { FilledButton } from "@/components/common/Button";
import Input, { PasswordInput } from "@/components/common/Input";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="flex flex-col w-full max-w-[472px] gap-[45px] mx-auto mt-[45px] ">
      <div className="flex flex-col text-primary-gray gap-2 text-center">
        <h3 className="text-5xl font-semibold font-sofia-pro ">Create an Account</h3>
        <h6 className="text-primary-gray_body text-2xl">
          Please enter the following details
        </h6>
      </div>
      <form className="flex flex-col w-full gap-[45px]">
        <div className="flex flex-col gap-6">
          <Input placeholder="Full name" />
          <Input placeholder="Email" />
          <Input placeholder="Phone number" />
          <PasswordInput placeholder="Create password" />
          <PasswordStrength text="Mofeetchhdhd" />
          <PasswordInput placeholder="Confirm password" />
        </div>
        <div className="flex flex-col gap-8">
          <FilledButton className="justify-center">Sign up</FilledButton>
          <p className="text-center">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-primary-dark_green font-semibold"
            >
              Log in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
