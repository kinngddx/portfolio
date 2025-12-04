import { Github, Linkedin, Mail } from 'lucide-react';

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
    </div>
  );
}

export default App;