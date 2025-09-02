import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import ProjectDetail from "@/pages/ProjectDetail";

export default function App() {
    const [isHandlingRedirect, setIsHandlingRedirect] = useState(true);

    useEffect(() => {
        // Check for redirect parameter from GitHub Pages 404 handling
        const urlParams = new URLSearchParams(window.location.search);
        const redirectPath = urlParams.get("redirect");

        if (redirectPath) {
            // Clean up the URL by removing the redirect parameter and navigate to the correct path
            const cleanPath = decodeURIComponent(redirectPath);
            const newUrl = window.location.origin + cleanPath;
            window.history.replaceState({}, "", newUrl);
        }

        // Always set to false to render the app
        setIsHandlingRedirect(false);
    }, []);

    // Show loading spinner while handling the redirect
    if (isHandlingRedirect) {
        return <></>;
    }

    return (
        <Router>
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
