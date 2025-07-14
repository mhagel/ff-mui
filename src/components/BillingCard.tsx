import React from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { theme } from "../theme/theme";
import StarOutlined from "@mui/icons-material/StarOutlined";

export interface BillingPlan {
  name: string;
  price: number;
  features: string[];
}

export interface BillingCardProps {
  plan: BillingPlan;
}

const BillingCard: React.FC<BillingCardProps> = ({ plan }) => {
  const headingId = `plan-title-${plan.name
    .replace(/\s+/g, "-")
    .toLowerCase()}`;

  return (
    <Card
      sx={{
        minWidth: 275,
        margin: "20px",
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.primary.main}`,
      }}
      aria-label={`Billing plan: ${plan.name}`}
      aria-labelledby={headingId}
    >
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="h5" component="div">
          {plan.name}
        </Typography>
        <Box component="ul" sx={{ pl: 2, m: 0 }}>
          {plan.features?.map((feature, index) => (
            <Box
              component="li"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                listStyle: "disc",
              }}
              key={index}
            >
              <StarOutlined
                sx={{
                  width: 12,
                  height: 12,
                  color: theme.palette.secondary.main,
                }}
                aria-hidden="true"
                focusable="false"
              />
              <Typography color="text.secondary">{feature}</Typography>
            </Box>
          ))}
        </Box>
        <Typography variant="body2">Price: ${plan.price} / month</Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: "10px" }}
          aria-label={`Select the ${plan.name} plan for $${plan.price} per month`}
        >
          Select Plan
        </Button>
      </CardContent>
    </Card>
  );
};

export { BillingCard };
