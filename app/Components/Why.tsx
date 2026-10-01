export default function Why() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        
        {/* Left Section: Text and CTA */}
        <div className="flex-1 w-full lg:w-1/3 text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
            What can you expect from us?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mb-2">
            We create <span className="font-semibold">campaigns</span> that look great and work even better, with consistency you can rely on.
          </p>
          <p className="text-orange-500 font-medium mb-8">
            Ritz Media World , your advertising partner in Noida.
          </p>
          <button className="border border-orange-500 text-slate-800 font-medium px-6 py-3 rounded hover:bg-orange-50 transition duration-300">
            Click to know more
          </button>
        </div>

        {/* Center Section: Image */}
        <div className="flex-1 flex justify-center w-full lg:w-1/3">
          {/* Replace src with your actual lightbulb image asset */}
           <img 
            src="/why.jpeg" 
            alt="Lightbulb with butterflies representing creative campaigns" 
            className="w-64 h-auto object-contain" 
            />
        </div>

        {/* Right Section: Stats Grid */}
        <div className="flex-1 w-full lg:w-1/3 grid grid-cols-2 border-slate-200">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center p-6 border-b border-r border-slate-300">
            <span className="text-4xl sm:text-5xl font-extrabold text-indigo-950 mb-2">1M+</span>
            <span className="text-sm font-medium text-slate-600 text-center">Campaigns Executed</span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center p-6 border-b border-slate-300">
            <span className="text-4xl sm:text-5xl font-extrabold text-indigo-950 mb-2">1K+</span>
            <span className="text-sm font-medium text-slate-600 text-center">Happy Clients</span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center p-6 border-r border-slate-300">
            <span className="text-4xl sm:text-5xl font-extrabold text-indigo-950 mb-2">500+</span>
            <span className="text-sm font-medium text-slate-600 text-center">Solutions</span>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center justify-center p-6">
            <span className="text-4xl sm:text-5xl font-extrabold text-indigo-950 mb-2">1B+</span>
            <span className="text-sm font-medium text-slate-600 text-center">Impressions</span>
          </div>

        </div>
      </div>
    </section>
  );
}