import {
    Box,
    Typography,
    Chip,
    useMediaQuery,
    useTheme,
    Fade,
} from "@mui/material";
import {
    TimelineItem,
    TimelineSeparator,
    TimelineDot,
    TimelineConnector,
    TimelineContent
} from '@mui/lab';
import EventIcon from '@mui/icons-material/Event';
import MainContext from './../context'
import { useContext } from "react";

// کامپوننت تاریخ
const DateBadge = ({ date, color, isLightMode }) => (
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 0.5,
        bgcolor: isLightMode ? '#f3e8ff' : 'rgba(15, 23, 42, 0.8)',
        p: '4px 12px',
        borderRadius: 2,
        border: `1px solid ${color}40`,
        width: 'fit-content'
    }}>
        <EventIcon sx={{ fontSize: 14, color }} />
        <Typography sx={{
            fontSize: '0.75rem',
            fontWeight: 600,
            color: isLightMode ? '#1e293b' : '#e2e8f0'
        }}>
            {date}
        </Typography>
    </Box>
);

const TimelineItemCard = ({ item, isLast, index }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { loading } = useContext(MainContext);
    const isLightMode = theme.palette.mode === 'light';

    const getColor = () => {
        if (isLightMode) return '#a855f7'; // بنفش برای تم روشن

        switch (item.color) {
            case 'primary': return '#3b82f6';
            case 'success': return '#22c55e';
            case 'info': return '#6366f1';
            case 'secondary': return '#a855f7';
            default: return '#f97316';
        }
    };
    const color = getColor();

    return (
        <Fade
            in={loading}
            mountOnEnter
            unmountOnExit
            style={{ transitionDelay: `${index * 30}ms` }}
        >
            <TimelineItem sx={{ '&::before': { display: 'none' } }}>
                <TimelineSeparator>
                    <TimelineDot
                        sx={{
                            width: 40,
                            height: 40,
                            bgcolor: isLightMode ? '#f9f5ff' : '#0f172a',
                            border: `2px solid ${color}`,
                            boxShadow: `0 0 15px ${color}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            '& svg': { fontSize: 20, color }
                        }}
                    >
                        {item.icon}
                    </TimelineDot>
                    {!isLast && (
                        <TimelineConnector sx={{
                            bgcolor: `${color}30`,
                            width: 2,
                            height: { xs: 30, md: 40 }
                        }} />
                    )}
                </TimelineSeparator>

                <TimelineContent sx={{ py: 0.5, px: { xs: 1, md: 2 } }}>
                    <Box sx={{
                        bgcolor: isLightMode
                            ? 'rgba(255, 255, 255, 0.8)'
                            : 'rgba(30, 41, 59, 0.7)',
                        backdropFilter: 'blur(10px)',
                        border: `1px solid ${color}30`,
                        borderRadius: 3,
                        p: 2,
                        transition: 'all 0.2s',
                        '&:hover': {
                            borderColor: color,
                            boxShadow: `0 8px 20px ${color}30`
                        }
                    }}>
                        {/* تاریخ برای موبایل */}
                        {isMobile && item.opposite && (
                            <Box sx={{ mb: 1 }}>
                                <DateBadge date={item.opposite} color={color} isLightMode={isLightMode} />
                            </Box>
                        )}

                        {/* عنوان و تاریخ دسکتاپ */}
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            mb: 1,
                            flexWrap: 'wrap',
                            gap: 1
                        }}>
                            <Typography sx={{
                                fontSize: { xs: '1rem', md: '1.1rem' },
                                fontWeight: 700,
                                color: isLightMode ? '#1e293b' : '#f1f5f9'
                            }}>
                                {item.title}
                            </Typography>

                            {!isMobile && item.opposite && (
                                <DateBadge date={item.opposite} color={color} isLightMode={isLightMode} />
                            )}
                        </Box>

                        {/* توضیحات */}
                        <Typography sx={{
                            fontSize: '0.85rem',
                            color: isLightMode ? '#4b5563' : '#94a3b8',
                            lineHeight: 1.6,
                            mb: 1.5
                        }}>
                            {item.desciption}
                        </Typography>

                        {/* تگ‌ها */}
                        {item.tags?.length > 0 && (
                            <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                                {item.tags.map((tag, i) => (
                                    <Chip
                                        key={i}
                                        label={tag}
                                        size="small"
                                        sx={{
                                            bgcolor: isLightMode
                                                ? 'rgba(168, 85, 247, 0.1)'
                                                : `${color}15`,
                                            color: isLightMode ? '#a855f7' : color,
                                            border: isLightMode
                                                ? '1px solid rgba(168, 85, 247, 0.3)'
                                                : `1px solid ${color}30`,
                                            fontSize: '0.7rem',
                                            height: 22
                                        }}
                                    />
                                ))}
                            </Box>
                        )}
                    </Box>
                </TimelineContent>
            </TimelineItem>
        </Fade>
    );
};

export default TimelineItemCard;