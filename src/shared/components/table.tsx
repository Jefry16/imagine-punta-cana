import { Paper, TableContainer } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import useHttpGet from "../hooks/use-get-http";

export default function Table(p: {
  columns: GridColDef[];
  url: string;
  refetch: any;
}) {
  const { sendRequest, isLoading } = useHttpGet();
  const [data, setData] = useState([]);
  useEffect(() => {
    sendRequest({
      url: p.url,
      onSuccess: (data) => {
        setData(data);
      },
    });
  }, [p.refetch]);
  return (
    <TableContainer component={Paper} sx={{ borderRadius: 0 }}>
      <DataGrid
        checkboxSelection
        loading={isLoading}
        density="comfortable"
        columns={p.columns}
        rows={data}
        autoHeight
      />
    </TableContainer>
  );
}
