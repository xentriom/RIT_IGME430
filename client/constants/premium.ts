import type { PaymentCycle, SubscriptionPlan } from "../types";
import { XIcon, CheckIcon } from "lucide-react";

// These cost, discount, and benefits are directly copied from Twitter/X
// As of March 31, 2026

export const PremiumCost: Record<SubscriptionPlan, Record<PaymentCycle, number>> = {
  free: {
    monthly: 0,
    annual: 0,
  },
  basic: {
    monthly: 3,
    annual: 2.67,
  },
  premium: {
    monthly: 8,
    annual: 7,
  },
  "premium+": {
    monthly: 40,
    annual: 32.92,
  },
};

export const PremiumDiscount: Record<SubscriptionPlan, Record<PaymentCycle, number>> = {
  free: {
    monthly: 0,
    annual: 0,
  },
  basic: {
    monthly: 0,
    annual: 0,
  },
  premium: {
    monthly: 50,
    annual: 0,
  },
  "premium+": {
    monthly: 50,
    annual: 0,
  },
};

export const PremiumBenefits: Record<SubscriptionPlan, string[]> = {
  free: [],
  basic: [
    "Small reply boost",
    "Bookmark folders",
    "Highlight tab",
    "Edit posts",
    "Create longer posts",
    "Customize your experience",
  ],
  premium: [
    "Verified Checkmark",
    "Enhanced Myna access",
    "Advanced analytics",
    "Less ads in your feeds",
    "Boosted replies",
    "Write articles",
    "Get paid to post",
    "Creator Subscriptions",
  ],
  "premium+": [
    "Fully ad-free",
    "SuperMyna",
    "Handle Marketplace",
    "Highest reply boost",
    "Radar Advanced Search",
    "Chitter Pro",
  ],
};

export const PremiumInheritedBenefitLead: Partial<Record<SubscriptionPlan, string>> = {
  premium: "Everything in Basic, and",
  "premium+": "Everything in Premium, and",
} as const;

export const EnhancedExperienceBenefits = [
  {
    experience: "Ads",
    basic: "No reduction",
    premium: "Half in For You & Following",
    "premium+": "Fully ad-free",
  },
  {
    experience: "Reply boost",
    basic: "Smallest",
    premium: "Larger",
    "premium+": "Largest",
  },
  {
    experience: "Radar",
    basic: "x",
    premium: "x",
    "premium+": "✓",
  },
  {
    experience: "Edit posts",
    basic: "✓",
    premium: "✓",
    "premium+": "✓",
  },
  {
    experience: "Longer posts",
    basic: "✓",
    premium: "✓",
    "premium+": "✓",
  },
  {
    experience: "Background video playback",
    basic: "✓",
    premium: "✓",
    "premium+": "✓",
  },
  {
    experience: "Download videos",
    basic: "✓",
    premium: "✓",
    "premium+": "✓",
  },
];
