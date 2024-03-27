import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
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
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleLogout = () => {
        dispatch(logout());
        navigate("/auth/login");
    };

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
{/* to handle */}
                        <Button sx={{ fontWeight: "800", color: "#FFF" }}>
                            <em>
                                Welcome,
                                {user?.fullname
                                    ? ` ${user?.fullname}`
                                    : ` ${user?.username}`}
                            </em>
                        </Button>
                        <Button
                            sx={{ color: "#a11", fontWeight: "800" }}
                            onClick={handleLogout}
                        >
                            Logout
                        </Button>
                    </Box>
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
