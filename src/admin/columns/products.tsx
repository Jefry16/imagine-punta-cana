import { GridColDef } from "@mui/x-data-grid";

export const productsColumns: GridColDef[] = [
  { field: "name", headerName: "Nombre", flex: 1 },
  {
    field: "size",
    headerName: "Tamaño",
    flex: 1,
    renderCell: ({ value }) => value.name,
  },
  {
    field: "price",
    headerName: "Precio",
    flex: 1,
  },
  {
    field: "brand",
    headerName: "Marca",
    flex: 1,
    renderCell: ({ value }) => value.name,
  },
  {
    field: "subCategory",
    headerName: "Sub-categoría",
    flex: 1,
    renderCell: ({ value }) => value,
  },
  {
    field: "category",
    headerName: "Categoría",
    flex: 1,
    renderCell: ({ value }) => value.name,
  },
];
