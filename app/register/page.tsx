"use client";
import axios from "axios";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import NewUser from "../components/NewUser";

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    console.log(data);
    try {
      await axios.post("/api/register", data);
      router.push("/");
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      toast.error("Error occured");
      setIsLoading(false);
    }
  };

  const onGoogleSubmit = () => {};

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
