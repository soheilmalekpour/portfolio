import { createContext } from "react";

export default createContext({
    themeMode: "dark",
    loading: false,
    pageNumber: 0,
    handlePageNumber: 0,
    drawerOpen: false,
    setDrawerOpen: () => { },
});