import type { PropsWithChildren } from "react";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="relative flex min-h-screen flex-col bg-dark-2">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <section className="flex flex-1 flex-col justify-between px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="w-full">{children}</div>
          <div className="mt-12">
            <Footer />
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
