import { Bot, Server, Database, Cloud } from "lucide-react";
import type { Project } from "../types/Project";

export const projects: Project[] = [
  {
    title: "AI-Powered Communication Pipeline",
    description:
      "Built event-driven microservices using Kafka to process dealer-customer call recordings with real-time transcription, summarization, and intent extraction using Azure OpenAI LLMs.",
    technologies: [
      "Java",
      "Apache Kafka",
      "Azure OpenAI",
      "Microservices",
      "Event-Driven Architecture",
      "LLM Integration",
    ],
    features: [
      "Real-time call recording processing with Kafka",
      "AI-powered conversation summarization",
      "Personalized email generation with 50% latency reduction",
      "Centralized Prompt Configuration Platform for LLM routing",
    ],
    icon: <Bot className="w-8 h-8 text-blue-400" />,
    github: "#",
    live: "#",
    company: "Tekion Corp",
  },
  {
    title: "Ferry Booking System",
    description:
      "Led end-to-end development of a new booking vertical for ferry services, including system design, backend development, cross-team integration, and deployment at Tiket.com.",
    technologies: ["Golang", "Domain-Driven Design", "REST APIs", "Microservices", "CRM Integration"],
    features: [
      "Complete system design and architecture",
      "Golang microservice built from scratch",
      "Domain-Driven Design implementation",
      "Frontend APIs and CRM integrations",
    ],
    icon: <Server className="w-8 h-8 text-green-400" />,
    github: "#",
    live: "#",
    company: "Tiket.com",
  },
  {
    title: "High-Performance Order Management API",
    description:
      "Optimized core APIs for Order Management system, achieving 50% response time reduction and improving user experience for millions of transactions at Tiket.com.",
    technologies: ["Golang", "Elasticsearch", "Performance Optimization", "API Design", "Database Tuning"],
    features: [
      "50% response time improvement",
      "Elasticsearch query optimization",
      "50% query volume reduction",
      "40% response latency improvement",
    ],
    icon: <Database className="w-8 h-8 text-purple-400" />,
    github: "#",
    live: "#",
    company: "Tiket.com",
  },
  {
    title: "Cache-Spring Microservice",
    description:
      "Designed and implemented a Spring Boot microservice dedicated to caching data with custom LRU and FIFO eviction policies, demonstrating advanced low-level design expertise.",
    technologies: ["Java", "Spring Boot", "REST APIs", "Custom Caching", "LRU Algorithm", "FIFO Algorithm"],
    features: [
      "Custom LRU eviction policy implementation",
      "FIFO caching strategy",
      "RESTful API services",
      "Advanced caching techniques",
    ],
    icon: <Cloud className="w-8 h-8 text-yellow-400" />,
    github: "https://github.com/shubham1908/cache-spring",
    live: "https://github.com/shubham1908/cache-spring",
    company: "Personal Project",
  },
  {
    title: "Admin Dashboard 3.0",
    description:
      "Architected a modular admin dashboard system to onboard new product verticals with minimal backend changes, enabling scalable business operations at Tiket.com.",
    technologies: ["Golang", "Modular Architecture", "System Design", "Scalable Backend", "Product Integration"],
    features: [
      "Modular system architecture",
      "Minimal backend changes for new verticals",
      "Scalable product onboarding",
      "Comprehensive admin functionality",
    ],
    icon: <Server className="w-8 h-8 text-indigo-400" />,
    github: "#",
    live: "#",
    company: "Tiket.com",
  },
  {
    title: "Discount Engine Optimization",
    description:
      "Improved Discount Engine performance by optimizing Elasticsearch queries, achieving significant performance gains with 50% query volume reduction and 40% latency improvement.",
    technologies: [
      "Elasticsearch",
      "Query Optimization",
      "Performance Tuning",
      "Backend Optimization",
      "System Performance",
    ],
    features: [
      "Elasticsearch query optimization",
      "50% reduction in query volume",
      "40% improvement in response latency",
      "Enhanced system performance",
    ],
    icon: <Database className="w-8 h-8 text-red-400" />,
    github: "#",
    live: "#",
    company: "Tiket.com",
  },
];
