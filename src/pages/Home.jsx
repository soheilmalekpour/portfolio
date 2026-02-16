import { Box, Fade, Grow, Typography } from '@mui/material';
import { ReactTyped } from 'react-typed';
import GlitchText from '../components/TextGlitch';
import ParticleSystem from '../components/ParticleSystem';
import { HomePageBackgroundImage } from '../assets';
import { usePageTitle } from '../hooks/usePageTitle';
import { useContext } from 'react';
import MainContext from './../context'

const Home = () => {
    usePageTitle("سهیل ملک‌پور | صفحه اصلی");
    const { loading } = useContext(MainContext);

    return (
        <Box
            sx={{
                position: 'relative',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                overflow: 'hidden',
                color: '#fff',

                '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${HomePageBackgroundImage})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    filter: 'grayscale(40%) brightness(60%) blur(4px)',
                    transform: 'scale(1.05)',
                }
            }}
        >
            <Grow
                in={loading}
                mountOnEnter
                unmountOnExit
            >
                <Box sx={{ zIndex: 2 }}>

                    <ParticleSystem />

                    <Typography variant="h3" component="h3" color='yellow'>
                        <GlitchText>[[سهیل ملک پور]]</GlitchText>
                    </Typography>

                    <Typography variant="h5" component="h5" sx={{ textDecoration: 'underline', pt: 2 }}>
                        <ReactTyped
                            strings={[
                                "Full-Stack Developer",
                                "Laravel And React Developer",
                                "Clean Code Enthusiast",
                                "Backend Architect",
                                "Frontend Lover",
                                "API And Database Designer",
                                "Security-Focused Developer",
                                "Problem Solver",
                                "Open Source Contributor",
                                "Building Scalable Web Apps",
                                "Turning Ideas Into Code"
                            ]}
                            typeSpeed={40}
                            backSpeed={40}
                            backDelay={1500}
                            showCursor={false}
                            loop
                        />
                    </Typography>
                </Box>
            </Grow>
        </Box>

    );
};

export default Home;
