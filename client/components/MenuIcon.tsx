import { Menu, X } from "lucide-react";

export default function MenuIcon({ open }: { open: boolean }) {
  return open ? <X className="size-4" /> : <Menu className="size-4" />;
}
