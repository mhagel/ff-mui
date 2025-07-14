import React from "react";
import { BillingCards } from "./BillingCards";
import { BillingPlan } from "./BillingCard";
import { Box, Typography } from "@mui/material";

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
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 2,
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom color="text.primary">
        Choose the Plan that works best for you!
      </Typography>
      <BillingCards plans={billingPlans} />;
    </Box>
  );
};

export { Billing };
