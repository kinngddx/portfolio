import { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Calendar, 
  Award, 
  Phone, 
  Twitter, 
  ExternalLink 
} from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    {
      title: "NyayaFlow – AI-Powered Court Management System",
      date: "January 2026",
      description: "A full-stack platform to automate court scheduling via an AI engine that prioritizes cases based on severity and urgency.",
      tech: ["Next.js 15", "TypeScript", "Prisma", "Supabase", "Tailwind CSS", "Recharts", "Greedy Algorithms"],
      highlights: [
        "Integrated a Greedy Scheduling Algorithm to optimize judge workloads and automated re-assignment",
        "Built an interactive analytics dashboard using Recharts to visualize case clearance rates",
        "Developed dynamic redistribution systems for judge unavailability"
      ],
      github: "https://github.com/kinngddx", // Replace with specific repo if available
      live: "https://court-case-schedulling-system-g4jj.vercel.app/dashboard"
    },
    {
      title: "Mystery Message – Anonymous Messaging Platform",
      date: "December 2026",
      description: "Full-stack anonymous messaging platform with AI-driven message suggestions and secure authentication.",
      tech: ["Next.js 16", "TypeScript", "MongoDB", "NextAuth.js", "Tailwind CSS", "React Hook Form", "Resend API"],
      highlights: [
        "Integrated Google Gemini AI to provide intelligent message suggestions and real-time feedback",
        "Implemented secure email verification and user onboarding using Resend API",
        "Built type-safe Mongoose operations with comprehensive error handling"
      ],
      github: "https://github.com/kinngddx", // Replace with specific repo if available
      live: "https://mystery-message-kappa.vercel.app/"
    },
    {
      title: "AI Voice Banking Assistant",
      date: "October 2025",
      description: "Voice-enabled banking system with speech recognition for hands-free operations and secure OTP-based transactions.",
      tech: ["Python", "FastAPI", "React", "Javascript", "Tailwind CSS", "NLP", "JWT"],
      highlights: [
        "Custom NLP model with 95%+ accuracy supporting English/Hindi commands",
        "Integrated Gemini AI for intelligent conversation",
        "Accessible UI optimized for elderly and visually impaired users"
      ],
      github: "https://github.com/kinngddx/Voice-Banking-System"
    },
    {
      title: "Call Center Analytics Platform",
      date: "April 2025",
      description: "Full-stack analytics platform with Whisper AI transcription and sentiment analysis.",
      tech: ["React.js", "FastAPI", "PostgreSQL", "Whisper AI", "Tailwind CSS"],
      highlights: [
        "Built responsive UI for transcripts, sentiment trends, and multilingual views",
        "Implemented Whisper-based transcription with high accuracy",
        "Collaborated in a 4-member team ensuring seamless integration"
      ],
      github: "https://github.com/kinngddx/Team-Garud"
    }
  ];

  const achievements = [
    {
      title: "Hacktoberfest 2025 - Super Contributor",
      issuer: "DigitalOcean & GitHub",
      date: "October 2025",
      desc: "Recognized for high-quality open-source contributions during Hacktoberfest 2025."
    },
    {
      title: "LeetCode Top 20% Globally",
      issuer: "LeetCode",
      date: "Ongoing",
      desc: "Solved 400+ problems with consistent problem-solving and strong focus on DSA."
    },
    {
      title: "Prompt Engineering with Copilot",
      issuer: "Microsoft SkillUp",
      date: "August 2025",
      desc: "Mastered AI prompt engineering techniques for enhanced development workflows."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-12 text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            I am Umang Chandra
          </h1>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/kinngddx" target="_blank" rel="noopener noreferrer" className="relative group text-gray-600 hover:text-gray-900 transition-all hover:scale-110">
              <Github size={24} />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">GitHub</span>
            </a>
            
            <a href="https://linkedin.com/in/umang-chandra-b5324a355" target="_blank" rel="noopener noreferrer" className="relative group text-gray-600 hover:text-gray-900 transition-all hover:scale-110">
              <Linkedin size={24} />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
            </a>

            {/* Added Twitter Link */}
            <a href="https://x.com/umang0x" target="_blank" rel="noopener noreferrer" className="relative group text-gray-600 hover:text-gray-900 transition-all hover:scale-110">
              <Twitter size={24} />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Twitter</span>
            </a>
            
            <a href="mailto:umangchandra2023@gmail.com" className="relative group text-gray-600 hover:text-gray-900 transition-all hover:scale-110">
              <Mail size={24} />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Email</span>
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
              UC
            </div>
            <div className="pt-2">
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <MapPin size={16} />
                <span>National Institute of Technology, Rourkela</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar size={16} />
                <span>B.Tech in Mechanical Engineering | CGPA: 7.88</span>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Full-stack developer passionate about building scalable web applications with modern technologies. 
            Specialized in AI integration, voice-enabled systems, and creating data-driven judicial management tools.
          </p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {["Python", "C++", "JavaScript", "TypeScript", "React.js", "Next.js", "PostgreSQL", "MongoDB", "Git"].map(skill => (
              <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">{skill}</span>
            ))}
          </div>
        </section>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex gap-8">
            {['projects', 'experience', 'achievements'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-sm font-medium capitalize transition-colors ${
                  activeTab === tab
                    ? 'border-b-2 border-gray-900 text-gray-900'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Projects Tab Content */}
        {activeTab === 'projects' && (
          <section className="space-y-8">
            {projects.map((project, idx) => (
              <article key={idx} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <span className="text-sm text-gray-500">{project.date}</span>
                </div>
                
                <p className="text-gray-700 mb-4">{project.description}</p>
                
                <ul className="space-y-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start">
                      <span className="mr-2">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-50 text-gray-600 rounded text-xs border border-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 text-sm text-gray-900 hover:underline">
                    <Github size={16} />
                    View Code
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                       className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline font-medium">
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </article>
            ))}
          </section>
        )}

        {/* Experience Tab */}
        {activeTab === 'experience' && (
          <section>
            <p className="text-gray-600 text-center py-8">Experience section coming soon...</p>
          </section>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <section className="space-y-6">
            <div className="space-y-6">
              {achievements.map((achievement, idx) => (
                <article key={idx} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <Award className="text-gray-400 flex-shrink-0 mt-1" size={24} />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{achievement.title}</h3>
                        <span className="text-sm text-gray-500">{achievement.date}</span>
                      </div>
                      <p className="text-gray-600 mb-2 font-medium">{achievement.issuer}</p>
                      <p className="text-gray-700">{achievement.desc}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 bg-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Extracurricular Activities</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-900">Technical Member, SPIC MACAY</p>
                  <p className="text-sm text-gray-600">2024 – Present</p>
                  <p className="text-gray-700 mt-1">Contributed to technical operations during cultural events and digital support.</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Event Coordinator, Innovision Technical Fest</p>
                  <p className="text-sm text-gray-600">2024 – 2025</p>
                  <p className="text-gray-700 mt-1">Led logistics for 300+ participants across sports and technical events.</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        <section className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a href="mailto:umangchandra2023@gmail.com" className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group">
              <Mail size={20} className="text-gray-600 group-hover:text-gray-900" />
              <span className="text-sm text-gray-900 truncate">umangchandra2023@gmail.com</span>
            </a>
            <a href="tel:+918470901180" className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group">
              <Phone size={20} className="text-gray-600 group-hover:text-gray-900" />
              <span className="text-sm text-gray-900">(+91) 8470901180</span>
            </a>
            <a href="https://x.com/umang0x" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group">
              <Twitter size={20} className="text-gray-600 group-hover:text-gray-900" />
              <span className="text-sm text-gray-900">@umang0x</span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-16">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">© 2025 Umang Chandra.</p>
            <div className="flex gap-6">
              <a href="https://github.com/kinngddx" className="text-gray-600 hover:text-gray-900"><Github size={20} /></a>
              <a href="https://linkedin.com/in/umang-chandra-b5324a355" className="text-gray-600 hover:text-gray-900"><Linkedin size={20} /></a>
              <a href="https://x.com/umang0x" className="text-gray-600 hover:text-gray-900"><Twitter size={20} /></a>
              <a href="mailto:umangchandra2023@gmail.com" className="text-gray-600 hover:text-gray-900"><Mail size={20} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;