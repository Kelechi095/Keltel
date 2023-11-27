"use client";
import { AiOutlineMenu } from "react-icons/ai";
import ProfileAvatar from "../ProfileAvatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import { useRouter } from "next/navigation";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const router = useRouter()

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <div className="your_home">Your home</div>
        <div className="toggle_dropdown" onClick={toggleOpen}>
          <AiOutlineMenu />
          <div className="hidden md:block">
            <ProfileAvatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="dropdown">
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem label="Login" handleClick={() => router.push('/login')}/>
              <MenuItem
                label="Sign Up"
                handleClick={() => router.push('/register')}
              />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
