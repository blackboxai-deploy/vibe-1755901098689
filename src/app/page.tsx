export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main Hello World Message */}
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Hello, World!
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Welcome to your beautiful Next.js application. This is a modern, responsive Hello World built with TypeScript and Tailwind CSS.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Next.js</h3>
            <p className="text-gray-600 text-sm">
              Built with the React framework for production-ready applications
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">TypeScript</h3>
            <p className="text-gray-600 text-sm">
              Type-safe development with enhanced developer experience
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <div className="w-6 h-6 bg-pink-500 rounded-full"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Tailwind CSS</h3>
            <p className="text-gray-600 text-sm">
              Beautiful, responsive styling with utility-first CSS framework
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <span>Ready to build amazing things!</span>
            <div className="ml-3 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Built with ❤️ using modern web technologies
          </p>
        </div>
      </div>
    </div>
  );
}