import { Box, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import AddForm from "../../shared/components/add-form";
import { BlackButton, PinkButton } from "../../shared/components/button";
import usePostHttp from "../../shared/hooks/use-post-http";
import { brandSchema } from "../schemas";

export default function NewBrand(p: { onClose: () => void }) {
  const { enqueueSnackbar } = useSnackbar();
  const { sendRequest } = usePostHttp();
  const { handleChange, values, errors, handleSubmit } = useFormik({
    validationSchema: brandSchema,
    initialValues: { name: "" },
    onSubmit: (value) => {
      sendRequest({
        url: "brands",
        data: value,
        onSuccess: () => {
          p.onClose();
          enqueueSnackbar("Realizado", { variant: "success" });
        },
      });
    },
  });
  return (
    <AddForm title="Añadir marca" onSubmit={handleSubmit}>
      <TextField
        autoFocus
        fullWidth
        label="Nombre de la marca"
        variant="filled"
        onChange={handleChange}
        value={values.name}
        name="name"
        error={Boolean(errors.name)}
        helperText={errors.name}
        margin="normal"
      />
      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
        <BlackButton onClick={() => p.onClose()} type="button">
          cancelar
        </BlackButton>
        <PinkButton type="submit">Enviar</PinkButton>
      </Box>
    </AddForm>
  );
}
