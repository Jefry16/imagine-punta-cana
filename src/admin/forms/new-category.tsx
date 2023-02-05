import { Box, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import AddForm from "../../shared/components/add-form";
import { BlackButton, PinkButton } from "../../shared/components/button";
import usePostHttp from "../../shared/hooks/use-post-http";
import { categorySchema } from "../schemas";

export default function Category(p: { onClose: () => void }) {
  const { enqueueSnackbar } = useSnackbar();
  const { sendRequest } = usePostHttp();
  const { handleChange, values, errors, handleSubmit } = useFormik({
    validationSchema: categorySchema,
    initialValues: { name: "" },
    onSubmit: (value) => {
      sendRequest({
        url: "categories",
        data: value,
        onSuccess: () => {
          p.onClose();
          enqueueSnackbar("Realizado", { variant: "success" });
        },
      });
    },
  });
  return (
    <AddForm title="Añadir categoría" onSubmit={handleSubmit}>
      <TextField
        autoFocus
        fullWidth
        label="Nombre de la categoría"
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
