import { RadioGroup, RadioGroupItem } from "../../../components/ui/radio-group";
import {
  Field,
  FieldLabel,
  FieldContent,
  FieldDescription,
  FieldTitle,
} from "../../../components/ui/field";
import { Badge } from "../../../components/ui/badge";
import {
  PremiumDiscount,
  PremiumInheritedBenefitLead,
  PremiumBenefits,
  PremiumCost,
} from "../../../constants/premium";
import type { SubscriptionPlan, PaymentCycle } from "../../../types";

type PlansProps = {
  cycle: PaymentCycle;
  model: SubscriptionPlan;
  setModel: (model: SubscriptionPlan) => void;
};

export function Plans({ cycle, model, setModel }: PlansProps) {
  const plans: SubscriptionPlan[] = ["basic", "premium", "premium+"];

  return (
    <RadioGroup
      value={model}
      onValueChange={(value) => setModel(value as SubscriptionPlan)}
      className="flex flex-col items-start justify-center gap-2 md:flex-row"
    >
      {plans.map((plan) => {
        const planCost = PremiumCost[plan][cycle];
        const planDiscount = PremiumDiscount[plan][cycle];
        const planTotal = planCost * (1 - planDiscount / 100);

        return (
          <FieldLabel key={plan} htmlFor={plan}>
            <Field orientation="horizontal">
              <FieldContent className="space-y-2">
                <FieldTitle className="text-xl font-bold capitalize">
                  {plan}
                  {planDiscount > 0 && (
                    <Badge variant="outline" className="bg-green-950 text-xs text-green-300">
                      {PremiumDiscount[plan][cycle]}% off
                    </Badge>
                  )}
                </FieldTitle>
                <FieldDescription className="space-y-4">
                  <div className="flex items-end gap-2 text-3xl">
                    {planDiscount > 0 && (
                      <span className="text-muted-foreground line-through">${planCost}</span>
                    )}
                    <span className="font-bold text-primary">${planTotal}</span>
                    <span className="text-base text-muted-foreground">/ {cycle}</span>
                  </div>
                  <ul className="list-inside list-disc space-y-1">
                    {PremiumInheritedBenefitLead[plan] && (
                      <li className="list-none">{PremiumInheritedBenefitLead[plan]}</li>
                    )}
                    {PremiumBenefits[plan].map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>
                </FieldDescription>
              </FieldContent>
              <RadioGroupItem value={plan} id={plan} />
            </Field>
          </FieldLabel>
        );
      })}
    </RadioGroup>
  );
}
