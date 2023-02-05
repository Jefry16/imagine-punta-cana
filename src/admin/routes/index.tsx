import Groups from "../pages/groups";
import OpenBar from "../pages/open-bar";
import Products from "../pages/products";
import Rates from "../pages/rates";
import Users from "../pages/users";
import VipTable from "../pages/vip-table";

export const adminRoutes = [
  { path: "tasas-de-cambios", element: <Rates /> },
  { path: "usuarios", element: <Users /> },
  { path: "productos", element: <Products /> },
  { path: "open-bar", element: <OpenBar /> },
  { path: "mesas-vip", element: <VipTable /> },
  { path: "grupos-eventos", element: <Groups /> },
  { path: "consumibles", element: <Groups /> },
];
