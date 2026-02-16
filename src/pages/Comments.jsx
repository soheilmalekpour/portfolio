import {
    Box,
    Card,
    CardContent,
    Chip,
    Divider,
    Grow,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import Slider from "react-slick";

// Slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { commentsData } from "../data/commentsData";
import { usePageTitle } from "../hooks/usePageTitle";
import { useContext } from "react";
import MyContext from './../context';
import CommentBox from "../components/CommentBox";

const Comments = () => {
    usePageTitle("سهیل ملک‌پور | نظرات کارفرمایان");
    const theme = useTheme();
    const isLightMode = theme.palette.mode === 'light';
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { loading } = useContext(MyContext);

    const options = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 7000,
        infinite: true,
        arrows: false,
        pauseOnHover: true,
        slidesToShow: isMobile ? 1 : 2,
        slidesToScroll: 1,
    };

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
            <Grow
                in={loading}
                mountOnEnter
                unmountOnExit
            >
                <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                    {/* هدر صفحه */}
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
                            نظرات کارفرمایان
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                color: isLightMode ? '#4b5563' : '#94a3b8',
                                lineHeight: 1.8,
                            }}
                        >
                            مجموعه‌ای از نظرات کارفرمایان عزیز در همکاری‌های ارزشمند
                        </Typography>
                    </Box>

                    {/* خط جداکننده */}
                    <Divider sx={{ mb: 4 }}>
                        <Chip
                            icon={<StarIcon fontSize="small" />}
                            label="امتیازات و نظرات"
                            sx={{
                                bgcolor: isLightMode
                                    ? 'rgba(168, 85, 247, 0.1)'
                                    : 'rgba(59, 130, 246, 0.1)',
                                color: isLightMode ? '#a855f7' : '#60a5fa',
                                border: isLightMode
                                    ? '1px solid rgba(168, 85, 247, 0.3)'
                                    : '1px solid rgba(59, 130, 246, 0.3)',
                                fontSize: { xs: '0.7rem', md: '0.9rem' },
                                '& .MuiChip-icon': { color: isLightMode ? '#a855f7' : '#60a5fa' }
                            }}
                        />
                    </Divider>

                    {/* اسلایدر */}
                    <Box dir="rtl" sx={{
                        mx: { xs: -1, md: -1.5 },
                        '& .slick-slide > div': {
                            mx: { xs: 1, md: 1.5 }
                        },
                        '& .slick-dots': {
                            bottom: -40,
                            '& li button:before': {
                                color: isLightMode ? '#a855f7' : '#60a5fa',
                                fontSize: 10
                            },
                            '& li.slick-active button:before': {
                                color: isLightMode ? '#7e22ce' : '#3b82f6'
                            }
                        }
                    }}>
                        <Slider {...options}>
                            {commentsData.map((comment, index) => (
                                <CommentBox
                                    comment={comment}
                                    index={index}
                                    isLightMode={isLightMode}
                                />
                            ))}
                        </Slider>
                    </Box>
                </CardContent>
            </Grow>
        </Card>
    )
}

export default Comments;