import { Card, CardContent, CardHeader, CardTitle } from "~/ui/elements/card";
import { Badge } from "~/ui/elements/badge";
import { TrendingUp, Calendar, MapPin, Users } from "lucide-react";

const BoomStats = () => {
  const daysSinceLastBoom = 0; // Today
  const totalBooms = 247;
  const mostActivezone = "Downtown";
  const totalUsers = 89;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-foreground">Boom Statistics</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-gradient-boom border-boom-primary/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-primary-foreground/80">
                  Days Since Last Boom
                </p>
                <p className="text-3xl font-bold text-primary-foreground animate-pulse-boom">
                  {daysSinceLastBoom}
                </p>
              </div>
              <Calendar className="w-8 h-8 text-primary-foreground/60" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  Total Booms Reported
                </p>
                <p className="text-3xl font-bold text-boom-accent">
                  {totalBooms}
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-boom-accent" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  Most Active Zone
                </p>
                <p className="text-lg font-bold text-foreground">
                  {mostActivezone}
                </p>
              </div>
              <MapPin className="w-8 h-8 text-boom-secondary" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Boom Hunters</p>
                <p className="text-2xl font-bold text-foreground">
                  {totalUsers}
                </p>
              </div>
              <Users className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-lg">Peak Boom Hours</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">
                Afternoon (2-6 PM)
              </span>
              <Badge className="bg-boom-primary text-primary-foreground">
                35%
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">
                Evening (6-10 PM)
              </span>
              <Badge className="bg-boom-secondary text-primary-foreground">
                28%
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">
                Night (10 PM-2 AM)
              </span>
              <Badge className="bg-boom-accent text-primary-foreground">
                22%
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">
                Morning (6-10 AM)
              </span>
              <Badge variant="outline">15%</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BoomStats;
