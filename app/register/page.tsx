"use client";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Button from "../components/Button";
import { useRouter } from "next/navigation";
import Input from "../components/inputs/Input";

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

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

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <div className="text-start">
        <div className="text-2xl font-bold">Welcome to Keltel</div>
      </div>
    </div>
  );

  return (
    <div className="page">
      <div className="page_content">
        <div className="page_header text-lg font-semibold mt-4 text-center">
          Register
        </div>
        <div className="relative p-6 flex-auto">{bodyContent}</div>
        <div className="flex flex-col gap-2 p-6">
          <div className="flex flex-row items-center gap-4 w-full"></div>
          <div className="flex flex-col gap-4 mt-3">
            <Input
              id="name"
              label="Name"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
            <Input
              id="email"
              label="Email"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
            <Input
              id="password"
              label="Password"
              type="password"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
            <hr />
            <Button
              label="Register"
              outline={false}
              onClick={handleSubmit(onSubmit)}
            />
            <Button
              outline
              label="Continue with Google"
              icon={FcGoogle}
              onClick={onGoogleSubmit}
            />

            <div className="text-neutral-500 text-center mt-4 font-light">
              <div className="text-center flex flex-row items-center gap-2">
                <div>Already have an account?</div>
                <div
                  className="text-neutral-800 cursor-pointer hover:underline"
                  onClick={() => router.push("/login")}
                >
                  Log in
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
