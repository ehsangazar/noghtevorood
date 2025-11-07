import episodesData from '@/episodes.json';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

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

export const metadata = {
  title: 'All Episodes | Noghte Vorood Podcast',
  description: 'Browse all episodes of the Noghte Vorood Podcast. Farsi-speaking discussions about technology, startups, programming, and career development.',
};

export default function EpisodesPage() {
  const episodes = episodesData as Episode[];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              All Episodes
            </h1>
            <div className="w-24 h-1 bg-[#00704A] mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Explore our collection of {episodes.length} episodes covering technology, society, creativity, and the future
            </p>
          </div>

          {/* Episodes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {episodes.map((episode) => (
              <Link
                key={episode.id}
                href={`/episodes/${episode.slug}`}
                className="group bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 overflow-hidden hover:scale-105"
              >
                {/* Thumbnail */}
                {episode.youtubeId ? (
                  <div className="relative w-full h-48 bg-white/10 overflow-hidden">
                    <Image
                      src={`https://img.youtube.com/vi/${episode.youtubeId}/maxresdefault.jpg`}
                      alt={episode.title.en}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-48 bg-white/10 flex items-center justify-center">
                    <div className="text-white/30 text-sm">Episode Image</div>
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-[#00704A] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Episode {episode.id}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-white mb-2 group-hover:text-[#00704A] transition-colors line-clamp-2">
                    {episode.title.en}
                  </h2>
                  
                  <p className="text-sm text-white/60 mb-3 line-clamp-1" dir="rtl">
                    {episode.title.fa}
                  </p>
                  
                  <p className="text-white/70 text-sm line-clamp-3 mb-4">
                    {episode.description.en}
                  </p>

                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="text-[#00704A] text-sm font-medium group-hover:underline flex items-center gap-2">
                      <span>Watch Episode</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-gradient-to-r from-[#00704A]/20 to-[#009962]/20 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Subscribe to Stay Updated
            </h2>
            <p className="text-lg text-white/80 mb-6">
              Don't miss new episodes! Subscribe to our YouTube channel
            </p>
            <a
              href="https://www.youtube.com/@noghte_vorood"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#00704A] hover:bg-[#009962] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

