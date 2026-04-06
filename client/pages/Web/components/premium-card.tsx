import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";

export function PremiumCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-row items-center gap-2">
          <span className="text-lg font-bold md:text-xl">Subscribe to Premium</span>
          <Badge variant="outline" className="bg-green-950 text-xs text-green-300">
            50% off
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>Get rid of ads, see your analytics, boost your replies and unlock 20+ features.</p>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <a href="/premium">Subscribe</a>
        </Button>
      </CardFooter>
    </Card>
  );
}
