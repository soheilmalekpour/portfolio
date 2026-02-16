import { Box, Grid, Typography, Zoom, useTheme } from "@mui/material";
import { constantInfo } from "../data/constantInfo";
import CountUp from "react-countup";
import MainContext from './../context'
import { useContext } from "react";

const QuickInfo = () => {
    const { loading } = useContext(MainContext);
    const theme = useTheme();
    const isLightMode = theme.palette.mode === 'light';

    return (
        <Grid container spacing={2} sx={{ mb: 5 }}>
            {constantInfo.map((constant, index) => (
                <Zoom
                    key={index}
                    in={loading}
                    style={{ transitionDelay: `${index * 50}ms` }}
                >
                    <Grid item size={{ lg: 4, sm: 6, xs: 12 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                                p: 2,
                                borderRadius: 2,
                                bgcolor: isLightMode
                                    ? 'rgba(168, 85, 247, 0.08)'
                                    : '#5a7f6a22',
                                border: isLightMode
                                    ? '1px solid rgba(168, 85, 247, 0.3)'
                                    : '1px solid #5a7f6a88',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    bgcolor: isLightMode
                                        ? 'rgba(168, 85, 247, 0.15)'
                                        : '#5a7f6a33',
                                    border: isLightMode
                                        ? '1px solid rgba(168, 85, 247, 0.5)'
                                        : '1px solid #5a7f6a99',
                                },
                                '& svg': {
                                    color: isLightMode ? '#a855f7' : '#5a7f6a'
                                }
                            }}
                        >
                            <Box sx={{ width: '100%' }}>
                                <Box
                                    sx={{
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1
                                        }}
                                    >
                                        <Box>
                                            {constant.icon}
                                        </Box>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                display: 'block',
                                                color: isLightMode ? '#1e293b' : 'inherit'
                                            }}
                                        >
                                            {constant.title}
                                        </Typography>
                                    </Box>
                                    <Typography variant="caption" sx={{
                                        px: 1,
                                        display: 'block',
                                        direction: 'rtl',
                                        bgcolor: isLightMode ? '#f3e8ff' : '#0f172a',
                                        color: isLightMode ? '#a855f7' : 'inherit',
                                        border: isLightMode
                                            ? '1px solid rgba(168, 85, 247, 0.3)'
                                            : '1px solid #5a7f6a99',
                                        borderRadius: 1
                                    }}>
                                        {constant.suffix}
                                        <CountUp
                                            start={0}
                                            end={constant.number}
                                            duration={3}
                                        />
                                    </Typography>
                                </Box>
                                <Box sx={{ pt: 1 }}>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            color: isLightMode ? '#64748b' : '#ffffff99'
                                        }}
                                    >
                                        {constant.description}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Zoom>
            ))}
        </Grid>
    );
}

export default QuickInfo;