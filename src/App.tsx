import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Project from './pages/Project';
import NotFound from './pages/NotFound';
import MainLayout from './layouts/MainLayout';
import ProjectsLayout from './layouts/ProjectsLayout';
import ProjectLayout from './layouts/ProjectLayout';
import PageTransition from './components/PageTransition';

export default function App() {
  const location = useLocation(); // Récupère la localisation actuelle pour les transitions

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        
        <Route element={<MainLayout />}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/project/*" element={<PageTransition><NotFound /></PageTransition>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>

        <Route element={<ProjectsLayout/>}>
          <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
        </Route>

        <Route element={<ProjectLayout/>}>
          <Route path="/project/:projectId" element={<PageTransition><Project /></PageTransition>} />
        </Route>

      </Routes>
    </AnimatePresence>
  );
}

