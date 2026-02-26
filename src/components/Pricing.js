

function Pricing() {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-20">
    
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Simple, transparent pricing
        </h1>
        <p className="text-gray-300 text-base sm:text-lg">
          Pay only for what you use. No setup fees, no hidden costs.
        </p>
      </div>

 
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        
    
        <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
          <h2 className="text-xl font-semibold mb-2">Starter</h2>
          <p className="text-gray-400 text-sm mb-6">
            Best for individuals and small projects
          </p>

          <h3 className="text-4xl font-extrabold mb-4">
            2.5% <span className="text-base font-normal">+ ₹3</span>
          </h3>

          <ul className="text-gray-300 text-sm space-y-3 mb-6">
            <li>✔ Online payments</li>
            <li>✔ Basic fraud protection</li>
            <li>✔ Email support</li>
          </ul>

          <button className="w-full bg-indigo-600 py-3 rounded-full font-medium hover:bg-indigo-700 transition">
            Get started
          </button>
        </div>

    
        <div className="bg-zinc-900 p-8 rounded-2xl border border-indigo-600 relative">
          <span className="absolute top-4 right-4 text-xs bg-indigo-600 px-3 py-1 rounded-full">
            Popular
          </span>

          <h2 className="text-xl font-semibold mb-2">Business</h2>
          <p className="text-gray-400 text-sm mb-6">
            For growing businesses and startups
          </p>

          <h3 className="text-4xl font-extrabold mb-4">
            2.0% <span className="text-base font-normal">+ ₹2</span>
          </h3>

          <ul className="text-gray-300 text-sm space-y-3 mb-6">
            <li>✔ International payments</li>
            <li>✔ Advanced fraud detection</li>
            <li>✔ Priority support</li>
          </ul>

          <button className="w-full bg-indigo-600 py-3 rounded-full font-medium hover:bg-indigo-700 transition">
            Start free
          </button>
        </div>

        <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
          <h2 className="text-xl font-semibold mb-2">Enterprise</h2>
          <p className="text-gray-400 text-sm mb-6">
            Custom solutions for large companies
          </p>

          <h3 className="text-4xl font-extrabold mb-4">
            Custom
          </h3>

          <ul className="text-gray-300 text-sm space-y-3 mb-6">
            <li>✔ Volume discounts</li>
            <li>✔ Dedicated account manager</li>
            <li>✔ SLA & compliance support</li>
          </ul>

          <button className="w-full border border-indigo-600 py-3 rounded-full font-medium hover:bg-indigo-600 transition">
            Contact sales
          </button>
        </div>

      </div>
    </div>
  );
}

export default Pricing;
