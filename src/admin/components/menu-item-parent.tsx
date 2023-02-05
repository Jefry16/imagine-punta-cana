import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import { ReactNode, useState } from "react";
import { NavLink } from "react-router-dom";

export default function MenuItemParent(p: {
  items: { icon?: ReactNode; text: string; to: string }[];
  icon: ReactNode;
  text: string;
}) {
  const theme = useTheme();
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>{p.icon}</ListItemIcon>
        <ListItemText
          primary={
            <span style={{ fontWeight: "bold", color: "white" }}>{p.text}</span>
          }
        />
        {open ? (
          <ExpandLess sx={{ color: "white" }} />
        ) : (
          <ExpandMore sx={{ color: "white" }} />
        )}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {p.items.map((i, index: number) => (
            <NavLink
              key={index}
              to={i.to}
              style={({ isActive }) => ({
                textDecoration: "none",
                display:'block',
                background: isActive ? theme.palette.primary.main : "",
              })}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>{i.icon}</ListItemIcon>
                <ListItemText
                  primary={
                    <span style={{ fontWeight: "bold", color: "white" }}>
                      {i.text}
                    </span>
                  }
                />
              </ListItemButton>
            </NavLink>
          ))}
        </List>
      </Collapse>
    </>
  );
}
