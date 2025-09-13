import type { Experience } from "../types/Experience";

export const experiences: Experience[] = [
        {
            title: "Tekion Corp",
            company: "Software Engineer",
            location: "Bangalore, India",
            period: "July 2024 – Present",
            description: [
                "Built event-driven backend microservices with Kafka to process dealer-customer call recordings, enabling real-time transcription, summarization, and intent extraction",
                "Developed AI-powered communication pipelines using Azure OpenAI LLMs to summarize customer conversations and generate personalized emails, reducing email generation latency by 50%",
                "Designed a pre-aggregation pipeline to refresh daily summaries of dealer-customer interactions, balancing trade-offs between performance and personalization",
                "Created a centralized Prompt Configuration Platform Service for LLM routing, supporting quota-based access control and traffic shaping for each dealer/project"
            ],
            technologies: ["Java", "Kafka", "Azure OpenAI", "Microservices", "Event-Driven Architecture", "LLM Integration"]
        },
        {
            title: "Tiket.com",
            company: "Software Engineer",
            location: "Noida, India (Remote)",
            period: "July 2022 – July 2024",
            description: [
                "Led the Ferry Booking System project — responsible for system design, backend development, cross-team integration, and end-to-end deployment of a new booking vertical",
                "Optimized core APIs for Order Management, reducing response times by 50% and improving UX for millions of transactions",
                "Designed and built a Golang microservice from scratch using Domain-Driven Design to power frontend APIs and CRM integrations, ensuring modular and scalable architecture",
                "Championed CI/CD improvements by integrating SonarQube and comprehensive unit testing, increasing backend service test coverage to 98%",
                "Improved Discount Engine performance by optimizing Elasticsearch queries, cutting query volume by 50% and response latency by 40%",
                "Architected Admin Dashboard 3.0, building a modular system to onboard new product verticals with minimal backend changes"
            ],
            technologies: ["Golang", "Domain-Driven Design", "Elasticsearch", "SonarQube", "CI/CD", "REST APIs", "Microservices"]
        }
    ];