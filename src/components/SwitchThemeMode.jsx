import { Box, Fab } from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MyContext from './../context';
import { useContext } from "react";

const SwitchThemeMode = ({ setThemeMode }) => {
    const { themeMode } = useContext(MyContext);

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 20,
                right: 20,
                zIndex: 5
            }}
        >
            <Fab
                aria-label="تم تاریک"
                size="small"
                onClick={() => setThemeMode("dark")}
                sx={{
                    display: themeMode == "dark" ? 'none' : 'flex',
                    boxShadow: `0 2px 12px #3b82f6`,
                    bgcolor: '#3b82f6',
                    '&:hover': {
                        bgcolor: '#60a5fa'
                    }
                }}
            >
                <DarkModeIcon />
            </Fab>
            <Fab
                aria-label="تم روشن"
                size="small"
                onClick={() => setThemeMode("light")}
                sx={{
                    display: themeMode == "light" ? 'none' : 'flex',
                    boxShadow: `0 2px 12px #fbbf24`,
                    bgcolor: '#fbbf24',
                    '&:hover': {
                        bgcolor: '#ffce52'
                    }
                }}
            >
                <LightModeIcon />
            </Fab>
        </Box>
    );
}

export default SwitchThemeMode;