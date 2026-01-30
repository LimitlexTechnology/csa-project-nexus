import { Button } from "@repo/ui/button";
import { Typography } from "@repo/ui/typography";
import { Card } from "@repo/ui/card";
import { APP_NAME, TAGLINE, FEATURES } from "@repo/ui/constants";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-gray-50">
      {/* Hero Section */}
      <section className="w-full max-w-7xl flex flex-col items-center text-center py-20">
        <Typography variant="h1" className="text-green-800 text-6xl mb-6">
          {APP_NAME}
        </Typography>
        <Typography variant="h2" className="text-gray-600 mb-8 max-w-2xl">
          {TAGLINE}
        </Typography>
        <div className="flex gap-4">
          <Button title="Get Started" onPress={() => console.log('Get Started')} />
          <Button title="Learn More" variant="secondary" onPress={() => console.log('Learn More')} />
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
        {FEATURES.map((feature, index) => (
          <Card key={index} className="p-6">
            <Typography variant="h3" className="text-green-700">
              {feature.title}
            </Typography>
            <Typography variant="body" className="text-gray-600">
              {feature.description}
            </Typography>
          </Card>
        ))}
      </section>

      {/* Footer */}
      <footer className="w-full text-center py-8 border-t border-gray-200">
        <Typography variant="caption">
          © 2026 CSA ONE. All rights reserved.
        </Typography>
      </footer>
    </main>
  );
}
