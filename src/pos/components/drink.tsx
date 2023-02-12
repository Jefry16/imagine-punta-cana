import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Drink(p: {
  name: string;
  id: number;
  selectedId: number;
  onSelect: (id: number) => void;
}) {
  return (
    <Box
      onClick={() => p.onSelect(p.id)}
      sx={({ palette }) => ({
        height: "160px",
        maxHeight: "160px",
        width: "240px",
        backgroundColor:
          p.selectedId === p.id ? palette.primary.main : palette.grey[400],
        borderRadius: "16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      })}
    >
      <Typography
        sx={{
          fontSize: "30px",
          fontWeight: "500",
          color: "white",
        }}
      >
        {p.name.toUpperCase()}
      </Typography>
    </Box>
  );
}
