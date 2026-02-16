import { Grid, useTheme } from "@mui/material";

const SidebarContainer = ({ children }) => {
    const theme = useTheme();

    return (
        <Grid
            size={{
                lg: 2,
                md: 3
            }}
            sx={{
                py: 2,
                background: theme.palette.mode == 'light'
                    ? 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)'
                    : 'linear-gradient(180deg, #1a1c2d 0%, #6e3144 100%)',
                color: theme.palette.mode == 'light' ? '#0f172a' : 'white',
                height: '100vh',
                overflowY: 'auto',
                overflowX: 'hidden',
                zIndex: 3,
                boxShadow: theme.palette.mode == 'light'
                    ? '3px 0 15px rgba(0, 0, 0, 0.1)'
                    : '3px 0 15px rgba(0, 0, 0, 0.5)',
            }}
        >
            {children}
        </Grid>
    );
}

export default SidebarContainer;