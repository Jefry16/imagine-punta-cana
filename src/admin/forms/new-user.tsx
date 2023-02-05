import { PhotoCamera } from "@mui/icons-material";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import { FormEvent, useState } from "react";
import AddForm from "../../shared/components/add-form";
import { BlackButton, PinkButton } from "../../shared/components/button";
import usePostHttp from "../../shared/hooks/use-post-http";
import { validationSchema } from "../schemas";

export default function NewUser(p: { onClose: () => void }) {
  const [image, setImage] = useState<any>(null);
  const { enqueueSnackbar } = useSnackbar();
  const { sendRequest, isLoading } = usePostHttp();
  const { values, handleSubmit, handleChange, errors, setFieldValue } =
    useFormik({
      initialValues: {
        username: "",
        firstName: "",
        lastName: "",
        roles: [],
        image: "",
      },
      onSubmit: (values: any) => {
        const formData = new FormData();
        formData.append("username", values.username);
        formData.append("firstName", values.firstName);
        formData.append("lastName", values.lastName);
        formData.append("roles", values.roles);
        formData.append("image", image);
        sendRequest({
          url: "users",
          data: formData,
          onSuccess: () => {
            p.onClose();
            enqueueSnackbar("Realizado", { variant: "success" });
          },
        });
      },
      validationSchema,
    });

  const handleCheckChange = (
    { currentTarget }: FormEvent<HTMLInputElement>,
    value: boolean
  ) => {
    const roles = new Set([...values.roles]);
    if (value) {
      roles.add(currentTarget.value as never);
      return setFieldValue("roles", [...roles]);
    }
    roles.delete(currentTarget.value as never);
    setFieldValue("roles", [...roles]);
  };

  return (
    <AddForm onSubmit={handleSubmit} title="Añadir úsuario">
      <TextField
        autoFocus
        fullWidth
        label="Nombre de úsuario"
        variant="filled"
        onChange={handleChange}
        value={values.username}
        name="username"
        error={Boolean(errors.username)}
        helperText={errors.username}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Nombre"
        variant="filled"
        onChange={handleChange}
        value={values.firstName}
        name="firstName"
        error={Boolean(errors.firstName)}
        helperText={errors.firstName}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Apellidos"
        variant="filled"
        onChange={handleChange}
        name="lastName"
        error={Boolean(errors.lastName)}
        helperText={errors.lastName}
        margin="normal"
      />
      <PinkButton
        variant="contained"
        sx={{
          overflow: "hidden",
          marginBottom: "20px",
          maxWidth: "420px",
          width: "420px",
        }}
      >
        <span style={{ display: "flex" }}>
          Añadir foto
          <PhotoCamera />
        </span>
        <input
          accept="image/*"
          type="file"
          onChange={({ target }) => {
            if (target.files instanceof FileList) setImage(target.files[0]);
          }}
        />
      </PinkButton>

      <FormControl required fullWidth error={Boolean(errors.lastName)}>
        <FormLabel component="legend" sx={{ color: "white" }}>
          Roles
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox value="1" onChange={handleCheckChange} />}
            label="Gilad Gray"
          />
          <FormControlLabel
            control={<Checkbox value="2" onChange={handleCheckChange} />}
            label="Jason Killian"
          />
        </FormGroup>
        {errors.roles && (
          <FormHelperText error={Boolean(errors.roles)}>
            {errors.roles}
          </FormHelperText>
        )}
      </FormControl>
      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
        <BlackButton onClick={() => p.onClose()} type="button">
          cancelar
        </BlackButton>
        <PinkButton type="submit">Enviar</PinkButton>
      </Box>
    </AddForm>
  );
}
