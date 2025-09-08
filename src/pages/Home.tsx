import { Calendar, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { TechnologyIcon, hasTechnologyIcon } from "@/components/TechnologyIcon";

// TypeScript declaration for Calendly
declare global {
    interface Window {
        Calendly?: {
            initPopupWidget: (options: { url: string }) => void;
        };
    }
}

export default function Home() {
    return (
        <>
            {/* About Section */}
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>About Me</CardTitle>
                    <CardDescription>
                        Passionate about building scalable backend systems and
                        web3 integrations. I focus on solving meaningful
                        problems and using technology for social and
                        environmental impact.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-700 leading-relaxed">
                        I'm a software engineer with 7+ years of experience,
                        currently working at Staking Rewards as a Senior
                        Software Engineer. My work has spanned backend
                        development, web3 integrations, and leading technical
                        projects at startups. I specialize in building robust,
                        clean systems with hands-on experience in Go, Node.js,
                        TypeScript, Python, blockchain technologies and staking
                        protocols. I'm motivated by projects with purpose,
                        whether in sustainability, social impact, or open
                        collaboration. Outside of work, I volunteer on
                        initiatives like AFRI, and I'm always exploring how
                        technology can drive sustainability, creativity, and
                        positive impact.
                    </p>
                </CardContent>
            </Card>

            {/* Skills Section */}
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>Skills & Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {/* Languages */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                Languages
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                {["Go", "TypeScript", "Python"].map((skill) => (
                                    <div
                                        key={skill}
                                        className="group bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 flex items-center justify-center gap-2 text-sm font-medium text-gray-700"
                                    >
                                        {hasTechnologyIcon(skill) && (
                                            <TechnologyIcon
                                                technology={skill}
                                                size={16}
                                            />
                                        )}
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Cloud Platforms */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                Cloud Platforms
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                {["AWS", "GCP", "Azure"].map((skill) => (
                                    <div
                                        key={skill}
                                        className="group bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 flex items-center justify-center gap-2 text-sm font-medium text-gray-700"
                                    >
                                        {hasTechnologyIcon(skill) && (
                                            <TechnologyIcon
                                                technology={skill}
                                                size={16}
                                            />
                                        )}
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tools & DevOps */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                Tools & DevOps
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                {["Docker", "Kubernetes"].map((skill) => (
                                    <div
                                        key={skill}
                                        className="group bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 flex items-center justify-center gap-2 text-sm font-medium text-gray-700"
                                    >
                                        {hasTechnologyIcon(skill) && (
                                            <TechnologyIcon
                                                technology={skill}
                                                size={16}
                                            />
                                        )}
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Databases & APIs */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                Databases & APIs
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                {["PostgreSQL", "GraphQL"].map((skill) => (
                                    <div
                                        key={skill}
                                        className="group bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 flex items-center justify-center gap-2 text-sm font-medium text-gray-700"
                                    >
                                        {hasTechnologyIcon(skill) && (
                                            <TechnologyIcon
                                                technology={skill}
                                                size={16}
                                            />
                                        )}
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
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

                        {/* Calendar Button */}
                        <Button
                            // variant="outline"
                            // className="flex items-center gap-2 !bg-green-400"
                            variant="default"
                            onClick={() => {
                                if (window.Calendly) {
                                    window.Calendly.initPopupWidget({
                                        url: "https://calendly.com/martonborsos/1-1-call",
                                    });
                                }
                            }}
                        >
                            <Calendar className="w-4 h-4" />
                            Schedule a Meeting
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </>
    );
}
