import React from "react";

function App() {
    return (
        <div className="bg-black min-h-screen font-sans text-slate-200 relative overflow-hidden">

            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-[radial-gradient(circle,rgba(88,65,255,0.1)_0%,transparent_70%)] pointer-events-none"></div>

            {/* Navbar */}
            <nav className="navbar sticky top-0 z-50 backdrop-blur-md border-b border-[#1f1f1f] px-6 bg-black/60">
                <div className="flex-1">
                    <a className="font-bold tracking-tight text-xl flex items-center gap-2">
                        <span className="w-8 h-8 bg-[#5841FF] rounded flex items-center justify-center text-white">
                            P
                        </span>
                        Pointrr
                    </a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 font-medium">
                        <li>
                            <a
                                href="https://docs.pointrr.dev"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Docs
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Main */}
            <main className="relative z-10 flex flex-col items-center justify-center px-6 pt-24 pb-12 text-center">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1f1f1f] bg-[#0a0a0a] mb-8">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5841FF] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5841FF]"></span>
                    </span>
                    <span className="text-xs font-mono">v1.0.0 is live</span>
                </div>

                {/* Hero */}
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent max-w-4xl">
                    Helping bring your project to life for free.
                </h1>

                <p className="text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
                    Get a domain on{" "}
                    <code className="font-mono text-[#5841FF] bg-[#5841FF]/10 px-2 py-1 rounded">
                        *.pointrr.dev
                    </code>{" "}
                    today and deploy your static site or app in seconds.
                </p>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-20">
                    <button
                        onClick={() => window.location.href = 'https://app.pointrr.org/join'}
                        className="px-8 py-3 bg-[#5841FF] text-white rounded-md hover:shadow-[0_0_20px_rgba(88,65,255,0.4)] transition-all">
                        Claim your domain
                    </button>
                    <button
                        onClick={() => window.location.href = 'https://app.pointrr.org/faq'}
                        className="px-8 py-3 border border-[#1f1f1f] hover:bg-[#0a0a0a] rounded-md">
                        Learn More
                    </button>
                </div>

                {/* Cards */}
                <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="border border-[#1f1f1f] bg-[#0a0a0a] p-6 text-left rounded">
                        <h3 className="font-bold mb-2">Instant Setup</h3>
                        <p className="text-sm text-slate-400">
                            Deploy via GitHub Pages (via redirect) or Vercel and we'll map your pointrr.dev subdomain in seconds.
                        </p>
                    </div>

                    <div className="border border-[#1f1f1f] bg-[#0a0a0a] p-6 text-left rounded">
                        <h3 className="font-bold mb-2">SSL Included</h3>
                        <p className="text-sm text-slate-400">
                            All subdomains come with automatic HTTPS via our global CDN edge network.
                        </p>
                    </div>

                    <div className="border border-[#1f1f1f] bg-[#0a0a0a] p-6 text-left rounded">
                        <h3 className="font-bold mb-2">Always Free</h3>
                        <p className="text-sm text-slate-400">
                            Our mission is to support the maker community. Your base subdomain will always be free.
                        </p>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="text-center py-10 text-xs text-slate-600 border-t border-[#1f1f1f] mt-12 bg-[#0a0a0a]">
                © 2026 Pointrr • A Coding Neanderthals Project
            </footer>
        </div>
    );
}

export default App;