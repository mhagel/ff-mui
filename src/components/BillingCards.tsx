import React from "react";
import type { BillingPlan } from "./BillingCard";
import { BillingCard } from "./BillingCard";
import { Box } from "@mui/material";

interface BillingCardsProps {
  plans: BillingPlan[];
}

const BillingCards: React.FC<BillingCardsProps> = ({ plans }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {plans?.map((plan, index) => (
        <BillingCard key={index} plan={plan} />
      ))}
    </Box>
  );
};

export { BillingCards };
