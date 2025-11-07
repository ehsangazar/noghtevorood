import React from "react";
import episodesData from "@/episodes.json";
import Link from "next/link";
import Image from "next/image";

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

const RecentEpisodes = () => {
  // Get the latest 6 episodes
  const episodes = (episodesData as Episode[])
    .sort((a, b) => b.id - a.id)
    .slice(0, 6);

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center lg:text-left">
          Recent episodes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {episodes.map((episode) => (
            <Link
              key={episode.id}
              href={`/episodes/${episode.slug}`}
              aria-label={`Open episode ${episode.id}: ${episode.title.en}`}
              className="group bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-all hover:scale-105 cursor-pointer flex flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00704A]"
            >
              <div className="mb-4">
                {episode.youtubeId ? (
                  <div className="relative w-full h-48 bg-white/10">
                    <Image
                      src={`https://img.youtube.com/vi/${episode.youtubeId}/maxresdefault.jpg`}
                      alt={episode.title.en}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-48 bg-white/10 flex items-center justify-center">
                    <div className="text-white/30 text-sm">Episode Image</div>
                  </div>
                )}
                <div className="p-6">
                  <div className="mb-2">
                    <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                      Episode {episode.id}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
                    {episode.title.en}
                  </h3>
                  <p className="text-white/70 text-sm mb-3 line-clamp-3">
                    {episode.description.en}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 mt-auto">
                <div className="w-full bg-[#00704A] group-hover:bg-[#009962] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span>Watch Episode</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* View All Episodes Button */}
        <div className="text-center mt-12">
          <Link
            href="/episodes"
            className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00704A]"
          >
            View All Episodes →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentEpisodes;
