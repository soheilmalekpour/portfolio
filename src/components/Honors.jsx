import { ArrowForwardIos } from "@mui/icons-material";
import { Box, Chip, Divider, Grid, Typography, useTheme } from "@mui/material";

const Honors = () => {
    const theme = useTheme();
    const isLightMode = theme.palette.mode === 'light';

    return (
        <Box sx={{ mt: 6 }}>
            <Divider sx={{ mb: 4 }}>
                <Chip
                    label="افتخارات و گواهینامه‌ها"
                    sx={{
                        bgcolor: isLightMode
                            ? 'rgba(168, 85, 247, 0.1)'
                            : 'rgba(245, 158, 11, 0.1)',
                        color: isLightMode ? '#a855f7' : '#fbbf24',
                        border: isLightMode
                            ? '1px solid rgba(168, 85, 247, 0.3)'
                            : '1px solid rgba(245, 158, 11, 0.3)',
                        fontSize: '1.1rem',
                        px: 2,
                    }}
                />
            </Divider>

            <Grid container spacing={2}>
                {[
                    "AWS Certified Solutions Architect",
                    "React Developer Certification",
                    "MongoDB Certified Developer",
                    "Google Cloud Platform Professional",
                    "Best Developer Award 2023",
                    "Open Source Contributor"
                ].map((cert, index) => (
                    <Grid item size={{ sm: 4, xs: 12 }} key={index}>
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
                        }}>
                            <ArrowForwardIos sx={{
                                fontSize: 14,
                                color: isLightMode ? '#a855f7' : '#fbbf24',
                                transform: 'scaleX(-1)'
                            }} />
                            <Typography variant="body1" sx={{
                                color: isLightMode ? '#1e293b' : '#f1f5f9'
                            }}>
                                {cert}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
export default Honors;