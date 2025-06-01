"use client";

import { ReactNode } from "react";
import { XIcon } from "./svgs/XIcon";

interface ModalProps {
  onClose?: () => void;
  title: string;
  children: ReactNode;
}

// TODO: have props to center or left-align title text
// TODO: double check a11y

export const Modal = ({ onClose, title, children }: ModalProps) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* overlay */}
      <button
        className="modal-backdrop bg-black/90 fixed inset-0"
        onClick={onClose}
        aria-label="Close modal"
      />
      {/* modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative transform overflow-hidden rounded-lg bg-gray-200 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md sm:p-6">
          <div className="flex flex-col items-end mb-4">
            <button
              onClick={onClose}
              className="rounded-md bg-white text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <XIcon className="h-6 w-6" />
            </button>
            <h3 className="mx-auto text-center text-lg font-semibold text-gray-900">
              {title}
            </h3>
          </div>

          <div className="mt-2">{children}</div>
        </div>
      </div>
    </div>
  );
};
