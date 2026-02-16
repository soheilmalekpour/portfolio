import { Box, Fab } from "@mui/material";
import { motion } from "framer-motion";
import { useContext } from "react";
import { FaBars } from "react-icons/fa";
import MainContext from './../../context'
import { red } from "@mui/material/colors";

const DrawerActionButton = () => {
    const { setDrawerOpen } = useContext(MainContext);

    return (
        <Box
            sx={{
                position: "fixed",
                top: 20,
                left: 20,
                zIndex: 1100,
                display: {
                    xl: 'none',
                    lg: 'none',
                    md: 'none',
                    sm: "block",
                    xs: "block",
                }
            }}
        >
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{ display: "inline-block" }}
            >
                <Fab
                    aria-label="منو"
                    size="medium"
                    onClick={() => setDrawerOpen(true)}
                    sx={{
                        background: red[500],
                        color: "white",
                        boxShadow: `0 8px 32px ${red[500]}`,
                        "&:hover": {
                            background: red[400],
                        }
                    }}
                >
                    <FaBars size={20} />
                </Fab>
            </motion.div>
        </Box>
    );
}

export default DrawerActionButton;