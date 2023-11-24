"use client";
import { useState, useEffect, useCallback } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title: string;
  body: React.ReactElement;
  footer: React.ReactElement;
  actionLabel: string;
  disabled: boolean;
  secondaryAction: () => void;
  secondaryActionLabel: string;
}

const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}: ModalProps) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);

    onClose();
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) return null;

  return (
    <div className="modal_overlay">
      <div className="modal">
        <div
          className={`translate h-full 
          ${showModal ? "block" : "hidden"}
          `}
        >
          <div className="modal_content">
            <div className="modal_header">
              <button className="modal_close_button" onClick={handleClose}>
                <IoMdClose size={18} />
              </button>
              <div className="text-lg font-semibold">Login modal</div>
            </div>
            <div className="relative p-6 flex-auto">Modal Body</div>
            <div className="flex flex-col gap-2 p-6">
              <div className="flex flex-row items-center gap-4 w-full">
                {secondaryAction && secondaryActionLabel && (
                  <Button
                    outline
                    disabled
                    label={secondaryActionLabel}
                    onClick={handleSecondaryAction}
                  />
                )}
                <Button disabled label={actionLabel} onClick={handleSubmit} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
