import { Avatar, Box, Chip, Grid, Typography, useTheme } from "@mui/material";
import { Code } from "@mui/icons-material";
import { AvatarImage } from "../assets";

const HeaderInfo = () => {
    const theme = useTheme();
    const isLightMode = theme.palette.mode === 'light';

    return (
        <Grid item xs={12} md={4}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative'
            }}>
                <Avatar
                    src={AvatarImage}
                    sx={{
                        width: 200,
                        height: 200,
                        border: isLightMode ? '4px solid #a855f7' : '4px solid #3b82f6',
                        boxShadow: isLightMode
                            ? '0 10px 30px rgba(168, 85, 247, 0.2)'
                            : '0 10px 30px rgba(59, 130, 246, 0.3)',
                        mb: 3,
                    }}
                />

                <Typography variant="h4" sx={{
                    fontWeight: 700,
                    mb: 1,
                    background: isLightMode
                        ? 'linear-gradient(45deg, #a855f7, #7e22ce)'
                        : 'linear-gradient(45deg, #60a5fa, #3b82f6)',
                    backgroundClip: 'text',
                    textFillColor: 'transparent',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}>
                    سهیل ملک پور
                </Typography>

                <Chip
                    label="توسعه دهنده فول استک"
                    icon={<Code />}
                    sx={{
                        bgcolor: isLightMode
                            ? 'rgba(168, 85, 247, 0.1)'
                            : 'rgba(59, 130, 246, 0.1)',
                        color: isLightMode ? '#a855f7' : '#60a5fa',
                        border: isLightMode
                            ? '1px solid rgba(168, 85, 247, 0.3)'
                            : '1px solid rgba(59, 130, 246, 0.3)',
                        fontWeight: 600,
                        mb: 3,
                    }}
                />

                <Typography variant="body1" sx={{
                    textAlign: 'center',
                    color: isLightMode ? '#4b5563' : '#94a3b8',
                    lineHeight: 1.8,
                    mb: 3
                }}>
                    توسعه‌دهنده با بیش از ۵ سال تجربه در ساخت اپلیکیشن‌های وب مدرن.
                    متخصص در React و Node.js با تمرکز بر روی معماری‌های مقیاس‌پذیر و تجربه کاربری استثنایی.
                </Typography>
            </Box>
        </Grid>
    );
}

export default HeaderInfo;