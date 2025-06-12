import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const GameCard = ({ game, className }) => {
  const handleCardClick = () => {
    window.open(game.wikipediaUrl, "_blank");
  };

  return (
    <Card
      className={cn(
        "bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700/50 backdrop-blur-sm overflow-hidden cursor-pointer hover:border-purple-500/50 transition-colors duration-200",
        className,
      )}
      onClick={handleCardClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={game.coverImage}
          alt={game.title}
          className="w-full h-64 object-cover"
        />
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-slate-100 text-lg font-bold">
          {game.title}
        </CardTitle>
        <CardDescription className="text-slate-400 line-clamp-2 text-sm">
          {game.description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
