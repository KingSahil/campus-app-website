import { Download, Smartphone, MapPin, BookOpen, MessageSquare, GraduationCap, Shield, Star, Github } from 'lucide-react';

function App() {
  const handleDownload = () => {
    window.open('https://github.com/KingSahil/campus-app-new/releases', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-pink-400 to-yellow-400 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, cyan 2px, cyan 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, cyan 2px, cyan 4px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10">
        <header className="p-6 md:p-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-300 to-pink-500 rounded-lg rotate-45 flex items-center justify-center shadow-lg">
                <GraduationCap className="w-6 h-6 text-white -rotate-45" />
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-white drop-shadow-lg" style={{ fontFamily: 'system-ui, sans-serif', textShadow: '4px 4px 0px rgba(0,0,0,0.3)' }}>
                Campus Super App
              </h1>
            </div>
            <a
              href="https://github.com/KingSahil/campus-app-new"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center space-x-2 bg-white text-pink-600 px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transform transition-all duration-200 border-4 border-pink-600"
            >
              <Github className="w-5 h-5" />
              <span>View on GitHub</span>
            </a>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
          <section className="text-center mb-20">
            <div className="inline-block mb-6 px-6 py-2 bg-yellow-300 text-black font-bold rounded-full border-4 border-black shadow-lg transform -rotate-2">
              🎓 CAMPUS SUPER APP
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight" style={{ textShadow: '6px 6px 0px rgba(0,0,0,0.3)' }}>
              Your Campus<br />In Your Pocket
            </h2>
            <p className="text-xl md:text-2xl text-white font-semibold mb-10 max-w-3xl mx-auto drop-shadow-lg">
              A comprehensive React Native app for students & administrators. Location-verified attendance, AI-powered learning hub, and real-time campus updates!
            </p>
            <button
              onClick={handleDownload}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-pink-500 to-yellow-400 text-white px-10 py-5 rounded-full font-black text-xl shadow-2xl hover:scale-110 transform transition-all duration-300 border-4 border-white animate-pulse"
            >
              <Download className="w-7 h-7" />
              <span>DOWNLOAD NOW</span>
            </button>
            <p className="mt-4 text-white font-semibold drop-shadow">Free • iOS, Android & Web • React Native + Expo</p>
          </section>

          <section className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              { 
                icon: MapPin, 
                title: 'GPS Attendance', 
                desc: 'High-precision location verification using Vincenty formula with 3D distance calculation',
                color: 'from-blue-300 to-cyan-400' 
              },
              { 
                icon: BookOpen, 
                title: 'AI Learning Hub', 
                desc: 'AI-powered chapters, summaries, quizzes & Q&A with video content',
                color: 'from-pink-300 to-purple-400' 
              },
              { 
                icon: MessageSquare, 
                title: 'Discussion Threads', 
                desc: 'Discord-style threaded discussions with real-time updates',
                color: 'from-yellow-300 to-orange-400' 
              },
              { 
                icon: Shield, 
                title: 'Secure Auth', 
                desc: 'Auth0 integration with OAuth 2.0 & social login support',
                color: 'from-green-300 to-emerald-400' 
              },
              { 
                icon: Smartphone, 
                title: 'Cross-Platform', 
                desc: 'Works seamlessly on iOS, Android, and Web browsers',
                color: 'from-indigo-300 to-blue-400' 
              },
              { 
                icon: GraduationCap, 
                title: 'Admin Controls', 
                desc: 'Manage sessions, track attendance, view analytics in real-time',
                color: 'from-rose-300 to-pink-400' 
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border-4 border-black shadow-xl transform hover:scale-105 hover:-rotate-1 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 border-4 border-black transform rotate-3`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-700 font-medium">{feature.desc}</p>
              </div>
            ))}
          </section>

          <section className="bg-white rounded-3xl p-10 md:p-16 border-4 border-black shadow-2xl mb-20">
            <h3 className="text-4xl md:text-5xl font-black text-center mb-12 text-gray-900">
              🚀 Key Features
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-2xl font-black text-gray-900">📍 Smart Attendance</h4>
                <ul className="space-y-2 text-gray-700 font-medium">
                  <li>✅ GPS verification with ±10-30m precision</li>
                  <li>✅ 3D distance calculation (lat, lng, elevation)</li>
                  <li>✅ Multi-sample averaging for accuracy</li>
                  <li>✅ Real-time session management</li>
                  <li>✅ Complete attendance history & analytics</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-black text-gray-900">🤖 AI-Powered Learning</h4>
                <ul className="space-y-2 text-gray-700 font-medium">
                  <li>✅ Auto-generated video chapters</li>
                  <li>✅ AI summaries & transcripts</li>
                  <li>✅ Interactive quizzes with grading</li>
                  <li>✅ Smart Q&A with Gemini & OpenRouter</li>
                  <li>✅ YouTube video integration</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-black text-gray-900">💬 Social Features</h4>
                <ul className="space-y-2 text-gray-700 font-medium">
                  <li>✅ Threaded discussions (Discord-style)</li>
                  <li>✅ Upvote/downvote system</li>
                  <li>✅ Real-time comment updates</li>
                  <li>✅ User avatars & timestamps</li>
                  <li>✅ Campus announcements & notices</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-black text-gray-900">🔧 Tech Stack</h4>
                <ul className="space-y-2 text-gray-700 font-medium">
                  <li>✅ React Native + Expo</li>
                  <li>✅ Auth0 for authentication</li>
                  <li>✅ Supabase (PostgreSQL + RLS)</li>
                  <li>✅ FastAPI backend</li>
                  <li>✅ Google Gemini & OpenRouter AI</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-3xl p-10 md:p-16 border-4 border-black shadow-2xl mb-20 transform -rotate-1">
            <div className="transform rotate-1">
              <h3 className="text-4xl md:text-5xl font-black text-center mb-12 text-gray-900">
                What Students Are Saying
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { 
                    name: 'Student Developer', 
                    quote: 'The GPS attendance system is incredible - no more proxy attendance! The AI features for learning are game-changing.', 
                    rating: 5 
                  },
                  { 
                    name: 'Campus Admin', 
                    quote: 'Perfect for managing attendance across campus. The real-time tracking and analytics are exactly what we needed!', 
                    rating: 5 
                  }
                ].map((review, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-cyan-100 to-pink-100 p-6 rounded-xl border-4 border-black">
                    <div className="flex mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-800 font-medium mb-4 text-lg">"{review.quote}"</p>
                    <p className="font-black text-gray-900">- {review.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 rounded-3xl p-12 md:p-16 border-4 border-white shadow-2xl">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6" style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.3)' }}>
                Ready to Get Started?
              </h3>
              <p className="text-xl text-white font-semibold mb-8 drop-shadow-lg">
                Join the campus community using this comprehensive super app
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center space-x-3 bg-white text-pink-600 px-10 py-5 rounded-full font-black text-xl shadow-2xl hover:scale-110 transform transition-all duration-300 border-4 border-pink-600"
                >
                  <Download className="w-7 h-7" />
                  <span>DOWNLOAD APK</span>
                </button>
                <a
                  href="https://github.com/KingSahil/campus-app-new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-black text-white px-10 py-5 rounded-full font-black text-xl shadow-2xl hover:scale-110 transform transition-all duration-300 border-4 border-white"
                >
                  <Github className="w-7 h-7" />
                  <span>VIEW SOURCE</span>
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="py-8 text-center text-white font-semibold">
          <p className="drop-shadow-lg">© 2026 Campus Super App • Made with ❤️ for Students</p>
          <p className="mt-2 drop-shadow text-sm">
            React Native • Expo • Auth0 • Supabase • PostgreSQL • AI-Powered
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
