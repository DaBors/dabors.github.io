import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import profileImage from "./assets/profile.jpg";

export default function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="relative inline-block mb-6">
                        <img
                            src={profileImage}
                            alt="Profile"
                            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                        />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
                    </div>

                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        Márton Borsos
                    </h1>
                    <p className="text-xl text-gray-600 mb-4">
                        Software Engineer
                    </p>
                    <div className="flex items-center justify-center text-gray-500 mb-6">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>Stockholm, Sweden</span>
                    </div>
                </div>

                {/* About Section */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>About Me</CardTitle>
                        <CardDescription>
                            Passionate about building scalable backend systems
                            and web3 integrations. I focus on solving meaningful
                            problems and using technology for social and
                            environmental impact.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-700 leading-relaxed">
                            I'm a software engineer with 7+ years of experience,
                            currently working at Staking Rewards as a Senior
                            Software Engineer. My work has spanned backend
                            development, web3 integrations, and leading
                            technical projects at startups like yayloh, where I
                            served as Tech Lead. I specialize in building
                            robust, clean systems with hands-on experience in
                            Python, Go, Node.js, TypeScript, and blockchain
                            technologies and staking protocols. I'm motivated by
                            projects with purpose — whether in sustainability,
                            social impact, or open collaboration. Outside of
                            work, I volunteer on initiatives like AFRI, and I'm
                            always exploring how technology can drive
                            sustainability, creativity, and positive impact.
                        </p>
                    </CardContent>
                </Card>

                {/* Skills Section */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Skills & Technologies</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                "Go",
                                "TypeScript",
                                "Python",
                                "Node.js",
                                "AWS",
                                "GCP",
                                "Azure",
                                "Docker",
                                "CI/CD",
                                "PostgreSQL",
                                "GraphQL",
                            ].map((skill) => (
                                <div
                                    key={skill}
                                    className="bg-slate-100 rounded-lg px-3 py-2 text-center text-sm font-medium text-gray-700"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Contact & Social Links */}
                <Card>
                    <CardHeader>
                        <CardTitle>Let's Connect</CardTitle>
                        <CardDescription>
                            Feel free to reach out for collaborations,
                            opportunities, or just to say hello!
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-4">
                            <Button
                                asChild
                                variant="outline"
                                className="flex items-center gap-2"
                            >
                                <a
                                    href="https://github.com/dabors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github className="w-4 h-4" />
                                    GitHub
                                </a>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                className="flex items-center gap-2"
                            >
                                <a
                                    href="https://www.linkedin.com/in/martonborsos"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Linkedin className="w-4 h-4" />
                                    LinkedIn
                                </a>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                className="flex items-center gap-2"
                            >
                                <a href="mailto:borsos.marton95@gmail.com">
                                    <Mail className="w-4 h-4" />
                                    Email
                                </a>
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Footer */}
                <footer className="text-center mt-12 text-gray-500 text-sm">
                    <p>© 2025 Márton Borsos</p>
                </footer>
            </div>
        </div>
    );
}
