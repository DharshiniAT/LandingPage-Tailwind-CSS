function Developers() {
  let a = {
    name: "gyuyu",
    age: 78,
  };
  return (
    <div className="bg-black text-white min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Built for developers
        </h1>
        <p className="text-gray-300 text-base sm:text-lg">
          Simple APIs, clear documentation, and powerful tools
          to build and scale faster. 
          
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="bg-zinc-900 p-8 rounded-2xl hover:bg-zinc-800 transition">
          <h2 className="text-xl font-semibold mb-3">Easy APIs</h2>
          <p className="text-gray-400 text-sm mb-6">
            Clean, RESTful APIs with predictable responses and detailed error
            handling.
          </p>
          <span className="text-indigo-400 font-medium">View API docs →</span>
        </div>

        <div className="bg-zinc-900 p-8 rounded-2xl hover:bg-zinc-800 transition">
          <h2 className="text-xl font-semibold mb-3">Quick Integration</h2>
          <p className="text-gray-400 text-sm mb-6">
            Start accepting payments in minutes using SDKs and examples.
          </p>
          <span className="text-indigo-400 font-medium">Get started →</span>
        </div>

        <div className="bg-zinc-900 p-8 rounded-2xl hover:bg-zinc-800 transition">
          <h2 className="text-xl font-semibold mb-3">Webhooks</h2>
          <p className="text-gray-400 text-sm mb-6">
            Stay in sync with real-time events using secure webhooks.
          </p>
          <span className="text-indigo-400 font-medium">Learn webhooks →</span>
        </div>

        <div className="bg-zinc-900 p-8 rounded-2xl hover:bg-zinc-800 transition">
          <h2 className="text-xl font-semibold mb-3">Testing Tools</h2>
          <p className="text-gray-400 text-sm mb-6">
            Simulate payments and edge cases using built-in test modes.
          </p>
          <span className="text-indigo-400 font-medium">Try test mode →</span>
        </div>

        <div className="bg-zinc-900 p-8 rounded-2xl hover:bg-zinc-800 transition">
          <h2 className="text-xl font-semibold mb-3">Libraries & SDKs</h2>
          <p className="text-gray-400 text-sm mb-6">
            Official libraries for JavaScript, Python, Java, and more.
          </p>
          <span className="text-indigo-400 font-medium">Explore SDKs →</span>
        </div>

        <div className="bg-zinc-900 p-8 rounded-2xl hover:bg-zinc-800 transition">
          <h2 className="text-xl font-semibold mb-3">Security First</h2>
          <p className="text-gray-400 text-sm mb-6">
            Built-in encryption, compliance, and fraud prevention tools.
          </p>
          <span className="text-indigo-400 font-medium">Learn security →</span>
        </div>
      </div>
    </div>
  );
}

export default Developers;
