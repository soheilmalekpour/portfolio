import { Tab, Tabs, useTheme } from "@mui/material";
import { useContext } from "react";
import MainContext from './../../context'
import { tabs } from "../../data/tabs.sidebar";

const SidebarTabs = () => {
    const {
        pageNumber,
        handlePageNumber,
        setDrawerOpen
    } = useContext(MainContext);

    const theme = useTheme();
    const isLightMode = theme.palette.mode === 'light';

    return (
        <Tabs
            orientation="vertical"
            scrollButtons="auto"
            allowScrollButtonsMobile
            value={pageNumber}
            onChange={handlePageNumber}
            onClick={() => setDrawerOpen(false)}
            sx={{
                py: 1,
                width: 9 / 10,
                mx: 'auto',
                "& .MuiTab-root": {
                    justifyContent: "start",
                    borderRadius: 2,
                    my: "6px",
                    minHeight: 48,
                    background: isLightMode
                        ? 'rgba(168, 85, 247, 0.1)'
                        : 'rgba(255, 255, 255, 0.1)',
                    color: isLightMode
                        ? '#4b5563'
                        : 'rgba(255, 255, 255, 0.8)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        background: isLightMode
                            ? 'rgba(168, 85, 247, 0.2)'
                            : 'rgba(255, 255, 255, 0.2)',
                        transform: isLightMode ? 'translateX(-5px)' : 'translateX(5px)',
                    }
                },
                "& .Mui-selected": {
                    background: isLightMode
                        ? 'rgba(168, 85, 247, 0.25) !important'
                        : 'rgba(255, 255, 255, 0.25) !important',
                    color: isLightMode
                        ? '#a855f7 !important'
                        : 'white !important',
                    fontWeight: 600,
                    borderLeft: isLightMode
                        ? '4px solid #a855f7'
                        : '4px solid #ff4081',
                },
                "& .MuiTabs-indicator": {
                    display: 'none'
                }
            }}
        >
            {tabs.map((tab, index) => (
                <Tab
                    key={index}
                    label={tab.label}
                    icon={tab.icon}
                    iconPosition="start"
                    {...tab}
                    sx={{
                        '& .MuiSvgIcon-root': {
                            color: 'inherit'
                        }
                    }}
                />
            ))}
        </Tabs>
    );
}

export default SidebarTabs;