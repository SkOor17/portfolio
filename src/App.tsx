import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Project from './pages/Project';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/project/:projectId" element={<Project />} />
      <Route path="/project/*" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
