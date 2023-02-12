import { TextField } from "@mui/material";
import { useFormik } from "formik";
import AddForm from "../../shared/components/add-form";

export default function NewProduct() {
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: { name: "" },
    validationSchema: {},
    onSubmit: () => {},
  });
  return (
    <AddForm onSubmit={handleSubmit} title="Nuevo producto">
      <TextField
        autoFocus
        fullWidth
        label="Nombre"
        variant="filled"
        onChange={handleChange}
        value={values.name}
        name="name"
        error={Boolean(errors.name)}
        helperText={errors.name}
        margin="normal"
      />
    </AddForm>
  );
}
