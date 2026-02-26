import { useNavigate } from "react-router-dom";
import vid from "../assests/Videos/2887463-hd_1920_1080_25fps.mp4";
function Footer({ data }) {
  const nav = useNavigate();
  return (
    <div>
      <div className="d min-h-screen text-white rounded-br-2xl">
        <header className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-6 gap-4">
          <h1 className="text-3xl font-bold">Your Money</h1>

          <nav className="flex items-center gap-6">
            <p onclick={() => nav("/")}>Home</p>
            <p onClick={() => nav("/Products")}>Products</p>
            <p onClick={() => nav("/Solutions")}>Solutions</p>
            <p onClick={() => nav("/Developers")}>Developers</p>
            <p onClick={() => nav("/Pricing")}>Pricing</p>
            <button className="border border-white px-4 py-2 rounded-full">
              Sign in
            </button>
          </nav>
        </header>

        <section className="max-w-3xl mx-auto text-center mt-28">
          <div>
            <div>
              <h2 className="text-5xl font-extrabold mb-6">
                Financial infrastructure to grow your revenue
              </h2>
              <p className="text-lg opacity-90">
                Millions of businesses use Stripe to accept payments, manage
                revenue, and grow faster.
              </p>

              <div className="mt-8 flex justify-center gap-4">
                <button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-medium">
                  Start now
                </button>
                <button className="border border-white px-6 py-3 rounded-full">
                  Contact sales
                </button>
              </div>
            </div>
            <section className="max-w-6xl mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <img
                  src="https://plus.unsplash.com/premium_vector-1720931652710-7bfbe41ae29a?w=352&dpr=2&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
                  alt="stripe"
                  className="h-96 rounded-full ml-[550px] border shadow-[black] shadow-2xl -m-14 h-64 md:h-96 rounded-full shadow-2xl "
                ></img>
              </div>
            </section>
          </div>
        </section>

        <section className="relative m-5">
          <div className="max-w-7xl mx-auto grid grid-cols-2 gap-16 py-32">
            <div className="sticky top-24 h-fit">
              <img
                src="https://plus.unsplash.com/premium_photo-1681400699241-834781696dc6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhpJTIwdGVjaHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Payment"
                className="rounded-3xl shadow-xl h-[400px] w-[600px]"
              />
            </div>

            <div className="space-y-32">
              <div>
                <h6 className="text-white py-5">Modular solutions</h6>
                <h2 className="text-5xl font-bold mb-4 font-extrabold text-black ">
                  A fully integrated suite of financial and payments products
                </h2>
                <p className="text-black py-6 font-serif text-opacity-100">
                  Reduce costs, grow revenue, and run your business more
                  efficiently on a fully integrated, AI-powered platform. Use
                  Stripe to handle all of your payments-related needs, manage
                  revenue operations, and launch (or invent) new business
                  models.
                </p>
              </div>

              <div>
                <h6 className="text-white py-5">Payments</h6>
                <h2 className="text-5xl font-bold mb-4  text-black ">
                  Accept and optimise payments, globally
                </h2>
                <p className="text-black py-6 font-serif text-opacity-100">
                  Increase authorisation rates, offer local payment methods to
                  boost conversion, and reduce fraud using AI.
                </p>
                <button
                  onClick={() => alert(data)}
                  className="text-white bg-indigo-600 px-6 py-3 rounded-full font-medium "
                >
                  Start with Payment
                </button>
              </div>
              <div className="py-5">
                <p className="font-medium text-black">See also</p>
                <h2 className="text-black font-serif">
                  <span className="text-[navy] font-extrabold">Tax</span> for
                  automating tax registration, collection, and filing
                </h2>
                <h2 className="text-black font-serif">
                  <span className="text-[navy] font-extrabold">Radar</span> for
                  AI-powered fraud protection
                </h2>
                <h2 className="text-black font-serif">
                  <span className="text-[navy] font-extrabold">Terminal</span>{" "}
                  for custom in-person payments
                </h2>
              </div>

              <div>
                <h6 className="text-white py-5">Billing</h6>
                <h2 className="text-5xl font-bold mb-4 font-extrabold text-black ">
                  Capture recurring revenue
                </h2>
                <p className="text-black py-6 font-serif text-opacity-100">
                  Manage flat rate, usage-based, and hybrid pricing models,
                  minimise churn, and automate finance operations.
                </p>
                <button className="text-white bg-indigo-600 px-6 py-3 rounded-full font-medium ">
                  Start with Billing{" "}
                </button>
              </div>
              <div className="py-5">
                <p className="font-medium text-black">See also</p>
                <h2 className="text-black font-serif">
                  <span className="text-[navy] font-extrabold">Tax</span> for
                  automating tax registration, collection, and filing
                </h2>
                <h2 className="text-black font-serif">
                  <span className="text-[navy] font-extrabold">Radar</span> for
                  AI-powered fraud protection
                </h2>
                <h2 className="text-black font-serif">
                  <span className="text-[navy] font-extrabold">Terminal</span>{" "}
                  for custom in-person payments
                </h2>
              </div>
              <div>
                <h6 className="text-white py-5">Connect</h6>
                <h2 className="text-5xl font-bold mb-4 font-extrabold text-black ">
                  Set up multi-party payments and payouts
                </h2>
                <p className="text-black py-6 font-serif text-opacity-100">
                  Integrate payments into your platform or marketplace for
                  end-to-end payments experiences.
                </p>
                <button className="text-white bg-indigo-600 px-6 py-3 rounded-full font-medium ">
                  Start with Connect{" "}
                </button>
              </div>
              <div className="py-5">
                <p className="font-medium text-black">See also</p>
                <h2 className="text-black font-serif">
                  <span className="text-[navy] font-extrabold">Tax</span> for
                  automating tax registration, collection, and filing
                </h2>
                <h2 className="text-black font-serif">
                  <span className="text-[navy] font-extrabold">Radar</span> for
                  AI-powered fraud protection
                </h2>
                <h2 className="text-black font-serif">
                  <span className="text-[navy] font-extrabold">Terminal</span>{" "}
                  for custom in-person payments
                </h2>
              </div>
              <div>
                <h6 className="text-black py-5">Issuing</h6>
                <h2 className="text-5xl font-bold mb-4 font-extrabold text-black ">
                  Create a card issuing program
                </h2>
                <p className="text-black py-6 font-serif text-opacity-100">
                  Launch, manage, and scale a commercial card programme without
                  any setup fees.
                </p>
                <button className="text-white bg-indigo-600 px-6 py-3 rounded-full font-medium ">
                  Start with Issuing{" "}
                </button>
              </div>
              <div className="py-5">
                <p className="font-medium text-black">See also</p>
                <h2 className="text-black font-serif">
                  <span className="text-[navy] font-extrabold">Tax</span> for
                  automating tax registration, collection, and filing
                </h2>
                <h2 className="text-black font-serif">
                  <span className="text-[navy] font-extrabold">Radar</span> for
                  AI-powered fraud protection
                </h2>
                <h2 className="text-black font-serif">
                  <span className="text-[navy] font-extrabold">Terminal</span>{" "}
                  for custom in-person payments
                </h2>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="relative w-full overflow-hidden ">
        <div className="flex justify-center">
          <img
            className="w-full  max-w-[1400px] h-[400px] sm:h-[500px] lg:h-[700px] object-cover rounded-ss-[40%]"
            src="https://plus.unsplash.com/premium_photo-1673474112205-037558e54995?w=600&auto=format&fit=crop&q=60"
            alt="earth"
          />
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-xl">
              <h6 className="text-white font-extrabold  text-sm font-semibold mb-4">
                <span className="ms-11">Global scale</span>
              </h6>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
                The backbone for global commerce
              </h2>

              <p className="text-white text-sm sm:text-base mb-6">
                Stripe makes moving money as easy and programmable as moving
                data. Our teams are based in offices around the world and we
                process hundreds of billions of dollars each year for ambitious
                businesses of all sizes.
              </p>

              <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition">
                Start with Issuing
              </button>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              <div>
                <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                  500M+
                </h1>
                <p className="text-white text-sm mt-2">
                  API requests per day, peaking at 1300 requests per second
                </p>
              </div>

              <div>
                <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                  99.999%
                </h1>
                <p className="text-white text-sm mt-2">
                  Historical uptime for Stripe services
                </p>
              </div>

              <div>
                <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                  47+
                </h1>
                <p className="text-white text-sm mt-2">
                  Countries with local acquiring
                </p>
              </div>

              <div>
                <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                  35+
                </h1>
                <p className="text-white text-sm mt-2">
                  Currencies and payment methods supported
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-10">
            Built for any business
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="flex flex-col items-start gap-4 p-6 border  border-sky-800 rounded-xl hover:shadow-lg transition">
              <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white">
                💳
              </div>
              <h3 className="text-xl font-semibold">Global Payments</h3>
              <p className="text-gray-600">
                Accept payments anywhere around the world with 100+ methods
                including cards and wallets.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 p-6 border rounded-xl hover:shadow-lg transition">
              <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white">
                📦
              </div>
              <h3 className="text-xl font-semibold">Billing & Invoicing</h3>
              <p className="text-gray-600">
                Automate recurring invoices and reduce manual work with flexible
                billing tools.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 p-6 border rounded-xl hover:shadow-lg transition">
              <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white">
                🔌
              </div>
              <h3 className="text-xl font-semibold">Developer Tools</h3>
              <p className="text-gray-600">
                Integrate in minutes with prebuilt UIs like Checkout or Elements
                and extensive APIs.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 p-6 border rounded-xl hover:shadow-lg transition">
              <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white">
                🛡️
              </div>
              <h3 className="text-xl font-semibold">Fraud Protection</h3>
              <p className="text-gray-600">
                Built-in security features help you detect and prevent
                fraudulent transactions.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 p-6 border rounded-xl hover:shadow-lg transition">
              <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white">
                🌍
              </div>
              <h3 className="text-xl font-semibold">Multi-Currency</h3>
              <p className="text-gray-600">
                Charge customers in their local currency and expand globally
                with ease.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 p-6 border rounded-xl hover:shadow-lg transition">
              <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white">
                📊
              </div>
              <h3 className="text-xl font-semibold">Reporting & Analytics</h3>
              <p className="text-gray-600">
                Get detailed analytics and reporting to track performance and
                revenue.
              </p>
            </div>
            <div className="flex">
              <div>
                <h6 className="text-[navy] font-semibold py-5">
                  Enterprise reinvention
                </h6>
                <h2 className="text-5xl font-bold mb-4 font-extrabold text-black ">
                  Create a card issuing program
                </h2>
                <p className="text-black py-6 font-serif text-opacity-100">
                  Launch, manage, and scale a commercial card programme without
                  any setup fees.
                </p>
                <button className="text-white bg-indigo-600 px-6 py-3 rounded-full font-medium ">
                  Start with Issuing{" "}
                </button>
              </div>
              <div className="ps-64 pt-16 sm:[]300px lg:[700px]">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/3XG2FM_LC0U?si=WFREEGBvYnElhr5N"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="m-10 p-10 justify-start">
          <h6 className="text-blue-950 text-2xl font-semibold mb-4">
            Global scale
          </h6>

          <h2 className="text-5xl font-extrabold text-black mb-4">
            The backbone for global commerce
          </h2>

          <p className="text-black text-base font-serif mb-6">
            Stripe makes moving money as easy and programmable as moving data.
            Our teams are based in offices around the world and we process
            hundreds of billions of dollars each year for ambitious businesses
            of all sizes.
          </p>
        </div>
      </section>

      <div className="flex m-5 gap-9 -mt-20">
        <div className="w-[900px] group cursor-pointer">
          <div className=" border border-grey bg-[#f6f9fc] h-[600px] rounded-2xl p-5 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
            <div className="overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="card"
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="mt-5 transition-all duration-500 group-hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-gray-900">
                Incorporate your company
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Form a legal entity, issue stock, and start accepting payments.
              </p>
              <button className="text-white m-3 bg-indigo-600 px-2 py-1 rounded-full font-medium ">
                Start with Issuing{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="w-[900px] group cursor-pointer">
          <div className="border border-grey bg-[#f6f9fc] rounded-2xl p-5 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
            <div className="overflow-hidden rounded-xl">
              <img
                src="https://plus.unsplash.com/premium_photo-1661632719577-fe0d4bcf3a83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXQlMjBjb25zdWx0YW50fGVufDB8fDB8fHww"
                alt="card"
                className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="mt-5 transition-all duration-500 group-hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-gray-900">
                Validate your idea
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Test your product idea by launching payments with little to no
                code.
              </p>
              <button className="text-white bg-indigo-600 px-2 py-1 m-3 rounded-full font-medium ">
                Start with Issuing{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex m-5 gap-9 -mt-20">
        <div className="w-[600px] group cursor-pointer">
          <div className=" mt-28 border border-grey  bg-[#f6f9fc] rounded-2xl p-5 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
            <div className="overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1573165265437-f5e267bb3db6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXQlMjBjb25zdWx0YW50fGVufDB8fDB8fHww"
                alt="card"
                className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="mt-5 transition-all duration-500 group-hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-gray-900">
                Sell products and services
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Launch a business with a prebuilt payment page that’s optimised
                for conversion.
              </p>
              <button className="text-white bg-indigo-600 px-2 py-1 m-3 rounded-full font-medium ">
                Start with Issuing{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="w-[600px] group cursor-pointer">
          <div className="-m-30 ml-15 -mt-24 border border-grey bg-[#f6f9fc] rounded-2xl p-5 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
            <div className="overflow-hidden rounded-xl">
              <img
                src="https://plus.unsplash.com/premium_photo-1667220809476-9044d61719de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aXQlMjBjb25zdWx0YW50fGVufDB8fDB8fHww"
                alt="card"
                className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="mt-5 transition-all duration-500 group-hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-gray-900">
                Launch any pricing model
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Offer usage-based billing to charge customers based on how much
                they use.
              </p>
              <button className="text-white bg-indigo-600 px-2 py-1 m-3 rounded-full font-medium ">
                Start with Issuing{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="m-0 bg-[#0a2540] h-[570px]">
        <div className="flex gap-0 m-0 relative">
          <div className="p-10">
            <h6 className="text-white font-semibold py-5">
              Enterprise reinvention
            </h6>
            <h2 className="text-5xl font-bold mb-4 font-extrabold text-white">
              Create a card issuing program
            </h2>
            <p className="text-white py-6 font-serif text-opacity-100">
              Launch, manage, and scale a commercial card programme without any
              setup fees.
            </p>
            <button className="text-white bg-indigo-600 px-6 py-3 rounded-full font-medium">
              Start with Issuing
            </button>
          </div>

          <div className="m-0">
            <video
              className="w-screen h-screen h-96 object-cover "
              src={vid}
              autoPlay
              loop
              muted
            ></video>
          </div>
        </div>
      </section>

      <section>
        <div className="flex m-5 gap-9 mt-20">
          <div className="w-[900px] group cursor-pointer">
            <div className="bg-[#f6f9fc] h-[600px] rounded-2xl p-5 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
              <div className="overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                  alt="card"
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-5 transition-all duration-500 group-hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-gray-900">
                  Incorporate your company
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Form a legal entity, issue stock, and start accepting
                  payments.
                </p>
                <button className="text-white m-3 bg-indigo-600 px-2 py-1 rounded-full font-medium ">
                  Start with Issuing{" "}
                </button>
              </div>
            </div>
          </div>

          <div className="w-[900px] group cursor-pointer">
            <div className="bg-[#f6f9fc] h-[600px] rounded-2xl p-5 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
              <div className="overflow-hidden rounded-xl">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661632719577-fe0d4bcf3a83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXQlMjBjb25zdWx0YW50fGVufDB8fDB8fHww"
                  alt="card"
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-5 transition-all duration-500 group-hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-gray-900">
                  Validate your idea
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Test your product idea by launching payments with little to no
                  code.
                </p>
                <button className="text-white bg-indigo-600 px-2 py-1 m-3 rounded-full font-medium ">
                  Start with Issuing{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="bg-[#0a2540] text-gray-300 py-16">
        <div class="max-w-7xl mx-auto px-6">
          <div
            class="grid  grid grid-cols-1 md:grid-cols-2 gap-10
grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 text-sm"
          >
            <div>
              <h4 class="text-white font-semibold mb-4">Products & Pricing</h4>
              <ul class="space-y-2">
                <li>Pricing</li>
                <li>Atlas</li>
                <li>Billing</li>
                <li>Capital</li>
                <li>Checkout</li>
                <li>Payments</li>
                <li>Radar</li>
                <li>Tax</li>
                <li>Terminal</li>
              </ul>
            </div>

            <div>
              <h4 class="text-white font-semibold mb-4">Solutions</h4>
              <ul class="space-y-2">
                <li>Enterprises</li>
                <li>Startups</li>
                <li>SaaS</li>
                <li>E-commerce</li>
                <li>Marketplaces</li>
                <li>Platforms</li>
                <li>Crypto</li>
                <li>AI companies</li>
              </ul>
            </div>

            <div>
              <h4 class="text-white font-semibold mb-4">Developers</h4>
              <ul class="space-y-2">
                <li>Documentation</li>
                <li>API reference</li>
                <li>API status</li>
                <li>Libraries & SDKs</li>
                <li>Stripe Sigma</li>
                <li>Developer blog</li>
              </ul>
            </div>

            <div>
              <h4 class="text-white font-semibold mb-4">Resources</h4>
              <ul class="space-y-2">
                <li>Guides</li>
                <li>Customer stories</li>
                <li>Blog</li>
                <li>Sessions conference</li>
                <li>Privacy & terms</li>
                <li>Licences</li>
              </ul>
            </div>

            <div>
              <h4 class="text-white font-semibold mb-4">Company</h4>
              <ul class="space-y-2">
                <li>Jobs</li>
                <li>Newsroom</li>
                <li>Stripe Press</li>
                <li>Contact sales</li>
              </ul>
            </div>

            <div>
              <h4 class="text-white font-semibold mb-4">Support</h4>
              <ul class="space-y-2">
                <li>Help center</li>
                <li>Get support</li>
                <li>Managed support plans</li>
                <li>Sign in</li>
              </ul>
            </div>
          </div>

          <div class="border-t border-gray-600 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p>© 2025 Stripe-style footer clone. Built for learning.</p>
            <div class="flex gap-4 mt-4 md:mt-0">
              <span>India</span>
              <span>English</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
