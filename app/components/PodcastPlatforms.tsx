import React from 'react';

const PodcastPlatforms = () => {
  const platforms = [
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@noghte_vorood',
      color: '#FF0000',
    },
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/show/7KXz3Hb4z1JmLqauwpmHgc',
      color: '#1DB954',
    },
    {
      name: 'Apple Podcasts',
      url: 'https://podcasts.apple.com/us/podcast/پادکست-نقطه‌ورود-noghte-vorood-podcast/id1850117759',
      color: '#9333ea',
    },
    {
      name: 'Castbox',
      url: 'https://castbox.fm/channel/id5435374',
      color: '#FF8C00',
    },
    {
      name: 'RSS Feed',
      url: 'http://rss.castbox.fm/everest/d218c82b16c945aca90b58c00a0ee110.xml',
      color: '#00704A',
    },
  ];

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Side - Text */}
          <div className="text-center lg:text-left max-w-xl">
            <p className="text-[#00704A] text-xs uppercase tracking-widest mb-2">Listen anywhere</p>
            <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-2">
              Podcast available on
            </h2>
            <p className="text-white/60 text-sm">
              Choose your favorite platform to follow and get notified when new episodes drop.
            </p>
          </div>

          {/* Right Side - Platforms */}
          <div className="flex flex-wrap justify-center lg:justify-end items-center gap-3 lg:gap-4">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 px-3.5 py-2 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00704A]"
                aria-label={`Listen on ${platform.name}`}
                title={platform.name}
              >
                <span
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full"
                  style={{ backgroundColor: `${platform.color}1A` }}
                >
                  {/* Icon */}
                  {platform.name === 'YouTube' && (
                    <svg viewBox="0 0 24 24" fill={platform.color} className="w-5 h-5">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  )}
                  {platform.name === 'Spotify' && (
                    <svg viewBox="0 0 24 24" fill={platform.color} className="w-5 h-5">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.419.34-.719.84-.84 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.24 1.021zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.14C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                  )}
                  {platform.name === 'Apple Podcasts' && (
                    <svg viewBox="0 0 24 24" fill={platform.color} className="w-5 h-5">
                      <path d="M12 0C5.372 0 0 5.372 0 12c0 6.628 5.372 12 12 12 6.628 0 12-5.372 12-12 0-6.628-5.372-12-12-12zm0 2.5c5.247 0 9.5 4.253 9.5 9.5s-4.253 9.5-9.5 9.5S2.5 17.247 2.5 12 6.753 2.5 12 2.5zm0 2.5c-3.86 0-7 3.14-7 7 0 3.86 3.14 7 7 7s7-3.14 7-7c0-3.86-3.14-7-7-7zm0 2c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5zm0 2c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 1a2 2 0 110 4 2 2 0 010-4zm0 6a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/>
                    </svg>
                  )}
                  {platform.name === 'Castbox' && (
                    <svg viewBox="0 0 24 24" fill={platform.color} className="w-5 h-5">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                    </svg>
                  )}
                  {platform.name === 'RSS Feed' && (
                    <svg viewBox="0 0 24 24" fill={platform.color} className="w-5 h-5">
                      <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z"/>
                    </svg>
                  )}
                </span>
                <span className="hidden sm:inline text-white/80 group-hover:text-white text-sm">
                  {platform.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastPlatforms;

