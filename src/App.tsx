import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate,
} from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import ProjectDetail from "@/pages/ProjectDetail";

function RedirectHandler() {
    const navigate = useNavigate();

    useEffect(() => {
        // Check for redirect parameter from GitHub Pages 404 handling
        const urlParams = new URLSearchParams(window.location.search);
        const redirectPath = urlParams.get("redirect");

        if (redirectPath) {
            // Clean up the URL by removing the redirect parameter
            const cleanPath = decodeURIComponent(redirectPath);
            window.history.replaceState({}, "", cleanPath);
            navigate(cleanPath, { replace: true });
        }
    }, [navigate]);

    return null;
}

export default function App() {
    return (
        <Router>
            <RedirectHandler />
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route
                        path="/projects/:projectId"
                        element={<ProjectDetail />}
                    />
                </Routes>
            </Layout>
        </Router>
    );
}
