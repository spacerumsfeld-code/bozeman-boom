import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BoomMap from "@/components/BoomMap";
import BoomList from "@/components/BoomList";
import BoomStats from "@/components/BoomStats";
import { Volume2, Map, BarChart3, Plus, Zap } from "lucide-react";

const HomePage = () => {
  const [activeView, setActiveView] = useState<"map" | "list" | "stats">("map");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-card-dark">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-boom flex items-center justify-center animate-pulse-boom">
                <Volume2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">
                  Bozeman Boom Tracker
                </h1>
                <p className="text-sm text-muted-foreground">
                  Community-driven boom reporting
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Badge className="bg-boom-accent text-primary-foreground animate-pulse">
                <Zap className="w-3 h-3 mr-1" />
                LIVE
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <div className="bg-muted/50 border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2">
            <Button
              onClick={() => setActiveView("map")}
              variant={activeView === "map" ? "default" : "ghost"}
              size="sm"
              className={
                activeView === "map"
                  ? "bg-boom-primary text-primary-foreground"
                  : ""
              }
            >
              <Map className="w-4 h-4 mr-2" />
              Map View
            </Button>
            <Button
              onClick={() => setActiveView("list")}
              variant={activeView === "list" ? "default" : "ghost"}
              size="sm"
              className={
                activeView === "list"
                  ? "bg-boom-primary text-primary-foreground"
                  : ""
              }
            >
              <Volume2 className="w-4 h-4 mr-2" />
              Recent Booms
            </Button>
            <Button
              onClick={() => setActiveView("stats")}
              variant={activeView === "stats" ? "default" : "ghost"}
              size="sm"
              className={
                activeView === "stats"
                  ? "bg-boom-primary text-primary-foreground"
                  : ""
              }
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              Statistics
            </Button>

            <div className="ml-auto">
              <Button className="bg-gradient-boom text-primary-foreground hover:shadow-boom">
                <Plus className="w-4 h-4 mr-2" />
                Report a Boom
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <Card className="bg-card border-border shadow-card-dark h-[600px]">
              {activeView === "map" && (
                <div className="h-full">
                  <BoomMap />
                </div>
              )}
              {activeView === "list" && (
                <div className="h-full overflow-auto p-6">
                  <BoomList />
                </div>
              )}
              {activeView === "stats" && (
                <div className="h-full overflow-auto p-6">
                  <BoomStats />
                </div>
              )}
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {activeView !== "stats" && (
              <Card className="bg-card border-border shadow-card-dark p-6">
                <BoomStats />
              </Card>
            )}

            {activeView !== "list" && (
              <Card className="bg-card border-border shadow-card-dark p-6">
                <BoomList />
              </Card>
            )}

            {/* Monetization Preview */}
            <Card className="bg-gradient-glow border-boom-accent/30 p-6">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-boom-accent flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-foreground">
                  Boom Detective Premium
                </h3>
                <p className="text-sm text-muted-foreground">
                  Get real-time boom alerts, advanced analytics, and exclusive
                  insights for just $2.99/month
                </p>
                <Button className="bg-boom-accent text-primary-foreground hover:shadow-glow">
                  Upgrade Now
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-12">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-sm text-muted-foreground">
            Made with 💥 for the Bozeman Reddit Community
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
