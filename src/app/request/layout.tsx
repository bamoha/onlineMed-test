"use client";
import LayoutImage from "@/assets/layoutImage";
import { HelpLine } from "@/components/HelpLine";

export default function RequestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="hidden lg:flex w-1/2 justify-center bg-secondary-custom-blue p-4 rounded-3xl items-center flex-col m-6">
        <LayoutImage />

        <div className="text-center flex items-center flex-col">
          <h2 className="text-[40px] text-custom-neutral leading-[1.2] font-bold w-[60%] font-satoshi mb-2">
            We are working on{" "}
            <span className="text-primary-custom-blue">your note</span> now..
          </h2>
          <h5 className="leading-[1.5] font-light text-custom-neutral w-[60%]">
            Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </h5>
        </div>
      </div>

      <main className="w-full lg:w-1/2">{children}</main>

      <HelpLine />
    </div>
  );
}
