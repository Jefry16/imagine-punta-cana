import { Box } from "@mui/material";
import { useEffect } from "react";
import useHttpGet from "../../shared/hooks/use-get-http";

export default function National() {
  const { sendRequest, isLoading } = useHttpGet();

  useEffect(() => {}, []);
  return <Box></Box>;
}
