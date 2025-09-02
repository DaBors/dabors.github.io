import { Calendar, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function Home() {
    return (
        <>
            {/* Location */}
            <div className="flex items-center justify-center text-gray-500 mb-6">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Stockholm, Sweden</span>
            </div>

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
                                        className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 text-center text-sm font-medium text-blue-700"
                                    >
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
                                        className="bg-green-50 border border-green-200 rounded-lg px-3 py-2 text-center text-sm font-medium text-green-700"
                                    >
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
                                {["Docker", "CI/CD"].map((skill) => (
                                    <div
                                        key={skill}
                                        className="bg-purple-50 border border-purple-200 rounded-lg px-3 py-2 text-center text-sm font-medium text-purple-700"
                                    >
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
                                        className="bg-orange-50 border border-orange-200 rounded-lg px-3 py-2 text-center text-sm font-medium text-orange-700"
                                    >
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
                            asChild
                            variant="outline"
                            className="flex items-center gap-2 !bg-green-400"
                        >
                            <a
                                href="https://calendly.com/martonborsos/1-1-call"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Calendar className="w-4 h-4" />
                                Schedule a Meeting
                            </a>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </>
    );
}
