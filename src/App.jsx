import React from "react";
import { cn } from "./lib/utils";

// Main App Component
function App() {
  return (
    <div className="relative z-10 min-h-screen w-full bg-black text-gray-300 flex flex-col">
      {/* Header */}
      <header className="flex-shrink-0 py-8 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold bg-gradient-to-r from-green-400 to-violet-800 bg-clip-text text-transparent tracking-tight">
          GHOST Busters
        </h1>
        <p className="mt-2 text-md md:text-lg text-gray-400 max-w-xl mx-auto">
          Precision Web3 tools for a boundless universe - Powered by Byte Me
          Tech
        </p>
      </header>

      {/* Navigation Bar */}
      <nav className="w-full bg-black/80 backdrop-blur-md sticky top-0 z-20 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            <div className="flex space-x-8">
              <a
                href="#home"
                className="text-gray-300 hover:text-green-400 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#ghost"
                className="text-gray-300 hover:text-green-400 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                G.H.O.S.T
              </a>
              <a
                href="#ai-buster"
                className="text-gray-300 hover:text-violet-800 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                AI-Buster
              </a>
              <a
                href="#features"
                className="text-gray-300 hover:text-green-400 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Features
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-green-400 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow px-30 py-10">
        {/* Split Screen Sections */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          {/* G.H.O.S.T Section */}
          <section
            className="w-full md:w-1/2 flex flex-col items-start max-w-lg p-6 border border-green-400/20 hover:border-green-400/50 transition-all duration-300"
            id="ghost"
          >
            <h2 className="text-3xl md:text-5xl font-medium text-green-400 mb-6">
              G.H.O.S.T
            </h2>
            <p className="text-gray-300 text-md md:text-lg mb-8 leading-relaxed">
              <strong className="text-green-400">
                Giving Help Operating Securely and Transparently
              </strong>
              . Ethereum-based Web3 application leveraging Solidity smart
              contracts for secure tip submission. Users can submit encrypted
              tips via MetaMask, which are locked on-chain for unparalleled
              transparency. Verified tips earn ETH rewards, incentivizing truth
              and accountability in a decentralized ecosystem.
            </p>
            <ul className="list-none text-gray-400 text-sm md:text-md mb-8 space-y-3">
              <li>Seamless Ethereum wallet integration with MetaMask</li>
              <li>Robust Solidity smart contract security</li>
              <li>Immutable on-chain records for auditability</li>
              <li>ETH-based reward system for verified contributions</li>
              <li>End-to-end encryption for tip submissions</li>
            </ul>
            <a
              href="https://ghost-d-app.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-green-400 text-md md:text-lg font-medium px-6 py-3 border border-green-400/40 hover:border-green-400 hover:bg-green-400/10 transition-all duration-300"
            >
              G.H.O.S.T Access
            </a>
          </section>

          {/* AI-Buster Section */}
          <section
            className="w-full md:w-1/2 flex flex-col items-end max-w-lg mt-10 md:mt-0 p-6 border border-violet-800/20 hover:border-violet-800/50 transition-all duration-300"
            id="ai-buster"
          >
            <h2 className="text-3xl md:text-5xl font-medium text-violet-800 mb-6">
              AI-Buster
            </h2>
            <p className="text-gray-300 text-md md:text-lg mb-8 leading-relaxed text-right">
              <strong className="text-violet-800">Deepfake detection</strong>.
              Powered by Web3 on Ethereum, AI-Buster employs cutting-edge AI
              algorithms to detect media manipulation and deepfakes. Results are
              sealed on-chain via Solidity contracts, ensuring tamper-proof
              verification. Users pay with ETH through Web3 wallets, securing
              decentralized access to truth-detection tools.
            </p>
            <ul className="list-none text-gray-400 text-sm md:text-md mb-8 space-y-3 text-right">
              <li>Advanced AI-powered media analysis</li>
              <li>Real-time detection reports</li>
            </ul>
            <a
              href="https://ai-buster.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-violet-800 text-md md:text-lg font-medium px-6 py-3 border border-violet-800/40 hover:border-violet-800 hover:bg-violet-800/10 transition-all duration-300"
            >
              AI-Buster Launch
            </a>
          </section>
        </div>

        {/* Features Section */}
        <section className="max-w-5xl mx-auto mb-24" id="features">
          <h2 className="text-3xl md:text-5xl font-medium text-center bg-gradient-to-r from-green-400 to-violet-800 bg-clip-text text-transparent mb-12">
            Core Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-800/50 hover:border-green-400/50 transition-all duration-300">
              <h3 className="text-xl font-medium text-green-400 mb-4">
                Decentralized Security
              </h3>
              <p className="text-gray-400 text-sm">
                Built on Ethereum with Solidity contracts, ensuring no single
                point of failure and maximum security.
              </p>
            </div>
            <div className="p-6 border border-gray-800/50 hover:border-violet-800/50 transition-all duration-300">
              <h3 className="text-xl font-medium text-violet-800 mb-4">
                AI Integration
              </h3>
              <p className="text-gray-400 text-sm">
                Advanced artificial intelligence powers deepfake detection and
                tip verification processes.
              </p>
            </div>
            <div className="p-6 border border-gray-800/50 hover:border-green-400/50 transition-all duration-300">
              <h3 className="text-xl font-medium text-green-400 mb-4">
                Web3 Rewards
              </h3>
              <p className="text-gray-400 text-sm">
                Earn ETH for contributing verified information or using
                detection services.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="max-w-3xl mx-auto text-center" id="about">
          <h2 className="text-3xl md:text-5xl font-medium text-green-400 mb-6">
            About GHOST Busters
          </h2>
          <p className="text-gray-300 text-md md:text-lg mb-8 leading-relaxed">
            GHOST Busters is a pioneering initiative by Byte Me Tech, launched
            in 2025 to combat misinformation and enhance transparency in the
            digital age. By combining Ethereum’s blockchain technology with
            advanced AI, we provide tools to secure truth and reward integrity.
            Our mission is to empower users in a decentralized universe where
            trust is verifiable and immutable.
          </p>
          <p className="text-gray-400 text-sm md:text-md">
            Join us in busting the ghosts of deception and building a
            transparent future.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative bottom-12 left-1/2 transform -translate-x-1/2 text-gray-500 text-center py-4 border-t border-gray-800/50 mt-24">
        <p className="text-sm">
          © 2025 Byte Me Tech | Made with ❤️ in Kothamangalam
        </p>
      </footer>
    </div>
  );
}

export default App;
