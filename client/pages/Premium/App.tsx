import { useContext, useState, useTransition } from "react";
import { toast } from "sonner";
import { X, BadgeCheck } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Spinner } from "../../components/ui/spinner";
import { SessionContext } from "../../contexts/session";
import type { PaymentCycle, SubscriptionPlan } from "../../types";
import { PremiumCost, PremiumDiscount } from "../../constants";
import { Plans } from "./components/plans";

export default function App() {
  const { isLoggedIn } = useContext(SessionContext);
  const [isPending, startTransition] = useTransition();
  const [cycle, setCycle] = useState<PaymentCycle>("monthly");
  const [model, setModel] = useState<SubscriptionPlan>("premium");

  const currentCost = PremiumCost[model][cycle];
  const currentDiscount = PremiumDiscount[model][cycle];
  const total = currentCost * (1 - currentDiscount / 100);

  const handlePurchase = () => {
    startTransition(async () => {
      if (!isLoggedIn) {
        toast.error("You must be logged in to purchase a subscription");
        return;
      }

      toast.promise(
        new Promise<{ plan: SubscriptionPlan; cycle: PaymentCycle }>((resolve, reject) => {
          fetch("/api/premium/purchase", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Credentials: "same-origin",
            },
            body: JSON.stringify({
              plan: model,
              cycle,
            }),
          })
            .then((res) => res.json())
            .then((data) => resolve(data))
            .catch((err) => reject(err));
        }),
        {
          loading: "Purchasing...",
          success: (data: { plan: SubscriptionPlan; cycle: PaymentCycle }) => {
            return `Your payment for ${data.plan} ${data.cycle} has been processed.`;
          },
          error: (err) => (err instanceof Error ? err.message : "Purchase failed"),
        },
      );
    });
  };

  return (
    <div className="relative flex h-dvh flex-col">
      <a href="/" className="absolute top-4 left-4 rounded-full bg-muted p-2">
        <X className="size-4" />
      </a>

      <div className="flex-1 overflow-y-auto pb-48">
        <div className="space-y-8 p-8 text-center">
          <div className="space-y-4">
            <BadgeCheck className="mx-auto size-30 text-chart-1" />
            <h1 className="text-4xl font-bold">
              Don&apos;t lose your {PremiumDiscount.premium.monthly}% discount on Premium
            </h1>
          </div>
          <div className="mx-auto max-w-4xl space-y-2">
            <Tabs value={cycle} onValueChange={(value) => setCycle(value as PaymentCycle)}>
              <TabsList className="mx-auto">
                <TabsTrigger value="annual">Annual</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
              </TabsList>
            </Tabs>
            <Plans cycle={cycle} model={model} setModel={setModel} />
          </div>
        </div>
      </div>

      <div className="fixed right-0 bottom-0 left-0 flex w-full flex-row items-start justify-center gap-2 bg-background/50 p-8 backdrop-blur-sm">
        <div className="min-w-88 space-y-2">
          <h2 className="text-xl font-bold capitalize">{model}</h2>
          <div>
            <div className="flex min-h-11 items-end gap-2 text-3xl tabular-nums">
              {currentDiscount > 0 && (
                <span className="text-muted-foreground line-through">${currentCost}</span>
              )}
              <span className="font-bold text-primary">${total}</span>
              <span className="text-base text-muted-foreground">/ {cycle}</span>
            </div>
            {currentDiscount > 0 ? (
              <p className="min-h-5 text-sm">
                For first 2 months, then ${currentCost} billed monthly
              </p>
            ) : (
              <p className="min-h-5 text-sm">Billed {cycle}</p>
            )}
          </div>
        </div>
        <div className="max-w-md space-y-2">
          <Button className="w-full" onClick={handlePurchase} disabled={isPending}>
            {isPending && <Spinner data-icon="inline-start" />}
            Subscribe & Pay
          </Button>
          <p className="rounded-md border border-border p-2 text-xs text-muted-foreground italic">
            By subscribing, you agree to our Purchaser Terms, and that subscriptions auto-renew
            until you cancel. Cancel anytime, at least 24 hours prior to renewal to avoid additional
            charges. Price subject to change. Manage your subscription through the platform you
            subscribed on.
          </p>
        </div>
      </div>
    </div>
  );
}
