import { Github, Linkedin, Mail, MapPin, Calendar } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-210 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-12 text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            I am Umang Chandra
          </h1>
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/kinngddx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group text-gray-600 hover:text-gray-900 transition-all hover:scale-110"
              title="GitHub"
            >
              <Github size={24} className="transition-transform" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                GitHub
              </span>
            </a>
            
            <a 
              href="https://linkedin.com/in/umang-chandra-b5324a355" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group text-gray-600 hover:text-gray-910 transition-all hover:scale-110"
              title="LinkedIn"
            >
              <Linkedin size={24} className="transition-transform" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                LinkedIn
              </span>
            </a>
            
            <a 
              href="mailto:umangchandra2023@gmail.com"
              className="relative group text-gray-600 hover:text-gray-900 transition-all hover:scale-110"
              title="Email"
            >
              <Mail size={24} className="transition-transform" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Email
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* about section i can write here */}


       <main className="max-w-5xl mx-auto px-6 py-12">
        <section className="mb-16">
          <div className="flex items-start gap-3 mb-6">
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
                <span>B.Tech in Mechanical Engineering | CGPA: 7.96</span>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Full-stack developer passionate about building scalable web applications with modern technologies. 
            Specialized in AI integration, voice-enabled systems, and creating accessible user experiences.
          </p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">Python</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">C++</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">JavaScript</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">React.js</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">FastAPI</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">PostgreSQL</span>
            
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">Django</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">Git</span>
          </div>
        </section>
      </main>

      
    </div>
  );
}

export default App;