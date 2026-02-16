import { Avatar, Box, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

const StarRating = ({ rating }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-start'
            }}
        >
            {[...Array(5)].map((_, index) => (
                <StarIcon
                    key={index}
                    fontSize="small"
                    sx={{
                        color: index < rating ? '#fbbf24' : '#475569'
                    }}
                />
            ))}
        </Box>
    );
}

const CommentBox = ({ index, comment, isLightMode }) => {
    return (
        <Box key={index} sx={{ p: 1 }}>
            <Box
                sx={{
                    bgcolor: isLightMode
                        ? 'rgba(255, 255, 255, 0.8)'
                        : 'rgba(30, 41, 59, 0.7)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 4,
                    p: 3,
                    border: isLightMode
                        ? '1px solid rgba(168, 85, 247, 0.3)'
                        : '1px solid rgba(71, 85, 105, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: isLightMode
                            ? '0 20px 40px rgba(168, 85, 247, 0.2)'
                            : '0 20px 40px rgba(0, 0, 0, 0.4)',
                        borderColor: isLightMode
                            ? 'rgba(168, 85, 247, 0.5)'
                            : 'rgba(59, 130, 246, 0.5)',
                    }
                }}
            >
                {/* هدر کارت با آواتار و اطلاعات */}
                <Box sx={{
                    display: 'flex',
                    gap: 2,
                    mb: 2,
                    alignItems: 'center',
                }}
                    style={{ direction: 'rtl' }}
                >
                    <Avatar
                        src={comment.avatar}
                        variant="circular"
                        sx={{
                            width: 56,
                            height: 56,
                            border: isLightMode
                                ? '2px solid #a855f7'
                                : '2px solid #3b82f6',
                            boxShadow: isLightMode
                                ? '0 0 20px rgba(168, 85, 247, 0.3)'
                                : '0 0 20px rgba(59, 130, 246, 0.3)'
                        }}
                    />

                    <Box sx={{ flex: 1 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                color: isLightMode ? '#1e293b' : '#f1f5f9',
                                fontWeight: 600,
                                fontSize: '1rem',
                                mb: 0.5,
                            }}
                        >
                            {comment.fullname}
                        </Typography>

                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            flexWrap: 'wrap',
                        }}>
                            <StarRating rating={comment.star} />
                            <Typography
                                variant="caption"
                                sx={{ color: isLightMode ? '#6b7280' : '#94a3b8' }}
                            >
                                ({comment.star}/5)
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* پروژه (اگر وجود داشته باشد) */}
                {comment.project && (
                    <Typography
                        variant="subtitle2"
                        sx={{
                            color: isLightMode ? '#a855f7' : '#60a5fa',
                            mb: 1.5,
                            fontSize: '0.9rem',
                        }}
                        style={{ textAlign: 'right', direction: 'rtl' }}
                    >
                        {comment.project}
                    </Typography>
                )}

                {/* متن نظر */}
                <Typography
                    variant="body2"
                    sx={{
                        color: isLightMode ? '#4b5563' : '#cbd5e1',
                        lineHeight: 1.7,
                        fontSize: '0.9rem',
                    }}
                    style={{ textAlign: 'right', direction: 'rtl' }}
                >
                    "{comment.comment}"
                </Typography>
            </Box>
        </Box>
    );
}

export default CommentBox;