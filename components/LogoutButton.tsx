"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Modal } from "./Modal";

// TODO: figure out best style and placement of logout button

const BUTTON_CTA = "Log Out";
const MODAL_TITLE = "ARE YOU SURE?";
const MODAL_CANCEL_CTA = "Cancel";

export const LogoutButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleLogout = async () => {
    setIsModalOpen(false);
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <div className="">
      <button
        className="px-4 py-0.5 bg-red-500 text-white rounded hover:bg-red-600"
        onClick={() => setIsModalOpen(true)}
      >
        {BUTTON_CTA}
      </button>
      {/* confirmation modal */}
      {isModalOpen && (
        <Modal title={MODAL_TITLE} onClose={() => setIsModalOpen(false)}>
          <div className="flex gap-3 justify-center align-center">
            <button
              className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              onClick={() => setIsModalOpen(false)}
            >
              {MODAL_CANCEL_CTA}
            </button>
            <button
              className="rounded-md bg-red-500 px-3 py-2 text-sm text-white font-semibold shadow-sm ring-1 ring-inset ring-red-600 rounded hover:bg-red-600"
              onClick={handleLogout}
            >
              {BUTTON_CTA}
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};
