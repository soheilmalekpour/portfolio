import { Avatar, Box, Divider, IconButton, Tooltip, Typography, useTheme } from "@mui/material";
import { LogoImage } from "../../assets";
import { RandomReveal } from "react-random-reveal";
import { persianAlphabet } from "../../data/persianAlphabet";
import { socialLinks } from "../../data/socialLinks";

const SidebarHeader = () => {
    const theme = useTheme();
    const isLightMode = theme.palette.mode === 'light';

    return (
        <>
            <Box sx={{ my: 2 }}>
                <Avatar
                    sx={{
                        width: "10rem",
                        height: "10rem",
                        margin: "auto",
                        border: isLightMode ? '3px solid #a855f7' : '3px solid #3b82f6',
                        boxShadow: isLightMode
                            ? "0 4px 20px rgba(168, 85, 247, 0.3)"
                            : "0 4px 20px rgba(0, 0, 0, 0.2)"
                    }}
                    src={LogoImage}
                />
            </Box>

            <Typography variant="h6" sx={{
                mt: 2,
                fontWeight: 600,
                color: isLightMode ? '#a855f7' : 'white'
            }}>
                <RandomReveal isPlaying characterSet={persianAlphabet} duration={2} characters="سهیل ملک پور" />
            </Typography>

            <Typography variant="caption" sx={{
                color: isLightMode ? '#6b7280' : 'rgba(255, 255, 255, 0.8)'
            }}>
                طراح و برنامه نویس وب
            </Typography>

            <Box
                component="div"
                sx={{
                    m: '0 auto',
                    pb: 1,
                    textAlign: 'center',
                }}>
                {socialLinks.map((socialLink, index) => (
                    <IconButton
                        key={index}
                        component="a"
                        href={socialLink.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            width: 35,
                            height: 35,
                            m: 0.8,
                            backgroundColor: isLightMode
                                ? 'rgba(168, 85, 247, 0.1)'
                                : 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            border: isLightMode
                                ? '1px solid rgba(168, 85, 247, 0.3)'
                                : '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '5px',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                backgroundColor: isLightMode ? '#a855f7' : 'rgba(255, 255, 255, 0.2)',
                                transform: 'translateY(-2px)',
                                boxShadow: isLightMode
                                    ? '0 8px 25px rgba(168, 85, 247, 0.3)'
                                    : '0 8px 25px rgba(0, 0, 0, 0.15)',
                                '& svg': {
                                    color: 'white',
                                }
                            },
                            '& svg': {
                                color: isLightMode ? '#a855f7' : 'white',
                                fontSize: '1.2rem'
                            }
                        }}
                    >
                        <Tooltip title={socialLink.name} placement="top" arrow>
                            {socialLink.icon}
                        </Tooltip>
                    </IconButton>
                ))}
            </Box>

            <Divider
                variant="middle"
                sx={{
                    backgroundColor: isLightMode
                        ? 'rgba(168, 85, 247, 0.2)'
                        : 'rgba(255, 255, 255, 0.2)',
                }}
            />
        </>
    );
}

export default SidebarHeader;