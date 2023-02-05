import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { PinkButton } from "../../shared/components/button";
import FormOverlay from "../../shared/components/form-overlay";
import Table from "../../shared/components/table";
import { columns } from "../columns/users";
import NewUser from "../forms/new-user";
import {
  pageTitle,
  usersHeaderContainer,
  usersTableContainer,
} from "../styles";

export default function Users() {
  const [userForm, setUserForm] = useState(false);
  const [refetchTable, setRefetchTable] = useState<any>();

  const toggleForm = (toggle: boolean) => {
    setUserForm(toggle);
    setRefetchTable(Math.random());
  };
  return (
    <Box>
      <Box sx={usersHeaderContainer}>
        <Typography sx={pageTitle} variant="h4" component="h4" color="white">
          Usuarios
        </Typography>
        <PinkButton onClick={() => toggleForm(true)} sx={{ borderRadius: 0 }}>
          Añadir nuevo
        </PinkButton>
      </Box>
      <Box sx={usersTableContainer}>
        <Table refetch={refetchTable} columns={columns} url="users" />
      </Box>
      {userForm && (
        <FormOverlay>
          <NewUser onClose={() => toggleForm(false)} />
        </FormOverlay>
      )}
    </Box>
  );
}
