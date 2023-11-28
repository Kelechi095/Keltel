"use client";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import NewUser from "../components/NewUser";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import useGetSession from "../hooks/useGetSession";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {session, status} = useGetSession()


  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(false);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success("Log in successful");
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  const onGoogleSubmit = () => {
    signIn("google");
  };

  if(status === "loading") {
    return <h2>Loading...</h2>
  }

  if (session) {
    redirect("/");
  }


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
