import { createContext, useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import WorkProcess from "./components/WorkProcess";
import CaseStudies from "./components/CaseStudies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useTheme } from "./hooks/useTheme";
import { Loader } from "./components/Loader";

export const ThemeContext = createContext(null);

export function useThemeContext() {
  return useContext(ThemeContext);
}

export default function App() {
  const themeState = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      const handleLoad = () => setLoading(false);
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <ThemeContext.Provider value={themeState}>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="min-h-screen bg-(--color-bg)" >
        <div
        className="fixed inset-0 opacity-[0.04] pointer-events-none "
        style={{
          backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Navbar />
        <div>
          <main id="main-content">
            <Hero />
            <About />
            <Experience />
            <WorkProcess />
            <CaseStudies />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
