"use client";

import BackIcon from "@/assets/BackIcon";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { FileUploadBox } from "@/components/FileUploadBox";
import { ReasonSelect } from "@/components/ReasonSelect";

const reasons: string[] = [
  "Wasn't Accepted by Employer",
  "Employer Unable to Verify",
  "Duplicate Charge",
];

export default function RefundPage() {
  const [reason, setReason] = useState<string>(reasons[0]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);

  return (
    <div>
      <div className="p-6 lg:p-16 bg-secondary-custom-blue lg:bg-white pb-28 lg:pb-6 rounded-b-3xl lg:rounded-none mt-0 lg:mt-12">
        <Link href="/">
          <BackIcon className="mb-5" />
        </Link>
        <h1 className="text-[32px] font-sans font-semibold mb-2 text-custom-neutral-2">
          Refund Requests
        </h1>
        <h5 className="font-sans w-[80%] text-custom-neutral-3">
          Request a refund with a reason and proof.
        </h5>
      </div>

      <div className="mx-6 mt-[-80px] lg:m-16">
        <form>
          <ReasonSelect value={reason} onChange={setReason} options={reasons} />

          <FileUploadBox
            selectedFile={selectedFile}
            onFileChange={setSelectedFile}
            onFileRemove={() => setSelectedFile(null)}
            dragActive={dragActive}
            setDragActive={setDragActive}
          />

          <Button
            type="submit"
            className="bg-primary-custom-blue hover:bg-primary-custom-blue-focus mt-10 w-full lg:w-fit"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
