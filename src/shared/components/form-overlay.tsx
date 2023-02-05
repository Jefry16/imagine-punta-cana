import { Box } from "@mui/material";
import { ReactNode } from "react";
import { createPortal } from "react-dom";

export default function FormOverlay(props: { children: ReactNode }) {
  return createPortal(
    <Box
      sx={{
        background: "#37042370",
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      {props.children}
    </Box>,
    document.getElementById("form")!
  );
}
