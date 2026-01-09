import { Download, Smartphone, Zap, Users, Shield, Star } from 'lucide-react';

function App() {
  const handleDownload = () => {
    alert('APK download will be triggered here. Please upload your APK file to enable downloads.');
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
                <Smartphone className="w-6 h-6 text-white -rotate-45" />
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-white drop-shadow-lg" style={{ fontFamily: 'system-ui, sans-serif', textShadow: '4px 4px 0px rgba(0,0,0,0.3)' }}>
                MyCampus
              </h1>
            </div>
            <button
              onClick={handleDownload}
              className="hidden md:flex items-center space-x-2 bg-white text-pink-600 px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transform transition-all duration-200 border-4 border-pink-600"
            >
              <Download className="w-5 h-5" />
              <span>Download APK</span>
            </button>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
          <section className="text-center mb-20">
            <div className="inline-block mb-6 px-6 py-2 bg-yellow-300 text-black font-bold rounded-full border-4 border-black shadow-lg transform -rotate-2">
              🎉 NOW AVAILABLE
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight" style={{ textShadow: '6px 6px 0px rgba(0,0,0,0.3)' }}>
              Your Campus<br />In Your Pocket
            </h2>
            <p className="text-xl md:text-2xl text-white font-semibold mb-10 max-w-2xl mx-auto drop-shadow-lg">
              The ultimate app for students. Stay connected, organized, and ahead of the game!
            </p>
            <button
              onClick={handleDownload}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-pink-500 to-yellow-400 text-white px-10 py-5 rounded-full font-black text-xl shadow-2xl hover:scale-110 transform transition-all duration-300 border-4 border-white animate-pulse"
            >
              <Download className="w-7 h-7" />
              <span>DOWNLOAD NOW</span>
            </button>
            <p className="mt-4 text-white font-semibold drop-shadow">Free • Android • 12MB</p>
          </section>

          <section className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              { icon: Zap, title: 'Lightning Fast', desc: 'Instant access to all campus resources', color: 'from-yellow-300 to-orange-400' },
              { icon: Users, title: 'Stay Connected', desc: 'Connect with classmates and faculty', color: 'from-pink-300 to-purple-400' },
              { icon: Shield, title: 'Secure & Safe', desc: 'Your data is protected 24/7', color: 'from-cyan-300 to-blue-400' }
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

          <section className="bg-white rounded-3xl p-10 md:p-16 border-4 border-black shadow-2xl mb-20 transform -rotate-1">
            <div className="transform rotate-1">
              <h3 className="text-4xl md:text-5xl font-black text-center mb-12 text-gray-900">
                What Students Are Saying
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { name: 'Alex Chen', quote: 'MyCampus changed how I manage my college life. Everything I need in one place!', rating: 5 },
                  { name: 'Sarah Johnson', quote: 'The best campus app out there. Super intuitive and packed with features!', rating: 5 }
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
                Join thousands of students already using MyCampus
              </p>
              <button
                onClick={handleDownload}
                className="inline-flex items-center space-x-3 bg-white text-pink-600 px-10 py-5 rounded-full font-black text-xl shadow-2xl hover:scale-110 transform transition-all duration-300 border-4 border-pink-600"
              >
                <Download className="w-7 h-7" />
                <span>DOWNLOAD APK</span>
              </button>
            </div>
          </section>
        </main>

        <footer className="py-8 text-center text-white font-semibold">
          <p className="drop-shadow-lg">© 2024 MyCampus • Made with ❤️ for Students</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
