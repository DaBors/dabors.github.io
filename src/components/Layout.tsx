import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, FolderOpen, MapPin } from "lucide-react";
import profileImage from "../assets/profile.jpg";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const location = useLocation();

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="relative inline-block mb-6">
                        <img
                            src={profileImage}
                            alt="Profile"
                            className="w-32 h-32 rounded-full object-cover shadow-lg"
                        />
                        <div className="absolute -bottom-0 -right-0 w-8 h-8 bg-green-500 rounded-full border-5 border-white"></div>
                    </div>

                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        Márton Borsos
                    </h1>
                    <p className="text-xl text-gray-600 mb-4">
                        Software Engineer
                    </p>

                    {/* Location */}
                    <div className="flex items-center justify-center text-gray-500 mb-6">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>Stockholm, Sweden</span>
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-center gap-4 mb-6">
                        <Button
                            asChild
                            variant={
                                location.pathname === "/"
                                    ? "default"
                                    : "outline"
                            }
                            className="flex items-center gap-2"
                        >
                            <Link to="/">
                                <Home className="w-4 h-4" />
                                Home
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant={
                                location.pathname.startsWith("/projects")
                                    ? "default"
                                    : "outline"
                            }
                            className="flex items-center gap-2"
                        >
                            <Link to="/projects">
                                <FolderOpen className="w-4 h-4" />
                                Projects
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Page Content */}
                {children}

                {/* Footer */}
                <footer className="text-center mt-12 text-gray-500 text-sm">
                    <p>© 2025 Márton Borsos</p>
                </footer>
            </div>
        </div>
    );
}
