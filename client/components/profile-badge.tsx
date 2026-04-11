import { BadgeCheck } from "lucide-react";
import type { SubscriptionPlan } from "../types";

export function ProfileBadge({ isOrg, plan }: { isOrg: boolean; plan: SubscriptionPlan }) {
  if (isOrg) return <BadgeCheck className="size-5 shrink-0 fill-yellow-300 text-background" />;
  if (plan === "free" || plan === "basic") return null;
  return <BadgeCheck className="size-5 shrink-0 fill-blue-500 text-background" />;
}
