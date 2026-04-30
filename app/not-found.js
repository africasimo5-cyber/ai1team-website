import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#060f24] flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-[#2E6DB4] text-sm font-bold uppercase tracking-widest mb-4">
          404 Error
        </p>
        <h1 className="text-8xl md:text-[10rem] font-extrabold text-white mb-4 leading-none">
          404
        </h1>
        <p className="text-xl text-white/50 mb-10 max-w-md mx-auto leading-relaxed">
          This page doesn&apos;t exist — but your next automation system does.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 bg-gradient-to-r from-[#2E6DB4] to-[#1A3C6E]
              hover:from-[#3a7fcf] hover:to-[#22508f] text-white font-bold rounded-full
              transition-all duration-300 shadow-[0_0_30px_rgba(46,109,180,0.4)]"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border border-white/25 hover:border-white/50
              text-white font-semibold rounded-full transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
