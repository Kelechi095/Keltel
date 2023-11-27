"use client";
import axios from "axios";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import NewUser from "../components/NewUser";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(false);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success("Log in successful");
       router.refresh()
       router.push("/")
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  const onGoogleSubmit = () => {
    signIn("google");
  };

  return (
    <NewUser
      title="Welcome back"
      subtitle="Login"
      isLoading={isLoading}
      linkText="register"
      footerTitle="Not registered?"
      footerLinkTitle="Register"
      onGoogleSubmit={onGoogleSubmit}
      onSubmit={onSubmit}
      buttonTitle="Login"

    />
  );
};

export default LoginPage;
