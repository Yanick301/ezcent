import type { Product, Category } from './types';

export const categories: Category[] = [
  { id: 'cat-1', name: 'Men\'s Clothing', slug: 'mens-clothing', imageId: 'mens-category' },
  { id: 'cat-2', name: 'Women\'s Clothing', slug: 'womens-clothing', imageId: 'womens-category' },
  { id: 'cat-3', name: 'Accessories', slug: 'accessories', imageId: 'accessories-category' },
  { id: 'cat-5', name: 'Shoes', slug: 'shoes', imageId: 'shoes-category' },
  { id: 'cat-4', name: 'Winter Wear', slug: 'winter-clothing', imageId: 'winter-category' },
];

export const products: Product[] = [
  // Men's Clothing
  {
    id: 'prod-1',
    name: 'Classic Linen Shirt',
    slug: 'classic-linen-shirt',
    price: 85.00,
    description: 'A timeless wardrobe staple, this linen shirt offers both comfort and sophisticated style. Perfect for warm weather or layered looks.',
    category: 'mens-clothing',
    images: ['men-1', 'men-1-alt'],
    reviews: [
      { author: 'Alex D.', rating: 5, comment: 'Perfect fit and very breathable. My new favorite shirt.' },
      { author: 'Ben C.', rating: 4, comment: 'Great quality linen, wrinkles a bit but that\'s expected.' },
      { author: 'Chris P.', rating: 5, comment: 'Excellent for summer evenings.' },
      { author: 'David R.', rating: 5, comment: 'Bought it in two colors, love them both.' },
      { author: 'Ethan F.', rating: 4, comment: 'Solid shirt, good value for the price.' },
    ],
  },
  {
    id: 'prod-2',
    name: 'Tailored Wool Trousers',
    slug: 'tailored-wool-trousers',
    price: 150.00,
    description: 'Expertly tailored from fine Italian wool, these trousers feature a modern slim fit that is both sharp and comfortable.',
    category: 'mens-clothing',
    images: ['men-2'],
    reviews: [
        { author: 'Frank M.', rating: 5, comment: 'Impeccable tailoring. Worth every penny.' },
        { author: 'George H.', rating: 5, comment: 'The fabric feels luxurious. I feel very sharp wearing these.' },
        { author: 'Henry I.', rating: 4, comment: 'A bit tight on the calves, but otherwise perfect.' },
        { author: 'Ian J.', rating: 5, comment: 'Great for both office and evening events.' },
        { author: 'Jack K.', rating: 5, comment: 'The quality is outstanding.' },
    ],
  },
  {
    id: 'prod-3',
    name: 'Urban Explorer Jacket',
    slug: 'urban-explorer-jacket',
    price: 220.00,
    description: 'A versatile and lightweight jacket designed for the modern man. Water-resistant fabric and multiple pockets make it practical for any adventure.',
    category: 'mens-clothing',
    images: ['men-3'],
    reviews: [
        { author: 'Kevin L.', rating: 5, comment: 'My go-to jacket for spring and fall.' },
        { author: 'Liam N.', rating: 4, comment: 'Wish it was a bit warmer, but it\'s great for layering.' },
        { author: 'Mason O.', rating: 5, comment: 'Stylish and functional. Love the number of pockets.' },
        { author: 'Noah P.', rating: 5, comment: 'Looks great and holds up well in light rain.' },
        { author: 'Owen Q.', rating: 4, comment: 'Good looking jacket.' },
    ],
  },

  // Women's Clothing
  {
    id: 'prod-4',
    name: 'Silk Blend Blouse',
    slug: 'silk-blend-blouse',
    price: 110.00,
    description: 'This elegant blouse is crafted from a luxurious silk blend, featuring a fluid drape and a subtle sheen. A versatile piece for day or night.',
    category: 'womens-clothing',
    images: ['women-1', 'women-1-alt'],
    reviews: [
        { author: 'Alice W.', rating: 5, comment: 'So soft and elegant. I feel beautiful in it.' },
        { author: 'Bethany X.', rating: 5, comment: 'Drapes beautifully. The color is gorgeous.' },
        { author: 'Chloe Y.', rating: 4, comment: 'A little sheer, needs a camisole underneath.' },
        { author: 'Diana Z.', rating: 5, comment: 'Perfect for work and goes straight to dinner.' },
        { author: 'Eva A.', rating: 5, comment: 'A wardrobe must-have.' },
    ],
  },
  {
    id: 'prod-5',
    name: 'Flowy Maxi Dress',
    slug: 'flowy-maxi-dress',
    price: 180.00,
    description: 'Embrace effortless elegance with this flowy maxi dress. Its lightweight fabric and flattering silhouette make it a perfect choice for any special occasion.',
    category: 'womens-clothing',
    images: ['women-2'],
    reviews: [
        { author: 'Fiona B.', rating: 5, comment: 'I wore this to a wedding and got so many compliments!' },
        { author: 'Grace C.', rating: 4, comment: 'It\'s very long, I had to get it hemmed. Beautiful dress though.' },
        { author: 'Hannah D.', rating: 5, comment: 'Stunning and so comfortable to wear.' },
        { author: 'Isla E.', rating: 5, comment: 'The movement of the fabric is magical.' },
        { author: 'Jane F.', rating: 5, comment: 'So romantic and feminine.' },
    ],
  },
  {
    id: 'prod-6',
    name: 'High-Waisted Culottes',
    slug: 'high-waisted-culottes',
    price: 95.00,
    description: 'Chic and modern, these high-waisted culottes offer a sophisticated alternative to skirts or trousers. Designed with a wide leg for comfort and movement.',
    category: 'womens-clothing',
    images: ['women-3'],
    reviews: [
        { author: 'Karen G.', rating: 5, comment: 'So stylish and comfortable! I can dress them up or down.' },
        { author: 'Laura H.', rating: 5, comment: 'The fit is perfect. Very flattering.' },
        { author: 'Megan I.', rating: 3, comment: 'The material wasn\'t what I expected.' },
        { author: 'Nora J.', rating: 4, comment: 'A bit shorter than I thought, but still very cute.' },
        { author: 'Olivia K.', rating: 5, comment: 'I want them in every color.' },
    ],
  },

  // Accessories
  {
    id: 'prod-7',
    name: 'Leather Chronograph Watch',
    slug: 'leather-chronograph-watch',
    price: 350.00,
    description: 'A masterpiece of timekeeping, this chronograph watch features a stainless steel case, sapphire crystal, and a genuine leather strap.',
    category: 'accessories',
    images: ['acc-1', 'acc-1-alt'],
    reviews: [
        { author: 'Peter S.', rating: 5, comment: 'Classic design and reliable movement. An heirloom piece.' },
        { author: 'Quinn T.', rating: 5, comment: 'Even better in person. The details are incredible.' },
        { author: 'Robert U.', rating: 5, comment: 'A truly stunning watch.' },
        { author: 'Samuel V.', rating: 4, comment: 'The strap took a few days to break in, but now it\'s perfect.' },
        { author: 'Thomas W.', rating: 5, comment: 'Receives compliments every time I wear it.' },
    ],
  },
  {
    id: 'prod-8',
    name: 'Woven Silk Scarf',
    slug: 'woven-silk-scarf',
    price: 75.00,
    description: 'Add a touch of luxury to any outfit with this beautifully woven silk scarf. The intricate pattern and soft feel make it a versatile accessory.',
    category: 'accessories',
    images: ['acc-2'],
    reviews: [
        { author: 'Ursula X.', rating: 5, comment: 'The colors are so vibrant and the silk is high quality.' },
        { author: 'Victoria Y.', rating: 5, comment: 'A perfect gift. My mother loved it.' },
        { author: 'Wendy Z.', rating: 4, comment: 'It\'s lovely, just a bit smaller than I imagined.' },
        { author: 'Xena A.', rating: 5, comment: 'So versatile, I wear it in my hair, on my bag, around my neck...' },
        { author: 'Yvonne B.', rating: 5, comment: 'Pure luxury.' },
    ],
  },
   {
    id: 'prod-9',
    name: 'Minimalist Silver Ring',
    slug: 'minimalist-silver-ring',
    price: 60.00,
    description: 'Simple, elegant, and timeless. This sterling silver ring is designed for everyday wear, adding a subtle touch of sophistication to your look.',
    category: 'accessories',
    images: ['acc-3'],
    reviews: [
        { author: 'Zoe C.', rating: 5, comment: 'I never take it off. It\'s the perfect simple ring.' },
        { author: 'Adam D.', rating: 5, comment: 'Bought it for my partner and she loves it.' },
        { author: 'Brian E.', rating: 4, comment: 'Scratches a little easily, but it\'s sterling silver so that\'s normal.' },
        { author: 'Charles F.', rating: 5, comment: 'Exactly what I was looking for. Minimal and elegant.' },
        { author: 'Daniel G.', rating: 5, comment: 'Great quality for the price.' },
    ],
  },
  
  // Shoes
  {
    id: 'prod-13',
    name: 'Italian Leather Loafers',
    slug: 'italian-leather-loafers',
    price: 280.00,
    description: 'Hand-crafted in Italy from premium calfskin leather, these loafers offer timeless style and exceptional comfort. A versatile addition to any gentleman\'s wardrobe.',
    category: 'shoes',
    images: ['shoe-1', 'shoe-1-alt'],
    reviews: [
        { author: 'Edward H.', rating: 5, comment: 'The craftsmanship is superb. They feel like they were made for my feet.' },
        { author: 'Felix I.', rating: 5, comment: 'Incredibly comfortable and stylish. I get compliments every time.' },
    ],
  },
  {
    id: 'prod-14',
    name: 'Classic Suede Boots',
    slug: 'classic-suede-boots',
    price: 320.00,
    description: 'These classic boots are made from rich, water-resistant suede and feature a durable rubber sole. Perfect for bridging the gap between smart and casual.',
    category: 'shoes',
    images: ['shoe-2'],
    reviews: [
        { author: 'Gabriel J.', rating: 5, comment: 'Stylish, comfortable, and durable. What more could you ask for?' },
        { author: 'Harry K.', rating: 4, comment: 'Great boots, but they require some care to keep the suede looking good.' },
    ],
  },

  // Winter Wear
  {
    id: 'prod-10',
    name: 'Cashmere Turtleneck',
    slug: 'cashmere-turtleneck-sweater',
    price: 250.00,
    description: 'Indulge in the unparalleled softness of pure cashmere. This classic turtleneck sweater is a luxurious investment for your winter wardrobe.',
    category: 'winter-clothing',
    images: ['winter-1', 'winter-1-alt'],
    reviews: [
        { author: 'Eleanor H.', rating: 5, comment: 'It feels like wearing a cloud. So soft and warm.' },
        { author: 'Frances I.', rating: 5, comment: 'The best cashmere sweater I have ever owned.' },
        { author: 'Gina J.', rating: 5, comment: 'Investment piece that I will have for years.' },
        { author: 'Helen K.', rating: 4, comment: 'Slightly itchy at first, but softened after one wash.' },
        { author: 'Irene L.', rating: 5, comment: 'Unbelievably luxurious.' },
    ],
  },
  {
    id: 'prod-11',
    name: 'Elegant Wool Coat',
    slug: 'elegant-wool-coat',
    price: 450.00,
    description: 'A timeless silhouette crafted from a rich wool blend. This coat features a belted waist to define the figure, making it a sophisticated top layer for any outfit.',
    category: 'winter-clothing',
    images: ['winter-2'],
    reviews: [
        { author: 'Jessica M.', rating: 5, comment: 'This coat makes any outfit look instantly chic.' },
        { author: 'Katherine N.', rating: 5, comment: 'So warm and elegant. I feel powerful wearing it.' },
        { author: 'Linda O.', rating: 5, comment: 'The quality of the wool is superb. It drapes beautifully.' },
        { author: 'Mary P.', rating: 4, comment: 'The belt is a bit long for me, but it\'s an easy fix.' },
        { author: 'Nancy Q.', rating: 5, comment: 'A classic coat that will never go out of style.' },
    ],
  },
  {
    id: 'prod-12',
    name: 'Insulated Parka',
    slug: 'insulated-parka',
    price: 380.00,
    description: 'Brave the cold in style with our insulated parka. Featuring a faux-fur trimmed hood, down-alternative fill, and a water-resistant shell for ultimate warmth and protection.',
    category: 'winter-clothing',
    images: ['winter-3'],
    reviews: [
        { author: 'Oliver R.', rating: 5, comment: 'Incredibly warm without being too bulky. Perfect for city winters.' },
        { author: 'Patrick S.', rating: 4, comment: 'The zipper can be a bit tricky, but the warmth is worth it.' },
        { author: 'Quentin T.', rating: 5, comment: 'Best winter coat I\'ve ever bought.' },
        { author: 'Ryan U.', rating: 5, comment: 'I was skeptical about the price, but it has been a lifesaver in the snow.' },
        { author: 'Steven V.', rating: 5, comment: 'Functional, warm, and surprisingly stylish for a parka.' },
    ],
  },
];


// --- Data-fetching functions ---

export function getProductsByCategory(categorySlug: string, limit?: number, excludeId?: string): Product[] {
  let filteredProducts: Product[];

  if (categorySlug === 'all') {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter((p) => p.category === categorySlug);
  }

  if (excludeId) {
    filteredProducts = filteredProducts.filter((p) => p.id !== excludeId);
  }
  
  if (limit) {
    return filteredProducts.slice(0, limit);
  }

  return filteredProducts;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(limit: number = 4): Product[] {
    // For now, just taking the first few products from different categories
    const featured = [
        products.find(p => p.category === 'womens-clothing'),
        products.find(p => p.category === 'mens-clothing'),
        products.find(p => p.category === 'shoes'),
        products.find(p => p.category === 'accessories'),
    ].filter((p): p is Product => p !== undefined);
  
    return featured.slice(0, limit);
}
