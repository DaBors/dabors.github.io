import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { getProjectById } from "@/data/projects";
import { TechnologyIcon, hasTechnologyIcon } from "@/components/TechnologyIcon";

export default function ProjectDetail() {
    const { projectId } = useParams<{ projectId: string }>();
    const project = projectId ? getProjectById(projectId) : null;

    if (!project) {
        return <Navigate to="/projects" replace />;
    }

    return (
        <>
            {/* Back button */}
            <div className="mb-6">
                <Button asChild variant="outline" size="sm">
                    <Link to="/projects" className="flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Projects
                    </Link>
                </Button>
            </div>

            {/* Project metadata */}
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>
                        <div className="flex items-center justify-between gap-4 mb-4">
                            <h1 className="text-3xl font-bold text-gray-900">
                                {project.title}
                            </h1>
                            {project.employment && (
                                <div className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                                    Employment
                                </div>
                            )}
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-6 md:grid-cols-2 items-start">
                        {/* Timeline */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-2">
                                Timeline
                            </h3>
                            <div className="flex items-center text-gray-600 min-h-[40px]">
                                <Calendar className="w-4 h-4 mr-2" />
                                <span>
                                    {new Date(
                                        project.startDate
                                    ).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                    })}
                                    {project.endDate
                                        ? ` - ${new Date(
                                              project.endDate
                                          ).toLocaleDateString("en-US", {
                                              year: "numeric",
                                              month: "long",
                                          })}`
                                        : " - Present"}
                                </span>
                            </div>
                        </div>

                        {/* Links */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-2">
                                Links
                            </h3>
                            <div className="flex flex-wrap gap-2 min-h-[40px] items-center">
                                {project.githubUrl && (
                                    <Button asChild variant="outline" size="sm">
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2"
                                        >
                                            <Github className="w-4 h-4" />
                                            Source Code
                                        </a>
                                    </Button>
                                )}

                                {project.website && (
                                    <Button asChild variant="outline" size="sm">
                                        <a
                                            href={project.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            Website
                                        </a>
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Technologies */}
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>Technologies Used</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                        {project.technologies.map((tech) => (
                            <div
                                key={tech}
                                className="group bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 flex items-center justify-center gap-2 text-sm font-medium text-gray-700"
                            >
                                {hasTechnologyIcon(tech) && (
                                    <TechnologyIcon
                                        technology={tech}
                                        size={16}
                                    />
                                )}
                                {tech}
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Project description */}
            <Card>
                <CardHeader>
                    <CardTitle>About This Project</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="prose prose-gray max-w-none">
                        {project.description
                            .split("\n\n")
                            .map((paragraph, index) => {
                                // Handle bullet points
                                if (paragraph.includes("•")) {
                                    const lines = paragraph.split("\n");
                                    const title = lines[0];
                                    const bullets = lines
                                        .slice(1)
                                        .filter((line) =>
                                            line.trim().startsWith("•")
                                        );

                                    return (
                                        <div key={index} className="mb-6">
                                            {title && (
                                                <p className="font-medium mb-3">
                                                    {title}
                                                </p>
                                            )}
                                            <ul className="list-none space-y-2">
                                                {bullets.map(
                                                    (bullet, bulletIndex) => (
                                                        <li
                                                            key={bulletIndex}
                                                            className="flex items-start"
                                                        >
                                                            <span className="text-gray-500 mr-3 mt-1">
                                                                •
                                                            </span>
                                                            <span>
                                                                {bullet
                                                                    .replace(
                                                                        "•",
                                                                        ""
                                                                    )
                                                                    .trim()}
                                                            </span>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    );
                                }

                                // Regular paragraphs
                                return (
                                    <p
                                        key={index}
                                        className="mb-4 leading-relaxed"
                                    >
                                        {paragraph}
                                    </p>
                                );
                            })}
                    </div>
                </CardContent>
            </Card>
        </>
    );
}
