import {
    Card,
    CardContent,
    Box,
    Typography,
    Chip,
    Divider,
    Grid,
    useTheme,
    useMediaQuery,
    Fade,
} from "@mui/material";
import { usePageTitle } from "../hooks/usePageTitle";
import ProjectIcon from '@mui/icons-material/Code';
import { useContext } from "react";
import MainContext from './../context'
import { MyProjects } from "../data/projectsData";
import ProjectBox from "../components/ProjectBox";

const Projects = () => {
    usePageTitle("سهیل ملک‌پور | پروژه‌ها");
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { loading } = useContext(MainContext);
    const isLightMode = theme.palette.mode === 'light';

    return (
        <Card
            sx={{
                minHeight: '100vh',
                background: isLightMode
                    ? 'linear-gradient(135deg, #f9f5ff 0%, #f3e8ff 100%)'
                    : 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                borderRadius: 0,
            }}
        >
            <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                {/* هدر صفحه */}
                <Box sx={{
                    mb: { xs: 3, md: 5 },
                    textAlign: 'center',
                    px: { xs: 1, md: 0 }
                }}>
                    <Typography
                        variant="h3"
                        component="h1"
                        sx={{
                            fontWeight: 900,
                            mb: { xs: 1.5, md: 2 },
                            background: isLightMode
                                ? 'linear-gradient(135deg, #a855f7, #c084fc, #e9d5ff)'
                                : 'linear-gradient(135deg, #60a5fa, #a855f7, #f97316)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                            textShadow: isLightMode
                                ? '0 0 30px rgba(168, 85, 247, 0.3)'
                                : '0 0 30px rgba(96, 165, 250, 0.4)',
                            letterSpacing: '-1px',
                            lineHeight: 1.2
                        }}
                    >
                        پروژه‌های من
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: isLightMode ? '#4b5563' : '#94a3b8',
                            lineHeight: 1.8,
                        }}
                    >
                        مجموعه‌ای از پروژه‌هایی که با تکنولوژی‌های مختلف پیاده‌سازی کرده‌ام
                    </Typography>
                </Box>

                {/* خط جداکننده با چیپ تکنولوژی‌ها */}
                <Divider sx={{ mb: 4 }}>
                    <Chip
                        icon={<ProjectIcon />}
                        label="React  •  Next.js  •  Laravel  •  Unity"
                        sx={{
                            bgcolor: isLightMode
                                ? 'rgba(168, 85, 247, 0.1)'
                                : 'rgba(59, 130, 246, 0.1)',
                            color: isLightMode ? '#a855f7' : '#60a5fa',
                            border: isLightMode
                                ? '1px solid rgba(168, 85, 247, 0.3)'
                                : '1px solid rgba(59, 130, 246, 0.3)',
                            fontSize: { xs: '0.7rem', md: '0.9rem' },
                            px: 2,
                            '& .MuiChip-icon': { color: isLightMode ? '#a855f7' : '#60a5fa' }
                        }}
                    />
                </Divider>

                {/* گرید پروژه‌ها */}
                <Fade in={loading} timeout={800}>
                    <Grid container spacing={2}>
                        {MyProjects.map((project, index) => (
                            <ProjectBox
                                project={project}
                                index={index}
                                loading={loading}
                                isLightMode={isLightMode}
                            />
                        ))}
                    </Grid>
                </Fade>

                {/* فوتر با آمار پروژه‌ها */}
                <Box sx={{
                    mt: 6,
                    textAlign: 'center',
                    pt: 3,
                    borderTop: isLightMode
                        ? '1px solid rgba(168, 85, 247, 0.2)'
                        : '1px solid rgba(71, 85, 105, 0.3)'
                }}>
                    <Typography variant="body2" sx={{ color: isLightMode ? '#6b7280' : '#94a3b8' }}>
                        {MyProjects.length} پروژه با تکنولوژی‌های مختلف
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default Projects;