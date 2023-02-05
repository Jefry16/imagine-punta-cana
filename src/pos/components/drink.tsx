import { Box } from "@mui/material";

export default function Drink() {
  return (
    <Box
      sx={({ palette }) => ({
        minHeight: "160px",
        widows: "240px",
        backgroundColor: palette.grey[300],
      })}
    ></Box>
  );
}
