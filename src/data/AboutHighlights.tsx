import { Code, Database, Cloud, Globe } from "lucide-react";
import type { Highlight } from "../types/Highlight";

export const highlights: Highlight[] = [
    {
        icon: <Code className="w-8 h-8 text-blue-400" />,
        title: "Event-Driven Systems",
        description: "Building scalable microservices with Kafka for real-time data processing and transcription.",
    },
    {
        icon: <Database className="w-8 h-8 text-green-400" />,
        title: "Performance Optimization",
        description: "Optimizing APIs and databases, achieving 50% response time improvements at scale.",
    },
    {
        icon: <Cloud className="w-8 h-8 text-purple-400" />,
        title: "AI Integration",
        description: "Implementing AI-powered pipelines with Azure OpenAI for intelligent automation.",
    },
    {
        icon: <Globe className="w-8 h-8 text-yellow-400" />,
        title: "System Architecture",
        description: "Designing distributed systems and microservices using Domain-Driven Design principles.",
    },
];
