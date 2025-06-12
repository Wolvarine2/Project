import { Download, Heart, Shield, Zap } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900/80 border-t border-slate-700/50 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Download className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  GamePack Hub
                </h3>
                <p className="text-slate-400 text-sm">Premium Game Repacks</p>
              </div>
            </div>
            <p className="text-slate-400 mb-4 max-w-md">
              Your trusted source for high-quality, compressed game repacks. We
              provide the latest games with maximum compression and minimal
              quality loss.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Heart className="w-4 h-4 text-red-400" />
              <span>Made with passion for gamers</span>
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-slate-100 font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li className="flex items-center gap-2">
                <Zap className="w-3 h-3 text-yellow-400" />
                <span>Lightning fast downloads</span>
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-3 h-3 text-green-400" />
                <span>100% Safe & tested</span>
              </li>
              <li className="flex items-center gap-2">
                <Download className="w-3 h-3 text-blue-400" />
                <span>Maximum compression</span>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-slate-100 font-semibold mb-4">Information</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>How to Download</li>
              <li>System Requirements</li>
              <li>Installation Guide</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-500 text-sm">
            © 2024 GamePack Hub. Educational purposes only.
          </div>
          <div className="text-slate-500 text-sm mt-4 md:mt-0">
            All games belong to their respective owners.
          </div>
        </div>
      </div>
    </footer>
  );
};
