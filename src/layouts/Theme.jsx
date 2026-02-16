import { createTheme } from "@mui/material";
import createCache from '@emotion/cache';
import { prefixer } from "stylis";
import rtlPlugin from '@mui/stylis-plugin-rtl';

export const DarkTheme = createTheme({
    direction: "rtl",
    palette: {
        mode: "dark"
    },
    typography: {
        fontFamily: "Vazir, Roboto"
    },
});

export const LightTheme = createTheme({
    direction: "rtl",
    palette: {
        mode: "light"
    },
    typography: {
        fontFamily: "Vazir, Roboto"
    },
});


export const CacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin]
});