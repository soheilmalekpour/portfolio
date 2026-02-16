import {
    Box,
    Grid,
    Typography,
    Paper
} from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContactUsInfo = ({ isLightMode }) => {
    const contactInfo = [
        { icon: <EmailIcon />, title: 'ایمیل', value: 'soheil.malekpour@example.com', bg: '#ea4335' },
        { icon: <LocalPhoneIcon />, title: 'تلفن', value: '۰۹۱۲ ۳۴۵ ۶۷۸۹', bg: '#34a853' },
        { icon: <LocationOnIcon />, title: 'آدرس', value: 'تهران، ایران', bg: '#4285f4' },
        // { icon: <AccessTimeIcon />, title: 'ساعات کاری', value: '۹ صبح تا ۵ عصر', bg: '#f9ab00' },
    ];

    return (
        <Grid item size={{ xs: 12, md: 5 }}>
            <Paper
                elevation={0}
                sx={{
                    bgcolor: isLightMode
                        ? 'rgba(255, 255, 255, 0.7)'
                        : 'rgba(30, 41, 59, 0.5)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 4,
                    p: 4,
                    border: isLightMode
                        ? '1px solid rgba(168, 85, 247, 0.2)'
                        : '1px solid rgba(255, 255, 255, 0.1)',
                }}
            >
                <Typography variant="h5" sx={{
                    color: isLightMode ? '#a855f7' : '#60a5fa',
                    fontWeight: 700,
                    mb: 3
                }}>
                    اطلاعات تماس
                </Typography>

                {contactInfo.map((item, index) => (
                    <Box key={index} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        mb: 3,
                        p: 2,
                        borderRadius: 3,
                        bgcolor: isLightMode
                            ? 'rgba(168, 85, 247, 0.05)'
                            : 'rgba(255, 255, 255, 0.05)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            transform: 'translateX(-5px)',
                            bgcolor: isLightMode
                                ? 'rgba(168, 85, 247, 0.1)'
                                : 'rgba(255, 255, 255, 0.1)',
                        }
                    }}>
                        <Box sx={{
                            width: 45,
                            height: 45,
                            borderRadius: 2,
                            bgcolor: `${item.bg}20`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: item.bg
                        }}>
                            {item.icon}
                        </Box>
                        <Box>
                            <Typography variant="caption" sx={{
                                color: isLightMode ? '#6b7280' : '#94a3b8',
                            }}>
                                {item.title}
                            </Typography>
                            <Typography variant="body2" sx={{
                                color: isLightMode ? '#1e293b' : '#f1f5f9',
                                fontWeight: 500
                            }}>
                                {item.value}
                            </Typography>
                        </Box>
                    </Box>
                ))}

                <Box sx={{
                    p: 3,
                    borderRadius: 3,
                    bgcolor: isLightMode
                        ? 'rgba(168, 85, 247, 0.05)'
                        : 'rgba(255, 255, 255, 0.05)',
                    border: isLightMode
                        ? '1px dashed rgba(168, 85, 247, 0.3)'
                        : '1px dashed rgba(255, 255, 255, 0.2)',
                    textAlign: 'center'
                }}>
                    <Typography variant="body2" sx={{
                        color: isLightMode ? '#4b5563' : '#94a3b8',
                        mb: 1
                    }}>
                        منتظر پیام‌های شما هستم
                    </Typography>
                    <Typography variant="caption" sx={{
                        color: isLightMode ? '#a855f7' : '#60a5fa',
                        fontWeight: 500
                    }}>
                        معمولاً در کمتر از ۲۴ ساعت پاسخ می‌دهم
                    </Typography>
                </Box>
            </Paper>
        </Grid>
    );
}

export default ContactUsInfo;