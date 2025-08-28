"use client";

import { useEffect } from "react";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  useUser,
} from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";

const Header = () => {
  const { user } = useUser();
  const createUser = useMutation(api.user.createUser);

  const CreateUser = async () => {
    const result = await createUser({
      userName: user?.fullName ?? "",
      imageUrl: user?.imageUrl ?? "",
      email: user?.primaryEmailAddress?.emailAddress ?? "",
    });
    console.log(result);
  };

  useEffect(() => {
    user && CreateUser();
  }, [user]);

  return (
    <header className="border-bottom-only">
      <div className="container">
        <div className="w-full h-[4.5rem] border-x bg-white padding-x flex items-center justify-between">
          <div className="font-extrabold">DocuLens</div>
          <div className="px-5 py-1.5 cursor-pointer">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
