import BusinessCard from '@/components/BusinessCard';
import AnimatedName from '@/components/AnimatedName';

// Define expertise color schemes with blue variations
const expertiseColors = {
  frontend: {
    border: 'border-blue-400',
    bg: 'bg-blue-400/10',
    hover: 'hover:border-blue-400',
    text: 'text-blue-400',
    tag: 'bg-blue-900/60'
  },
  python: {
    border: 'border-blue-500',
    bg: 'bg-blue-500/10',
    hover: 'hover:border-blue-500',
    text: 'text-blue-500',
    tag: 'bg-blue-900/70'
  },
  modeling: {
    border: 'border-blue-600',
    bg: 'bg-blue-600/10',
    hover: 'hover:border-blue-600',
    text: 'text-blue-600',
    tag: 'bg-blue-900/80'
  },
  accounting: {
    border: 'border-blue-700',
    bg: 'bg-blue-700/10',
    hover: 'hover:border-blue-700',
    text: 'text-blue-700',
    tag: 'bg-blue-900/90'
  }
};

export default function Home() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-6 py-24 space-y-32">
      {/* Intro Section */}
      <section className="space-y-6">
        <h1 className="text-5xl font-bold">
          Hi, I&apos;m <AnimatedName /> 👋
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          I&apos;m a developer and designer focused on creating functional tools, from store management systems to finance and inventory tracking solutions. 
          I&apos;m motivated by problem-solving and enjoy building applications that meet specific user needs.
        </p>
      </section>

      {/* Expertise Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`p-6 border rounded-lg transition-colors ${expertiseColors.frontend.border} ${expertiseColors.frontend.bg} ${expertiseColors.frontend.hover}`}>
            <h3 className="text-xl font-bold mb-2">Front-end Development</h3>
            <p className="text-gray-400">
              HTML, CSS, JavaScript, React, Next.js
            </p>
          </div>
          
          <div className={`p-6 border rounded-lg transition-colors ${expertiseColors.python.border} ${expertiseColors.python.bg} ${expertiseColors.python.hover}`}>
            <h3 className="text-xl font-bold mb-2">Python GUI Development</h3>
            <p className="text-gray-400">
              PyQt, Tkinter, Custom Applications
            </p>
          </div>
          
          <div className={`p-6 border rounded-lg transition-colors ${expertiseColors.modeling.border} ${expertiseColors.modeling.bg} ${expertiseColors.modeling.hover}`}>
            <h3 className="text-xl font-bold mb-2">3D Artist</h3>
            <p className="text-gray-400">
              Modeling, Designing, Animation
            </p>
          </div>
          
          <div className={`p-6 border rounded-lg transition-colors ${expertiseColors.accounting.border} ${expertiseColors.accounting.bg} ${expertiseColors.accounting.hover}`}>
            <h3 className="text-xl font-bold mb-2">Accounting</h3>
            <p className="text-gray-400">
              Financial Analysis, Bookkeeping, Business Management
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Frontend Project */}
          <div className={`group p-6 border rounded-lg transition-colors ${expertiseColors.frontend.border} ${expertiseColors.frontend.bg} ${expertiseColors.frontend.hover}`}>
            <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
            <p className="text-gray-400 mb-4">Personal portfolio built with Next.js and TailwindCSS</p>
            <div className="flex gap-2 text-sm">
              <span className={`px-2 py-1 rounded-full ${expertiseColors.frontend.tag}`}>Next.js</span>
              <span className={`px-2 py-1 rounded-full ${expertiseColors.frontend.tag}`}>TailwindCSS</span>
            </div>
          </div>

          {/* Python Project */}
          <div className={`group p-6 border rounded-lg transition-colors ${expertiseColors.python.border} ${expertiseColors.python.bg} ${expertiseColors.python.hover}`}>
            <h3 className="text-xl font-bold mb-2">EXP</h3>
            <p className="text-gray-400 mb-4">Expenses Tracker application built with Python</p>
            <div className="flex gap-2 text-sm">
              <span className={`px-2 py-1 rounded-full ${expertiseColors.python.tag}`}>Python</span>
              <span className={`px-2 py-1 rounded-full ${expertiseColors.python.tag}`}>GUI</span>
            </div>
          </div>

          {/* 3D Modeling Project */}
          <div className={`group p-6 border rounded-lg transition-colors ${expertiseColors.modeling.border} ${expertiseColors.modeling.bg} ${expertiseColors.modeling.hover}`}>
            <h3 className="text-xl font-bold mb-2">3D Models Collection</h3>
            <p className="text-gray-400 mb-4">Collection of 3D models and designs</p>
            <div className="flex gap-2 text-sm">
              <span className={`px-2 py-1 rounded-full ${expertiseColors.modeling.tag}`}>Blender</span>
              <span className={`px-2 py-1 rounded-full ${expertiseColors.modeling.tag}`}>3D</span>
            </div>
          </div>

          {/* Accounting Project */}
          <div className={`group p-6 border rounded-lg transition-colors ${expertiseColors.accounting.border} ${expertiseColors.accounting.bg} ${expertiseColors.accounting.hover}`}>
            <h3 className="text-xl font-bold mb-2">Financial Management System</h3>
            <p className="text-gray-400 mb-4">Business management and accounting solution</p>
            <div className="flex gap-2 text-sm">
              <span className={`px-2 py-1 rounded-full ${expertiseColors.accounting.tag}`}>Finance</span>
              <span className={`px-2 py-1 rounded-full ${expertiseColors.accounting.tag}`}>Management</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Let&apos;s Connect</h2>
        <div className="flex justify-center">
          <BusinessCard />
        </div>
      </section>
    </main>
  );
}
