
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import CosmicBackground from "../components/CosmicBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen cosmic-bg flex flex-col items-center justify-center">
      <CosmicBackground />
      <div className="glass-card p-12 max-w-lg w-full text-center">
        <h1 className="text-7xl font-bold mb-4 text-cosmic-accent">404</h1>
        <p className="text-xl text-cosmic-text mb-8">The page you're looking for doesn't exist in this universe.</p>
        <Link to="/" className="btn-primary inline-block">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
