import { Card, CardContent } from "~/ui/elements/card";
import { Badge } from "~/ui/elements/badge";
import { Clock, MapPin, Volume2 } from "lucide-react";

// Mock boom data
const recentBooms = [
  {
    id: 1,
    intensity: 8,
    type: "Thunder-like",
    timestamp: "2 hours ago",
    location: "Downtown Bozeman",
    description: "Massive boom heard downtown!",
    verified: 3,
  },
  {
    id: 2,
    intensity: 6,
    type: "Sharp Crack",
    timestamp: "1 day ago",
    location: "Near MSU",
    description: "Quick sharp sound near MSU",
    verified: 1,
  },
  {
    id: 3,
    intensity: 9,
    type: "Rumbling",
    timestamp: "2 days ago",
    location: "South Bozeman",
    description: "Long rumbling boom that shook windows",
    verified: 5,
  },
];

const BoomList = () => {
  const getIntensityColor = (intensity: number) => {
    if (intensity >= 8) return "bg-boom-intense";
    if (intensity >= 6) return "bg-boom-primary";
    return "bg-boom-mild";
  };

  const getIntensityLabel = (intensity: number) => {
    if (intensity >= 8) return "INTENSE";
    if (intensity >= 6) return "MODERATE";
    return "MILD";
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground">Recent Booms</h2>
        <Badge
          variant="outline"
          className="text-boom-accent border-boom-accent"
        >
          {recentBooms.length} reports
        </Badge>
      </div>

      <div className="space-y-3">
        {recentBooms.map((boom) => (
          <Card
            key={boom.id}
            className="bg-card border-border hover:shadow-glow transition-all duration-300"
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge
                      className={`${getIntensityColor(
                        boom.intensity
                      )} text-white text-xs`}
                    >
                      {getIntensityLabel(boom.intensity)}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {boom.type}
                    </Badge>
                  </div>

                  <p className="text-sm text-foreground mb-2">
                    {boom.description}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {boom.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {boom.timestamp}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-1 ml-4">
                  <div className="flex items-center gap-1">
                    <Volume2 className="w-4 h-4 text-boom-accent" />
                    <span className="text-lg font-bold text-boom-accent">
                      {boom.intensity}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {boom.verified} verified
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BoomList;
