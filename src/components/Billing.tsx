import React from "react";
import { BillingCards } from "./BillingCards";
import { BillingPlan } from "./BillingCard";

const billingPlans: BillingPlan[] = [
  {
    name: "Basic Plan",
    price: 10,
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    name: "Premium Plan",
    price: 20,
    features: ["Feature A", "Feature B", "Feature C"],
  },
  {
    name: "Enterprise Plan",
    price: 50,
    features: ["Feature X", "Feature Y", "Feature Z"],
  },
];

const Billing: React.FC = () => {
  return <BillingCards plans={billingPlans} />;
};

export { Billing };
