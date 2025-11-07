import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import episodesData from '@/episodes.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Speakers - Noghte Vorood Podcast',
  description: 'Meet the amazing guests who have appeared on Noghte Vorood podcast.',
};

const speakers = [
  {
    name: 'Hamidreza Vami',
    episode: 4,
    title: 'Senior Designer | +7 years in Product & Visuals | Full-stack Designer',
    linkedin: 'https://www.linkedin.com/in/echreza/?originalSubdomain=ir',
    website: 'https://ech.framer.website/',
    image: '/guests/hamidreza_vami.jpg',
  },
  {
    name: 'Maziar Parsi',
    episode: 6,
    title: 'Frontend Engineer | JavaScript . TypeScript . React . Redux . NextJS',
    linkedin: 'https://www.linkedin.com/in/maziar-parsi/?originalSubdomain=de',
    website: 'https://maziyar-parsi.vercel.app/',
    image: '/guests/maziar_parsi.jpg',
  },
  {
    name: 'Ramin Yavari',
    episode: 8,
    title: 'Tech Lead | Turning Ideas into Products | Scalable Systems • Developer Experience Advocate',
    linkedin: 'https://www.linkedin.com/in/ramin-yavari/',
    website: 'https://raminy.dev/',
    image: '/guests/ramin_yavari.jpg',
  },
  {
    name: 'Reyhaneh Janikeh',
    episode: 9,
    title: 'Software QA/Test Engineer | 13+ Years of Experience in Functional & Non-Functional Testing | Selenium | Blockchain | Crypto | Web3 | Fintech',
    linkedin: 'https://www.linkedin.com/in/reyhaneh-janikeh/',
    image: '/guests/reyhaneh_janikeh.jpg',
  },
  {
    name: 'Shadi Mahjoum',
    episode: 10,
    title: 'Medical Student at University College Cork, Co Founder at Taraz',
    linkedin: 'https://www.linkedin.com/in/shadi-mahjoum-b421271b5/',
    image: '/guests/shadi_mahjoum.jpg',
  },
  {
    name: 'Nima Salimi',
    episode: 11,
    title: 'Performance Marketing & ECRM to Convert Clicks into Paying Customers.💵 Passionate about Marketing? LET\'S TALK.',
    linkedin: 'https://www.linkedin.com/in/nima-salimi-a655a6231/',
    image: '/guests/nima_salimi.jpg',
  },
  {
    name: 'Sepehr Hadaeghnia',
    episode: 14,
    title: 'BBA. Student @ Atlas Üniversitesi',
    linkedin: 'https://www.linkedin.com/in/sepehrhn/',
    image: '/guests/sepehr.jpg',
  },
  {
    name: 'Alireza Bashiri',
    episode: 15,
    title: 'Consulting companies on how to use AI for coding and end-to-end workflows',
    linkedin: 'https://www.linkedin.com/in/al3rez/',
    website: 'https://www.al3rez.com/',
    image: '/guests/alireza_bashiri.jpg',
  },
  {
    name: 'Ebrahim Barzegary',
    episode: 16,
    title: 'Marketing Assistant Professor | Rethinking Marketing for Human & Social Good',
    linkedin: 'https://www.linkedin.com/in/ebzgr/',
    image: '/guests/ebrahim_barzegary.jpg',
  },
];

const SpeakersPage = () => {
  const sortedSpeakers = speakers.sort((a, b) => b.episode - a.episode);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main id="main-content" className="py-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Our Speakers
            </h1>
            <div className="w-24 h-1 bg-[#00704A] mx-auto mb-8"></div>
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              Meet the incredible guests who have shared their insights, experiences, and stories on Noghte Vorood.
            </p>
          </div>

          {/* Speakers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {sortedSpeakers.map((speaker) => {
              const episodeSlug = (episodesData as any[]).find((e) => e.id === speaker.episode)?.slug ?? String(speaker.episode);
              return (
                <div
                  key={speaker.episode}
                  className="group flex flex-col rounded-xl bg-white/5 ring-1 ring-white/10 transition-all duration-300 hover:bg-white/10 hover:ring-[#00704A]"
                >
                  <Link
                    href={`/episodes/${episodeSlug}`}
                    className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00704A] rounded-t-xl"
                  >
                    <div className="relative h-64 w-full overflow-hidden rounded-t-xl">
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute top-4 right-4 bg-[#00704A] text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Episode {speaker.episode}
                      </div>
                    </div>
                  </Link>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex-1">
                      <Link
                        href={`/episodes/${episodeSlug}`}
                        className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00704A] rounded"
                      >
                        <h3 className="text-xl font-semibold text-white group-hover:text-[#00C27A] transition-colors">
                          {speaker.name}
                        </h3>
                      </Link>
                      <p className="mt-2 text-sm text-white/70 line-clamp-2">
                        {speaker.title}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center gap-3 pt-4 border-t border-white/10">
                      <a
                        href={speaker.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-white/20 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00704A]"
                        aria-label={`${speaker.name}'s LinkedIn`}
                      >
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      </a>
                      {speaker.website && (
                        <a
                          href={speaker.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-white/20 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00704A]"
                          aria-label={`${speaker.name}'s Website`}
                        >
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-[#00704A]/20 to-[#009962]/20 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Want to be a Guest?
            </h3>
            <p className="text-white/80 mb-6">
              We're always looking for interesting voices to join the conversation.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdffVEg5ced7XDQCdxlVoxWqlvMGoO_9d0l8Uh9IOmaVw9VOw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#00704A] hover:bg-[#009962] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Apply Now
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SpeakersPage;

