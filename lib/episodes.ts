import episodesData from '@/episodes.json';

export interface Episode {
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

/**
 * Get all episodes
 */
export function getAllEpisodes(): Episode[] {
  return episodesData as Episode[];
}

/**
 * Get episode by slug
 */
export function getEpisodeBySlug(slug: string): Episode | undefined {
  return episodesData.find((ep) => ep.slug === slug) as Episode | undefined;
}

/**
 * Get episode by ID
 */
export function getEpisodeById(id: number): Episode | undefined {
  return episodesData.find((ep) => ep.id === id) as Episode | undefined;
}

/**
 * Get recent episodes (latest N episodes)
 */
export function getRecentEpisodes(count: number = 6): Episode[] {
  return (episodesData as Episode[])
    .sort((a, b) => b.id - a.id)
    .slice(0, count);
}

/**
 * Get next episode
 */
export function getNextEpisode(currentId: number): Episode | undefined {
  return episodesData.find((ep) => ep.id === currentId + 1) as Episode | undefined;
}

/**
 * Get previous episode
 */
export function getPreviousEpisode(currentId: number): Episode | undefined {
  return episodesData.find((ep) => ep.id === currentId - 1) as Episode | undefined;
}

/**
 * Search episodes by title or description
 */
export function searchEpisodes(query: string): Episode[] {
  const lowerQuery = query.toLowerCase();
  return (episodesData as Episode[]).filter(
    (ep) =>
      ep.title.en.toLowerCase().includes(lowerQuery) ||
      ep.title.fa.includes(query) ||
      ep.description.en.toLowerCase().includes(lowerQuery) ||
      ep.description.fa.includes(query)
  );
}

