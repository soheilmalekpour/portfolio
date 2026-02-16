import MainLayout from '../layouts/MainLayout';
import Sidebar from '../components/sidebar/Sidebar';
import { useEffect, useState } from 'react';
import Page from '../pages/Page';
import { Typography, useMediaQuery } from '@mui/material';
import SidebarContainer from './SidebarContainer';
import MainContext from './../context';
import PageContainer from './PageContainer';
import { DrawerActionButton } from '../components/drawer';
import { About, Home } from './../pages/'
import Resume from '../pages/Resume';
import Projects from '../pages/Projects';
import Comments from '../pages/Comments';
import SwitchThemeMode from '../components/SwitchThemeMode';
import Contact from '../pages/Contact';

function AppContainer() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [themeMode, setThemeMode] = useState();

  const handlePageNumber = (event, newValue) => {
    setPageNumber(newValue);
  }

  useEffect(() => {
    setThemeMode(prefersDarkMode ? 'dark' : 'light')
  }, [])

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    }
  }, [pageNumber]);

  return (
    <MainContext.Provider
      value={{
        themeMode,
        loading,
        pageNumber,
        handlePageNumber,
        drawerOpen,
        setDrawerOpen
      }}
    >
      <MainLayout>
        <SidebarContainer>
          <Sidebar pageNumber={pageNumber} />
        </SidebarContainer>

        {/* FAB */}
        <DrawerActionButton />

        {/* Switch Theme Mode */}
        <SwitchThemeMode setThemeMode={setThemeMode} />

        <PageContainer>
          <Page pageNumber={pageNumber} index={0}>
            <Home />
          </Page>
          <Page pageNumber={pageNumber} index={1}>
            <About />
          </Page>
          <Page pageNumber={pageNumber} index={2}>
            <Resume />
          </Page>
          <Page pageNumber={pageNumber} index={3}>
            <Projects />
          </Page>
          <Page pageNumber={pageNumber} index={4}>
            <Comments />
          </Page>
          <Page pageNumber={pageNumber} index={5}>
            <Contact />
          </Page>
        </PageContainer>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default AppContainer;
