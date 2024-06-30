import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

function Index() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl text-center mb-4">Welcome to Your Bare-Bones App</h1>
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Counter</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <p className="text-xl mb-4">Current Count: {count}</p>
            <Button onClick={() => setCount(count + 1)}>Increment</Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

export default Index;