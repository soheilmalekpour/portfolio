import {
    Card,
    CardContent,
    Box,
    Fade,
    useTheme,
} from "@mui/material";
import Skills from "../components/Skills";
import Info from "../components/Info";
import Honors from "../components/Honors";
import HeaderInfo from "../components/HeaderInfo";
import { usePageTitle } from "../hooks/usePageTitle";
import QuickInfo from "../components/QuickInfo";
import MainContext from './../context'
import { useContext } from "react";

const About = () => {
    usePageTitle("سهیل ملک‌پور | درباره من");
    const { loading } = useContext(MainContext);
    const theme = useTheme();
    const isLightMode = theme.palette.mode == 'light';

    return (
        <Card
            sx={{
                minHeight: '100vh',
                background: isLightMode
                    ? 'linear-gradient(135deg, #f9f5ff 0%, #f3e8ff 100%)'
                    : 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                color: isLightMode ? '#1e293b' : '#e2e8f0',
                borderRadius: 0,
                boxShadow: isLightMode
                    ? '0 20px 60px rgba(168, 85, 247, 0.1)'
                    : '0 20px 60px rgba(0, 0, 0, 0.5)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '100%',
                    height: '100%',
                    background: isLightMode
                        ? 'radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.08) 0%, transparent 50%)'
                        : 'radial-gradient(circle at 20% 50%, rgba(30, 64, 175, 0.15) 0%, transparent 50%)',
                }
            }}
        >
            <Fade in={loading} mountOnEnter unmountOnExit>
                <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                    <HeaderInfo />
                    <Box sx={{ position: 'relative' }}>
                        <QuickInfo />
                        <Info />
                        <Skills />
                        <Honors />
                    </Box>
                </CardContent>
            </Fade>
        </Card>
    );
}

export default About;