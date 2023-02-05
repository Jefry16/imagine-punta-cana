import { Avatar, Box, List } from "@mui/material";
import MenuItem from "./menu-item";
import PersonIcon from "@mui/icons-material/Person";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuItemParent from "./menu-item-parent";
export default function Sidebar() {
  return (
    <Box
      width="280px"
      bgcolor={({ palette }) => palette.grey[500]}
      minHeight="100vh"
    >
      <Box position="fixed" minHeight="100vh">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "50px",
            paddingTop: "40px",
            paddingBottom: "40px",
            width: "280px",
          }}
        >
          <img src="../../assets/cave-logo.svg" />
          <Avatar
            alt=""
            sx={{ width: 50, height: 50 }}
            src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"
          />
        </Box>
        <List>
          <MenuItemParent
            text="Productos"
            icon={<ShoppingCartIcon sx={{ color: "white" }} />}
            items={[
              { text: "Open bar", to: "/admin/open-bar" },
              { text: "Mesas vip", to: "/admin/mesas-vip" },
              { text: "Grupos / Eventos", to: "/admin/grupos-eventos" },
              { text: "Productos", to: "/admin/productos" },
            ]}
          />

          <MenuItem
            children={<PersonIcon sx={{ color: "white" }} />}
            to="/admin/usuarios"
            text="Usuarios"
          />
          <MenuItem
            children={<AttachMoneyIcon sx={{ color: "white" }} />}
            to="/admin/tasas-de-cambios"
            text="Tasas de cambios"
          />
        </List>
        <Box
          sx={{
            position: "absolute",
            bottom: "0",
            display: "flex",
            width: "100%",
            justifyContent: "center",
            paddingBottom: "40px",
          }}
        >
          <img src="../../assets/imagine-logo.svg" />
        </Box>
      </Box>
    </Box>
  );
}
