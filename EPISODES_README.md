# Episodes Documentation

## Overview

This project includes a comprehensive episodes management system with:
- **17 translated episodes** (Persian to English)
- **JSON data storage** for easy access
- **Dynamic episode pages** with YouTube embeds
- **SEO-optimized** metadata
- **Responsive design** with thumbnails

## File Structure

```
/episodes.json                    # Main episodes data (Persian + English)
/episodes-md/                     # Original Persian markdown files (1-17)
/app/episodes/
  ├── page.tsx                    # Episodes listing page
  └── [slug]/
      └── page.tsx                # Individual episode page
/lib/episodes.ts                  # Utility functions for episodes
/app/components/RecentEpisodes.tsx # Recent episodes component
```

## Episodes Data Structure

Each episode in `episodes.json` contains:

```json
{
  "id": 1,
  "slug": "episode-1-nextjs-react-and-disc-and-veo-3-ideas-review",
  "title": {
    "en": "Next.js, React and DISC and VEO 3 ideas review",
    "fa": "Next.js، React و بررسی ایده‌های DISC و VEO 3"
  },
  "description": {
    "en": "English description...",
    "fa": "توضیحات فارسی..."
  },
  "youtubeUrl": "https://www.youtube.com/watch?v=_hzkSvX-aGA",
  "youtubeId": "_hzkSvX-aGA",
  "publishedAt": null
}
```

## Pages

### Episodes Listing Page
**URL:** `/episodes`

Displays all episodes in a grid layout with:
- YouTube thumbnails
- Episode titles (English & Persian)
- Short descriptions
- Direct links to episode pages

### Individual Episode Page
**URL:** `/episodes/[slug]`

Features:
- Full episode details
- Embedded YouTube video player
- English and Persian descriptions
- Navigation to previous/next episodes
- "Watch on YouTube" CTA button
- Breadcrumb navigation

## Using Episode Data

### Import the utility functions:

```typescript
import {
  getAllEpisodes,
  getEpisodeBySlug,
  getEpisodeById,
  getRecentEpisodes,
  searchEpisodes
} from '@/lib/episodes';

// Get all episodes
const episodes = getAllEpisodes();

// Get specific episode
const episode = getEpisodeBySlug('episode-1-nextjs-react-and-disc-and-veo-3-ideas-review');

// Get recent episodes
const recent = getRecentEpisodes(6);

// Search episodes
const results = searchEpisodes('AI');
```

## Adding New Episodes

### Manual Method:

1. Create a new markdown file in `/episodes-md/` (e.g., `18.md`)
2. Add episode content in Persian:
   ```markdown
   🎙 پادکست نقطه ورود - اپیزود ۱۸: عنوان اپیزود
   
   توضیحات اپیزود...
   
   https://www.youtube.com/watch?v=VIDEO_ID
   ```
3. Run the translation script (if needed):
   ```bash
   python translate_episodes.py
   ```
4. The episode will be automatically added to `episodes.json`

### Direct JSON Addition:

Add a new episode object to `episodes.json`:

```json
{
  "id": 18,
  "slug": "episode-18-your-slug-here",
  "title": {
    "en": "English Title",
    "fa": "عنوان فارسی"
  },
  "description": {
    "en": "English description",
    "fa": "توضیحات فارسی"
  },
  "youtubeUrl": "https://www.youtube.com/watch?v=VIDEO_ID",
  "youtubeId": "VIDEO_ID",
  "publishedAt": "2024-12-01"
}
```

## Static Site Generation

All episode pages are statically generated at build time using Next.js `generateStaticParams()`. This ensures:
- Fast page loads
- SEO optimization
- Reduced server load

## YouTube Integration

- Thumbnails are automatically loaded from YouTube's CDN
- Video embeds are responsive (16:9 aspect ratio)
- Direct links to YouTube are provided as fallback

## SEO Features

- Dynamic meta titles and descriptions
- OpenGraph tags for social sharing
- Structured data for search engines
- YouTube thumbnail images for previews

## Styling

The pages use Tailwind CSS with:
- Responsive grid layouts
- Hover effects and transitions
- Dark mode support
- Persian text RTL support

## Future Enhancements

Consider adding:
- [ ] Search functionality on the listing page
- [ ] Filter by topic/guest
- [ ] Podcast player integration
- [ ] Comments section
- [ ] Related episodes suggestions
- [ ] Episode transcripts
- [ ] Timestamp navigation

