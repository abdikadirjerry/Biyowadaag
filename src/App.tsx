function App() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-16 sm:px-8 lg:px-12">
        <div className="w-full">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              Biyo · Water Issue Reporting Platform
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Report water problems.
              <span className="block text-cyan-600">
                Help communities respond.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Biyo is a platform for reporting, tracking, and managing
              water-related issues so communities and organizations can
              understand problems and respond more effectively.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="rounded-lg bg-cyan-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2"
              >
                Report an issue
              </button>

              <button
                type="button"
                className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
              >
                Explore issues
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
