import { games } from "@/data/games.js";
import { GameCard } from "@/components/GameCard.jsx";
import { Header } from "@/components/Header.jsx";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header totalGames={games.length} />

      <main className="container mx-auto px-4 py-8">
        {/* Games Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-slate-100">
              All Games
              <span className="text-slate-400 text-lg ml-2">
                ({games.length})
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
