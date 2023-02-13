import { Box, Fab, Typography } from "@mui/material";
import { useState } from "react";
import MinusIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { ReactComponent as Cart } from "../../../assets/icons/cart.svg";

export default function OpenbarItem(p: { name: string }) {
  const [count, setCount] = useState(1);
  return (
    <Box
      sx={({ palette }) => ({
        width: "238px",
        height: "200px",
        background: palette.grey[400],
        borderRadius: "16px",
        padding: "20px",
        position: "relative",
      })}
    >
      <Typography
        sx={() => ({
          color: "white",
          fontWeight: "500",
          fontSize: "30px",
          lineHeight: "1",
        })}
      >
        {p.name}
      </Typography>
      <Box
        sx={({}) => ({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          position: "absolute",
          bottom: "20px",
          left: "20px",
        })}
      >
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
          <MinusIcon sx={({ palette }) => ({ color: palette.common.black })} />
        </Fab>
        <Box
          sx={({ palette }) => ({
            background: palette.grey[300],
            width: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontWeight: "500",
            fontSize: "30px",
          })}
        >
          {count}
        </Box>
        <Fab
          onClick={() => {
            setCount(count + 1);
          }}
          sx={({ palette }) => ({ background: palette.common.white })}
          aria-label="minus"
        >
          <AddIcon sx={({ palette }) => ({ color: palette.common.black })} />
        </Fab>
        <Cart />
      </Box>
    </Box>
  );
}
