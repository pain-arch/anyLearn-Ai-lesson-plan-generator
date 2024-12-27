"use client";

import React from "react";
import { useState } from "react";
import { buttonVariants } from "../ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

const MobileMenuNav = ({ user }: { user: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Menu onClick={() => setIsMenuOpen(!isMenuOpen)} />
      {
        isMenuOpen && (
          <nav className="absolute left-0 right-0 top-16 border-b border-gray-200 shadow-lg bg-white">
            <div className="flex flex-col p-4 space-y-2">
              <Link href='/pricing' className={buttonVariants({
                variant: "ghost"
              })}>Pricing
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
                    <Link href="/signout"
                      className={buttonVariants({
                      variant: 'ghost'
                    })}
                    >Sign out
                    </Link>  
                </>
              )}
            </div>
          </nav>
        )

      }
    </div>
  );
};

export default MobileMenuNav;
