import { Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import NavLinkItem from "./nav-link";
import { ReactComponent as National } from "../../../assets/icons/national-icon.svg";
import { ReactComponent as Premium } from "../../../assets/icons/premium.svg";
import { ReactComponent as Barcode } from "../../../assets/icons/bar-code.svg";
import { ReactComponent as Report } from "../../../assets/icons/report.svg";
import { Link } from "react-router-dom";
export default function BarServiceSidebar() {
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
          <NavLinkItem
            to="/barras/tragos-nacional"
            icon={<National />}
            text="tragos nacional"
          />
          <NavLinkItem
            to="/barras/tragos-premium"
            icon={<Premium />}
            text="tragos premium"
          />
          <NavLinkItem
            to="/barras/codigo-de-barras"
            icon={<Barcode />}
            text="codigo de barras"
          />
          <NavLinkItem to="/barras/reporte" icon={<Report />} text="reportes" />
        </Box>
      </Box>
    </Box>
  );
}
