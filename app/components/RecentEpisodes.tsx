import React from "react";

interface Episode {
  id: number;
  title: string;
  description: string;
  date: string;
  duration: string;
  image?: string;
}

const RecentEpisodes = () => {
  const episodes: Episode[] = [
    {
      id: 1,
      title: "Episode 1: Getting Started with Programming",
      description:
        "In this episode, we discuss the fundamentals of programming and how to begin your journey in software development.",
      date: "2024-01-15",
      duration: "45 min",
    },
    {
      id: 2,
      title: "Episode 2: AI and the Future of Tech",
      description:
        "Exploring artificial intelligence, machine learning, and how these technologies are shaping the future of software.",
      date: "2024-01-22",
      duration: "52 min",
    },
    {
      id: 3,
      title: "Episode 3: Career Paths in Software",
      description:
        "A deep dive into different career paths available in the software industry and how to choose the right one.",
      date: "2024-01-29",
      duration: "38 min",
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center lg:text-left">
          My recent episodes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {episodes.map((episode) => (
            <div
              key={episode.id}
              className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors cursor-pointer flex flex-col justify-between"
            >
              <div className="mb-4">
                <div className="w-full h-48 bg-white/10 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-white/30 text-sm">Episode Image</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
                  {episode.title}
                </h3>
                <p className="text-white/70 text-sm mb-4 line-clamp-3">
                  {episode.description}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between text-white/50 text-xs mb-4">
                  <span>{formatDate(episode.date)}</span>
                  <span>{episode.duration}</span>
                </div>

                <button className="w-full bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span>Listen to this episode</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentEpisodes;
