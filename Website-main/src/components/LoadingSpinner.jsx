import { Download } from "lucide-react";

export const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center animate-pulse">
            <Download className="w-8 h-8 text-white" />
          </div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-purple-500/30 rounded-lg animate-spin border-t-purple-500"></div>
        </div>
        <div className="text-slate-400 text-sm">Loading games...</div>
      </div>
    </div>
  );
};
