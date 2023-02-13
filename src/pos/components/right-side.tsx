import { Avatar, Box } from "@mui/material";

export default function RightSide() {
  return (
    <Box
      sx={({ palette }) => ({
        background: palette.grey[300],
        minWidth: "400px",
      })}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "70px",
        }}
      >
        <img src="../../../assets/imagine-logo.svg" alt="imagine-logo" />
        <Avatar
          sx={{ width: "110px", height: "110px" }}
          src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"
        />
      </Box>
    </Box>
  );
}
