
import type { Product, Category, Review } from './types';

export const categories: Category[] = [
  { id: 'cat-1', name: 'Herrenbekleidung', name_fr: 'Vêtements Homme', slug: 'mens-clothing', imageId: 'mens-category' },
  { id: 'cat-2', name: 'Damenbekleidung', name_fr: 'Vêtements Femme', slug: 'womens-clothing', imageId: 'womens-category' },
  { id: 'cat-3', name: 'Accessoires', name_fr: 'Accessoires', slug: 'accessories', imageId: 'accessories-category' },
  { id: 'cat-5', name: 'Schuhe', name_fr: 'Chaussures', slug: 'shoes', imageId: 'shoes-category' },
  { id: 'cat-4', name: 'Winterkleidung', name_fr: 'Vêtements d\'hiver', slug: 'winter-clothing', imageId: 'winter-category' },
];

export const products: Product[] = [
    {
    id: '1',
    name: 'Seiden-Midikleid',
    name_fr: 'Robe midi en soie',
    slug: 'robe-midi-en-soie',
    price: 750,
    description: 'Ein elegantes Midikleid aus reiner Seide, perfekt für besondere Anlässe. Fließender Stoff und schmeichelhafter Schnitt.',
    description_fr: 'Une robe midi élégante en pure soie, parfaite pour les occasions spéciales. Tissu fluide et coupe flatteuse.',
    category: 'womens-clothing',
    images: ['robe-midi-en-soie-gucci', 'robe-midi-en-soie-gucci', 'robe-midi-en-soie-gucci'],
    reviews: [
      { author: 'Sophie', rating: 5, comment: 'Absolut umwerfend! Die Qualität ist außergewöhnlich.' },
      { author: 'Claire', rating: 4, comment: 'Sehr schick, aber die Größe fällt etwas klein aus.' },
    ],
  },
  {
    id: '2',
    name: 'Zweireihiger Blazer',
    name_fr: 'Blazer croisé',
    slug: 'blazer-croise',
    price: 980,
    description: 'Ein klassischer zweireihiger Blazer mit goldenen Knöpfen. Eine zeitlose Ergänzung für jede Garderobe.',
    description_fr: 'Un blazer croisé classique avec des boutons dorés. Une pièce intemporelle pour toute garde-robe.',
    category: 'womens-clothing',
    images: ['blazer-croise-balmain', 'blazer-croise-balmain', 'blazer-croise-balmain'],
    reviews: [
      { author: 'Léa', rating: 5, comment: 'Perfekte Passform und sehr elegant.' },
    ],
  },
    {
    id: 'prod-30',
    name: 'Slim-Fit Hemd',
    name_fr: 'Chemise Slim-Fit',
    slug: 'chemise-slim-fit-tom-ford',
    price: 350,
    description: 'Ein perfekt geschnittenes Slim-Fit-Hemd aus hochwertiger Baumwolle für einen eleganten und modernen Look.',
    description_fr: 'Une chemise slim-fit parfaitement coupée en coton de qualité supérieure pour un look élégant et moderne.',
    category: 'mens-clothing',
    images: ['chemise-slim-fit-tom-ford'],
    reviews: []
  },
  {
    id: 'prod-31',
    name: 'Piqué-Polo',
    name_fr: 'Polo piqué',
    slug: 'polo-pique-ralph-lauren',
    price: 120,
    description: 'Das ikonische Piqué-Polo, ein Must-Have für eine lässig-schicke Garderobe. Bequem und zeitlos.',
    description_fr: 'L\'iconique polo en piqué, un indispensable pour une garde-robe casual-chic. Confortable et intemporel.',
    category: 'mens-clothing',
    images: ['polo-pique-ralph-lauren'],
    reviews: []
  },
  {
    id: 'prod-32',
    name: 'Kaschmir-Rollkragenpullover',
    name_fr: 'Pull col roulé cachemire',
    slug: 'pull-col-roule-cachemire-loro-piana',
    price: 900,
    description: 'Ein luxuriöser Rollkragenpullover aus reinem Kaschmir für unübertroffene Weichheit und Wärme.',
    description_fr: 'Un pull col roulé luxueux en pur cachemire pour une douceur et une chaleur inégalées.',
    category: 'mens-clothing',
    images: ['pull-col-roule-cachemire-loro-piana'],
    reviews: []
  },
  {
    id: 'prod-40',
    name: 'Seidenhemd',
    name_fr: 'Chemise en soie',
    slug: 'chemise-soie-versace',
    price: 650,
    description: 'Ein gewagtes Seidenhemd mit ikonischem Druck, das Markenzeichen des Hauses Versace. Für einen unvergesslichen Stil.',
    description_fr: 'Une chemise en soie audacieuse à l\'imprimé iconique, signature de la maison Versace. Pour un style mémorable.',
    category: 'mens-clothing',
    images: ['chemise-soie-versace'],
    reviews: []
  },
  {
    id: 'prod-47',
    name: 'Urbane Leder-Chelsea-Boots',
    name_fr: 'Bottines Chelsea en cuir Citadin',
    slug: 'bottines-chelsea-cuir-citadin',
    price: 450,
    description: 'Moderne und elegante Chelsea-Boots aus Glattleder. Perfekt, um jedes städtische Outfit zu vervollständigen.',
    description_fr: 'Des bottines chelsea modernes et élégantes en cuir lisse. Parfaites pour compléter n\'importe quelle tenue urbaine.',
    category: 'shoes',
    images: ['bottines-chelsea-cuir-citadin'],
    reviews: [
      { author: 'Alex', rating: 5, comment: 'Sehr bequem und stilvoll. Ich trage sie jeden Tag.' }
    ]
  },
  {
    id: 'prod-48',
    name: 'Wildlederstiefeletten mit Blockabsatz',
    name_fr: 'Bottines en cuir suédé à talon carré Paris',
    slug: 'bottines-en-cuir-suede-talon-carre-paris',
    price: 480,
    description: 'Elegante Wildlederstiefeletten mit einem stabilen quadratischen Absatz, der Stil und Komfort vereint.',
    description_fr: 'D\'élégantes bottines en suède dotées d\'un talon carré stable, alliant style et confort au quotidien.',
    category: 'shoes',
    images: ['bottines-en-cuir-suede-talon-carre-paris'],
    reviews: [
      { author: 'Julia', rating: 4, comment: 'Ich liebe den Stil, aber sie müssen eingelaufen werden.' }
    ]
  },
  {
    id: 'prod-49',
    name: 'Perforierte Full-Brogue-Schuhe',
    name_fr: 'Brogues perforées Full-Brogue Tradition',
    slug: 'brogues-perforees-full-brogue-tradition',
    price: 520,
    description: 'Ein klassischer Herrenschuh, der Full-Brogue, mit aufwendigen Perforationen für einen Hauch von traditioneller Raffinesse.',
    description_fr: 'Un classique du vestiaire masculin, le full-brogue, avec ses perforations élaborées pour une touche de sophistication traditionnelle.',
    category: 'shoes',
    images: ['brogues-perforees-full-brogue-tradition'],
    reviews: []
  },
  {
    id: 'prod-50',
    name: 'Chunky-Derby-Schuhe mit Plateausohle',
    name_fr: 'Derby chunky à plateforme Street-Luxe',
    slug: 'derby-chunky-platform-street-luxe',
    price: 610,
    description: 'Ein kühner Derby-Schuh mit einer imposanten Plateausohle, der Streetwear und Luxus für einen entschieden modernen Look vereint.',
    description_fr: 'Une chaussure derby audacieuse montée sur une semelle plateforme imposante, fusionnant streetwear et luxe pour un look résolument moderne.',
    category: 'shoes',
    images: ['derby-chunky-platform-street-luxe'],
    reviews: [
      { author: 'Leo', rating: 5, comment: 'Einzigartiger Stil, sehr beeindruckend.' }
    ]
  },
  {
    id: 'prod-51',
    name: 'Elite Derby-Schuhe aus genarbtem Leder',
    name_fr: 'Derby en cuir grainé Élite',
    slug: 'derby-cuir-graine-elite',
    price: 550,
    description: 'Ein robuster und eleganter Derby-Schuh aus hochwertigem genarbtem Leder. Ein Muss für den anspruchsvollen Mann.',
    description_fr: 'Un derby robuste et élégant, fabriqué dans un cuir grainé de première qualité. Un essentiel pour l\'homme distingué.',
    category: 'shoes',
    images: ['derby-cuir-graine-elite'],
    reviews: []
  },
  {
    id: 'prod-52',
    name: 'Lackleder-Pumps mit 9 cm Absatz',
    name_fr: 'Escarpins en cuir verni talon 9 cm Éclipse',
    slug: 'escarpins-cuir-verni-talon-9-cm-eclipse',
    price: 490,
    description: 'Der Inbegriff von Weiblichkeit, diese Lacklederpumps mit einem 9 cm hohen Absatz verlängern die Silhouette elegant.',
    description_fr: 'Le summum de la féminité, ces escarpins en cuir verni avec un talon de 9 cm pour allonger la silhouette avec élégance.',
    category: 'shoes',
    images: ['escarpins-cuir-verni-talon-9-cm-eclipse'],
    reviews: []
  },
  {
    id: 'prod-53',
    name: 'Wildleder-Loafer mit Quasten',
    name_fr: 'Mocassin à pampilles en suède Club',
    slug: 'mocassin-tasseled-suede-club',
    price: 420,
    description: 'Ein lässig-eleganter Loafer aus Wildleder, verziert mit klassischen Quasten. Perfekt für einen Preppy-Chic-Look.',
    description_fr: 'Un mocassin décontracté-élégant en suède, orné de pampilles classiques. Parfait pour un look preppy-chic.',
    category: 'shoes',
    images: ['mocassin-tasseled-suede-club'],
    reviews: []
  },
  {
    id: 'prod-54',
    name: 'Satin-Mules mit skulpturalem Absatz',
    name_fr: 'Mules en satin à talon sculpté Diva',
    slug: 'mules-satin-talon-sculpte-diva',
    price: 530,
    description: 'Diese Satin-Mules sind ein wahres Schmuckstück und zeichnen sich durch ihren einzigartigen skulpturalen Absatz aus. Für einen unvergesslichen Auftritt.',
    description_fr: 'Véritables bijoux de pied, ces mules en satin se distinguent par leur talon sculptural unique. Pour une entrée remarquée.',
    category: 'shoes',
    images: ['mules-satin-talon-sculpte-diva'],
    reviews: [
      { author: 'Nina', rating: 5, comment: 'Spektakulär! Ein echtes Kunstwerk.' }
    ]
  },
  {
    id: 'prod-55',
    name: 'Handgenähte Oxford-Schuhe aus patiniertem Leder',
    name_fr: 'Richelieu cousu main en cuir patiné Souverain',
    slug: 'richelieu-cousu-main-cuir-patine-souverain',
    price: 780,
    description: 'Der Oxford in seiner edelsten Form. Handgenäht aus patiniertem Leder für eine einzigartige Tiefe und Farbe.',
    description_fr: 'Le richelieu dans sa forme la plus noble. Cousu à la main dans un cuir patiné pour une profondeur et une couleur uniques.',
    category: 'shoes',
    images: ['richelieu-cousu-main-cuir-patine-souverain'],
    reviews: []
  },
  {
    id: 'prod-56',
    name: 'Sandalen mit Knöchelriemen aus Leder',
    name_fr: 'Sandales à bride cheville en cuir Sérénité',
    slug: 'sandales-a-bride-cheville-en-cuir-serenite',
    price: 390,
    description: 'Minimalistische und schicke Sandalen mit einem feinen Knöchelriemen aus Leder. Die Essenz sommerlicher Eleganz.',
    description_fr: 'Des sandales minimalistes et chics, avec une fine bride en cuir qui enlace la cheville. L\'essence de l\'élégance estivale.',
    category: 'shoes',
    images: ['sandales-a-bride-cheville-en-cuir-serenite'],
    reviews: []
  },
  {
    id: 'prod-57',
    name: 'Luxus-Sneakers aus Nubukleder',
    name_fr: 'Sneakers de luxe en cuir nubuck Runway',
    slug: 'sneakers-luxe-cuir-nubuck-runway',
    price: 650,
    description: 'Diese Sneakers überschreiten die Grenzen zwischen Sport und Luxus, gefertigt aus weichem Nubukleder mit einer Designer-Sohle.',
    description_fr: 'Des sneakers qui transcendent les codes du sport et du luxe, fabriquées en cuir nubuck doux avec une semelle design.',
    category: 'shoes',
    images: ['sneakers-luxe-cuir-nubuck-runway'],
    reviews: [
      { author: 'Tom', rating: 5, comment: 'So bequem und sehen toll aus.' }
    ]
  }
];


// --- Data-fetching functions ---

export function getProductsByCategory(products: Product[], categorySlug: string, limit?: number, excludeId?: string): Product[] {
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

export function getProductBySlug(products: Product[], slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(products: Product[], id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(products: Product[], limit: number = 4): Product[] {
    const winterProducts = products.filter(p => p.category === 'winter-clothing' || p.name.toLowerCase().includes('winter') || p.name.toLowerCase().includes('mantel') || p.name.toLowerCase().includes('pullover'));
    return winterProducts.slice(0, limit);
}
