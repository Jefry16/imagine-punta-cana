import { Typography } from "@mui/material";
import { ReactNode } from "react";
import { addFormStyle } from "../../admin/styles";

export default function AddForm(p: {
  onSubmit: () => void;
  children: ReactNode;
  title: string;
}) {
  return (
    <form style={addFormStyle} autoComplete="off" onSubmit={p.onSubmit}>
      <Typography
        component="h2"
        variant="h4"
        sx={{
          color: "white",
          fontSize: "24px",
          fontWeight: "500",
          margin: "40px 0px",
        }}
      >
        {p.title}
      </Typography>
      {p.children}
    </form>
  );
}
