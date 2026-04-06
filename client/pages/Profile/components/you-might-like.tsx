import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Account } from "../../../types";

export function YouMightLike({ followers }: { followers: Account[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <span className="text-xl font-bold">You might like</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <h2>You Might Like</h2>
        </div>
      </CardContent>
    </Card>
  );
}
