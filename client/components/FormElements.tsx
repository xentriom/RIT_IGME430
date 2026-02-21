import { useEffect, type ReactNode } from "react";
import { X, Loader2 } from "lucide-react";
import { cn } from "../lib/utils";

export const inputClass =
  "w-full px-4 py-3 border-0 bg-white text-sm text-taupe-900 placeholder:text-taupe-400 focus:outline-none focus:ring-2 focus:ring-taupe-500 focus:ring-inset";

export function FormRow({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col sm:flex-row border-b border-taupe-200 last:border-b-0">
      <label
        htmlFor={htmlFor}
        className="shrink-0 px-4 py-3 text-sm font-medium text-taupe-700 bg-taupe-100 sm:w-32 sm:border-r sm:border-taupe-200"
      >
        {label}
      </label>
      <div className="flex-1">{children}</div>
    </div>
  );
}

export function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-2">
      <div>
        <h2 className="text-lg font-semibold text-taupe-900">{title}</h2>
        {description && <p className="text-sm text-taupe-500">{description}</p>}
      </div>
      {children}
    </section>
  );
}

export function ErrorAlert({ message }: { message: string }) {
  return (
    <div className="rounded-md border border-red-300 bg-red-50 px-4 py-3">
      <p className="text-sm text-red-700">{message}</p>
    </div>
  );
}

export function SubmitButton({
  loading,
  children,
  loadingText,
}: {
  loading: boolean;
  children: ReactNode;
  loadingText?: string;
}) {
  return (
    <button
      type="submit"
      disabled={loading}
      className={cn(
        "py-2.5 px-5 rounded-md font-medium text-white transition-colors flex items-center justify-center gap-2",
        loading
          ? "bg-taupe-400 cursor-not-allowed"
          : "bg-taupe-700 hover:bg-taupe-600",
      )}
    >
      {loading && <Loader2 className="size-4 animate-spin" />}
      {loading ? (loadingText ?? "Creating...") : children}
    </button>
  );
}

export function ResetButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="py-2.5 px-5 rounded-md font-medium bg-taupe-100 border border-taupe-300 text-taupe-700 hover:bg-taupe-200 transition-colors"
    >
      Reset
    </button>
  );
}

export function Modal({
  title,
  subtitle,
  onClose,
  maxWidth = "max-w-md",
  children,
}: {
  title: string;
  subtitle?: string;
  onClose: () => void;
  maxWidth?: string;
  children: ReactNode;
}) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <div
        className={cn(
          "relative w-full rounded-xl bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-200",
          maxWidth,
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 p-1.5 rounded-md text-taupe-400 hover:text-taupe-600 hover:bg-taupe-100 transition-colors"
        >
          <X size={18} />
        </button>

        <div className="p-6 space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-taupe-900">{title}</h2>
            {subtitle && <p className="text-sm text-taupe-500">{subtitle}</p>}
          </div>
          {children}
        </div>

        <div className="border-t border-taupe-200 px-6 py-4 bg-taupe-50 rounded-b-xl">
          <button
            onClick={onClose}
            className="w-full py-2.5 px-4 rounded-md font-medium bg-taupe-700 text-white hover:bg-taupe-600 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
