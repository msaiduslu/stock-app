import DashboardIcon from "@mui/icons-material/Dashboard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InventoryIcon from "@mui/icons-material/Inventory";
import StoreIcon from "@mui/icons-material/Store";
import StarsIcon from "@mui/icons-material/Stars";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";

export const icons = [
  {
    icon: <DashboardIcon />,
    title: "Dashboard",
    url: "#/stock/",
  },
  {
    title: "Purchase",
    icon: <ShoppingCartIcon />,
    url: "#/stock/purchases/",
  },
  {
    title: "Sales",
    icon: <AttachMoneyIcon />,
    url: "#/stock/sales/",
  },
  {
    title: "Firms",
    icon: <StoreIcon />,
    url: "#/stock/firms/",
  },
  {
    title: "Brands",
    icon: <StarsIcon />,
    url: "#/stock/brands/",
  },
  {
    title: "Products",
    icon: <InventoryIcon />,
    url: "#/stock/products/",
  },
  {
    title: "Admin Panel",
    icon: <SupervisorAccountIcon />,
    url: "https://stockappapi.fly.dev/admin/",
  },
];
