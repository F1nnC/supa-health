import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white text-black dark:bg-black dark:text-white flex flex-col items-center justify-between px-6 py-12 sm:px-20 sm:py-24 font-sans">
      
      {/* Header */}
      <header className="w-full max-w-6xl flex justify-between items-center mb-16">
        <h1 className="text-2xl font-semibold tracking-tight">One Percent Group</h1>
        <nav className="hidden sm:flex gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
          <a href="#features" className="hover:text-black dark:hover:text-white transition">Features</a>
          <a href="#about" className="hover:text-black dark:hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-black dark:hover:text-white transition">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="text-center max-w-4xl flex flex-col items-center gap-10">
        <Image
          src="/logo.png" // Ensure logo.png is in your /public folder
          alt="One Percent Group Logo"
          width={80}
          height={80}
          className="mb-4"
        />
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
          Unlock Your Best Self, One Percent at a Time
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl">
          A health companion built to help you improve daily — through habits, insights, and community.
        </p>
        <div className="flex gap-4 mt-6 flex-col sm:flex-row">
          <a
            href="#download"
            className="px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm font-medium hover:opacity-90 transition"
          >
            Get Started
          </a>
          <a
            href="#learn-more"
            className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-600 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Learn More
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full mt-20 text-sm text-gray-400 dark:text-gray-600 text-center">
        © {new Date().getFullYear()} One Percent Group. All rights reserved.
      </footer>
    </div>
  );
}
