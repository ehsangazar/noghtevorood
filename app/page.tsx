import Header from "./components/Header";
import Hero from "./components/Hero";
import PodcastPlatforms from "./components/PodcastPlatforms";
import RecentEpisodes from "./components/RecentEpisodes";
import NewsletterBanner from "./components/NewsletterBanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <Hero />
        <PodcastPlatforms />
        <RecentEpisodes />
      </main>
      <NewsletterBanner />
      <Footer />
    </div>
  );
}
