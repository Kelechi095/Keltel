"use client";
import { AiOutlineMenu } from "react-icons/ai";
import ProfileAvatar from "../ProfileAvatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const registerModal = useRegisterModal();

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

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
              <MenuItem label="Login" />
              <MenuItem
                label="Sign Up"
                handleClick={() => registerModal.onOpen()}
              />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
