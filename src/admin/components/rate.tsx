import { Input, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { baseURL } from "../../shared/api/axios";

export default function Rate(p: {
  icon: string;
  value: number;
  currencyCode: string;
  onChange: Function;
  id: number;
}) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "360px",
        height: "130px",
        backgroundColor: theme.palette.grey[500],
        padding: "40px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "44px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "20px",
          }}
        >
          <img src={`${baseURL}/uploads/images/${p.icon}`} />
          <span style={{ color: "white", fontWeight: "400", fontSize: "24px" }}>
            {p.currencyCode}
          </span>
        </Box>
        <Input
          defaultValue={1}
          type="number"
          sx={{
            color: "white",
            width: "118px",
            height: "40px",
            fontWeight: "bold",
            fontSize: "24px",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "20px",
          }}
        >
          <img src="../../assets/dop.svg" />
          <span style={{ color: "white", fontWeight: "400", fontSize: "24px" }}>
            DOP
          </span>
        </Box>
        <Input
          onChange={({ target }) => {
            p.onChange(p.id, target.value);
          }}
          defaultValue={p.value}
          type="number"
          sx={{
            color: "white",
            width: "118px",
            height: "40px",
            fontWeight: "bold",
            fontSize: "24px",
          }}
        />
      </Box>
    </Box>
  );
}
