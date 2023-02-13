import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import { Outlet } from "react-router-dom";
import SalesSidebar from "../components/sales-sidebar";

export default function Sales() {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <SalesSidebar />
        <Box flex="1" bgcolor={({ palette }) => palette.grey[600]}>
          <Outlet />
        </Box>
      </Stack>
    </Box>
  );
}
