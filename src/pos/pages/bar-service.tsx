import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import { Outlet } from "react-router-dom";
import BarServiceSidebar from "../components/bar-service-sidebar";

export default function BarService() {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <BarServiceSidebar />
        <Box flex="1" bgcolor={({ palette }) => palette.grey[600]}>
          <Outlet />
        </Box>
      </Stack>
    </Box>
  );
}
