import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Project from './pages/Project';
import NotFound from './pages/NotFound';
import MainLayout from './layouts/MainLayout';

export default function App() {
    return (
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:projectId" element={<Project />} />
          <Route path="/project/*" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    )
}
