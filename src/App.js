import React from 'react';
import './App.css';


function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header / Logo Section */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-indigo-600 tracking-tight">
              Pointrr
            </span>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Add a demo subdomain to show your aws server works using <span className="text-indigo-600">SSL</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Sometimes using Ngrok (Tunnel) is not allowed at school (or work).  
          Point your project at Your-Project-App.Pointrr.dev today!
	   </p>

          {/* Call to Action */}
          <div className="mt-10 flex justify-center">
            <a
              href="https://docs.google.com/forms/your-google-doc-link-here"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition-colors shadow-lg"
            >
              Sign Up
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
