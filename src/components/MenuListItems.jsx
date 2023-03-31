import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { icons } from "../helper/DashboardIcons";

const iconStyle = {
  color: "white",
  "& .MuiSvgIcon-root": { color: "white" },
  "&:hover": { color: "red" },
  "&:hover .MuiSvgIcon-root": { color: "red" },
};
const MenuListItems = () => {
  return (
    <div>
      <List>
        {icons?.map((item, index) => (
          <ListItem key={index} disablePadding>
            {!item.url.includes("http") && (
              <ListItemButton to={item.url} sx={iconStyle}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            )}
            {item.url.includes("http") && (
              <ListItemButton
                onClick={() => window.open(item.url, "_blank")}
                sx={iconStyle}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MenuListItems;
