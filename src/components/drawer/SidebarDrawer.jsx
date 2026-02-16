import { Drawer } from "@mui/material";
import SidebarContent from "../sidebar/SidebarContent";
import { useContext } from "react";
import MainContext from './../../context'

const SidebarDrawer = () => {
    const { drawerOpen, setDrawerOpen } = useContext(MainContext);

    return (
        <Drawer
            anchor="left"
            open={drawerOpen}
            variant="temporary"
            onClose={() => setDrawerOpen(false)}
            sx={{
                display: { xs: "block", md: "none" },
                "& .MuiDrawer-paper": {
                    width: 280,
                    background: 'linear-gradient(180deg, #1a1c2d 0%, #6e3144 100%)',
                    color: 'white',
                    boxShadow: '-5px 0 25px rgba(0, 0, 0, 0.5)',
                }
            }}
        >
            <SidebarContent />
        </Drawer>
    );
}

export default SidebarDrawer;