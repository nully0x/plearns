"use client";

import PasswordStrength from "@/components/auth/PasswordStrength";
import { FilledButton } from "@/components/common/Button";
import Input, { PasswordInput } from "@/components/common/Input";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-col w-full max-w-[472px] gap-[45px] mx-auto mt-[45px] ">
      <div className="flex flex-col text-primary-gray gap-2 text-center">
        <h3 className="text-5xl font-semibold font-sofia-pro ">
        Password Reset
        </h3>
        <h6 className="text-primary-gray_body text-2xl">
        Enter your registered email to continue
        </h6>
      </div>
      <form className="flex flex-col gap-[45px]">
        <div className="flex flex-col gap-6">
          <Input placeholder="Enter Email" />

          <div className="flex justify-end">
            <Link
              href="/auth/forgot-password"
              className="text-primary-gray text-sm"
            >
              Forgot password?
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <FilledButton className="justify-center">Log in</FilledButton>
          <p className="text-center">
          Remember password? {" "}
            <Link href="/auth/login" className="text-primary-dark_green font-semibold">
            Log in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
