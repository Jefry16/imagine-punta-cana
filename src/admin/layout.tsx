import { Box, Stack, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar";

export default function AdminLayout() {
  const theme = useTheme();
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Sidebar />
        <Box flex="1" bgcolor={({palette})=>palette.grey[600]}>
          <Outlet />
        </Box>
      </Stack>
    </Box>
  );
}
