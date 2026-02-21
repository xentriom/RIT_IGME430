// https://supabase.com/ui/docs/nextjs/dropzone
// I DO NOT OWN THE CODE HERE, IT IS STOLEN

import { useCallback } from "react";
import { useDropzone, type Accept } from "react-dropzone";
import { Upload, X, FileImage, CheckCircle } from "lucide-react";
import { cn } from "../lib/utils";

export function formatBytes(
  bytes: number,
  decimals = 2,
  size?: "bytes" | "KB" | "MB" | "GB" | "TB" | "PB" | "EB" | "ZB" | "YB",
): string {
  const k = 1000;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  if (bytes === 0 || bytes === undefined)
    return size !== undefined ? `0 ${size}` : "0 bytes";

  const i =
    size !== undefined
      ? sizes.indexOf(size)
      : Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

const DEFAULT_ACCEPT: Accept = {
  "image/*": [".png", ".jpg", ".jpeg", ".webp"],
};

const DEFAULT_MAX_SIZE = 5 * 1024 * 1024;

type DropzoneProps = {
  file: File | null;
  preview: string | null;
  onFileSelect: (file: File) => void;
  onClear: () => void;
  accept?: Accept;
  maxSize?: number;
  className?: string;
};

export default function Dropzone({
  file,
  preview,
  onFileSelect,
  onClear,
  accept = DEFAULT_ACCEPT,
  maxSize = DEFAULT_MAX_SIZE,
  className,
}: DropzoneProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const selected = acceptedFiles[0];
      if (selected) onFileSelect(selected);
    },
    [onFileSelect],
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    fileRejections,
    open,
  } = useDropzone({
    onDrop,
    accept,
    maxSize,
    maxFiles: 1,
    multiple: false,
  });

  const hasError = isDragReject || fileRejections.length > 0;
  const isSuccess = !!file && !hasError;

  if (file && preview) {
    return (
      <div className={cn("w-full max-w-xs", className)}>
        <div
          className={cn(
            "rounded-lg border-2 p-4 transition-colors duration-200",
            "border-taupe-300 bg-taupe-50",
          )}
        >
          <div className="flex items-center gap-x-4">
            <div className="h-12 w-12 rounded-lg border border-taupe-200 overflow-hidden shrink-0 bg-taupe-100 flex items-center justify-center">
              <img
                src={preview}
                alt={file.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 min-w-0 flex flex-col items-start">
              <div className="flex items-center gap-2 w-full">
                <CheckCircle size={14} className="text-green-600 shrink-0" />
                <p title={file.name} className="text-sm truncate flex-1">
                  {file.name}
                </p>
              </div>
              <p className="text-xs text-taupe-500">{formatBytes(file.size)}</p>
            </div>

            <button
              type="button"
              onClick={onClear}
              className="shrink-0 p-1.5 rounded-md text-taupe-400 hover:text-taupe-600 hover:bg-taupe-200 transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("w-full max-w-xs", className)}>
      <div
        {...getRootProps()}
        className={cn(
          "rounded-lg border-2 border-dashed p-6 transition-colors duration-200 cursor-pointer",
          isDragActive && !isDragReject && "border-taupe-500 bg-taupe-100",
          hasError && "border-red-400 bg-red-50",
          !isDragActive &&
            !hasError &&
            "border-taupe-300 bg-taupe-50 hover:border-taupe-400 hover:bg-taupe-100",
        )}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center gap-y-3">
          <div
            className={cn(
              "p-3 rounded-full transition-colors",
              hasError
                ? "bg-red-100 text-red-500"
                : isDragActive
                  ? "bg-taupe-200 text-taupe-600"
                  : "bg-taupe-200 text-taupe-500",
            )}
          >
            {hasError ? <X size={20} /> : <Upload size={20} />}
          </div>

          <div className="text-center">
            <p className="text-sm text-taupe-700">
              {hasError ? (
                "Invalid file"
              ) : isDragActive ? (
                "Drop image here"
              ) : (
                <>
                  Drag and drop or{" "}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      open();
                    }}
                    className="text-taupe-700 underline underline-offset-2 hover:text-taupe-900 transition-colors"
                  >
                    browse
                  </button>
                </>
              )}
            </p>
            {!hasError && (
              <p className="text-xs text-taupe-400 mt-1">
                PNG, JPG up to {formatBytes(maxSize)}
              </p>
            )}
          </div>
        </div>
      </div>

      {fileRejections.length > 0 && (
        <p className="mt-2 text-xs text-red-600">
          {fileRejections[0].errors[0]?.message ===
          "File is larger than 5242880 bytes"
            ? `File exceeds ${formatBytes(maxSize)} limit`
            : fileRejections[0].errors[0]?.message || "Invalid file"}
        </p>
      )}
    </div>
  );
}
