import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import CameraIcon from "@/assets/Camera";
import { useRef } from "react";

interface FileUploadBoxProps {
  selectedFile: File | null;
  onFileChange: (file: File) => void;
  onFileRemove: () => void;
  dragActive: boolean;
  setDragActive: (val: boolean) => void;
}

export function FileUploadBox({
  selectedFile,
  onFileChange,
  onFileRemove,
  dragActive,
  setDragActive,
}: FileUploadBoxProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleBrowseClick = () => fileInputRef.current?.click();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onFileChange(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file) onFileChange(file);
  };

  return (
    <div className="space-y-2 mt-10">
      <Label htmlFor="evidence" className="text-gray-600">
        Upload Evidence
      </Label>

      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDrop={handleDrop}
        onDragLeave={() => setDragActive(false)}
        className={`flex flex-col items-center justify-center border-2 ${
          dragActive ? "border-blue-400 bg-blue-50" : "border-gray-200"
        } border-dashed rounded-xl py-10 px-4 text-center text-gray-500 transition-colors duration-150`}
      >
        <CameraIcon />
        <p className="mb-1 text-sm">
          Drag the evidence file to start uploading.
        </p>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <div className="h-px w-6 bg-gray-200" /> OR
          <div className="h-px w-6 bg-gray-200" />
        </div>

        {!selectedFile ? (
          <>
            <Button
              type="button"
              variant="outline"
              onClick={handleBrowseClick}
              className="mt-2 border-primary-custom-blue-border text-primary-custom-blue-brand bg-primary-custom-blue-background"
            >
              Browse files
            </Button>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleChange}
              hidden
            />
          </>
        ) : (
          <div className="mt-4 flex items-center gap-3 bg-gray-100 px-3 py-2 rounded-lg">
            <p className="text-sm text-gray-800">{selectedFile.name}</p>
            <button
              type="button"
              onClick={onFileRemove}
              className="text-gray-500 hover:text-red-500 cursor-pointer"
              aria-label="Remove file"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}