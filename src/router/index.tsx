import { Route, Routes } from "react-router";
import AdminLayout from "../admin/layout";
import { adminRoutes } from "../admin/routes";
import BarService from "../pos/pages/bar-service";
import { Home } from "../pos/pages/home";
import National from "../pos/pages/national";
import OpenbarPage from "../pos/pages/openbar";
import Premium from "../pos/pages/premium";
import Sales from "../pos/pages/sales";

export default function Router() {
  return (
    <Routes>
      <Route path="admin" element={<AdminLayout />}>
        {adminRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
      <Route path="/" element={<Home />} />
      <Route path="/barras" element={<BarService />}>
        <Route path="tragos-nacional" element={<National />} />
        <Route path="tragos-premium" element={<Premium />} />
        <Route path="codigo-de-barras" element={<p>barras</p>} />
        <Route path="reporte" element={<p>reportes</p>} />
      </Route>
      <Route path="/ventas" element={<Sales />}>
        <Route path="openbar" element={<OpenbarPage />} />
      </Route>
    </Routes>
  );
}
