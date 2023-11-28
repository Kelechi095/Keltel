"use client";
import axios from "axios";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter, redirect } from "next/navigation";
import NewUser from "../components/NewUser";
import { signIn } from "next-auth/react";
import useGetSession from "../hooks/useGetSession";


const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {session, status} = useGetSession()

  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    try {
      await axios.post("/api/register", data);
      toast.success("Registration Successful");
      setIsLoading(false);
      router.push("/login");
    } catch (err) {
      console.log(err);
      toast.error("Error occured");
      setIsLoading(false);
    }
  };

  const onGoogleSubmit = () => {
    signIn('google')
  };

  if(status === "loading") {
    return <h2>Loading...</h2>
  }

  if (session) {
    redirect("/");
  }

  return (
    <NewUser
      title="Welcome to Keltel"
      subtitle="Register"
      id1="name"
      isLoading={isLoading}
      linkText="login"
      footerTitle="Already have an account"
      footerLinkTitle="Login"
      onGoogleSubmit={onGoogleSubmit}
      onSubmit={onSubmit}
      buttonTitle="Register"
    />
  );
};

export default RegisterPage;
