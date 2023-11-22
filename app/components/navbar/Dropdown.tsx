"use client";
import { AiOutlineMenu } from "react-icons/ai";
import ProfileAvatar from "../ProfileAvatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleClick = () => {};

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
              <MenuItem handleClick={handleClick} label="Login" />
              <MenuItem handleClick={handleClick} label="Sign Up" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
