import { Button } from "@repo/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold mb-8 text-green-900">CSA ONE Platform</h1>
        <p className="mb-4 text-gray-700">Universal Web & Mobile App.</p>
        <div className="flex gap-4">
          <Button title="Get Started" onPress={() => alert('Started!')} />
          <Button title="Learn More" variant="secondary" onPress={() => console.log('More')} />
        </div>
      </div>
    </div>
  );
}
