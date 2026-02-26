

function Products() {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-20">
      
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Products built for modern businesses
        </h1>
        <p className="text-gray-300 text-base sm:text-lg">
          Powerful APIs and tools to accept payments, send payouts,
          and manage your business globally.
        </p>
      </div>

      
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        
        
        <div className="bg-zinc-900 p-8 rounded-2xl hover:bg-zinc-800 transition">
          <h2 className="text-xl font-semibold mb-3">Payments</h2>
          <p className="text-gray-400 text-sm mb-6">
            Accept cards, wallets, and bank payments worldwide
            with a single integration.
          </p>
          <button className="text-indigo-400 font-medium hover:underline">
            Learn more →
          </button>
        </div>

        
        <div className="bg-zinc-900 p-8 rounded-2xl hover:bg-zinc-800 transition">
          <h2 className="text-xl font-semibold mb-3">Billing</h2>
          <p className="text-gray-400 text-sm mb-6">
            Manage subscriptions, invoices, and recurring payments
            effortlessly.
          </p>
          <button className="text-indigo-400 font-medium hover:underline">
            Learn more →
          </button>
        </div>

        
        <div className="bg-zinc-900 p-8 rounded-2xl hover:bg-zinc-800 transition">
          <h2 className="text-xl font-semibold mb-3">Connect</h2>
          <p className="text-gray-400 text-sm mb-6">
            Build platforms and marketplaces with secure
            multi-party payments.
          </p>
          <button className="text-indigo-400 font-medium hover:underline">
            Learn more →
          </button>
        </div>

    
        <div className="bg-zinc-900 p-8 rounded-2xl hover:bg-zinc-800 transition">
          <h2 className="text-xl font-semibold mb-3">Issuing</h2>
          <p className="text-gray-400 text-sm mb-6">
            Create and manage virtual or physical cards
            with complete control.
          </p>
          <button className="text-indigo-400 font-medium hover:underline">
            Learn more →
          </button>
        </div>

        
        <div className="bg-zinc-900 p-8 rounded-2xl hover:bg-zinc-800 transition">
          <h2 className="text-xl font-semibold mb-3">Treasury</h2>
          <p className="text-gray-400 text-sm mb-6">
            Automate financial workflows and manage funds
            at scale.
          </p>
          <button className="text-indigo-400 font-medium hover:underline">
            Learn more →
          </button>
        </div>

        
        <div className="bg-zinc-900 p-8 rounded-2xl hover:bg-zinc-800 transition">
          <h2 className="text-xl font-semibold mb-3">Radar</h2>
          <p className="text-gray-400 text-sm mb-6">
            Protect your business from fraud using
            machine-learning-powered tools.
          </p>
          <button className="text-indigo-400 font-medium hover:underline">
            Learn more →
          </button>
        </div>

      </div>
    </div>
  );
}

export default Products;
