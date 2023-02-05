import { Button, styled } from "@mui/material";

export const PinkButton = styled(Button)(({ theme }) => ({
  borderRadius: 0,
  color: "white",
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
  "&:active": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export const BlackButton = styled(Button)(({ theme }) => ({
  borderRadius: 0,
  border: `1px solid ${theme.palette.primary.main}`,
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.grey[400],
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
  "&:active": {
    backgroundColor: theme.palette.primary.dark,
  },
}));
