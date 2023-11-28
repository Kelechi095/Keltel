"use client";
import { useRouter } from "next/navigation";
import {
  FieldErrors,
  FieldValues,
  SubmitHandler,
  UseFormRegister,
} from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import Input from "./inputs/Input";
import Button from "./Button";

interface PageProps {
  title: string;
  subtitle: string;
  isLoading: boolean;
  onGoogleSubmit: () => void;
  onSubmit: () => void;
  linkText: string;
  footerTitle: string;
  footerLinkTitle: string;
  label1?: string;
  buttonTitle: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  required?: boolean;
  id1: string;
}

const NewUser = ({
  title,
  subtitle,
  isLoading,
  onGoogleSubmit,
  onSubmit,
  linkText,
  footerTitle,
  footerLinkTitle,
  buttonTitle,
  id1,
}: PageProps) => {
  const vals = id1
    ? {
        name: "",
        email: "",
        password: "",
      }
    : {
        email: "",
        password: "",
      };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: vals,
  });

  const router = useRouter();

  console.log(isLoading)

  return (
    <div className="page">
      <div className="page_content">
        <h2 className="page_header">{title}</h2>
        <div className="text-start px-6 py-4">
          <div className="text-xl text-center text-neutral-600 font-bold">
            {subtitle}
          </div>
        </div>
        <div className="flex flex-col gap-2 px-6">
          <div className="flex flex-col gap-4">
            {id1 === "name" && (
              <Input
                id={id1}
                label="Name"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
              />
            )}
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
              label={isLoading ? 'Submitting...' : buttonTitle}
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
                <div>{footerTitle}</div>
                <div
                  className="text-blue-500 text-semibold cursor-pointer hover:underline"
                  onClick={() => router.push(`/${linkText}`)}
                >
                  {footerLinkTitle}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
