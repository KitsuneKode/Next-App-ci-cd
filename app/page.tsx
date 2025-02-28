export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-12 row-start-2 items-center max-w-4xl">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Continuous Integration & Delivery
          </h1>
          <p className="text-lg sm:text-xl text-slate-300">
            Automate, Deploy, and Scale with Confidence
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
          {[
            {
              title: 'Automated Testing',
              icon: '🧪',
              description: 'Catch bugs early with automated testing pipelines',
            },
            {
              title: 'Quick Deployment',
              icon: '🚀',
              description: 'Deploy to production in minutes, not days',
            },
            {
              title: 'Monitoring',
              icon: '📊',
              description: "Real-time insights into your application's health",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl bg-slate-700/30 backdrop-blur-sm border border-slate-600 hover:border-cyan-500 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-6 items-center flex-col sm:flex-row mt-8">
          <a
            className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 px-8 py-3 font-semibold text-white flex items-center gap-2"
            href="#get-started"
          >
            <span>Get Started</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
          <a
            className="rounded-full border border-slate-600 hover:border-cyan-500 px-8 py-3 transition-all duration-300"
            href="#learn-more"
          >
            Learn More
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-slate-400">
        <a
          className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
          href="#documentation"
        >
          Documentation
        </a>
        <a
          className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
          href="#github"
        >
          GitHub
        </a>
        <a
          className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
          href="#community"
        >
          Community
        </a>
      </footer>
    </div>
  );
}
