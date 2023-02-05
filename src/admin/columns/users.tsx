import { Avatar } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { baseURL } from "../../shared/api/axios";

export const columns: GridColDef[] = [
  {
    field: "profileImage",
    headerName: "Imagen",
    renderCell: ({ value }) => {
      return (
        <Avatar
          sx={{ width: 50, height: 50 }}
          src={`${baseURL}/uploads/images/${value}`}
        />
      );
    },
    width: 100,
  },
  { field: "username", headerName: "Usuario", flex: 1 },
  { field: "firstName", headerName: "Nombre", flex: 1 },
  { field: "lastName", headerName: "Apellidos", flex: 1 },
  { field: "roles", headerName: "Roles", flex: 2 },
  {
    field: "validated",
    headerName: "Validado",
    flex: 1,
    renderCell: ({ value }) => (value ? "si" : "no"),
  },
];
