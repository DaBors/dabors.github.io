export interface Project {
    id: string;
    title: string;
    description: string;
    shortDescription: string;
    technologies: string[];
    githubUrl?: string;
    website?: string;
    imageUrl?: string;
    employment: boolean;
    startDate: string;
    endDate?: string;
}

export const projects: Project[] = [
    {
        id: "staking-rewards",
        title: "Staking Rewards",
        shortDescription:
            "Built and maintained the staking infrastructure powering Staking Rewards’ products, enabling seamless crypto staking, real-time reward tracking, and blockchain data services for thousands of users.",
        description: `At Staking Rewards, I led the development of a cross-chain staking integration library and contributed to the backend services that provide reliable staking and reward data to our users. The core staking library, written in Node.js and TypeScript, allows users to stake assets such as Ethereum, Cosmos, Bitcoin, and Starknet directly through the company’s staking portal.
            In addition, I maintained and expanded our Golang-based GraphQL API and blockchain indexers running on GCP. These services ingest on-chain data, process transactions, and calculate rewards, ensuring accuracy and transparency for end users. I also worked on expanding our domain-specific language (DSL) used by internal crypto researchers, enabling them to analyze protocols and assets more efficiently.

            Key features:
            • Staking integration library: Unified framework for staking across Ethereum, Cosmos, Bitcoin, and Starknet with support for multiple wallets and SDKs.
            • Blockchain indexers: Golang services deployed on GCP Kubernetes clusters that process on-chain transactions to provide accurate, real-time reward data.
            • GraphQL API: Maintained and scaled a Golang-based API delivering staking and blockchain data to frontend applications.
            • Research DSL: Expanded TypeScript libraries to support crypto researchers in analyzing networks and assets.
            • Cloud-native deployment: Infrastructure hosted on GCP with Kubernetes, Postgres, monitoring, and automated CI/CD via GitHub Actions.
            • Secure smart contract interactions: Integrated with smart contracts through viem, web3.js, starknet.js, and cosmjs.
        `,
        technologies: [
            "Golang",
            "TypeScript",
            "Node.js",
            "gRPC",
            "viem",
            "GCP",
            "PostgreSQL",
            "GraphQL",
            "Docker",
            "Kubernetes",
            "Redis",
        ],
        website: "https://stakingrewards.com",
        employment: true,
        startDate: "2023-08",
        endDate: undefined,
    },
    {
        id: "state-agricultural-legislation-search",
        title: "State Agricultural Legislation Search",
        shortDescription:
            "Serverless state agricultural legislation search platform with semantic keyword expansion.",
        description: `Designed and implemented a scalable search and exploration platform for U.S. state-level agricultural legislation as part of the AFRI research project. The system ingests ~20GB of legislative data stored in CSV and PDF formats and makes it fully searchable through a lightweight serverless backend and modern web interface.

            Key features:
            • Data ingestion pipeline: Converted 20GB+ of raw CSV files into structured JSON documents and uploaded to a partitioned, indexed Cosmos DB instance for fast retrieval.
            • Keyword search with semantic expansion: Implemented embeddings-based search (using all-MiniLM-L6-v2) to extend queries with semantically related terms (e.g., “fish” → “fisheries, seafood, shrimp”), with configurable thresholds.
            • Hierarchical filtering: Supports filtering by state, year range, and keywords, with relevance-based ranking.
            • PDF hosting integration: Automatically links legislative acts to their associated PDF documents stored in Azure Blob Storage.
            • Serverless backend: REST API built with Azure Functions (consumption plan) to minimize costs while scaling with usage.
            • Optimized query performance: Restructured data schema and indexing strategy to reduce query latency for large datasets.
            • Modern frontend UI: Responsive static web app with keyword selection, infinite scrolling, auto-search on parameter change, and dark mode support.
            • User experience improvements: Semantic expansion toggle, similarity threshold slider, and automatic query pagination for smooth exploration.
            • Cost-optimized architecture: Entire solution runs on serverless Azure components (Cosmos DB Serverless, Functions, Blob Storage, and Static Web Apps), ensuring pay-per-use billing suitable for low-to-medium traffic.
        `,
        technologies: [
            "TypeScript",
            "React",
            "TailwindCSS",
            "Python",
            "pandas",
            "sentence-transformers",
            "Azure",
            "Cosmos DB",
            "Static Web Apps",
        ],
        githubUrl: "https://github.com/UCSC-UMN-AFRI/website",
        website: "https://stateaglaws.org",
        employment: false,
        startDate: "2025-02",
        endDate: "2025-07",
    },
    {
        id: "yayloh",
        title: "Yayloh",
        shortDescription:
            "Shaped the architecture of yayloh's returns management system, creating a seamless and automated customer experience that helps fashion brands retain revenue and improve operational efficiency.",
        description: `As yayloh's first employee, I played a key role in designing and implementing a microservices-based platform dedicated to transforming returns for fashion brands. The platform provides a fully branded, self-service digital return flow from submission to shipping label generation and tracking, while also automating refunds, exchanges, and analytics. I worked on backend services that integrated with Shopify and other e-commerce tools, enabling customizable workflows, multi-carrier support, and actionable insights that help merchants optimize return operations and increase retention.

            Key features:
            • Branded return flow: Responsive, CSS-customizable digital return form and tracking portal that reduces customer confusion and inquiries.
            • Automated logistics: Generation of shipping labels, automated notifications, and tracking updates with support for multiple carriers and international routing.
            • Intelligent automation rules: Configurable workflows for return windows, refunds, fees, exchanges, and store credits.
            • Data-driven insights: Dashboards and analytics tools with metrics on return rates, reasons, customer feedback, and retention.
            • Omnichannel and integrations: Support for online and in-store returns, with integrations for Shopify, Zendesk, Klaviyo, Ongoing WMS, and others via APIs and webhooks.
        `,
        technologies: [
            "Python",
            "Flask",
            "SQLAlchemy",
            "AWS",
            "Lambda",
            "SNS",
            "S3",
            "MySQL",
        ],
        employment: true,
        website: "https://yayloh.com",
        startDate: "2020-06",
        endDate: "2023-07",
    },
];

export const getProjectById = (id: string) =>
    projects.find((project) => project.id === id);
