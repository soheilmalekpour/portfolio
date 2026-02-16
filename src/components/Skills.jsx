import { Badge, Box, Chip, Divider, Grid, LinearProgress, Stack, Typography, useTheme } from "@mui/material";
import { skills } from "../data/skills";
import { useEffect, useState } from "react";

const Skills = () => {
    const [processValues, setProcessValues] = useState([]);
    const theme = useTheme();
    const isLightMode = theme.palette.mode === 'light';

    useEffect(() => {
        const intervals = {};

        skills.map(skill => {
            let current = 0;
            const step = Math.ceil(skill.level / 50);
            const target = skill.level;

            intervals[skill.name] = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(intervals[skill.name]);
                }

                setProcessValues(prev => ({
                    ...prev,
                    [skill.name]: current
                }));
            }, 50);
        });
    }, []);

    return (
        <Box sx={{ mt: 6 }}>
            <Divider sx={{ mb: 4 }}>
                <Chip
                    label="مهارت‌های تخصصی"
                    sx={{
                        bgcolor: isLightMode
                            ? 'rgba(168, 85, 247, 0.1)'
                            : 'rgba(16, 185, 129, 0.1)',
                        color: isLightMode ? '#a855f7' : '#34d399',
                        border: isLightMode
                            ? '1px solid rgba(168, 85, 247, 0.3)'
                            : '1px solid rgba(16, 185, 129, 0.3)',
                        fontSize: '1.1rem',
                        px: 2,
                    }}
                />
            </Divider>

            <Grid container spacing={3}>
                {skills.map((skill, index) => (
                    <Grid item size={{ sm: 6, xs: 12 }} key={index}>
                        <Box sx={{
                            p: 3,
                            borderRadius: 3,
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
                                    : 'rgba(16, 185, 129, 0.5)',
                                transform: 'translateY(-5px)'
                            }
                        }}>
                            <Stack direction="row" alignItems="center" spacing={2} mb={2} justifyContent="space-between">
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Box sx={{
                                        color: isLightMode ? '#a855f7' : '#34d399',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}>
                                        {skill.icon}
                                    </Box>
                                    <Typography variant="h6" sx={{
                                        color: isLightMode ? '#1e293b' : '#f1f5f9'
                                    }}>
                                        {skill.name}
                                    </Typography>
                                </Box>

                                <Typography variant="caption" sx={{
                                    display: 'flex',
                                    color: isLightMode ? '#a855f7' : '#34d399',
                                    px: 1,
                                    backgroundColor: isLightMode ? '#f3e8ff' : '#0f172a',
                                    fontWeight: 600,
                                    border: isLightMode
                                        ? '1px solid rgba(168, 85, 247, 0.3)'
                                        : '1px solid #34d39922',
                                    borderRadius: 1
                                }}>
                                    {processValues[skill.name]}%
                                </Typography>
                            </Stack>
                            <LinearProgress
                                variant="determinate"
                                value={processValues[skill.name]}
                                sx={{
                                    height: 10,
                                    borderRadius: 15,
                                    backgroundColor: isLightMode
                                        ? 'rgba(168, 85, 247, 0.1)'
                                        : 'rgba(71, 85, 105, 0.5)',
                                    '& .MuiLinearProgress-bar': {
                                        background: isLightMode
                                            ? 'linear-gradient(90deg, #a855f7, #c084fc)'
                                            : 'linear-gradient(90deg, #10b981, #34d399)',
                                        borderRadius: 15,
                                    }
                                }}
                            />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box >
    );
}

export default Skills;