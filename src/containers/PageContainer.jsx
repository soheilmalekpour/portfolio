import { Grid } from "@mui/material";

const PageContainer = ({ children }) => {
    return (
        <Grid size={{ lg: 10, md: 9, xs: 12 }} sx={{ backgroundColor: "secondary.main" }}>
            {children}
        </Grid>
    );
}

export default PageContainer;