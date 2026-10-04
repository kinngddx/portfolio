// import { useState } from 'react';
// import { 
//   Github, 
//   Linkedin, 
//   Mail, 
//   MapPin, 
//   Calendar, 
//   Award, 
//   Phone, 
//   Twitter, 
//   ExternalLink 
// } from 'lucide-react';

// function App() {
//   const [activeTab, setActiveTab] = useState('projects');

//   const projects = [
//     {
//   title: "GenAI-Powered Observability & Incident Automation Platform",
//   date: "Feb 2026",
//   description: "Architected a production-grade observability platform for FastAPI services using the LGTM stack (Loki, Grafana, Tempo, Prometheus) and OpenTelemetry. Developed a GenAI agent using Google Gemini 2.0 to automate incident postmortems by correlating logs, metrics, and traces.",
//   tech: [
//     "Python",
//     "FastAPI", 
//     "PostgreSQL", 
//     "Docker", 
//     "Prometheus", 
//     "Grafana", 
//     "OpenTelemetry", 
//     "Loki", 
//     "Tempo", 
//     "Google Gemini API"
//   ],
//   highlights: [
//     "Architected a production-grade observability stack using OpenTelemetry and Prometheus to enable centralized monitoring and automated alerting for distributed FastAPI services",
//     "Instrumented 7 custom RED and business metrics with real-time Grafana dashboards, demonstrating a 69% reduction in MTTR through controlled failure simulations",
//     "Engineered a Gemini 2.0-powered GenAI engine to correlate telemetry data into automated incident postmortems, reducing manual documentation effort by 90%"
//   ]
// },



//      {
//       title: "PolyTrade – Decentralized Prediction Market Platform",
//       date: "February 2026",
//       description: "A high-performance prediction market platform (Polymarket-type) featuring a custom orderbook engine and decentralized trade settlement.",
//       tech: [
//         "TypeScript",
//         "Node.js",
//         "Express",
//         "Prisma ORM",
//         "PostgreSQL",
//         "React",
//         "Vite",
//         "Solana"
//       ],
//       highlights: [
//         "Engineered a custom orderbook matching engine for Yes/No token trading, implementing real-time trade settlement and automated split/merge mechanics",
//         "Implemented row-level locked PostgreSQL transactions to ensure race-condition-free order execution and 100% data consistency",
//         "Integrated Solana (Phantom/Solflare) for secure Web3 authentication and architected the system using Turborepo for scalable monorepo management"
//       ],
//       github: "https://github.com/kinngddx/Market-Prediction", 
//     },

//     {
//   title: "GoalTrack – Enterprise Goal Management Portal",
//   date: "May 2026",
//   description:
//     "Enterprise-grade goal management and performance tracking platform with role-based workflows, approvals, audit logging, and quarterly check-ins.",
//   tech: [
//     "Next.js 15",
//     "TypeScript",
//     "Prisma",
//     "PostgreSQL",
//     "Clerk",
//     "Tailwind CSS",
//     "Resend API"
//   ],


  
//   highlights: [
//     "Engineered a secure Role-Based Access Control (RBAC) system using Clerk with JWT-based protected routing for multi-role management",
//     "Architected a scalable PostgreSQL schema using Prisma ORM with 7+ relational models, approval workflows, and enterprise-grade audit logging",
//     "Built automated approval pipelines, quarterly check-ins, and transactional email notifications optimized for Vercel serverless deployment"
//   ],
//   github: "https://github.com/kinngddx/AtomQuest", // replace later
//   live: "https://your-goaltrack-demo.vercel.app" // replace later
// },
//     {
//       title: "NyayaFlow – AI-Powered Court Management System",
//       date: "January 2026",
//       description: "A full-stack platform to automate court scheduling via an AI engine that prioritizes cases based on severity and urgency.",
//       tech: ["Next.js 15", "TypeScript", "Prisma", "Supabase", "Tailwind CSS", "Recharts", "Greedy Algorithms"],
//       highlights: [
//         "Integrated a Greedy Scheduling Algorithm to optimize judge workloads and automated re-assignment",
//         "Built an interactive analytics dashboard using Recharts to visualize case clearance rates",
//         "Developed dynamic redistribution systems for judge unavailability"
//       ],
//       github: "https://github.com/kinngddx/court-case-schedulling-system", // Replace with specific repo if available
//       live: "https://court-case-schedulling-system-g4jj.vercel.app/dashboard"
//     },
//     {
//       title: "Mystery Message – Anonymous Messaging Platform",
//       date: "December 2026",
//       description: "Full-stack anonymous messaging platform with AI-driven message suggestions and secure authentication.",
//       tech: ["Next.js 16", "TypeScript", "MongoDB", "NextAuth.js", "Tailwind CSS", "React Hook Form", "Resend API"],
//       highlights: [
//         "Integrated Google Gemini AI to provide intelligent message suggestions and real-time feedback",
//         "Implemented secure email verification and user onboarding using Resend API",
//         "Built type-safe Mongoose operations with comprehensive error handling"
//       ],
//       github: "https://github.com/kinngddx/next.js-ngl", // Replace with specific repo if available i will do it bro
//       live: "https://mystery-message-kappa.vercel.app/"
//     },

//     {
//   title: "VoiceConnect – AI-Powered Customer Support Video Platform",
//   date: "June 2026",
//   description: "A full-stack customer support video calling platform with real-time communication, session management, recording workflows, and automated post-call processing.",
//   tech: [
//     "Next.js",
//     "TypeScript",
//     "React",
//     "LiveKit",
    
//     "SQLite",
//     "Tailwind CSS",
//     "Docker",
//     "n8n"
//   ],
//   highlights: [
//     "Built a real-time video and audio communication platform using LiveKit, supporting agent-customer sessions, chat messaging, media controls, and room-based access management",
//     "Designed secure backend APIs for token generation, session lifecycle management, webhook processing, participant tracking, and recording metadata persistence using Prisma ORM",
//     "Integrated n8n workflow automation to trigger post-call actions through webhooks, enabling automated notifications, logging, and future workflow extensibility"
//   ],
//   github: "https://github.com/kinngddx/VideoCall-Zoom",
// },


//     {
//       title: "AI Voice Banking Assistant",
//       date: "October 2025",
//       description: "Voice-enabled banking system with speech recognition for hands-free operations and secure OTP-based transactions.",
//       tech: ["Python", "FastAPI", "React", "Javascript", "Tailwind CSS", "NLP", "JWT"],
//       highlights: [
//         "Custom NLP model with 95%+ accuracy supporting English/Hindi commands",
//         "Integrated Gemini AI for intelligent conversation",
//         "Accessible UI optimized for elderly and visually impaired users"
//       ],
//       github: "https://github.com/kinngddx/Voice-Banking-System"
//     },
//   {
// title: "Customer Churn Prediction",
// date: "May 2026",
// description:
// "Machine learning project for predicting customer churn using a Telco dataset, featuring data preprocessing, exploratory analysis, and classification modeling.",
// tech: [
// "Python",
// "Pandas",
// "NumPy",
// "Matplotlib",
// "Seaborn",
// "Scikit-learn",
// "Jupyter Notebook"
// ],
// highlights: [
// "Built a Random Forest-based customer churn prediction model on a Telco dataset containing 7,000+ customer records, achieving 78.5% classification accuracy",
// "Cleaned and preprocessed real-world customer data using Pandas, handled missing values, encoded categorical features, and prepared data for machine learning",
// "Performed exploratory data analysis and model evaluation using Confusion Matrix, ROC Curve, and Feature Importance plots to identify key churn drivers"
// ],
// github: "https://github.com/kinngddx/Customer-churn-Project"
// },
// {
//   title: "Housing Price Prediction – End-to-End Machine Learning Pipeline",
//   date: "July 2026",
//   description: "Built an end-to-end machine learning pipeline to predict California housing prices using Scikit-learn, including data preprocessing, feature engineering, and model evaluation. Deployed the trained model as a FastAPI REST API using Joblib for model serialization.",
//   tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "FastAPI", "Joblib", "Jupyter Notebook"],
//   highlights: [
//  "...",
//  "...",
//  "..."
// ],

//   github: "https://github.com/kinngddx/House-prediction-ml-project"
// },
// {
//   title: "Real-Time WebSocket Kanban Board",
//   date: "June 2026",
//   description:
//     "A full-stack real-time Kanban board with collaborative task management, drag-and-drop workflows, WebSocket synchronization, and comprehensive automated testing.",
//   tech: [
//     "React 18",
//     "Vite",
//     "Node.js",
//     "Express",
//     "Socket.IO",
//     "Vitest",
//     // "React Testing Library",
//     // "Playwright",
//     "CSS"
//   ],
//   highlights: [
//     "Built a real-time collaborative Kanban board using Socket.IO, enabling instant task creation, updates, deletion, and status synchronization across multiple connected clients",
//     "Implemented drag-and-drop task management with priority levels, category tagging, file attachments, progress tracking, and responsive dark-themed user experience",
//     "Developed a complete testing strategy with Vitest unit and integration tests alongside Playwright end-to-end testing to ensure application reliability and user workflow validation"
//   ],
//   github: "https://github.com/kinngddx/Vyorius-Drones-Private-Limited",
//   liveDemo:
//     "https://vyorius-drones-private-limited-2fvmsgms5-kinngddxs-projects.vercel.app/"
// }



//   ];

//   const achievements = [
//     {
//       title: "Hacktoberfest 2025 - Super Contributor",
//       issuer: "DigitalOcean & GitHub",
//       date: "October 2025",
//       desc: "Recognized for high-quality open-source contributions during Hacktoberfest 2025."
//     },
//     {
//       title: "LeetCode Top 20% Globally",
//       issuer: "LeetCode",
//       date: "Ongoing",
//       desc: "Solved 500+ problems with consistent problem-solving and strong focus on DSA."
//     },
//     {
//       title: "Prompt Engineering with Copilot",
//       issuer: "Microsoft SkillUp",
//       date: "August 2025",
//       desc: "Mastered AI prompt engineering techniques for enhanced development workflows."
//     }

//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="border-b border-gray-200 bg-white">
//         <div className="max-w-5xl mx-auto px-6 py-12 text-center">
//           <h1 className="text-6xl font-bold text-gray-900 mb-6">
//             I am Umang Chandra
//           </h1>
//           <div className="flex justify-center gap-6">
//             <a href="https://github.com/kinngddx" target="_blank" rel="noopener noreferrer" className="relative group text-gray-600 hover:text-gray-900 transition-all hover:scale-110">
//               <Github size={24} />
//               <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">GitHub</span>
//             </a>
            
//             <a href="https://linkedin.com/in/umang-chandra-b5324a355" target="_blank" rel="noopener noreferrer" className="relative group text-gray-600 hover:text-gray-900 transition-all hover:scale-110">
//               <Linkedin size={24} />
//               <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
//             </a>

//             {/* Added Twitter Link */}
//             <a href="https://x.com/umang0x" target="_blank" rel="noopener noreferrer" className="relative group text-gray-600 hover:text-gray-900 transition-all hover:scale-110">
//               <Twitter size={24} />
//               <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Twitter</span>
//             </a>
            
//             <a href="mailto:umangchandra2023@gmail.com" className="relative group text-gray-600 hover:text-gray-900 transition-all hover:scale-110">
//               <Mail size={24} />
//               <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Email</span>
//             </a>
//           </div>
//         </div>
//       </header>

//       {/* About Section */}
//       <main className="max-w-5xl mx-auto px-6 py-12">
//         <section className="mb-16">
//           <div className="flex items-start gap-4 mb-6">
//             <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
//               UC
//             </div>
//             <div className="pt-2">
//               <div className="flex items-center gap-2 text-gray-600 mb-2">
//                 <MapPin size={16} />
//                 <span>National Institute of Technology, Rourkela</span>
//               </div>
//               <div className="flex items-center gap-2 text-gray-600">
//                 <Calendar size={16} />
//                 <span>Bachelor Of Technology | CGPA: 7.88</span>
//               </div>
//             </div>
//           </div>
          
//           <p className="text-lg text-gray-700 leading-relaxed mb-4">
//             Full-stack developer passionate about building scalable web applications with modern technologies. 
//           </p>
          
//           <div className="flex flex-wrap gap-2 mt-4">
//             {["C++", "Python", "JavaScript", "TypeScript", "React.js", "Next.js", "PostgreSQL","Competitive Programming"].map(skill => (
//               <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">{skill}</span>
//             ))}
//           </div>
//         </section>

//         {/* Navigation Tabs */}
//         <div className="border-b border-gray-200 mb-8">
//           <nav className="flex gap-8">
//             {['projects', 'experience', 'achievements'].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`pb-4 text-sm font-medium capitalize transition-colors ${
//                   activeTab === tab
//                     ? 'border-b-2 border-gray-900 text-gray-900'
//                     : 'text-gray-500 hover:text-gray-700'
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </nav>
//         </div>

//         {/* Projects Tab Content thoda aur kaam kro */}
//         {activeTab === 'projects' && (
//           <section className="space-y-8">
//             {projects.map((project, idx) => (
//               <article key={idx} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
//                 <div className="flex justify-between items-start mb-3">
//                   <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
//                   <span className="text-sm text-gray-500">{project.date}</span>
//                 </div>
                
//                 <p className="text-gray-700 mb-4">{project.description}</p>
                
//                 <ul className="space-y-2 mb-4">
//                   {project.highlights.map((highlight, i) => (
//                     <li key={i} className="text-sm text-gray-600 flex items-start">
//                       <span className="mr-2">•</span>
//                       <span>{highlight}</span>
//                     </li>
//                   ))}
//                 </ul>
                
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {project.tech.map((tech, i) => (
//                     <span key={i} className="px-2 py-1 bg-gray-50 text-gray-600 rounded text-xs border border-gray-200">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
                
//                 <div className="flex gap-4">
//                   <a href={project.github} target="_blank" rel="noopener noreferrer"
//                      className="inline-flex items-center gap-2 text-sm text-gray-900 hover:underline">
//                     <Github size={16} />
//                     View Code
//                   </a>
//                   {project.live && (
//                     <a href={project.live} target="_blank" rel="noopener noreferrer"
//                        className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline font-medium">
//                       <ExternalLink size={16} />
//                       Live Demo
//                     </a>
//                   )}
//                 </div>
//               </article>
//             ))}
//           </section>
//         )}

// {/* Experience Tab */}
// {activeTab === 'experience' && (
//   <section className="max-w-4xl mx-auto py-8">
//     <div className="relative border-l-2 border-gray-200 pl-8 ml-4">
//       {/* Experience Item */}
//       <div className="relative">
//         {/* Timeline Dot */}
//         <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-gray-900 border-4 border-white shadow" />

//         <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
//           <div>
//             <h3 className="text-xl font-bold text-gray-900">
//               AI Engineer Intern
//             </h3>
//             <p className="text-gray-600 font-medium">
//               Pinnacle Labs Private Limited
//             </p>
//           </div>

//           <span className="text-sm text-gray-500 font-medium whitespace-nowrap">
//             June 2026
//           </span>
//         </div>

//         <ul className="space-y-3 text-gray-600 leading-relaxed">
//           <li className="flex gap-3">
//             <span className="text-gray-900 mt-1.5">•</span>
//             <span>
//               Developed AI-powered microservices for automated resume parsing,
//               text autocorrection, and Resume-JD matching, processing
//               unstructured candidate data through an end-to-end NLP pipeline
//               with <strong className="text-gray-900">90%+ workflow automation</strong>.
//             </span>
//           </li>

//           <li className="flex gap-3">
//             <span className="text-gray-900 mt-1.5">•</span>
//             <span>
//               Reduced redundant model initialization through model reuse and
//               optimized service-level resource handling.
//             </span>
//           </li>

//           <li className="flex gap-3">
//             <span className="text-gray-900 mt-1.5">•</span>
//             <span>
//               Improved Resume-JD matching effectiveness by{' '}
//               <strong className="text-gray-900">30%</strong> by combining
//               semantic matching with explicit skill coverage and interpretable
//               classification.
//             </span>
//           </li>
//         </ul>

//         {/* Technologies */}
//         <div className="flex flex-wrap gap-2 mt-6">
//           {['NLP', 'AI/ML', 'Resume Parsing', 'Semantic Matching', 'Microservices'].map(
//             (tech) => (
//               <span
//                 key={tech}
//                 className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700"
//               >
//                 {tech}
//               </span>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   </section>
// )}

//         {/* Achievements Tab */}
//         {activeTab === 'achievements' && (
//           <section className="space-y-6">
//             <div className="space-y-6">
//               {achievements.map((achievement, idx) => (
//                 <article key={idx} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
//                   <div className="flex items-start gap-3">
//                     <Award className="text-gray-400 flex-shrink-0 mt-1" size={24} />
//                     <div className="flex-1">
//                       <div className="flex justify-between items-start mb-2">
//                         <h3 className="text-lg font-semibold text-gray-900">{achievement.title}</h3>
//                         <span className="text-sm text-gray-500">{achievement.date}</span>
//                       </div>
//                       <p className="text-gray-600 mb-2 font-medium">{achievement.issuer}</p>
//                       <p className="text-gray-700">{achievement.desc}</p>
//                     </div>
//                   </div>
//                 </article>
//               ))}
//             </div>

//             <div className="mt-8 bg-gray-100 rounded-lg p-6">
//               <h3 className="text-xl font-semibold text-gray-900 mb-4">Extracurricular Activities</h3>
//               <div className="space-y-4">
//                 <div>
//                   <p className="font-medium text-gray-900">Technical Member, SPIC MACAY</p>
//                   <p className="text-sm text-gray-600">2024 – Present</p>
//                   <p className="text-gray-700 mt-1">Contributed to technical operations during cultural events and digital support.</p>
//                 </div>
//                 <div>
//                   <p className="font-medium text-gray-900">Event Coordinator, Innovision Technical Fest</p>
//                   <p className="text-sm text-gray-600">2024 – 2025</p>
//                   <p className="text-gray-700 mt-1">Led logistics for 300+ participants across sports and technical events.</p>
//                 </div>
//               </div>
//             </div>
//           </section>
//         )}

//         {/* Contact Section */}
//         <section className="mt-16 pt-8 border-t border-gray-200">
//           <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
//           <div className="grid md:grid-cols-3 gap-4">
//             <a href="mailto:umangchandra2023@gmail.com" className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group">
//               <Mail size={20} className="text-gray-600 group-hover:text-gray-900" />
//               <span className="text-sm text-gray-900 truncate">umangchandra2023@gmail.com</span>
//             </a>
//             <a href="tel:+918470901180" className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group">
//               <Phone size={20} className="text-gray-600 group-hover:text-gray-900" />
//               <span className="text-sm text-gray-900">(+91) 8470901180</span>
//             </a>
//             <a href="https://x.com/umang0x" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group">
//               <Twitter size={20} className="text-gray-600 group-hover:text-gray-900" />
//               <span className="text-sm text-gray-900">@umang0x</span>
//             </a>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="border-t border-gray-200 mt-16">
//         <div className="max-w-5xl mx-auto px-6 py-8">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-gray-600 text-sm">© 2025 Umang Chandra.</p>
//             <div className="flex gap-6">
//               <a href="https://github.com/kinngddx" className="text-gray-600 hover:text-gray-900"><Github size={20} /></a>
//               <a href="https://linkedin.com/in/umang-chandra-b5324a355" className="text-gray-600 hover:text-gray-900"><Linkedin size={20} /></a>
//               <a href="https://x.com/umang0x" className="text-gray-600 hover:text-gray-900"><Twitter size={20} /></a>
//               <a href="mailto:umangchandra2023@gmail.com" className="text-gray-600 hover:text-gray-900"><Mail size={20} /></a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;





import { useState, useEffect, useRef } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  Award,
  Phone,
  Twitter,
  ExternalLink,
  Home,
  Code2,
  Layers
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Scroll reveal: content starts softly blurred + faded, and sharpens */
/*  into focus the moment it enters the viewport. Respects users who   */
/*  prefer reduced motion.                                             */
/* ------------------------------------------------------------------ */
function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(prefersReducedMotion);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

function Reveal({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        filter: inView ? 'blur(0px)' : 'blur(10px)',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px)' : 'translateY(28px)',
        transition:
          'filter 0.9s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1), transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)',
        transitionDelay: `${delay}ms`,
        willChange: 'filter, opacity, transform'
      }}
    >
      {children}
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    {
      title: "TraceIQ",
      date: "July 2026",
      description: "Architected a production-grade observability platform for FastAPI services using the LGTM stack (Loki, Grafana, Tempo, Prometheus) and OpenTelemetry. Developed a GenAI agent using Google Gemini 2.0 to automate incident postmortems by correlating logs, metrics, and traces.",
      tech: ["Python", "FastAPI", "PostgreSQL", "Docker", "Prometheus", "Grafana", "OpenTelemetry", "Loki", "Tempo", "Google Gemini API"],
      highlights: [
        "Architected a production-grade observability stack using OpenTelemetry and Prometheus to enable centralized monitoring and automated alerting for distributed FastAPI services",
        "Instrumented 7 custom RED and business metrics with real-time Grafana dashboards, demonstrating a 69% reduction in MTTR through controlled failure simulations",
        "Engineered a Gemini 2.0-powered GenAI engine to correlate telemetry data into automated incident postmortems, reducing manual documentation effort by 90%"
      ]
    },
    {
      title: "PolyTrade – Decentralized Prediction Market Platform",
      date: "February 2026",
      description: "A high-performance prediction market platform (Polymarket-type) featuring a custom orderbook engine and decentralized trade settlement.",
      tech: ["TypeScript", "Node.js", "Express", "Prisma ORM", "PostgreSQL", "React", "Vite", "Solana"],
      highlights: [
        "Engineered a custom orderbook matching engine for Yes/No token trading, implementing real-time trade settlement and automated split/merge mechanics",
        "Implemented row-level locked PostgreSQL transactions to ensure race-condition-free order execution and 100% data consistency",
        "Integrated Solana (Phantom/Solflare) for secure Web3 authentication and architected the system using Turborepo for scalable monorepo management"
      ],
      github: "https://github.com/kinngddx/Market-Prediction",
    },
    {
      title: "GoalTrack – Enterprise Goal Management Portal",
      date: "May 2026",
      description: "Enterprise-grade goal management and performance tracking platform with role-based workflows, approvals, audit logging, and quarterly check-ins.",
      tech: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "Clerk", "Tailwind CSS", "Resend API"],
      highlights: [
        "Engineered a secure Role-Based Access Control (RBAC) system using Clerk with JWT-based protected routing for multi-role management",
        "Architected a scalable PostgreSQL schema using Prisma ORM with 7+ relational models, approval workflows, and enterprise-grade audit logging",
        "Built automated approval pipelines, quarterly check-ins, and transactional email notifications optimized for Vercel serverless deployment"
      ],
      github: "https://github.com/kinngddx/AtomQuest",
      live: "https://your-goaltrack-demo.vercel.app"
    },
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
      github: "https://github.com/kinngddx/court-case-schedulling-system",
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
      github: "https://github.com/kinngddx/next.js-ngl",
      live: "https://mystery-message-kappa.vercel.app/"
    },
    {
      title: "VoiceConnect – AI-Powered Customer Support Video Platform",
      date: "June 2026",
      description: "A full-stack customer support video calling platform with real-time communication, session management, recording workflows, and automated post-call processing.",
      tech: ["Next.js", "TypeScript", "React", "LiveKit", "SQLite", "Tailwind CSS", "Docker", "n8n"],
      highlights: [
        "Built a real-time video and audio communication platform using LiveKit, supporting agent-customer sessions, chat messaging, media controls, and room-based access management",
        "Designed secure backend APIs for token generation, session lifecycle management, webhook processing, participant tracking, and recording metadata persistence using Prisma ORM",
        "Integrated n8n workflow automation to trigger post-call actions through webhooks, enabling automated notifications, logging, and future workflow extensibility"
      ],
      github: "https://github.com/kinngddx/VideoCall-Zoom",
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
      title: "Customer Churn Prediction",
      date: "May 2026",
      description: "Machine learning project for predicting customer churn using a Telco dataset, featuring data preprocessing, exploratory analysis, and classification modeling.",
      tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Jupyter Notebook"],
      highlights: [
        "Built a Random Forest-based customer churn prediction model on a Telco dataset containing 7,000+ customer records, achieving 78.5% classification accuracy",
        "Cleaned and preprocessed real-world customer data using Pandas, handled missing values, encoded categorical features, and prepared data for machine learning",
        "Performed exploratory data analysis and model evaluation using Confusion Matrix, ROC Curve, and Feature Importance plots to identify key churn drivers"
      ],
      github: "https://github.com/kinngddx/Customer-churn-Project"
    },
    {
      title: "Housing Price Prediction – End-to-End Machine Learning Pipeline",
      date: "July 2026",
      description: "Built an end-to-end machine learning pipeline to predict California housing prices using Scikit-learn, including data preprocessing, feature engineering, and model evaluation. Deployed the trained model as a FastAPI REST API using Joblib for model serialization.",
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "FastAPI", "Joblib", "Jupyter Notebook"],
      highlights: ["...", "...", "..."],
      github: "https://github.com/kinngddx/House-prediction-ml-project"
    },
    {
      title: "Real-Time WebSocket Kanban Board",
      date: "June 2026",
      description: "A full-stack real-time Kanban board with collaborative task management, drag-and-drop workflows, WebSocket synchronization, and comprehensive automated testing.",
      tech: ["React 18", "Vite", "Node.js", "Express", "Socket.IO", "Vitest", "CSS"],
      highlights: [
        "Built a real-time collaborative Kanban board using Socket.IO, enabling instant task creation, updates, deletion, and status synchronization across multiple connected clients",
        "Implemented drag-and-drop task management with priority levels, category tagging, file attachments, progress tracking, and responsive dark-themed user experience",
        "Developed a complete testing strategy with Vitest unit and integration tests alongside Playwright end-to-end testing to ensure application reliability and user workflow validation"
      ],
      github: "https://github.com/kinngddx/Vyorius-Drones-Private-Limited",
      liveDemo: "https://vyorius-drones-private-limited-2fvmsgms5-kinngddxs-projects.vercel.app/"
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
      desc: "Solved 500+ problems with consistent problem-solving and strong focus on DSA."
    },
    {
      title: "Prompt Engineering with Copilot",
      issuer: "Microsoft SkillUp",
      date: "August 2025",
      desc: "Mastered AI prompt engineering techniques for enhanced development workflows."
    }
  ];

  const navLinks = [
    { icon: Home, label: 'Home', href: '#top' },
    { icon: Code2, label: 'Projects', href: '#projects-section' },
    { icon: Layers, label: 'Stack', href: '#top' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/kinngddx' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/umang-chandra-b5324a355' },
    { icon: Twitter, label: 'Twitter', href: 'https://x.com/umang0x' }
  ];

  return (
    <div
      className="min-h-screen bg-zinc-100 text-zinc-900"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(113,113,122,0.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(113,113,122,0.09) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}
    >
      {/* Floating pill nav */}
      <div className="sticky top-5 z-30 flex justify-center px-6">
        <nav className="flex items-center gap-6 rounded-full border border-zinc-200 bg-white/90 backdrop-blur px-7 py-3 shadow-sm">
          {navLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="relative group text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              <Icon size={18} />
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {label}
              </span>
            </a>
          ))}
        </nav>
      </div>

      {/* Header / hero */}
      <header id="top" className="relative px-6 pt-24 pb-28 text-center">
        <p className="font-mono text-lg sm:text-xl text-zinc-500 mb-4">
          Hello, I'm
        </p>
        <h1 className="font-mono text-5xl sm:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-zinc-500 via-zinc-700 to-zinc-900 bg-clip-text text-transparent">
          Umang Chandra
        </h1>
        <p className="max-w-md mx-auto text-zinc-500 text-sm leading-relaxed">
          Building scalable, production-grade web applications with modern
          technologies and a systems-level mindset.
        </p>
      </header>

      {/* About Section */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <Reveal>
          <section className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 ring-4 ring-zinc-100">
                UC
              </div>
              <div className="pt-2">
                <div className="flex items-center gap-2 text-zinc-500 mb-2">
                  <MapPin size={16} />
                  <span>National Institute of Technology, Rourkela</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-500">
                  <Calendar size={16} />
                  <span>Bachelor Of Technology | CGPA: 7.88</span>
                </div>
              </div>
            </div>

            <p className="text-lg text-zinc-700 leading-relaxed mb-4">
              Full-stack developer passionate about building scalable web applications with modern technologies.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {["C++", "Python", "JavaScript", "TypeScript", "React.js", "Next.js", "PostgreSQL", "Competitive Programming"].map(skill => (
                <span key={skill} className="px-3 py-1 bg-zinc-100 text-zinc-600 rounded text-sm border border-zinc-200">{skill}</span>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Navigation Tabs */}
        <Reveal delay={80}>
          <div className="border-b border-zinc-200 mb-8">
            <nav className="flex gap-8">
              {['projects', 'experience', 'achievements'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-sm font-medium capitalize transition-colors ${
                    activeTab === tab
                      ? 'border-b-2 border-zinc-900 text-zinc-900'
                      : 'text-zinc-400 hover:text-zinc-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </Reveal>

        {/* Projects Tab Content */}
        {activeTab === 'projects' && (
          <section id="projects-section" className="space-y-8">
            {projects.map((project, idx) => (
              <Reveal key={idx} delay={Math.min(idx, 5) * 60}>
                <article className="border border-zinc-200 bg-white rounded-lg p-6 hover:shadow-md hover:border-zinc-300 transition-all">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-zinc-900">{project.title}</h3>
                    <span className="text-sm text-zinc-400 whitespace-nowrap ml-4">{project.date}</span>
                  </div>

                  <p className="text-zinc-600 mb-4">{project.description}</p>

                  <ul className="space-y-2 mb-4">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-zinc-500 flex items-start">
                        <span className="mr-2 text-zinc-300">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-zinc-50 text-zinc-500 rounded text-xs border border-zinc-200">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                         className="inline-flex items-center gap-2 text-sm text-zinc-700 hover:text-zinc-900 hover:underline">
                        <Github size={16} />
                        View Code
                      </a>
                    )}
                    {(project.live || project.liveDemo) && (
                      <a href={project.live || project.liveDemo} target="_blank" rel="noopener noreferrer"
                         className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 hover:underline font-medium">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </section>
        )}

        {/* Experience Tab */}
        {activeTab === 'experience' && (
          <Reveal>
            <section className="max-w-4xl mx-auto py-8">
              <div className="relative border-l-2 border-zinc-200 pl-8 ml-4">
                <div className="relative">
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-zinc-900 border-4 border-white shadow" />

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-zinc-900">
                        NIT Rourkela
                      </h3>
                      <p className="text-zinc-500 font-medium">
                        Research Student
                      </p>
                    </div>
                    <span className="text-sm text-zinc-400 font-medium whitespace-nowrap">
                      June 2026
                    </span>
                  </div>

                  <ul className="space-y-3 text-zinc-600 leading-relaxed">
                    <li className="flex gap-3">
                      <span className="text-zinc-300 mt-1.5">•</span>
                      <span>
                        Developed an AI-powered resume intelligence platform with 3 FastAPI microservices for automated resume parsing, text autocorrection, and Resume–JD matching, streamlining candidate data processing.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-zinc-300 mt-1.5">•</span>
                      <span>
                       Improved Resume–JD matching effectiveness by 30% by combining semantic similarity with explicit skill coverage and interpretable classification.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-zinc-300 mt-1.5">•</span>
                      <span>
                  Optimized model initialization and resource utilization through model reuse, eliminating redundant transformer loading across requests.
                      </span>
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {['NLP', 'AI/ML', 'Resume Parsing', 'Semantic Matching', 'Microservices'].map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 text-zinc-600 border border-zinc-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </Reveal>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <section className="space-y-6">
            <div className="space-y-6">
              {achievements.map((achievement, idx) => (
                <Reveal key={idx} delay={idx * 70}>
                  <article className="border border-zinc-200 bg-white rounded-lg p-6 hover:shadow-md hover:border-zinc-300 transition-all">
                    <div className="flex items-start gap-3">
                      <Award className="text-zinc-300 flex-shrink-0 mt-1" size={24} />
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-semibold text-zinc-900">{achievement.title}</h3>
                          <span className="text-sm text-zinc-400 whitespace-nowrap ml-4">{achievement.date}</span>
                        </div>
                        <p className="text-zinc-500 mb-2 font-medium">{achievement.issuer}</p>
                        <p className="text-zinc-600">{achievement.desc}</p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={210}>
              <div className="mt-8 bg-zinc-100 rounded-lg p-6 border border-zinc-200">
                <h3 className="text-xl font-semibold text-zinc-900 mb-4">Extracurricular Activities</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-zinc-900">Technical Member, SPIC MACAY</p>
                    <p className="text-sm text-zinc-500">2024 – Present</p>
                    <p className="text-zinc-600 mt-1">Contributed to technical operations during cultural events and digital support.</p>
                  </div>
                  <div>
                    <p className="font-medium text-zinc-900">Event Coordinator, Innovision Technical Fest</p>
                    <p className="text-sm text-zinc-500">2024 – 2025</p>
                    <p className="text-zinc-600 mt-1">Led logistics for 300+ participants across sports and technical events.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>
        )}

        {/* Contact Section */}
        <Reveal>
          <section className="mt-16 pt-8 border-t border-zinc-200">
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">Get in Touch</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="mailto:umangchandra2023@gmail.com" className="flex items-center gap-3 p-4 border border-zinc-200 rounded-lg hover:bg-zinc-50 hover:border-zinc-300 transition-colors group">
                <Mail size={20} className="text-zinc-400 group-hover:text-zinc-900" />
                <span className="text-sm text-zinc-800 truncate">umangchandra2023@gmail.com</span>
              </a>
              <a href="tel:+918470901180" className="flex items-center gap-3 p-4 border border-zinc-200 rounded-lg hover:bg-zinc-50 hover:border-zinc-300 transition-colors group">
                <Phone size={20} className="text-zinc-400 group-hover:text-zinc-900" />
                <span className="text-sm text-zinc-800">(+91) 8470901180</span>
              </a>
              <a href="https://x.com/umang0x" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 border border-zinc-200 rounded-lg hover:bg-zinc-50 hover:border-zinc-300 transition-colors group">
                <Twitter size={20} className="text-zinc-400 group-hover:text-zinc-900" />
                <span className="text-sm text-zinc-800">@umang0x</span>
              </a>
            </div>
          </section>
        </Reveal>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 mt-16">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">© 2025 Umang Chandra.</p>
            <div className="flex gap-6">
              <a href="https://github.com/kinngddx" className="text-zinc-400 hover:text-zinc-900"><Github size={20} /></a>
              <a href="https://linkedin.com/in/umang-chandra-b5324a355" className="text-zinc-400 hover:text-zinc-900"><Linkedin size={20} /></a>
              <a href="https://x.com/umang0x" className="text-zinc-400 hover:text-zinc-900"><Twitter size={20} /></a>
              <a href="mailto:umangchandra2023@gmail.com" className="text-zinc-400 hover:text-zinc-900"><Mail size={20} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;