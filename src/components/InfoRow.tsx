import React from "react";
import { Box, Typography } from "@mui/material";
import type { JSX } from "@emotion/react/jsx-runtime";

const InfoRow = ({
  icon,
  color,
  children,
}: {
  color?: string;
  icon: JSX.Element;
  children: React.ReactNode;
}) => (
  <Box display="flex" alignItems="center" gap={1}>
    {React.cloneElement(icon, {
      color,
      fontSize: "small",
      sx: { verticalAlign: "middle", mr: 0.5 },
    })}
    <Typography variant="body2" sx={{ color: "text.secondary" }}>
      {children}
    </Typography>
  </Box>
);

export { InfoRow };
