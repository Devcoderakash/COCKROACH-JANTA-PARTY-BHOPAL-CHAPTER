import { createFileRoute } from "@tanstack/react-router";
import { LoadingScreen } from "@/components/cjp/LoadingScreen";
import { Hero } from "@/components/cjp/Hero";
import { Ticker } from "@/components/cjp/Ticker";
import { WhyCJP } from "@/components/cjp/WhyCJP";
import { Stats } from "@/components/cjp/Stats";
import { Demands } from "@/components/cjp/Demands";
import { MemberForm } from "@/components/cjp/MemberForm";
import { MemeGallery } from "@/components/cjp/MemeGallery";
import { Testimonials } from "@/components/cjp/Testimonials";
import { QuoteGenerator } from "@/components/cjp/QuoteGenerator";
import { Footer } from "@/components/cjp/Footer";
import { CustomCursor } from "@/components/cjp/CustomCursor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cockroach Janta Party — Bhopal Chapter" },
      { name: "description", content: "CJP Bhopal — a satirical political movement for the tired, taxed, and terminally online. Join the survival ecosystem." },
      { name: "keywords", content: "Cockroach Janta Party Bhopal, CJP Bhopal, satirical political movement, viral meme politics India" },
      { property: "og:title", content: "Cockroach Janta Party — Bhopal Chapter" },
      { property: "og:description", content: "Still surviving. Still unemployed. Still paying taxes." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const tickerItems = [
    "No Jobs", "No Metro", "No Peace", "Only Motivation Reels",
    "Backlogs Cleared by Vibes", "Rent Due", "Wifi Slow",
  ];
  const newsItems = [
    "BREAKING: Student spotted studying without parental pressure",
    "EXCLUSIVE: Local engineer survives 3 backlogs in single semester",
    "ALERT: Bhopal roads disappear after 12 minutes of rainfall",
    "MIRACLE: Intern receives salary above ₹10,000",
    "DEVELOPING: Sharma ji ka beta also unemployed — sources confirm",
  ];

  return (
    <main className="grain relative bg-background text-foreground">
      <LoadingScreen />
      <CustomCursor />
      <Hero />
      <Ticker items={tickerItems} />
      <WhyCJP />
      <Stats />
      <Demands />
      <Ticker items={newsItems} fast />
      <MemberForm />
      <MemeGallery />
      <Testimonials />
      <QuoteGenerator />
      <Footer />
    </main>
  );
}
