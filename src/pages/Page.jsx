import { Box } from "@mui/material";

const Page = (props) => {
    const { children, pageNumber, index, ...others } = props;

    return (
        <div
            role="tabpanel"
            hidden={pageNumber != index}
            id={`tabpanel-${index}`}
            sx={{ overflow: 'scroll' }}
            aria-label={`sidebar-tab-${index}`}
            {...others}
        >
            {pageNumber === index && (
                <Box sx={{ height: "100vh", overflow: "scroll" }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

export default Page;