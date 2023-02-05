import { Box, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { PinkButton } from "../../shared/components/button";
import useHttpGet from "../../shared/hooks/use-get-http";
import useHttpPatch from "../../shared/hooks/use-patch-http";
import Rate from "../components/rate";
import { pageTitle, lastUpdateStyles } from "../styles";

export default function Rates() {
  const [saveBtn, setSaveBtn] = useState(false);
  const [lastUpdate, setLastUpdateDate] = useState("cargando...");
  const { sendRequest } = useHttpGet();
  const { sendRequest: update, isLoading: loadUpdate } = useHttpPatch();
  const [rates, setRates] = useState([]);
  const [values, setValues] = useState({});
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (id: number, value: number) => {
    setValues({ ...values, [id]: value });
    setSaveBtn(true);
  };
  useEffect(() => {
    sendRequest({ url: "currencies", onSuccess: (data) => setRates(data) });
  }, []);
  useEffect(() => {
    sendRequest({
      url: "currencies/lastUpdate",
      onSuccess: (data: any) => {
        const date = new Intl.DateTimeFormat("es-ES", {
          dateStyle: "long",
          timeStyle: "medium",
          timeZone: "America/Santo_Domingo",
        }).format(new Date(data[0].lastUpdate));
        setLastUpdateDate(date);
      },
    });
  }, [loadUpdate]);
  return (
    <Box>
      <Box
        sx={{
          paddingTop: "40px",
          paddingLeft: "40px",
        }}
      >
        <Typography sx={pageTitle} variant="h4" component="h4" color="white">
          Tasas de cambios
        </Typography>
      </Box>
      <Box sx={{ maxWidth: "760px", paddingLeft: "60px" }}>
        <Typography sx={lastUpdateStyles}>
          Última actualización: {lastUpdate}
        </Typography>
      </Box>
      <Box sx={{ maxWidth: "760px", paddingLeft: "60px" }}>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
          {rates.map((r: any) => {
            if (r.id === 1) {
              return null;
            }
            return (
              <Rate
                id={r.id}
                icon={r.icon}
                value={r.value}
                key={r.currencyCode}
                currencyCode={r.currencyCode}
                onChange={handleChange}
              />
            );
          })}
        </Box>
        {saveBtn && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "40px",
            }}
          >
            <PinkButton
              sx={{
                borderRadius: "0px",
              }}
              onClick={() => {
                update({
                  url: "currencies",
                  data: values,
                  onSuccess: () => {
                    enqueueSnackbar("Cambios realizados", {
                      variant: "success",
                    });
                    setSaveBtn(false);
                  },
                  onError: () => {
                    enqueueSnackbar("Algo salío mal, intentelo más tarde", {
                      variant: "error",
                    });
                  },
                });
              }}
            >
              Guardar cambios
            </PinkButton>
          </Box>
        )}
      </Box>
    </Box>
  );
}
