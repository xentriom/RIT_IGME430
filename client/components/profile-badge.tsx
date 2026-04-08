import { BadgeCheck } from "lucide-react";
import type { SubscriptionPlan } from "../types";

export function ProfileBadge({ isOrg, plan }: { isOrg: boolean; plan: SubscriptionPlan }) {
  if (isOrg) return <BadgeCheck className="size-4 shrink-0 text-yellow-300" />;
  if (plan === "free") return null;
  return <BadgeCheck className="size-4 shrink-0 text-primary" />;
}
