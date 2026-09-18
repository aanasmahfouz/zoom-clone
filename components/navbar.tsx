import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

import { links } from "@/config";

import { MobileNav } from "./mobile-nav";

export const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10 border-b border-dark-3/40 backdrop-blur-md">
      <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
        <Image
          src="/icons/logo.svg"
          alt="Yoom logo"
          width={32}
          height={32}
          className="max-sm:size-8"
        />

        <p className="text-[24px] font-extrabold tracking-tight text-white max-sm:hidden">
          Yoom
        </p>
      </Link>

      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>

        <Link
          href={links.sourceCode}
          target="_blank"
          rel="noreferrer noopener"
          title="View GitHub Repository"
          aria-label="GitHub Repository"
          className="flex-center size-9 rounded-lg bg-dark-3/60 p-2 text-white transition-all hover:bg-dark-3 hover:text-blue-1"
        >
          <Image
            src="/icons/github.svg"
            alt="GitHub"
            height={20}
            width={20}
            className="size-5"
          />
        </Link>

        <MobileNav />
      </div>
    </nav>
  );
};
