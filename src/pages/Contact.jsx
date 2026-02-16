import {
    Box,
    Card,
    CardContent,
    Grid,
    Typography,
    useTheme,
    Grow
} from "@mui/material";
import { usePageTitle } from "../hooks/usePageTitle";
import { useContext } from "react";
import MyContext from './../context';
import ContactUsForm from "../components/ContactUsForm";
import ContactUsInfo from "../components/ContactUsInfo";

const Contact = () => {
    usePageTitle("سهیل ملک‌پور | ارتباط با من");
    const theme = useTheme();
    const isLightMode = theme.palette.mode === 'light';
    const { loading } = useContext(MyContext);


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
                            ارتباط با من
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                color: isLightMode ? '#4b5563' : '#94a3b8',
                                lineHeight: 1.8,
                            }}
                        >
                            برای همکاری، سوالات و پروژه‌ها با من در ارتباط باشید
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        <ContactUsForm theme={theme} isLightMode={isLightMode} />
                        <ContactUsInfo isLightMode={isLightMode} />
                    </Grid>
                </CardContent>
            </Grow>
        </Card >
    );
}

export default Contact;