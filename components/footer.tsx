import Image from "next/image";
import Link from "next/link";

import { copyrightText, links } from "@/config";

export const Footer = () => {
  return (
    <footer className="mt-auto w-full border-t border-dark-3/50 bg-dark-1/80 py-6 text-sm text-sky-1/70 backdrop-blur-sm">
      <div className="mx-auto flex flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row lg:px-14">
        <p className="font-normal text-xs sm:text-sm">
          {copyrightText}
        </p>

        <div className="flex items-center gap-4 text-xs sm:text-sm">
          <Link
            href={links.githubProfile}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 rounded-md px-3 py-1.5 font-medium text-white transition-colors hover:bg-dark-3/70 hover:text-sky-1"
            title="Anas Mahfouz on GitHub"
          >
            <Image
              src="/icons/github.svg"
              alt="GitHub"
              width={16}
              height={16}
              className="size-4"
            />
            <span>Anas Mahfouz</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};
