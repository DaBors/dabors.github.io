import { Link } from "react-router-dom";
import { ExternalLink, Github, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { projects } from "@/data/projects";
import { TechnologyIcon, hasTechnologyIcon } from "@/components/TechnologyIcon";

export default function Projects() {
    return (
        <>
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>Projects</CardTitle>
                    <CardDescription>
                        A collection of projects I've worked on, ranging from
                        web3 projects to web applications and enterprise
                        solutions.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
                {projects.map((project) => (
                    <Card
                        key={project.id}
                        className="hover:shadow-lg transition-shadow"
                    >
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <CardTitle className="text-xl mb-2">
                                        <Link
                                            to={`/projects/${project.id}`}
                                            className="hover:text-gray-600 transition-colors"
                                        >
                                            {project.title}
                                        </Link>
                                    </CardTitle>
                                    <CardDescription className="text-base">
                                        {project.shortDescription}
                                    </CardDescription>
                                </div>
                                {project.employment && (
                                    <div className="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded-full ml-4">
                                        Employment
                                    </div>
                                )}
                            </div>
                        </CardHeader>
                        <CardContent>
                            {/* Technologies */}
                            <div className="mb-4">
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies
                                        .slice(0, 6)
                                        .map((tech) => (
                                            <span
                                                key={tech}
                                                className="group bg-gray-100 border border-gray-200 rounded-md px-2 py-1 text-xs font-medium text-gray-700 flex items-center gap-1"
                                            >
                                                {hasTechnologyIcon(tech) && (
                                                    <TechnologyIcon
                                                        technology={tech}
                                                        size={14}
                                                    />
                                                )}
                                                {tech}
                                            </span>
                                        ))}
                                    {project.technologies.length > 6 && (
                                        <span className="bg-gray-100 border border-gray-200 rounded-md px-2 py-1 text-xs font-medium text-gray-700">
                                            +{project.technologies.length - 6}{" "}
                                            more
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Project dates */}
                            <div className="flex items-center text-sm text-gray-500 mb-4">
                                <Calendar className="w-4 h-4 mr-2" />
                                <span>
                                    {new Date(
                                        project.startDate
                                    ).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "short",
                                    })}
                                    {project.endDate
                                        ? ` - ${new Date(
                                              project.endDate
                                          ).toLocaleDateString("en-US", {
                                              year: "numeric",
                                              month: "short",
                                          })}`
                                        : " - Present"}
                                </span>
                            </div>

                            {/* Action buttons */}
                            <div className="flex flex-wrap gap-3">
                                <Button asChild variant="default" size="sm">
                                    <Link to={`/projects/${project.id}`}>
                                        View Details
                                    </Link>
                                </Button>

                                {project.githubUrl && (
                                    <Button asChild variant="outline" size="sm">
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2"
                                        >
                                            <Github className="w-4 h-4" />
                                            Code
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
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Coming soon message */}
            <Card className="mt-8 border-dashed">
                <CardContent className="flex items-center justify-center py-8">
                    <div className="text-center text-gray-500">
                        <p className="text-lg font-medium mb-2">
                            More projects coming soon!
                        </p>
                        <p className="text-sm">
                            I'm still adding more projects to showcase here.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </>
    );
}
