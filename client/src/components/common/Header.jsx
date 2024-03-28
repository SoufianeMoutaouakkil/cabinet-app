import {
    AppBar,
    Box,
    Button,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import EditIcon from "@mui/icons-material/AccountCircle";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../services/store/slices/authSlice";

const drawerWidth = 240;
const navItems = [
    {
        label: "Patients",
        link: "/patients",
    },
    {
        label: "New Patient",
        link: "/patients/new",
    },
];

function DrawerAppBar(props) {
    const logoTitle = "Cabinet Dr. El Hajjaji";
    const user = useSelector((state) => state.auth?.authData?.user);
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleLogout = () => {
        dispatch(logout());
        navigate("/auth/login");
    };
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const profile = (
        <div>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                <EditIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <Typography variant="h6" sx={{ textAlign: "center", mx: 2 }}>
                    {user?.fullname || user?.username || "User"}
                </Typography>
                <MenuItem onClick={handleLogout} sx={{ color: "red" }}>
                    Logout
                </MenuItem>
            </Menu>
        </div>
    );
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                {logoTitle}
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem
                        key={item.link}
                        disablePadding
                        onClick={() => {
                            navigate(item.link);
                        }}
                    >
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
                {/* add logout button att the bottom */}
                <ListItem key="logout" disablePadding onClick={handleLogout}>
                    <ListItemButton sx={{ textAlign: "center" }}>
                        <ListItemText primary="Logout" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", sm: "block" },
                        }}
                    >
                        {logoTitle}
                    </Typography>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {navItems.map((item) => (
                            <Button
                                key={item.link}
                                sx={{ color: "#fff" }}
                                onClick={() => {
                                    navigate(item.link);
                                }}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Box>
                    {profile}
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

export default DrawerAppBar;
