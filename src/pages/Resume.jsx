import {
    Card,
    CardContent,
    Box,
    Chip,
    Divider,
    Fade,
    useTheme,
    Typography,
} from "@mui/material";
import { Timeline } from '@mui/lab';
import { usePageTitle } from "../hooks/usePageTitle";
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import { ResumeData } from '../data/resumeData';
import TimelineItemCard from "../components/TimelineItemCard";
import { useContext } from "react";
import MainContext from './../context'

const Resume = () => {
    usePageTitle("سهیل ملک‌پور | رزومه");
    const { loading } = useContext(MainContext);
    const theme = useTheme();
    const isLightMode = theme.palette.mode === 'light';

    // کامپوننت سکشن
    const Section = ({ title, icon, color, data }) => (
        <Box sx={{ mb: 5 }}>
            <Divider sx={{ mb: 3 }}>
                <Chip
                    icon={icon}
                    label={title}
                    sx={{
                        bgcolor: isLightMode ? `${color}15` : `${color}15`,
                        color: isLightMode ? color : color,
                        border: isLightMode ? `1px solid ${color}30` : `1px solid ${color}30`,
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        px: 2,
                        '& .MuiChip-icon': { color: color }
                    }}
                />
            </Divider>

            <Timeline>
                {data.map((item, index) => (
                    <TimelineItemCard
                        key={item.id}
                        item={item}
                        index={index}
                        isLast={index === data.length - 1}
                    />
                ))}
            </Timeline>
        </Box>
    );

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
                <Box sx={{
                    mb: { xs: 3, md: 5 },
                    textAlign: 'center',
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
                        }}
                    >
                        رزومه من
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: isLightMode ? '#4b5563' : '#94a3b8',
                            lineHeight: 1.8,
                        }}
                    >
                        مجموعه ای از اطلاعات شامل سابقه کاری، تجربیات و تحصیلات
                    </Typography>
                </Box>

                <Fade in={loading} mountOnEnter unmountOnExit>
                    <Box>
                        <Section
                            title="سابقه کاری"
                            icon={<WorkIcon />}
                            color={isLightMode ? "#a855f7" : "#3b82f6"}
                            data={ResumeData.work}
                        />

                        <Section
                            title="تحصیلات و گواهینامه‌ها"
                            icon={<SchoolIcon />}
                            color={isLightMode ? "#a855f7" : "#f97316"}
                            data={ResumeData.experience}
                        />
                    </Box>
                </Fade>
            </CardContent>
        </Card>
    );
};

export default Resume;