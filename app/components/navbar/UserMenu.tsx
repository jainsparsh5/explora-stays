"use client";

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";

import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { SafeUser } from "@/app/types";
import { signOut } from "next-auth/react";
import toast from "react-hot-toast";
import useRentModal from "@/app/hooks/useRentModal";
import { useRouter } from "next/navigation";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }
    //open rent modal
    rentModal.onOpen();
  }, [currentUser, loginModal, rentModal]);

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <div
          onClick={onRent}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100  hover:shadow-sm transition cursor-pointer"
        >
          Explorafy your home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:flex items-center justify-center gap-1">
            {!currentUser?.image && (
              <span className="font-light">
                {currentUser?.name?.split(" ")[0]}
              </span>
            )}
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem
                  onClick={() => {
                    router.push("/trips");
                    setIsOpen(false);
                  }}
                  label="My Trips"
                />
                <MenuItem
                  onClick={() => {
                    router.push("/favorites");
                    setIsOpen(false);
                  }}
                  label="My Favorites"
                />
                <MenuItem
                  onClick={() => {
                    router.push("/reservations");
                    setIsOpen(false);
                  }}
                  label="My Reservations"
                />
                <MenuItem
                  onClick={() => {
                    router.push("/properties");
                    setIsOpen(false);
                  }}
                  label="My Properties"
                />
                <MenuItem
                  onClick={rentModal.onOpen}
                  label="Explorafy My Home"
                />
                <hr />
                <MenuItem
                  onClick={() => {
                    signOut()
                      .then(() => {
                        toast.success("Logged out successfully");
                      })
                      .catch(() => {
                        toast.error("Failed to logout");
                      });
                  }}
                  label="Logout"
                />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="Login" />
                <MenuItem onClick={registerModal.onOpen} label="Sign up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
