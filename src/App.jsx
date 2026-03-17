import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ProjectPage = lazy(() => import('./pages/ProjectPage'));

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  return (
    
    <NeuralNetworkBG >
    <ScrollToTop />
    <div className="min-h-screen ">
      <Header />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Projects />
                <Contact />
              </>
            } />
            <Route path="/project/:id" element={<ProjectPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      <Footer />
    </div>
    </NeuralNetworkBG >
  );
}

export default App;