import { notFound } from 'next/navigation';
import episodesData from '@/episodes.json';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ShareButtons from '../../components/ShareButtons';
import Link from 'next/link';

interface Episode {
  id: number;
  slug: string;
  title: {
    en: string;
    fa: string;
  };
  description: {
    en: string;
    fa: string;
  };
  youtubeUrl: string;
  youtubeId: string | null;
  publishedAt: string | null;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return episodesData.map((episode) => ({
    slug: episode.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const episode = episodesData.find((ep) => ep.slug === slug);

  if (!episode) {
    return {
      title: 'Episode Not Found',
    };
  }

  return {
    title: `${episode.title.en} | Noghte Vorood Podcast`,
    description: episode.description.en.substring(0, 160),
    openGraph: {
      title: episode.title.en,
      description: episode.description.en.substring(0, 160),
      type: 'video.other',
      url: `/episodes/${episode.slug}`,
      images: episode.youtubeId 
        ? [`https://img.youtube.com/vi/${episode.youtubeId}/maxresdefault.jpg`]
        : [],
    },
  };
}

export default async function EpisodePage({ params }: PageProps) {
  const { slug } = await params;
  const episode = episodesData.find((ep) => ep.slug === slug) as Episode | undefined;

  if (!episode) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main id="main-content" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8" aria-label="Breadcrumb">
              <Link 
                href="/episodes" 
                className="inline-flex items-center gap-2 text-white/70 hover:text-[#00704A] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00704A] rounded"
                aria-label="Back to Episodes"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Back to Episodes</span>
              </Link>
            </nav>

            {/* Episode Header */}
            <div className="mb-8">
              <div className="inline-block bg-[#00704A] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                Episode {episode.id}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {episode.title.en}
              </h1>
              <h2 className="text-2xl md:text-3xl text-white/70 mb-6" dir="rtl">
                {episode.title.fa}
              </h2>
            </div>

            {/* YouTube Video Embed */}
            {episode.youtubeId && (
              <div className="mb-12">
                <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${episode.youtubeId}`}
                    title={episode.title.en}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            {/* Episode Description */}
            <div className="bg-white/5 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">About This Episode</h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-white/80 whitespace-pre-wrap leading-relaxed">
                  {episode.description.en}
                </p>
              </div>
            </div>

            {/* Persian Description */}
            <div className="bg-white/5 rounded-xl p-8 mb-8" dir="rtl">
              <h3 className="text-2xl font-bold text-white mb-4">درباره این اپیزود</h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-white/80 whitespace-pre-wrap leading-relaxed">
                  {episode.description.fa}
                </p>
              </div>
            </div>

            {/* Watch on YouTube Button */}
            {episode.youtubeUrl && (
              <div className="mt-8 text-center">
                <a
                  href={episode.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Watch on YouTube
                </a>
              </div>
            )}

            {/* Share */}
            <div className="mt-6 flex justify-center">
              <ShareButtons
                title={episode.title.en}
                url={`https://noghtevorood.com/episodes/${episode.slug}`}
              />
            </div>

            {/* Navigation to next/previous episodes */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex justify-between items-center">
                {episode.id > 1 && (
                  <Link
                    href={`/episodes/${episodesData.find((ep) => ep.id === episode.id - 1)?.slug}`}
                    className="flex items-center gap-2 text-white/70 hover:text-[#00704A] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00704A] rounded"
                    aria-label="Previous episode"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>Previous Episode</span>
                  </Link>
                )}
                {episode.id < episodesData.length && (
                  <Link
                    href={`/episodes/${episodesData.find((ep) => ep.id === episode.id + 1)?.slug}`}
                    className="flex items-center gap-2 text-white/70 hover:text-[#00704A] font-medium ml-auto transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00704A] rounded"
                    aria-label="Next episode"
                  >
                    <span>Next Episode</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

