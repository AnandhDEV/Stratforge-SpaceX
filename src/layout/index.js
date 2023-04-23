import React, { useEffect } from "react";
import "./index.css";
import {
  Button,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import InboxIcon from "@mui/icons-material/Inbox";
import logo from "../assests/spacex-logo-black-and-white.png";
import { listItems } from "./listItems";
import LogoutIcon from "@mui/icons-material/Logout";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import RocketOutlinedIcon from "@mui/icons-material/RocketOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

import NotificationsIcon from "@mui/icons-material/Notifications";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const activeRoute = (routeName) => {
    return location.pathname === `/dashboard/${routeName}`;
  };

  return (
    <Box className="layout_main_container">
      <Box className="layout_sidemenu_container">
        <Box className="layout_logoandlist_container">
          <Box className="layout_sidemenu_logo_container">
            <img src={logo}></img>
          </Box>
          <Box className="layout_sidemenu_list_container">
            {" "}
            <List className="sidemenu_list">
              {listItems.map((item, index) => (
                <ListItem
                  key={index}
                  index={index}
                  disablePadding
                  className="sidemenu_list_item"
                  sx={{
                    backgroundColor: activeRoute(item.path) ? "#cf96b5" : null,
                  }}
                >
                  <NavLink to={item.path} className="navlink_sidemenu">
                    <ListItemButton>
                      <ListItemIcon
                        sx={{
                          minWidth: "36px",
                          color: "#FAF9F6",
                        }}
                      >
                        {SideMenuIcon[item.icon]}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.name}
                        sx={{
                          color: "#FAF9F6",
                        }}
                      />
                    </ListItemButton>
                  </NavLink>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
        <Box className="layout_sidemenu_logout_container">
          <ListItem disablePadding className="sidemenu_list_item">
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: "36px" }}>
                <LogoutIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Logout" sx={{ color: "#fff" }} />
            </ListItemButton>
          </ListItem>
        </Box>
      </Box>

      <Box className="layout_outlet_container">
        <Box className="sidemenu_navbar">
          <Typography variant="h2" color="#fff">
            Hello, Anandh
          </Typography>
          <Box className="sidemenu_navbar_right_container">
            <NotificationsIcon color="primary" />
            <TextField
              variant="outlined"
              size="small"
              sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid transparent",
                },
                "&.Mui-focused": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                },
              }}
              InputProps={{
                style: {
                  backgroundColor: "#2d2643",
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>

        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;

let SideMenuIcon = {
  home: <HomeOutlinedIcon />,
  history: <HistoryOutlinedIcon />,
  launches: <RocketLaunchOutlinedIcon />,
  rockets: <RocketOutlinedIcon />,
};
