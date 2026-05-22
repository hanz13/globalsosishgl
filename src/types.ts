export type Category = 'sosis' | 'nugget' | 'bakso';

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  fullDescription: string;
  image: string;
  priceEstimate?: string;
  packagingSize: string;
  features: string[];
}

export interface Slide {
  id: string;
  image: string;
  headline: string;
  subheading: string;
  ctaText: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  readTime: string;
}

export interface ContactInfo {
  address: string;
  googleMapsEmbedUrl: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  workingHours: string;
}
