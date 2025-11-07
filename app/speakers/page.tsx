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
            {speakers.map((speaker) => {
              const episodeSlug = (episodesData as any[]).find((e) => e.id === speaker.episode)?.slug ?? String(speaker.episode);
              return (
              <div
                key={speaker.episode}
                className="bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all hover:scale-105"
              >
                {/* Speaker Image */}
                <div className="relative w-full h-64 bg-white/10">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#00704A] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Episode {speaker.episode}
                  </div>
                </div>

                {/* Speaker Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {speaker.name}
                  </h3>
                  <p className="text-white/70 text-sm mb-4 line-clamp-3">
                    {speaker.title}
                  </p>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00704A]"
                    >
                      LinkedIn
                    </a>
                    {speaker.website && (
                      <a
                        href={speaker.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-[#00704A] hover:bg-[#009962] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00704A]"
                      >
                        Website
                      </a>
                    )}
                  </div>

                  {/* View Episode Link */}
                  <div className="mt-4">
                    <Link
                      href={`/episodes/${episodeSlug}`}
                      className="block text-center text-white/70 hover:text-[#00704A] text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00704A] rounded"
                    >
                      Watch Episode →
                    </Link>
                  </div>
                </div>
              </div>
            );})}
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

