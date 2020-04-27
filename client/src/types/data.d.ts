//Auto transformation from Json to TypeScript: https://transform.tools/json-to-typescript

export interface Root {
  count: number;
  next: string;
  previous: any;
  results: Result[];
  seo_title: string;
  seo_description: string;
  seo_keywords: string;
  seo_h1: string;
  noindex: boolean;
  nofollow: boolean;
  description: string;
  filters: Filters;
  nofollow_collections: string[];
}

export interface Result {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Rating[];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: AddedByStatus;
  metacritic?: number;
  playtime: number;
  suggestions_count: number;
  user_game: any;
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  platforms: Platform[];
  parent_platforms: ParentPlatform[];
  genres: Genre[];
  stores: Store[];
  clip: Clip;
  tags: Tag[];
  short_screenshots: ShortScreenshot[];
}

export interface Rating {
  id: number;
  title: string;
  count: number;
  percent: number;
}

export interface AddedByStatus {
  yet: number;
  owned: number;
  beaten: number;
  toplay: number;
  dropped: number;
  playing: number;
}

export interface Platform {
  platform: Platform2;
  released_at: string;
  requirements_en?: RequirementsEn;
  requirements_ru?: RequirementsRu;
}

export interface Platform2 {
  id: number;
  name: string;
  slug: string;
  image: any;
  year_end: any;
  year_start: any;
  games_count: number;
  image_background: string;
}

export interface RequirementsEn {
  minimum: string;
  recommended?: string;
}

export interface RequirementsRu {
  minimum: string;
  recommended: string;
}

export interface ParentPlatform {
  platform: Platform3;
}

export interface Platform3 {
  id: number;
  name: string;
  slug: string;
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface Store {
  id: number;
  store: Store2;
  url_en: string;
  url_ru?: string;
}

export interface Store2 {
  id: number;
  name: string;
  slug: string;
  domain: string;
  games_count: number;
  image_background: string;
}

export interface Clip {
  clip: string;
  clips: Clips;
  video: string;
  preview: string;
}

export interface Clips {
  '320': string;
  '640': string;
  full: string;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
  language: string;
  games_count: number;
  image_background: string;
}

export interface ShortScreenshot {
  id: number;
  image: string;
}

export interface Filters {
  years: Year[];
}

export interface Year {
  from: number;
  to: number;
  filter: string;
  decade: number;
  years: Year2[];
  nofollow: boolean;
  count: number;
}

export interface Year2 {
  year: number;
  count: number;
  nofollow: boolean;
}
