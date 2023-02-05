import {
  ListItemButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { ReactNode } from "react";

export default function MenuItem({
  children,
  to,
  text,
}: {
  children: ReactNode;
  to: string;
  text: string;
}) {
  const theme = useTheme();
  return (
    <NavLink
      to={to}
      style={({ isActive }) => {
        return {
          textDecoration: "none",
          color: "white",
          display: "block",
          background: isActive ? theme.palette.primary.main : "",
        };
      }}
    >
      <ListItemButton sx={{}}>
        <ListItem disablePadding>
          <ListItemIcon>{children}</ListItemIcon>
          <ListItemText
            style={{ fontWeight: "bold" }}
            primary={<span style={{ fontWeight: "bold" }}>{text}</span>}
          />
        </ListItem>
      </ListItemButton>
    </NavLink>
  );
}
