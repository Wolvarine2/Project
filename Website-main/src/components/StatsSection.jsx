import { Download, HardDrive, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const StatsSection = () => {
  const stats = [
    {
      icon: Download,
      label: "Total Downloads",
      value: "2.5M+",
      description: "Games downloaded",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: HardDrive,
      label: "Space Saved",
      value: "850TB",
      description: "Through compression",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Users,
      label: "Active Users",
      value: "180K+",
      description: "Monthly visitors",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Zap,
      label: "Avg. Compression",
      value: "60%",
      description: "Size reduction",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="bg-slate-900/50 border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:shadow-lg"
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div>
                <div className={`text-2xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-slate-300 font-medium text-sm">
                  {stat.label}
                </div>
                <div className="text-slate-500 text-xs">{stat.description}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
