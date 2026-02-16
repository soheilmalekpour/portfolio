import { Box, Card, CardActionArea, CardContent, CardMedia, Chip, Grid, Typography, Zoom } from "@mui/material";

const ProjectBox = ({ index, project, loading, isLightMode }) => {
    return (
        <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
            <Zoom in={loading} timeout={200 * index}>
                <Box>
                    <Card
                        sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            bgcolor: isLightMode
                                ? 'rgba(255, 255, 255, 0.8)'
                                : 'rgba(30, 41, 59, 0.7)',
                            backdropFilter: 'blur(10px)',
                            border: isLightMode
                                ? '1px solid rgba(168, 85, 247, 0.3)'
                                : '1px solid rgba(71, 85, 105, 0.3)',
                            borderRadius: 3,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-8px)',
                                boxShadow: isLightMode
                                    ? '0 20px 40px rgba(168, 85, 247, 0.2)'
                                    : '0 20px 40px rgba(0, 0, 0, 0.4)',
                                borderColor: isLightMode
                                    ? 'rgba(168, 85, 247, 0.5)'
                                    : 'rgba(59, 130, 246, 0.5)',
                            }
                        }}
                    >
                        <CardActionArea>
                            <CardMedia
                                component='img'
                                height="160"
                                image={project.image}
                                alt={project.title}
                                sx={{
                                    objectFit: 'cover',
                                    borderTopLeftRadius: 12,
                                    borderTopRightRadius: 12
                                }}
                            />

                            <CardContent sx={{ p: 2.5 }}>
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    sx={{
                                        color: isLightMode ? '#1e293b' : '#f1f5f9',
                                        fontWeight: 600,
                                        fontSize: '1.1rem'
                                    }}
                                >
                                    {project.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: isLightMode ? '#4b5563' : '#94a3b8',
                                        overflow: 'hidden',
                                        textAlign: 'justify',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 3,
                                        WebkitBoxOrient: 'vertical',
                                        lineHeight: 1.6,
                                        mb: 2
                                    }}
                                >
                                    {project.description}
                                </Typography>

                                <Box
                                    sx={{
                                        mt: 1,
                                        gap: 0.5,
                                        display: 'flex',
                                        flexWrap: 'wrap'
                                    }}
                                >
                                    {project.tags.map((tag, i) => (
                                        <Chip
                                            key={i}
                                            label={tag}
                                            size="small"
                                            sx={{
                                                bgcolor: isLightMode
                                                    ? 'rgba(168, 85, 247, 0.1)'
                                                    : 'rgba(255, 255, 255, 0.1)',
                                                border: isLightMode
                                                    ? '1px solid rgba(168, 85, 247, 0.3)'
                                                    : '1px solid rgba(255, 255, 255, 0.2)',
                                                color: isLightMode ? '#a855f7' : '#e2e8f0',
                                                fontSize: '0.7rem',
                                                height: 24
                                            }}
                                        />
                                    ))}
                                </Box>
                            </CardContent>
                            {/* <CardActions sx={{ p: 2.5, pt: 0 }}>
                                                    <Button
                                                        size="small"
                                                        href={project.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        startIcon={<LaunchIcon />}
                                                        sx={{
                                                            color: isLightMode ? '#a855f7' : '#60a5fa',
                                                            '&:hover': {
                                                                bgcolor: isLightMode
                                                                    ? 'rgba(168, 85, 247, 0.1)'
                                                                    : 'rgba(59, 130, 246, 0.1)',
                                                            }
                                                        }}
                                                    >
                                                        مشاهده پروژه
                                                    </Button>
                                                </CardActions> */}
                        </CardActionArea>
                    </Card>
                </Box>
            </Zoom>
        </Grid>
    );
}

export default ProjectBox;