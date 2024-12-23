import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Project from './pages/Project';
import NotFound from './pages/NotFound';
import MainLayout from './layouts/MainLayout';

export default function App() {
    return (
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/projects" element={<MainLayout><Projects /></MainLayout>} />
        <Route path="/project/:projectId" element={<MainLayout><Project /></MainLayout>} />
        <Route path="/project/*" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    )
}
