import { Box, Fab, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useHttpGet from "../../shared/hooks/use-get-http";
import Drink from "../components/drink";
import AddIcon from "@mui/icons-material/Add";
import MinusIcon from "@mui/icons-material/Remove";
import { PinkButton } from "../../shared/components/button";
import CircularProgress from "@mui/material/CircularProgress";
import usePostHttp from "../../shared/hooks/use-post-http";
import { useSnackbar } from "notistack";

export default function National() {
  const { sendRequest, isLoading } = useHttpGet();
  const { sendRequest: saveDrink, isLoading: loadingSaveDrink } = usePostHttp();
  const [drinks, setDrinks] = useState({ drinks: [], sofDrinks: [] });
  const [selectedDrink, setSelectedDrink] = useState(0);
  const [selectedSoftDrink, setSelectedSoftDrink] = useState(0);
  const [count, setCount] = useState(1);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    sendRequest({
      url: "/drinks/premium",
      onSuccess: (data) => setDrinks(data),
    });
  }, []);

  const selectDrink = (id: number) => {
    setSelectedDrink(id);
  };

  const selectSoftDrink = (id: number) => {
    setSelectedSoftDrink(id);
  };
  return isLoading ? (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <CircularProgress />
    </Box>
  ) : (
    <Box>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Box
          flex="1"
          maxWidth="550px"
          sx={{ paddingLeft: "20px", paddingTop: "32px" }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: "30px",
              fontWeight: "500",
            }}
          >
            BEBIDAS
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "24px",
              maxHeight: "85vh",
              overflow: "scroll",
            }}
          >
            {drinks.drinks.map((drink: any) => (
              <Drink
                {...drink}
                key={drink.id}
                onSelect={selectDrink}
                selectedId={selectedDrink}
              />
            ))}
          </Box>
        </Box>
        <Box
          flex="1"
          maxWidth="550px"
          sx={{ paddingLeft: "80px", paddingTop: "32px" }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: "30px",
              fontWeight: "500",
            }}
          >
            REFRESCOS
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "24px",
              maxHeight: "85vh",
              overflow: "scroll",
            }}
          >
            {drinks.sofDrinks.map((drink: any) => (
              <Drink
                {...drink}
                key={drink.id}
                onSelect={selectSoftDrink}
                selectedId={selectedSoftDrink}
              />
            ))}
          </Box>
        </Box>
        {selectedDrink && selectedSoftDrink ? (
          <Box
            sx={{
              width: "108px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              alignSelf: "flex-end",
            }}
          >
            <Fab
              onClick={() => setCount(count + 1)}
              sx={({ palette }) => ({ background: palette.common.white })}
              aria-label="add"
            >
              <AddIcon
                sx={({ palette }) => ({ color: palette.common.black })}
              />
            </Fab>
            <Box
              sx={({ palette }) => ({
                background: palette.grey[200],
                width: "100%",
                height: "48px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontSize: "30px",
              })}
            >
              {count}
            </Box>
            <Fab
              onClick={() => {
                setCount((prev) => {
                  if (prev === 1) return prev;
                  return prev - 1;
                });
              }}
              sx={({ palette }) => ({ background: palette.common.white })}
              aria-label="minus"
            >
              <MinusIcon
                sx={({ palette }) => ({ color: palette.common.black })}
              />
            </Fab>
            <PinkButton
              fullWidth
              onClick={() => {
                const drink = { selectedDrink, selectedSoftDrink, count };

                setSelectedDrink(0);
                setSelectedSoftDrink(0);
                setCount(1);
                saveDrink({
                  url: "/drinks",
                  data: drink,
                  onSuccess: () => {
                    enqueueSnackbar("Realizado", { variant: "success" });
                  },
                  onError: () => {
                    enqueueSnackbar("Algo salió mal", { variant: "error" });
                  },
                });
              }}
            >
              ticar
            </PinkButton>
          </Box>
        ) : null}
      </Stack>
    </Box>
  );
}
