import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/Home';
import Villas from './pages/Villas';
import VillaDetail from './pages/VillaDetail';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Contact from './pages/Contact';
import Destinations from './pages/Destinations';

function App() {
  useEffect(() => {
    // Handle redirects from 404.html
    const redirectedPath = sessionStorage.redirect;
    if (redirectedPath) {
      delete sessionStorage.redirect;
      window.history.replaceState(null, null, redirectedPath);
    }
  }, []);

  return (
    <Router basename="/">
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/villas" element={<Villas />} />
            <Route path="/villas/:id" element={<VillaDetail />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;