export type Review = {
  author: string;
  rating: number;
  comment: string;
};

export type Product = {
  id: string;
  name: string;
  name_fr: string;
  name_en: string;
  slug: string;
  price: number;
  description: string;
  description_fr: string;
  description_en: string;
  category: string;
  images: string[];
  reviews: Review[];
};

export type Category = {
  id:string;
  name: string;
  name_fr: string;
  name_en: string;
  slug: string;
  imageId: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};
