import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

const Navbar = () => {
  const user = true; // Replace with actual user state or context
  return (
    <header>
      <MaxWidthWrapper>
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-notebook-tabs text-primary"
            >
              <path d="M2 6h4" />
              <path d="M2 10h4" />
              <path d="M2 14h4" />
              <path d="M2 18h4" />
              <rect width="16" height="20" x="4" y="2" rx="2" />
              <path d="M15 2v20" />
              <path d="M15 7h5" />
              <path d="M15 12h5" />
              <path d="M15 17h5" />
            </svg>
            <span className="text-xl font-bold text-primary">
              Generate Lesson Plans
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            <Link
              className={buttonVariants({
                variant: "ghost",
              })}
              href="/pricing"
            >
              Pricing
            </Link>
            {!user ? (
              <>
                <Link href="/login">Login</Link>
                <Link href="/register" className={buttonVariants()}>
                  Sign up
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/dashboard"
                  className={buttonVariants({
                    variant: "secondary",
                  })}
                >
                  Dashboard
                </Link>
                <Link className={buttonVariants()} href="/create">
                  Create
                </Link>
              </>
            )}
          </nav>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
