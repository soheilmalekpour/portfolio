import { Box, Typography, useTheme } from "@mui/material";

const SidebarFooter = () => {
    const theme = useTheme();
    const isLightMode = theme.palette.mode === 'light';

    return (
        <Box sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            p: 3,
            color: isLightMode ? '#6b7280' : 'rgba(255, 255, 255, 0.6)',
            textAlign: 'center',
            borderTop: isLightMode
                ? '1px solid rgba(168, 85, 247, 0.2)'
                : '1px solid rgba(255, 255, 255, 0.1)',
            mt: 3
        }}>
            <Typography variant="subtitle2">
                طراحی شده توسط سهیل ملک پور
            </Typography>
            <Typography variant="caption" sx={{ mt: 1 }}>
                © 2024 - تمامی حقوق محفوظ است
            </Typography>
        </Box>
    );
}

export default SidebarFooter;