import { Box } from "@mui/material";
import SidebarContent from "./SidebarContent";
import { SidebarDrawer } from "../drawer";

const Sidebar = () => {
    return (
        <>
            <Box sx={{ 
                display: { xs: "none", md: "block" },
                height: '100%'
            }}>
                <SidebarContent />
            </Box>

            <SidebarDrawer />
        </>
    );
}

export default Sidebar;