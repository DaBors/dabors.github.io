import {
    Go,
    Python,
    TypeScript,
    NodeJs,
    React,
    TailwindCSS,
    FlaskDark,
    GraphQL,
    PostgreSQL,
    MySQL,
    Redis,
    Azure,
    GoogleCloud,
    AWS,
    Docker,
    Kubernetes,
} from "developer-icons";

interface TechnologyIconProps {
    technology: string;
    size?: number;
    className?: string;
}

// Technology to icon mapping
const technologyIconMap: Record<
    string,
    React.ComponentType<{ size?: number; color?: string; className?: string }>
> = {
    // Languages
    Golang: Go,
    Go: Go, // Alternative name for Golang
    TypeScript: TypeScript,
    "Node.js": NodeJs,
    Python: Python,

    // Frontend
    React: React,
    TailwindCSS: TailwindCSS,

    // Backend & Frameworks
    Flask: FlaskDark,
    GraphQL: GraphQL,

    // Databases
    PostgreSQL: PostgreSQL,
    MySQL: MySQL,
    Redis: Redis,
    "Cosmos DB": Azure, // Using Azure icon for Cosmos DB

    // Cloud & Infrastructure
    GCP: GoogleCloud,
    Azure: Azure,
    AWS: AWS,
    Docker: Docker,
    Kubernetes: Kubernetes,

    // Services (using cloud provider icons as fallbacks)
    Lambda: AWS,
    SNS: AWS,
    S3: AWS,
    "Static Web Apps": Azure,
};

// Technologies that don't have icons - we'll just show text for these
const noIconTechnologies = new Set([
    "viem",
    "pandas",
    "sentence-transformers",
    "SQLAlchemy",
]);

export function TechnologyIcon({
    technology,
    size = 16,
    className = "",
}: TechnologyIconProps) {
    const IconComponent = technologyIconMap[technology];

    if (!IconComponent || noIconTechnologies.has(technology)) {
        // Return null if no icon is available - the parent component will handle text-only display
        return null;
    }

    return (
        <IconComponent
            size={size}
            className={`grayscale group-hover:grayscale-0 transition-all duration-300 ${className}`}
        />
    );
}

export function hasTechnologyIcon(technology: string): boolean {
    return (
        technologyIconMap[technology] !== undefined &&
        !noIconTechnologies.has(technology)
    );
}
