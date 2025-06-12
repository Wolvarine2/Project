import { Download } from "lucide-react";

export const Header = ({ totalGames }) => {
  return (
    <div className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
      <div className="container mx-auto px-4 py-6">
        {/* Centered Brand Header */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Download className="w-7 h-7 text-white" />
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                GamePack Hub
              </h1>
              <p className="text-slate-400 text-base">Premium Game Repacks</p>
            </div>
          </div>
          <div className="text-slate-400 text-sm">
            <span>{totalGames} Games Available</span>
          </div>
        </div>
      </div>
    </div>
  );
};
