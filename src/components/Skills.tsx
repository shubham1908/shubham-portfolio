import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Code, Database, Cloud, Wrench, Trophy, Star } from 'lucide-react';

// ==================== CONSTANTS & DATA ====================

const SKILL_CATEGORIES = [
  {
    title: "Programming Languages",
    icon: <Code className="w-8 h-8" />,
    color: "from-slate-200 to-slate-500", 
    skills: [
      { name: "Java", level: 95 },
      { name: "Python", level: 90 },
      { name: "Go/Golang", level: 85 },
      { name: "C++", level: 80 },
      { name: "C", level: 75 },
      { name: "SQL", level: 90 }
    ]
  },
  {
    title: "Frameworks & Libraries",
    icon: <Wrench className="w-8 h-8" />,
    color: "from-slate-200 to-slate-500",
    skills: [
      { name: "Spring Boot", level: 95 },
      { name: "FastAPI", level: 85 },
      { name: "REST APIs", level: 95 },
      { name: "gRPC", level: 80 },
      { name: "Kafka", level: 90 },
      { name: "Microservices", level: 95 }
    ]
  },
  {
    title: "Databases & Storage",
    icon: <Database className="w-8 h-8" />,
    color: "from-slate-200 to-slate-500",
    skills: [
      { name: "MongoDB", level: 90 },
      { name: "Redis", level: 85 },
      { name: "Elasticsearch", level: 90 },
      { name: "AWS S3", level: 80 },
      { name: "Google Cloud Storage", level: 75 },
      { name: "Database Optimization", level: 95 }
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-8 h-8" />,
    color: "from-slate-200 to-slate-500", 
    skills: [
      { name: "AWS", level: 85 },
      { name: "Google Cloud Platform", level: 80 },
      { name: "Azure", level: 85 },
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 80 },
      { name: "CI/CD", level: 90 }
    ]
  }
];


const ACHIEVEMENTS = [
  { title: "Top 2%", subtitle: "LeetCode Global", detail: "Rating: 2069 (Highest: 2152)", color: "from-yellow-400 to-amber-400" },
  { title: "Top 200", subtitle: "CodeChef", detail: "2022-23", color: "from-blue-400 to-sky-400" },
  { title: "Rank 20", subtitle: "Cook-Off", detail: "April 2021", color: "from-emerald-400 to-green-400" }
];

const CORE_COMPETENCIES = [
  "Microservices Architecture", 
  "API Development", 
  "Event-Driven Systems", 
  "Database Optimization", 
  "Cloud Computing", 
  "Performance Tuning"
];

const TECH_TOOLS = [
  "Apache Kafka", 
  "Git", 
  "Docker", 
  "Kubernetes", 
  "Linux", 
  "Azure OpenAI", 
  "SonarQube", 
  "DDD"
];

// Configuration Constants
const CAROUSEL_AUTO_ADVANCE_DELAY = 4000; // milliseconds
const ANIMATION_DURATION = 500; // milliseconds

// Section Configuration
const SECTION_CONFIG = {
  header: {
    title: "Technical Skills",
    subtitle: "Expertise across modern tech stack with focus on scalable backend systems"
  },
  competencies: {
    title: "Core Competencies",
    icon: Star
  },
  achievements: {
    title: "Achievements", 
    icon: Trophy
  }
};

// ==================== INTERFACES ====================

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: Skill[];
}

interface Achievement {
  title: string;
  subtitle: string;
  detail: string;
  color: string;
}

interface SkillCardProps {
  skill: Skill;
  categoryColor: string;
  isActive: boolean;
  skillIndex: number;
}

interface CategoryHeaderProps {
  category: SkillCategory;
}

interface NavigationButtonProps {
  direction: 'prev' | 'next';
  onClick: () => void;
  disabled: boolean;
}

interface SlideIndicatorProps {
  isActive: boolean;
  onClick: () => void;
}

interface CarouselProps {
  categories: SkillCategory[];
  activeSlide: number;
  onSlideChange: (index: number) => void;
  isAnimating: boolean;
}

interface CompetencyCardProps {
  competency: string;
  index: number;
}

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

interface TechStackProps {
  tools: string[];
}

// ==================== COMPONENTS ====================

const SkillCard: React.FC<SkillCardProps> = ({ skill, categoryColor, isActive, skillIndex }) => (
  <div className="bg-gray-800/40 p-5 rounded-lg hover:bg-gray-800/60 transition-all duration-300 group border border-gray-700/40 hover:border-gray-600/60">
    <div className="flex justify-between items-center mb-3">
      <span className="text-gray-200 font-medium group-hover:text-white transition-colors">
        {skill.name}
      </span>
      <span className="text-gray-400 text-sm px-2 py-1 bg-gray-700/50 rounded">
        {skill.level}%
      </span>
    </div>
    
    <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
      <div
        className={`h-full bg-gradient-to-r ${categoryColor} rounded-full transition-all duration-1000 ease-out`}
        style={{ 
          width: isActive ? `${skill.level}%` : '0%',
          transitionDelay: isActive ? `${skillIndex * 100}ms` : '0ms'
        }}
      />
    </div>
  </div>
);

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ category }) => (
  <div className="flex items-center justify-center mb-8">
    <div className="p-3 rounded-xl bg-gray-700/40 text-gray-300 mr-4 border border-gray-600/30">
      {category.icon}
    </div>
    <div>
      <h3 className="text-2xl font-semibold text-gray-100">{category.title}</h3>
      <div className="w-12 h-0.5 bg-gray-500 rounded-full mt-1" />
    </div>
  </div>
);

const NavigationButton: React.FC<NavigationButtonProps> = ({ direction, onClick, disabled }) => {
  const Icon = direction === 'prev' ? ChevronLeft : ChevronRight;
  const positionClass = direction === 'prev' ? '-left-4' : '-right-4';
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`absolute ${positionClass} top-1/2 -translate-y-1/2 p-3 rounded-xl bg-gray-800/60 backdrop-blur-sm border border-gray-600/40 text-gray-300 hover:bg-gray-700/60 hover:text-white transition-all duration-300 disabled:opacity-50 shadow-lg`}
    >
      <Icon className="w-5 h-5" />
    </button>
  );
};

const SlideIndicator: React.FC<SlideIndicatorProps> = ({ isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`w-3 h-3 rounded-full transition-all duration-300 ${
      isActive ? 'bg-gray-400 scale-125' : 'bg-gray-600 hover:bg-gray-500'
    }`}
  />
);

const SkillsCarousel: React.FC<CarouselProps> = ({ categories, activeSlide, onSlideChange, isAnimating }) => (
  <div className="relative mb-12">
    <div className="overflow-hidden rounded-2xl bg-gray-800/20 backdrop-blur-md border border-gray-700/30 shadow-xl relative">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/3 via-transparent to-purple-500/3 pointer-events-none" />
      
      <div 
        className="flex transition-all duration-600 ease-out"
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        {categories.map((category, index) => (
          <div key={index} className="w-full flex-shrink-0 p-8 relative">
            <CategoryHeader category={category} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {category.skills.map((skill, skillIndex) => (
                <SkillCard
                  key={skillIndex}
                  skill={skill}
                  categoryColor={category.color}
                  isActive={activeSlide === index}
                  skillIndex={skillIndex}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <NavigationButton 
      direction="prev" 
      onClick={() => onSlideChange((activeSlide - 1 + categories.length) % categories.length)}
      disabled={isAnimating}
    />
    <NavigationButton 
      direction="next" 
      onClick={() => onSlideChange((activeSlide + 1) % categories.length)}
      disabled={isAnimating}
    />

    <div className="flex justify-center mt-6 space-x-3">
      {categories.map((_, index) => (
        <SlideIndicator
          key={index}
          isActive={activeSlide === index}
          onClick={() => !isAnimating && onSlideChange(index)}
        />
      ))}
    </div>
  </div>
);

const CompetencyCard: React.FC<CompetencyCardProps> = ({ competency, index }) => (
  <div
    className="flex items-center p-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-400/40 transition-all duration-300"
    style={{animationDelay: `${index * 50}ms`}}
  >
    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-3 flex-shrink-0" />
    <span className="text-gray-200 text-sm font-medium">{competency}</span>
  </div>
);

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement, index }) => (
  <div
    className="p-4 rounded-lg bg-gray-800/50 border border-gray-600/50 hover:scale-105 transition-all duration-300 text-center"
    style={{animationDelay: `${index * 200}ms`}}
  >
    <div className={`text-2xl font-bold mb-2 bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
      {achievement.title}
    </div>
    <div className="text-gray-300 text-sm mb-1">{achievement.subtitle}</div>
    <div className="text-white font-semibold">{achievement.detail}</div>
  </div>
);

const TechStack: React.FC<TechStackProps> = ({ tools }) => (
  <div className="text-center">
    <div className="flex flex-wrap justify-center gap-2">
      {tools.map((tool, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-xs border border-gray-600/50 hover:border-blue-400/50 hover:text-blue-400 hover:bg-gray-700/50 transition-all duration-300 cursor-pointer transform hover:scale-105"
          style={{
            animationDelay: `${index * 50}ms`,
            animation: 'fadeInUp 0.5s ease-out forwards'
          }}
        >
          {tool}
        </span>
      ))}
    </div>
  </div>
);

// ==================== MAIN COMPONENT ====================

const Skills: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleSlideChange = useCallback((newIndex: number) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveSlide(newIndex);
      setTimeout(() => setIsAnimating(false), ANIMATION_DURATION);
    }
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    handleSlideChange((activeSlide + 1) % SKILL_CATEGORIES.length);
  }, [activeSlide, handleSlideChange]);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, CAROUSEL_AUTO_ADVANCE_DELAY);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">{SECTION_CONFIG.header.title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            {SECTION_CONFIG.header.subtitle}
          </p>
        </div>

        <SkillsCarousel 
          categories={SKILL_CATEGORIES}
          activeSlide={activeSlide}
          onSlideChange={handleSlideChange}
          isAnimating={isAnimating}
        />

        {/* Core Competencies */}
        <div className="mb-8">
          <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
            <div className="flex items-center justify-center mb-6">
              <SECTION_CONFIG.competencies.icon className="w-6 h-6 text-blue-400 mr-3" />
              <h3 className="text-xl font-bold text-white">{SECTION_CONFIG.competencies.title}</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {CORE_COMPETENCIES.map((competency, index) => (
                <CompetencyCard key={index} competency={competency} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-8">
          <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
            <div className="flex items-center justify-center mb-6">
              <SECTION_CONFIG.achievements.icon className="w-6 h-6 text-gray-400 mr-3" />
              <h3 className="text-xl font-bold text-white">{SECTION_CONFIG.achievements.title}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {ACHIEVEMENTS.map((achievement, index) => (
                <AchievementCard key={index} achievement={achievement} index={index} />
              ))}
            </div>
          </div>
        </div>

        <TechStack tools={TECH_TOOLS} />
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;