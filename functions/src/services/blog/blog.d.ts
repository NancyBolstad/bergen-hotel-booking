interface Image {
  url?: string;
  alt?: string;
  captions?: string;
}

export interface Blog {
  id?: string;
  title?: string;
  intro?: string;
  content?: string;
  author?: string;
  categories?: string[];
  images?: Image[];
  createdAt?: string;
}
