import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white text-center py-20 sm:py-32">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 leading-tight">
            Build Your Professional Website <br />
            <span className="text-blue-600">in Minutes with AI</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Just describe your business, and our AI will generate a stunning, mobile-friendly website for you. No coding required.
          </p>
          <div className="mt-8">
            <Link href="/create" className="bg-blue-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-blue-700">
              Create Your Website Now
            </Link>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">How It Works in 3 Simple Steps</h2>
          <p className="text-center text-gray-600 mb-12">Building your dream website has never been easier.</p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl text-blue-600 mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Describe Your Business</h3>
              <p className="text-gray-600">Tell our AI about your business, what you do, and what style you like.</p>
            </div>
            {/* Step 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl text-blue-600 mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">AI Generates Your Site</h3>
              <p className="text-gray-600">Our powerful AI will instantly generate a unique, professional website based on your description.</p>
            </div>
            {/* Step 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl text-blue-600 mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Launch and Grow</h3>
              <p className="text-gray-600">Publish your new website with one click and start attracting new customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Choose From Professional Templates</h2>
          {/* This part will be dynamic later */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="shadow-lg rounded-lg overflow-hidden">
                <img src="https://placehold.co/600x400/3B82F6/FFFFFF?text=Corporate" alt="Corporate Template" className="w-full h-48 object-cover" />
                <div className="p-6">
                    <h3 className="font-bold text-xl">Corporate Sites</h3>
                </div>
            </div>
            <div className="shadow-lg rounded-lg overflow-hidden">
                <img src="https://placehold.co/600x400/10B981/FFFFFF?text=E-commerce" alt="E-commerce Template" className="w-full h-48 object-cover" />
                <div className="p-6">
                    <h3 className="font-bold text-xl">E-commerce Stores</h3>
                </div>
            </div>
            <div className="shadow-lg rounded-lg overflow-hidden">
                <img src="https://placehold.co/600x400/F59E0B/FFFFFF?text=Portfolio" alt="Portfolio Template" className="w-full h-48 object-cover" />
                <div className="p-6">
                    <h3 className="font-bold text-xl">Personal Portfolios</h3>
                </div>
            </div>
          </div>
           <div className="text-center mt-12">
                <Link href="/portfolio" className="text-blue-600 font-semibold text-lg hover:underline">
                    View All Templates →
                </Link>
            </div>
        </div>
      </section>
    </>
  );
}