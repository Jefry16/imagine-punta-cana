import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

export default function NavLinkItem(p: {
  icon: ReactNode;
  text: string;
  to: string;
}) {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? "active" : "")}
      to={p.to}
      style={({ isActive }) => ({
        height: "166px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textDecoration: "none",
        fontSize: "20px",
        fontWeight: "500",
        textAlign: "center",
        gap: "12px",
        color: "white",
        backgroundColor: isActive ? "#34363b" : "",
      })}
    >
      {p.icon}
      {p.text.toUpperCase()}
    </NavLink>
  );
}
