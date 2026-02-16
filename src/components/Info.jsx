import { Box, Chip, Divider, Grid, Typography, useTheme } from "@mui/material";
import { aboutInfo } from "../data/info.about";

const Info = () => {
    const theme = useTheme();
    const isLightMode = theme.palette.mode === 'light';

    return (
        <>
            <Divider sx={{ mb: 4 }}>
                <Chip
                    label="اطلاعات شخصی"
                    sx={{
                        bgcolor: isLightMode
                            ? 'rgba(168, 85, 247, 0.1)'
                            : 'rgba(99, 102, 241, 0.1)',
                        color: isLightMode ? '#a855f7' : '#818cf8',
                        border: isLightMode
                            ? '1px solid rgba(168, 85, 247, 0.3)'
                            : '1px solid rgba(99, 102, 241, 0.3)',
                        fontSize: '1.1rem',
                        px: 2,
                    }}
                />
            </Divider>

            <Grid container spacing={2}>
                {aboutInfo.map((item, index) => (
                    <Grid item size={{ xl: 4, lg: 4, sm: 6, xs: 12 }} key={index}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            p: 2,
                            borderRadius: 2,
                            bgcolor: isLightMode
                                ? 'rgba(168, 85, 247, 0.05)'
                                : 'rgba(30, 41, 59, 0.5)',
                            border: isLightMode
                                ? '1px solid rgba(168, 85, 247, 0.2)'
                                : '1px solid rgba(71, 85, 105, 0.3)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                bgcolor: isLightMode
                                    ? 'rgba(168, 85, 247, 0.1)'
                                    : 'rgba(30, 41, 59, 0.8)',
                                borderColor: isLightMode
                                    ? 'rgba(168, 85, 247, 0.5)'
                                    : 'rgba(59, 130, 246, 0.5)',
                                transform: 'translateX(-5px)'
                            }
                        }}>
                            <Box sx={{
                                color: isLightMode ? '#a855f7' : '#60a5fa',
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                {item.icon}
                            </Box>
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="caption" sx={{
                                    color: isLightMode ? '#64748b' : '#94a3b8',
                                    display: 'block'
                                }}>
                                    {item.label}
                                </Typography>
                                <Typography variant="body1" sx={{
                                    color: isLightMode ? '#1e293b' : '#f1f5f9',
                                    fontWeight: 500
                                }}>
                                    {item.value}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default Info;