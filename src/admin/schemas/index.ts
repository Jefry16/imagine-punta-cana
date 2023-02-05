import * as yup from "yup";
import axios from "../../shared/api/axios";
export const validationSchema = yup.object({
  username: yup
    .string()
    .trim()
    .test(
      "duplicate-username",
      "El nombre de usuario ya existe",
      async (value: any) => {
        try {
          await axios.get("users/username/" + value);
          return false;
        } catch {
          return true;
        }
      }
    )
    .min(6, "al menos 6 caractéres")
    .required("requerido"),
  firstName: yup
    .string()
    .trim()
    .max(100, "no más de 100 charactéres")
    .required("requerido"),
  lastName: yup
    .string()
    .trim()
    .max(100, "no más de 100 charactéres")
    .required("requerido"),
  roles: yup
    .array()
    .of(yup.string())
    .min(1, "Añada al menos un rol")
    .required("requerido"),
});

export const sizeSchema = yup.object({
  name: yup
    .string()
    .trim()
    .test("duplicate-size", "El nombre del tamaño ya existe", async (value) => {
      try {
        await axios.get("sizes/name/" + value);
        return false;
      } catch {
        return true;
      }
    })
    .required("Requerido"),
});

export const brandSchema = yup.object({
  name: yup
    .string()
    .trim()
    .test(
      "duplicate-brand",
      "El nombre de la marca ya existe",
      async (value) => {
        try {
          await axios.get("brands/name/" + value);
          return false;
        } catch {
          return true;
        }
      }
    )
    .required("Requerido"),
});

export const categorySchema = yup.object({
  name: yup
    .string()
    .trim()
    .test(
      "duplicate-category",
      "El nombre de la categoría ya existe",
      async (value) => {
        try {
          await axios.get("categories/name/" + value);
          return false;
        } catch {
          return true;
        }
      }
    )
    .required("Requerido"),
});
