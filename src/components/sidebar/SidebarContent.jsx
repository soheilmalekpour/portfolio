import {
    Box,
    Divider,
} from "@mui/material";
import {
    SidebarFooter,
    SidebarHeader, SidebarTabs
} from ".";

const SidebarContent = () => {
    return (
        <>
            <Box sx={{ textAlign: "center" }}>

                {/* Sidebar header */}
                <SidebarHeader />

                {/* Sidebar Tabs */}
                <SidebarTabs />

                {/* <Divider variant="middle" /> */}

                {/* Sidebar Footer */}
                <SidebarFooter />
            </Box>
        </>
    );
}

export default SidebarContent;