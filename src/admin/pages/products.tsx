import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import { PinkButton } from "../../shared/components/button";
import Table from "../../shared/components/table";
import { categoriesColumns } from "../columns/categories";
import { productsColumns } from "../columns/products";
import { columns } from "../columns/sizes";
import { addBtnStyles, pageTitle, pageTitleContainer } from "../styles";
import { Add } from "@mui/icons-material";
import FormOverlay from "../../shared/components/form-overlay";
import NewSize from "../forms/new-size";
import NewBrand from "../forms/new-brand";
import NewCategory from "../forms/new-category";
import NewProduct from "../forms/new-product";

type tab = "categorías" | "marcas" | "tamaños" | "productos";
const style = { border: "1px solid #FF82A8", color: "#FF82A8" };
const tabsList: { value: tab }[] = [
  { value: "productos" },
  { value: "categorías" },
  { value: "marcas" },
  { value: "tamaños" },
];
export default function Products() {
  const [tab, setTab] = useState<tab>("productos");
  const [refetchTable, setRefetchTable] = useState<any>();
  const [addForm, setAddForm] = useState<
    "size" | "brand" | "category" | "product" | null
  >(null);

  const openForm = (form: "size" | "brand" | "category" | "product" | null) => {
    setAddForm(form);
    setRefetchTable(Math.random());
  };
  const handleChange = (_: any, newValue: tab) => {
    setTab(newValue);
  };
  return (
    <Box>
      <Box sx={pageTitleContainer}>
        <Typography sx={pageTitle} variant="h4" component="h4" color="white">
          Productos
        </Typography>
      </Box>
      <Box sx={{ paddingLeft: "40px" }}>
        <Tabs sx={{ width: "max-content" }} value={tab} onChange={handleChange}>
          {tabsList.map(({ value }) => (
            <Tab key={value} sx={style} label={value} value={value} />
          ))}
        </Tabs>
      </Box>

      <Box>
        {tab === "tamaños" && (
          <Box sx={{ padding: "40px" }}>
            <PinkButton sx={addBtnStyles} onClick={() => openForm("size")}>
              Nuevo <Add />
            </PinkButton>
            <Table refetch={refetchTable} columns={columns} url="sizes" />
          </Box>
        )}
        {tab === "categorías" && (
          <Box sx={{ padding: "40px" }}>
            <PinkButton sx={addBtnStyles} onClick={() => openForm("category")}>
              Nuevo <Add />
            </PinkButton>
            <Table
              refetch={refetchTable}
              columns={categoriesColumns}
              url="categories"
            />
          </Box>
        )}
        {tab === "marcas" && (
          <Box sx={{ padding: "40px" }}>
            <PinkButton sx={addBtnStyles} onClick={() => openForm("brand")}>
              Nuevo <Add />
            </PinkButton>
            <Table
              refetch={refetchTable}
              columns={categoriesColumns}
              url="brands"
            />
          </Box>
        )}
        {tab === "productos" && (
          <Box sx={{ padding: "40px" }}>
            <PinkButton sx={addBtnStyles} onClick={() => openForm("product")}>
              Nuevo <Add />
            </PinkButton>
            <Table
              refetch={refetchTable}
              columns={productsColumns}
              url="consumables"
            />
          </Box>
        )}
      </Box>
      {addForm && (
        <FormOverlay>
          {addForm === "brand" ? (
            <NewBrand onClose={() => openForm(null)} />
          ) : null}
          {addForm === "category" ? <NewCategory /> : null}
          {addForm === "product" ? <NewProduct /> : null}
          {addForm === "size" ? (
            <NewSize onClose={() => openForm(null)} />
          ) : null}
        </FormOverlay>
      )}
    </Box>
  );
}
