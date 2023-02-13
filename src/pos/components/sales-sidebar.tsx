import { Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import NavLinkItem from "./nav-link";
import { ReactComponent as Shop } from "../../../assets/icons/shop.svg";
import { ReactComponent as Openbar } from "../../../assets/icons/openbar.svg";
import { ReactComponent as Groups } from "../../../assets/icons/groups.svg";
import { ReactComponent as Vip } from "../../../assets/icons/vip.svg";
import { ReactComponent as Internet } from "../../../assets/icons/internet.svg";
import { Link } from "react-router-dom";
export default function SalesSidebar() {
  return (
    <Box
      width="160px"
      bgcolor={({ palette }) => palette.grey[500]}
      minHeight="100vh"
    >
      <Box position="fixed" minHeight="100vh" sx={{ width: "160px" }}>
        <Link to="/">
          <HomeIcon
            sx={{
              fontSize: 40,
              color: "white",
              display: "block",
              margin: " 0 auto",
              paddingTop: "36px",
            }}
          />
          <img
            style={{
              display: "block",
              margin: " 0 auto",
            }}
            src="../../../assets/cave-logo.svg"
            alt="cave-logo"
          />
        </Link>
        <Box sx={{ position: "absolute", bottom: 0 }}>
          <NavLinkItem to="/ventas/openbar" icon={<Openbar />} text="openbar" />
          <NavLinkItem to="/ventas/mesas-vip" icon={<Vip />} text="mesas vip" />
          <NavLinkItem to="/ventas/grupos" icon={<Groups />} text="grupos" />
          <NavLinkItem to="/ventas/otros" icon={<Shop />} text="otros" />
          <NavLinkItem
            to="/ventas/internet"
            icon={<Internet />}
            text="internet"
          />
        </Box>
      </Box>
    </Box>
  );
}
