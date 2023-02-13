import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useHttpGet from "../../shared/hooks/use-get-http";
import OpenbarItem from "../components/openbar-item";
import RightSide from "../components/right-side";

export default function OpenbarPage() {
  const { sendRequest, isLoading } = useHttpGet();
  const [openbar, setOpenbar] = useState([]);

  useEffect(() => {
    sendRequest({ url: "/openbar", onSuccess: (data) => setOpenbar(data) });
  }, []);
  return (
    <Box>
      <Typography
        sx={() => ({
          padding: "30px",
          fontSize: "30px",
          fontWeight: "700",
          color: "white",
        })}
      >
        Venta / Open Bar
      </Typography>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : null}
      <Box
        sx={({}) => ({
          display: "flex",
          gap: "30px",
          paddingLeft: "30px",
          flexWrap: "wrap",
        })}
      >
        {openbar.map((openbar: any) => (
          <OpenbarItem {...openbar} />
        ))}
      </Box>
      {/* <RightSide /> */}
    </Box>
  );
}
