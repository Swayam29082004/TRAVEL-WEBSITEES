import { Search } from "lucide-react";

export default function Hero({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: (val: string) => void;
}) {
  return (
    <header className="hero relative h-[80vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/1236678/pexels-photo-1236678.jpeg")',
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white max-w-2xl px-6">
          <h1 className="hero-title">🌍 Travel Explorer</h1>
          <p className="hero-subtitle">
            Discover amazing tours around the globe. Start your journey today!
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-lg p-4 shadow-lg mt-6">
            <div className="flex items-center space-x-3">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search destinations..."
                className="flex-1 text-gray-800 outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export {};
