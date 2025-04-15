import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import LoadingSpinner from './LoadingSpinner';
import './App.css';

// Lazy-loaded components with explicit webpack chunk names
const About = lazy(() => import(/* webpackChunkName: "about" */ './components/about/about'));
const Home = lazy(() => import(/* webpackChunkName: "home" */ './components/home/home'));
const Umkho = lazy(() => import(/* webpackChunkName: "umkhokha" */ './components/content/umkhokha'));
const Lami = lazy(() => import(/* webpackChunkName: "dlozilami" */ './components/content/dlozilami'));
const Rea = lazy(() => import(/* webpackChunkName: "reastotela" */ './components/content/reastotela'));
const Skeem = lazy(() => import(/* webpackChunkName: "skeemsam" */ './components/content/skeemsam'));
const Repo = lazy(() => import(/* webpackChunkName: "xrepo" */ './components/content/xrepo'));
const Sizo = lazy(() => import(/* webpackChunkName: "sizokthola" */ './components/content/sizokthola'));

// O(1) lookup for excluded paths
const excludedHeaderPaths = new Set([
  "/about", "/umkhokha", "/sizokthola", "/xrepo", 
  "/reastotela", "/dlozilami", "/skeemsam", "/download"
]);

function App() {
  const location = useLocation();
  const showHeader = !excludedHeaderPaths.has(location.pathname);

  return (
    <div className="container">
      {showHeader && <Header />}
      <Navbar />
      
      <Suspense fallback={<LoadingSpinner />}>
        <Routes future={{ v7_startTransition: true }}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/umkhokha" element={<Umkho />} />
          <Route path="/skeemsam" element={<Skeem />} />
          <Route path="/xrepo" element={<Repo />} />
          <Route path="/reastotela" element={<Rea />} />
          <Route path="/dlozilami" element={<Lami />} />
          <Route path="/sizokthola" element={<Sizo />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;