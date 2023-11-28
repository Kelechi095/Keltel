"use client";
import { AiOutlineMenu } from "react-icons/ai";
import ProfileAvatar from "../ProfileAvatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import { useRouter } from "next/navigation";
import useGetSession from "@/app/hooks/useGetSession";
import { signOut } from "next-auth/react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const { session, status } = useGetSession();

  console.log(session)

  const router = useRouter();

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <div className="your_home">{session?.name}</div>
        <div className="toggle_dropdown" onClick={toggleOpen}>
          <AiOutlineMenu />
          <div className="hidden md:block">
            <ProfileAvatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="dropdown">
          {
            <div className="flex flex-col cursor-pointer">
              {session && (
                <MenuItem label="Logout" handleClick={() => signOut()} />
              )}

              {!session && (
                <MenuItem
                  label="Sign Up"
                  handleClick={() => router.push("/register")}
                />
              )}

              {!session && (
                <MenuItem
                  label="Login"
                  handleClick={() => router.push("/login")}
                />
              )}
            </div>
          }
        </div>
      )}
    </div>
  );
};

export default Dropdown;
