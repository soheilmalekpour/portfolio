import { CacheProvider, ThemeProvider } from "@emotion/react";
import { CacheRTL, DarkTheme, LightTheme } from "./Theme";
import { Grid } from "@mui/material";
import { useContext } from "react";
import MyContext from './../context';

const MainLayout = ({ children }) => {
    const { themeMode } = useContext(MyContext);

    const theme = themeMode == 'light' ? LightTheme : DarkTheme;

    return (
        <CacheProvider value={CacheRTL}>
            <ThemeProvider theme={theme}>
                <Grid container sx={{ height: "100vh" }}>
                    {children}
                </Grid>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default MainLayout;