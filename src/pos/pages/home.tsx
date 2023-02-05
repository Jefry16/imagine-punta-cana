import { Avatar, Box, Typography } from "@mui/material";
import HomeLink from "../components/home-link";

export const Home = () => {
  return (
    <Box
      sx={({ palette }) => ({ background: palette.grey[600], height: "100vh" })}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "70px",
        }}
      >
        <img src="../../../assets/cave-logo.svg" alt="cave-logo" />
        <img src="../../../assets/imagine-logo.svg" alt="imagine-logo" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "40px",
        }}
      >
        <Avatar
          sx={{ width: "110px", height: "110px" }}
          src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"
        />
        <Typography color="white" component="h1" variant="h4">
          Hola, Roca
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", gap: "41px" }}>
        <HomeLink bgColor="#FF82A8" title="ventas" to="ventas" />
        <HomeLink bgColor="#48BDF7" title="servicio de mesas" to="ventas" />
        <HomeLink bgColor="#FFD990" title="servicio de barras" to="barras" />
        <HomeLink bgColor="#FF82A8" title="office" to="admin" />
        <HomeLink bgColor="#48BDF7" title="panel admin" to="ventas" />
      </Box>
    </Box>
  );
};
