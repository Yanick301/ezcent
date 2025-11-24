
import type { Product, Category, Review } from './types';

export const categories: Category[] = [
  { id: 'cat-1', name: 'Herrenbekleidung', name_fr: 'Vêtements Homme', name_en: 'Men\'s Clothing', slug: 'mens-clothing', imageId: 'mens-category' },
  { id: 'cat-2', name: 'Damenbekleidung', name_fr: 'Vêtements Femme', name_en: 'Women\'s Clothing', slug: 'womens-clothing', imageId: 'womens-category' },
  { id: 'cat-3', name: 'Accessoires', name_fr: 'Accessoires', name_en: 'Accessories', slug: 'accessories', imageId: 'accessories-category' },
  { id: 'cat-5', name: 'Schuhe', name_fr: 'Chaussures', name_en: 'Shoes', slug: 'shoes', imageId: 'shoes-category' },
  { id: 'cat-4', name: 'Winterkleidung', name_fr: 'Vêtements d\'hiver', name_en: 'Winter Clothing', slug: 'winter-clothing', imageId: 'winter-category' },
];

export const products: Product[] = [
    {
    id: '1',
    name: 'Seiden-Midikleid',
    name_fr: 'Robe midi en soie',
    name_en: 'Silk Midi Dress',
    slug: 'robe-midi-en-soie',
    price: 750,
    description: 'Umhüllen Sie sich mit fließender Eleganz. Dieses Midikleid aus reiner Seide besticht durch seinen sanften Glanz und eine schmeichelhafte Silhouette, die bei jeder Bewegung tanzt. Ein Meisterwerk der Couture für unvergessliche Momente.',
    description_fr: 'Enveloppez-vous d\'une élégance fluide. Cette robe midi en pure soie se distingue par son éclat délicat et une silhouette flatteuse qui danse à chaque mouvement. Une pièce maîtresse de la couture pour des moments inoubliables.',
    description_en: 'Wrap yourself in fluid elegance. This pure silk midi dress features a delicate sheen and a flattering silhouette that dances with every move. A couture masterpiece for unforgettable moments.',
    category: 'womens-clothing',
    images: ['robe-midi-en-soie-gucci', 'robe-midi-en-soie-gucci', 'robe-midi-en-soie-gucci'],
    reviews: [
      { author: 'Sophie', rating: 5, comment: 'Absolument sublime. La qualité de la soie est exceptionnelle.' },
      { author: 'Claire', rating: 4, comment: 'Très chic, mais attention elle taille un peu petit.' },
    ],
  },
  {
    id: '2',
    name: 'Zweireihiger Blazer',
    name_fr: 'Blazer croisé',
    name_en: 'Double-Breasted Blazer',
    slug: 'blazer-croise',
    price: 980,
    description: 'Definieren Sie Autorität und Stil mit diesem zweireihigen Blazer. Seine strukturierten Schultern und die goldenen Knöpfe schaffen eine kraftvolle Silhouette. Gefertigt aus feinster Wolle, ist er eine Investition in zeitlose Eleganz.',
    description_fr: 'Définissez l\'autorité et le style avec ce blazer croisé. Ses épaules structurées et ses boutons dorés créent une silhouette puissante. Confectionné dans une laine de premier choix, c\'est un investissement dans une élégance intemporelle.',
    description_en: 'Define authority and style with this double-breasted blazer. Its structured shoulders and gold buttons create a powerful silhouette. Crafted from the finest wool, it is an investment in timeless elegance.',
    category: 'womens-clothing',
    images: ['blazer-croise-balmain', 'blazer-croise-balmain', 'blazer-croise-balmain'],
    reviews: [
      { author: 'Léa', rating: 5, comment: 'La coupe est absolument parfaite et le tissu est magnifique.' },
      { author: 'Inès', rating: 5, comment: 'Un classique instantané. Je me sens puissante en le portant.' },
    ],
  },
  {
    id: 'prod-30',
    name: 'Slim-Fit Hemd',
    name_fr: 'Chemise Slim-Fit',
    name_en: 'Slim-Fit Shirt',
    slug: 'chemise-slim-fit-tom-ford',
    price: 350,
    description: 'Die Quintessenz der Raffinesse. Dieses Slim-Fit-Hemd, gefertigt aus luxuriöser ägyptischer Baumwolle, bietet eine unvergleichliche Passform und ein makelloses Finish. Der perfekte Begleiter für den modernen Gentleman.',
    description_fr: 'La quintessence du raffinement. Cette chemise slim-fit, coupée dans un luxueux coton égyptien, offre une coupe inégalée et une finition impeccable. L\'alliée parfaite du gentleman moderne.',
    description_en: 'The quintessence of refinement. This slim-fit shirt, cut from luxurious Egyptian cotton, offers an unmatched fit and a flawless finish. The perfect ally for the modern gentleman.',
    category: 'mens-clothing',
    images: ['chemise-slim-fit-tom-ford'],
    reviews: [
        { author: 'Thomas', rating: 5, comment: 'Une qualité de tissu exceptionnelle. Le tombé est parfait.'},
        { author: 'Julien', rating: 5, comment: 'Enfin une chemise qui épouse parfaitement la silhouette.'}
    ]
  },
  {
    id: 'prod-31',
    name: 'Piqué-Polo',
    name_fr: 'Polo piqué',
    name_en: 'Piqué Polo Shirt',
    slug: 'polo-pique-ralph-lauren',
    price: 120,
    description: 'Eine Ikone der lässigen Eleganz. Dieses Polo aus atmungsaktivem Baumwoll-Piqué verbindet Komfort mit einem Hauch von aristokratischem Flair. Ein zeitloses Must-Have für jeden Anlass, vom Yachtclub bis zum Stadtbummel.',
    description_fr: 'L\'icône de l\'élégance décontractée. Ce polo en piqué de coton respirant allie confort et une touche d\'aisance aristocratique. Un indispensable intemporel pour toutes les occasions, du yacht club à la ville.',
    description_en: 'The icon of casual elegance. This breathable cotton piqué polo combines comfort with a touch of aristocratic ease. A timeless essential for all occasions, from the yacht club to the city.',
    category: 'mens-clothing',
    images: ['polo-pique-ralph-lauren'],
    reviews: [
        { author: 'Antoine', rating: 5, comment: 'La qualité est au rendez-vous. Un classique efficace.'}
    ]
  },
  {
    id: 'prod-32',
    name: 'Kaschmir-Rollkragenpullover',
    name_fr: 'Pull col roulé cachemire',
    name_en: 'Cashmere Turtleneck Sweater',
    slug: 'pull-col-roule-cachemire-loro-piana',
    price: 900,
    description: 'Erleben Sie die Umarmung von purem Luxus. Dieser Rollkragenpullover aus feinstem mongolischem Kaschmir bietet unübertroffene Weichheit und wohlige Wärme. Ein Kunstwerk der Strickerei für die kältesten Tage.',
    description_fr: 'Vivez l\'étreinte du luxe pur. Ce pull à col roulé, confectionné dans le plus fin cachemire de Mongolie, offre une douceur inégalée et une chaleur réconfortante. Une œuvre d\'art du tricotage pour les jours les plus froids.',
    description_en: 'Experience the embrace of pure luxury. This turtleneck sweater, crafted from the finest Mongolian cashmere, offers unparalleled softness and comforting warmth. A work of knitting art for the coldest days.',
    category: 'mens-clothing',
    images: ['pull-col-roule-cachemire-loro-piana'],
    reviews: [
        { author: 'François', rating: 5, comment: 'Une douceur incroyable. On ne veut plus le quitter.'},
        { author: 'Paul', rating: 5, comment: 'L\'investissement vaut chaque centime.'}
    ]
  },
  {
    id: 'prod-40',
    name: 'Seidenhemd',
    name_fr: 'Chemise en soie',
    name_en: 'Silk Shirt',
    slug: 'chemise-soie-versace',
    price: 650,
    description: 'Machen Sie Eindruck mit diesem kühnen Seidenhemd. Der ikonische Barockdruck und die fließende Seide sind ein Markenzeichen des Hauses Versace und garantieren einen unvergesslichen Stil, der Selbstbewusstsein ausstrahlt.',
    description_fr: 'Affirmez votre présence avec cette chemise en soie audacieuse. Son imprimé baroque iconique et la fluidité de la soie, signature de la maison Versace, garantissent un style mémorable qui respire la confiance.',
    description_en: 'Make a statement with this bold silk shirt. Its iconic baroque print and the fluidity of the silk, a signature of the house of Versace, guarantee a memorable style that exudes confidence.',
    category: 'mens-clothing',
    images: ['chemise-soie-versace'],
    reviews: [
        { author: 'Stéphane', rating: 5, comment: 'Pièce maîtresse de ma garde-robe. Les regards se tournent vers moi.'}
    ]
  },
  {
    id: 'prod-47',
    name: 'Urbane Leder-Chelsea-Boots',
    name_fr: 'Bottines Chelsea en cuir Citadin',
    name_en: 'Urban Leather Chelsea Boots',
    slug: 'bottines-chelsea-cuir-citadin',
    price: 450,
    description: 'Die perfekte Verbindung von Tradition und Moderne. Diese Chelsea-Boots aus vollnarbigem Kalbsleder bieten eine schlanke Silhouette und außergewöhnlichen Komfort dank ihrer elastischen Einsätze. Ein Muss für den urbanen Entdecker.',
    description_fr: 'L\'alliance parfaite de la tradition et de la modernité. Ces bottines Chelsea en cuir de veau pleine fleur offrent une silhouette épurée et un confort exceptionnel grâce à leurs empiècements élastiques. Un must-have pour l\'explorateur urbain.',
    description_en: 'The perfect blend of tradition and modernity. These full-grain calfskin Chelsea boots offer a sleek silhouette and exceptional comfort thanks to their elastic gussets. A must-have for the urban explorer.',
    category: 'shoes',
    images: ['bottines-chelsea-cuir-citadin'],
    reviews: [
      { author: 'Alex', rating: 5, comment: 'Très confortables et le cuir est de superbe qualité. Je les porte tous les jours.' },
      { author: 'Luc', rating: 4, comment: 'Elles sont belles, mais demandent un petit temps d\'adaptation.'}
    ]
  },
  {
    id: 'prod-48',
    name: 'Wildlederstiefeletten mit Blockabsatz',
    name_fr: 'Bottines en cuir suédé à talon carré Paris',
    name_en: 'Suede Ankle Boots with Block Heel',
    slug: 'bottines-en-cuir-suede-talon-carre-paris',
    price: 480,
    description: 'Eleganz und Stabilität vereint. Diese Wildlederstiefeletten mit ihrem soliden Blockabsatz garantieren einen sicheren Gang und eine feminine Silhouette. Das weiche Veloursleder verleiht jedem Outfit eine Note von Raffinesse.',
    description_fr: 'L\'élégance et la stabilité réunies. Ces bottines en suède, avec leur talon carré solide, assurent une démarche assurée et une silhouette féminine. La douceur du veau velours ajoute une note de raffinement à chaque tenue.',
    description_en: 'Elegance and stability combined. These suede ankle boots, with their solid block heel, ensure a confident walk and a feminine silhouette. The softness of the suede adds a note of refinement to any outfit.',
    category: 'shoes',
    images: ['bottines-en-cuir-suede-talon-carre-paris'],
    reviews: [
      { author: 'Julia', rating: 4, comment: 'J\'adore le style, mais elles nécessitent d\'être "faites" au début.' },
      { author: 'Alice', rating: 5, comment: 'Parfaites pour le bureau comme pour sortir. Très polyvalentes.'}
    ]
  },
  {
    id: 'prod-49',
    name: 'Perforierte Full-Brogue-Schuhe',
    name_fr: 'Brogues perforées Full-Brogue Tradition',
    name_en: 'Perforated Full-Brogue Shoes',
    slug: 'brogues-perforees-full-brogue-tradition',
    price: 520,
    description: 'Ein zeitloser Klassiker der Herrengarderobe. Diese Full-Brogues aus feinstem Leder sind mit kunstvollen Perforationen verziert, ein Zeugnis traditioneller Handwerkskunst für einen Hauch von anspruchsvoller Eleganz.',
    description_fr: 'Un classique intemporel du vestiaire masculin. Ces souliers full-brogue en cuir fin sont ornés de perforations artistiques, témoignage d\'un savoir-faire traditionnel pour une touche de sophistication distinguée.',
    description_en: 'A timeless classic of the men\'s wardrobe. These full-brogue shoes in fine leather are adorned with artistic perforations, a testament to traditional craftsmanship for a touch of distinguished sophistication.',
    category: 'shoes',
    images: ['brogues-perforees-full-brogue-tradition'],
    reviews: [
      { author: 'Guillaume', rating: 5, comment: 'Une qualité de fabrication irréprochable. De vrais souliers de gentleman.' }
    ]
  },
  {
    id: 'prod-50',
    name: 'Chunky-Derby-Schuhe mit Plateausohle',
    name_fr: 'Derby chunky à plateforme Street-Luxe',
    name_en: 'Chunky Platform Derby Shoes',
    slug: 'derby-chunky-platform-street-luxe',
    price: 610,
    description: 'Ein kühnes Statement für den modebewussten Mann. Diese Derby-Schuhe kombinieren ein klassisches Obermaterial aus poliertem Leder mit einer imposanten Plateausohle und schaffen so eine avantgardistische Fusion aus Streetwear und Luxus.',
    description_fr: 'Une déclaration audacieuse pour l\'homme à la pointe de la mode. Ces derbies fusionnent une tige classique en cuir poli avec une semelle plateforme imposante, créant une fusion avant-gardiste entre streetwear et luxe.',
    description_en: 'A bold statement for the fashion-forward man. These derbies merge a classic polished leather upper with an imposing platform sole, creating an avant-garde fusion of streetwear and luxury.',
    category: 'shoes',
    images: ['derby-chunky-platform-street-luxe'],
    reviews: [
      { author: 'Leo', rating: 5, comment: 'Style unique, elles font vraiment leur effet.' },
      { author: 'Maxime', rating: 5, comment: 'Surprenant au début, mais incroyablement confortables.'}
    ]
  },
  {
    id: 'prod-51',
    name: 'Elite Derby-Schuhe aus genarbtem Leder',
    name_fr: 'Derby en cuir grainé Élite',
    name_en: 'Elite Grained Leather Derby Shoes',
    slug: 'derby-cuir-graine-elite',
    price: 550,
    description: 'Robustheit trifft auf Raffinesse. Gefertigt aus hochwertigem genarbtem Leder, bietet dieser Derby-Schuh eine reiche Textur und außergewöhnliche Langlebigkeit. Ein Grundpfeiler für die Garderobe des anspruchsvollen Mannes.',
    description_fr: 'Quand la robustesse rencontre le raffinement. Fabriqué dans un cuir grainé de première qualité, ce derby offre une texture riche et une durabilité exceptionnelle. Un pilier de la garde-robe de l\'homme exigeant.',
    description_en: 'When robustness meets refinement. Crafted from premium grained leather, this derby offers a rich texture and exceptional durability. A pillar of the discerning man\'s wardrobe.',
    category: 'shoes',
    images: ['derby-cuir-graine-elite'],
    reviews: [
      { author: 'Sébastien', rating: 5, comment: 'Le cuir grainé est magnifique et la chaussure est très solide.' }
    ]
  },
  {
    id: 'prod-52',
    name: 'Lackleder-Pumps mit 9 cm Absatz',
    name_fr: 'Escarpins en cuir verni talon 9 cm Éclipse',
    name_en: 'Patent Leather Pumps with 9cm Heel',
    slug: 'escarpins-cuir-verni-talon-9-cm-eclipse',
    price: 490,
    description: 'Der Inbegriff weiblicher Eleganz. Diese Pumps aus glänzendem Lackleder verlängern die Silhouette mit ihrem 9 cm hohen Stilettoabsatz. Ein Symbol für Glamour und Selbstvertrauen für jeden besonderen Anlass.',
    description_fr: 'La quintessence de l\'élégance féminine. Ces escarpins en cuir verni brillant allongent la silhouette avec leur talon aiguille de 9 cm. Un symbole de glamour et de confiance pour toute occasion spéciale.',
    description_en: 'The epitome of feminine elegance. These glossy patent leather pumps elongate the silhouette with their 9 cm stiletto heel. A symbol of glamour and confidence for any special occasion.',
    category: 'shoes',
    images: ['escarpins-cuir-verni-talon-9-cm-eclipse'],
    reviews: [
      { author: 'Charlotte', rating: 5, comment: 'La cambrure est parfaite. Elles sont sublimes.' }
    ]
  },
  {
    id: 'prod-53',
    name: 'Wildleder-Loafer mit Quasten',
    name_fr: 'Mocassin à pampilles en suède Club',
    name_en: 'Suede Tassel Loafers',
    slug: 'mocassin-tasseled-suede-club',
    price: 420,
    description: 'Eine lässig-schicke Ästhetik. Diese Loafer aus weichem Wildleder sind mit eleganten Quasten verziert und verkörpern einen mühelosen Preppy-Stil. Ideal für einen eleganten Look am Wochenende oder im Büro.',
    description_fr: 'Une esthétique casual-chic. Ces mocassins en suède souple, agrémentés d\'élégantes pampilles, incarnent un style preppy sans effort. Idéal pour une allure élégante le week-end ou au bureau.',
    description_en: 'A casual-chic aesthetic. These soft suede loafers, embellished with elegant tassels, embody an effortless preppy style. Ideal for an elegant look on the weekend or at the office.',
    category: 'shoes',
    images: ['mocassin-tasseled-suede-club'],
    reviews: [
      { author: 'Arthur', rating: 4, comment: 'Très beaux, mais un peu fragiles sous la pluie.' }
    ]
  },
  {
    id: 'prod-54',
    name: 'Satin-Mules mit skulpturalem Absatz',
    name_fr: 'Mules en satin à talon sculpté Diva',
    name_en: 'Satin Mules with Sculpted Heel',
    slug: 'mules-satin-talon-sculpte-diva',
    price: 530,
    description: 'Ein wahres Fußschmuckstück. Diese Mules aus leuchtendem Satin fallen durch ihren einzigartigen, kunstvoll skulpturierten Absatz auf. Sie sind die Garantie für einen unvergesslichen und raffinierten Auftritt.',
    description_fr: 'Véritable bijou de pied. Ces mules en satin lumineux se distinguent par leur talon sculptural unique et artistique. La garantie d\'une entrée remarquée et sophistiquée.',
    description_en: 'A true foot jewel. These luminous satin mules are distinguished by their unique and artistic sculptural heel. The guarantee of a remarkable and sophisticated entrance.',
    category: 'shoes',
    images: ['mules-satin-talon-sculpte-diva'],
    reviews: [
      { author: 'Nina', rating: 5, comment: 'Spectaculaires ! Une véritable œuvre d\'art à mes pieds.' },
      { author: 'Laura', rating: 5, comment: 'Étonnamment confortables pour des chaussures aussi design.'}
    ]
  },
  {
    id: 'prod-55',
    name: 'Handgenähte Oxford-Schuhe aus patiniertem Leder',
    name_fr: 'Richelieu cousu main en cuir patiné Souverain',
    name_en: 'Hand-Stitched Patinated Leather Oxfords',
    slug: 'richelieu-cousu-main-cuir-patine-souverain',
    price: 780,
    description: 'Die Krönung der Schuhmacherkunst. Diese handgenähten Oxford-Schuhe aus sorgfältig patiniertem Leder bieten eine einzigartige Tiefe und unvergleichliche Farbnuancen. Für den Kenner, der das Außergewöhnliche sucht.',
    description_fr: 'Le summum de l\'art bottier. Ce richelieu cousu main, réalisé dans un cuir méticuleusement patiné, offre une profondeur et des nuances de couleur inégalées. Pour le connaisseur qui recherche l\'exception.',
    description_en: 'The pinnacle of shoemaking art. This hand-stitched oxford, made from meticulously patinated leather, offers unparalleled depth and shades of color. For the connoisseur who seeks the exceptional.',
    category: 'shoes',
    images: ['richelieu-cousu-main-cuir-patine-souverain'],
    reviews: [
      { author: 'Édouard', rating: 5, comment: 'La patine est magnifique. Des chaussures d\'exception.' }
    ]
  },
  {
    id: 'prod-56',
    name: 'Sandalen mit Knöchelriemen aus Leder',
    name_fr: 'Sandales à bride cheville en cuir Sérénité',
    name_en: 'Leather Ankle Strap Sandals',
    slug: 'sandales-a-bride-cheville-en-cuir-serenite',
    price: 390,
    description: 'Die Essenz sommerlicher Schlichtheit. Diese minimalistischen Sandalen zeichnen sich durch einen feinen Lederriemen aus, der den Knöchel elegant umschließt. Ein Symbol für mühelose Eleganz an sonnigen Tagen.',
    description_fr: 'L\'essence de la simplicité estivale. Ces sandales minimalistes se caractérisent par une fine bride en cuir qui enlace délicatement la cheville. Un symbole d\'élégance sans effort pour les jours ensoleillés.',
    description_en: 'The essence of summer simplicity. These minimalist sandals are characterized by a thin leather strap that delicately wraps around the ankle. A symbol of effortless elegance for sunny days.',
    category: 'shoes',
    images: ['sandales-a-bride-cheville-en-cuir-serenite'],
    reviews: [
      { author: 'Chloé', rating: 5, comment: 'Élégantes, simples et confortables. Parfaites pour l\'été.' }
    ]
  },
  {
    id: 'prod-57',
    name: 'Luxus-Sneakers aus Nubukleder',
    name_fr: 'Sneakers de luxe en cuir nubuck Runway',
    name_en: 'Luxury Nubuck Leather Sneakers',
    slug: 'sneakers-luxe-cuir-nubuck-runway',
    price: 650,
    description: 'Überschreiten Sie die Grenzen zwischen lässig und luxuriös. Diese Sneakers sind aus samtigem Nubukleder gefertigt und auf einer maßgefertigten Sohle montiert, die Komfort und High-Fashion-Stil vereint.',
    description_fr: 'Transcendez les frontières entre le décontracté et le luxe. Ces sneakers sont fabriquées en cuir nubuck velouté et montées sur une semelle designée sur mesure, alliant confort et style haute-couture.',
    description_en: 'Transcend the boundaries between casual and luxury. These sneakers are made of velvety nubuck leather and mounted on a custom-designed sole, combining comfort and high-fashion style.',
    category: 'shoes',
    images: ['sneakers-luxe-cuir-nubuck-runway'],
    reviews: [
      { author: 'Tom', rating: 5, comment: 'Aussi confortables que stylées. Le nubuck est très doux.' },
      { author: 'Lucas', rating: 5, comment: 'Un luxe discret et moderne. J\'adore.'}
    ]
  },
  {
    id: 'acc-1',
    name: 'Chrono Luxe Uhr',
    name_fr: 'Montre Chrono Luxe',
    name_en: 'Chrono Luxe Watch',
    slug: 'montre-acier-inoxydable-noire-chrono-luxe',
    price: 450,
    description: 'Eine kühne Ästhetik für das Handgelenk. Diese Chronographenuhr aus mattschwarzem Edelstahl ist ein Symbol für moderne Raffinesse. Sie vereint anspruchsvolle Funktionalität mit einem entschieden urbanen und kraftvollen Design.',
    description_fr: 'Une esthétique audacieuse pour le poignet. Cette montre chronographe en acier inoxydable noir mat est un symbole de sophistication moderne. Elle allie une fonctionnalité pointue à un design résolument urbain et puissant.',
    description_en: 'A bold aesthetic for the wrist. This matte black stainless steel chronograph watch is a symbol of modern sophistication. It combines sharp functionality with a resolutely urban and powerful design.',
    category: 'accessories',
    images: ['montre-acier-inoxydable-noire-chrono-luxe'],
    reviews: [
        { author: 'Marc', rating: 5, comment: 'Superbe montre, très classe et agréable à porter.' },
        { author: 'David', rating: 5, comment: 'Le noir mat est magnifique. Elle ne quitte plus mon poignet.'}
    ]
  },
  {
    id: 'acc-2',
    name: 'Hydrosport Sportuhr',
    name_fr: 'Montre sport Hydrosport',
    name_en: 'Hydrosport Sports Watch',
    slug: 'montre-sport-silicone-hydrosport-5-atm',
    price: 250,
    description: 'Der ideale Begleiter für den modernen Abenteurer. Mit ihrem widerstandsfähigen Silikonarmband und einer Wasserdichtigkeit von 5 ATM ist diese Uhr für jede Herausforderung bereit, ohne jemals auf Stil zu verzichten.',
    description_fr: 'Le compagnon idéal de l\'aventurier moderne. Avec son bracelet en silicone résistant et son étanchéité à 5 ATM, cette montre est conçue pour affronter tous les défis sans jamais sacrifier le style.',
    description_en: 'The ideal companion for the modern adventurer. With its durable silicone strap and 5 ATM water resistance, this watch is designed to tackle any challenge without ever sacrificing style.',
    category: 'accessories',
    images: ['montre-sport-silicone-hydrosport-5-atm'],
    reviews: [
        { author: 'Kevin', rating: 5, comment: 'Robuste et stylée, parfaite pour mes activités sportives.'}
    ]
  },
  {
    id: 'acc-3',
    name: 'Heritage Classic Uhr',
    name_fr: 'Montre Heritage Classique',
    name_en: 'Heritage Classic Watch',
    slug: 'montre-cuir-brun-heritage-classique',
    price: 380,
    description: 'Eine Hommage an die zeitlose Uhrmacherkunst. Diese Uhr mit ihrem braunen Lederarmband, das mit der Zeit eine wunderschöne Patina entwickelt, und ihrem minimalistischen Zifferblatt verkörpert eine unaufdringliche und ewige Eleganz.',
    description_fr: 'Un hommage à l\'horlogerie intemporelle. Cette montre, avec son bracelet en cuir brun qui se patinera superbement avec le temps et son cadran épuré, incarne une élégance discrète et éternelle.',
    description_en: 'A tribute to timeless watchmaking. This watch, with its brown leather strap that will develop a beautiful patina over time and its minimalist dial, embodies a discreet and eternal elegance.',
    category: 'accessories',
    images: ['montre-cuir-brun-heritage-classique'],
    reviews: [
        { author: 'Jean', rating: 5, comment: 'Magnifique et très agréable à porter. Un classique.' },
        { author: 'Pierre', rating: 5, comment: 'Le cuir est de très belle qualité.'}
    ]
  },
  {
    id: 'acc-4',
    name: 'Blue Vision Uhr',
    name_fr: 'Montre Blue Vision',
    name_en: 'Blue Vision Watch',
    slug: 'montre-metallique-argent-blue-vision',
    price: 320,
    description: 'Fesseln Sie die Blicke mit dem tiefblauen Zifferblatt dieser Uhr, das an einen mitternächtlichen Himmel erinnert. Eingefasst in poliertes silbernes Metall, ist sie ein Schmuckstück von moderner und fesselnder Eleganz.',
    description_fr: 'Capturez les regards avec le cadran bleu profond de cette montre, évoquant un ciel de minuit. Enchâssée dans un métal argenté poli, c\'est un bijou d\'une élégance moderne et captivante.',
    description_en: 'Capture gazes with the deep blue dial of this watch, reminiscent of a midnight sky. Encased in polished silver metal, it is a jewel of modern and captivating elegance.',
    category: 'accessories',
    images: ['montre-metallique-argent-blue-vision'],
    reviews: [
        { author: 'Daniel', rating: 5, comment: 'Le cadran bleu est tout simplement hypnotique.'}
    ]
  },
  {
    id: 'acc-5',
    name: 'Urban Tech Digitaluhr',
    name_fr: 'Montre digitale Urban Tech',
    name_en: 'Urban Tech Digital Watch',
    slug: 'montre-digitale-led-urban-tech',
    price: 180,
    description: 'Ein Konzentrat aus Technologie und Stil. Diese digitale Uhr mit ihrem klaren LED-Display und minimalistischem Design ist das perfekte Accessoire für einen Look, der entschieden in der Zukunft verankert ist.',
    description_fr: 'Un concentré de technologie et de style. Cette montre digitale, avec son affichage LED clair et son design minimaliste, est l\'accessoire parfait pour un look résolument ancré dans le futur.',
    description_en: 'A concentrate of technology and style. This digital watch, with its clear LED display and minimalist design, is the perfect accessory for a look resolutely anchored in the future.',
    category: 'accessories',
    images: ['montre-digitale-led-urban-tech'],
    reviews: [
        { author: 'Simon', rating: 4, comment: 'Design sympa et futuriste. Très légère.'}
    ]
  },
  {
    id: 'acc-6',
    name: 'Executive Elite Uhr',
    name_fr: 'Montre Executive Elite',
    name_en: 'Executive Elite Watch',
    slug: 'montre-cadran-or-rose-executive-elite',
    price: 550,
    description: 'Für den Mann, der an der Spitze steht. Die sanften und warmen Töne des Roségold-Zifferblatts verleihen dieser prestigeträchtigen Uhr eine moderne und anspruchsvolle Note. Ein Symbol für Erfolg und raffinierten Geschmack.',
    description_fr: 'Pour l\'homme qui est au sommet. Les tons doux et chauds du cadran en or rose confèrent à cette montre de prestige une touche de modernité et d\'exigence. Un symbole de réussite et de goût raffiné.',
    description_en: 'For the man at the top. The soft and warm tones of the rose gold dial give this prestigious watch a touch of modernity and sophistication. A symbol of success and refined taste.',
    category: 'accessories',
    images: ['montre-cadran-or-rose-executive-elite'],
    reviews: [
        { author: 'Charles', rating: 5, comment: 'Une montre qui impose le respect. Finitions impeccables.'}
    ]
  },
  {
    id: 'acc-7',
    name: 'Titan Steel Pro Chronograph',
    name_fr: 'Chronographe Titan Steel Pro',
    name_en: 'Titan Steel Pro Chronograph',
    slug: 'montre-chronographe-titan-steel-pro',
    price: 620,
    description: 'Gebaut für die Ewigkeit. Dieser Chronograph aus ultraleichtem und widerstandsfähigem Titan ist ein Konzentrat aus Leistung und Präzision. Sein technisches Design und seine Robustheit machen ihn zum Werkzeug für kompromisslose Männer.',
    description_fr: 'Conçu pour durer. Ce chronographe en titane, ultra-léger et résistant, est un concentré de performance et de précision. Son design technique et sa robustesse en font l\'outil des hommes sans compromis.',
    description_en: 'Built to last. This ultra-light and resistant titanium chronograph is a concentrate of performance and precision. Its technical design and robustness make it the tool for uncompromising men.',
    category: 'accessories',
    images: ['montre-chronographe-titan-steel-pro'],
    reviews: [
      { author: 'Olivier', rating: 5, comment: 'Légère, robuste et très précise. Une montre d\'exception.'}
    ]
  },
  {
    id: 'acc-8',
    name: 'Nordic Luxe Wollmütze',
    name_fr: 'Bonnet en laine Nordic Luxe',
    name_en: 'Nordic Luxe Wool Beanie',
    slug: 'bonnet-laine-torsadee-noir-nordic-luxe',
    price: 80,
    description: 'Wärme und Textur für Ihre Wintertage. Diese Mütze aus reiner Wolle mit Zopfstrickmuster bietet einen schicken und gemütlichen Stil. Ein unverzichtbares Accessoire, um der Kälte mit nordischer Eleganz zu trotzen.',
    description_fr: 'De la chaleur et de la texture pour vos journées d\'hiver. Ce bonnet en pure laine, au tricot torsadé, offre un style chic et douillet. Un accessoire indispensable pour affronter le froid avec une élégance nordique.',
    description_en: 'Warmth and texture for your winter days. This pure wool beanie with a cable knit pattern offers a chic and cozy style. An essential accessory to face the cold with Nordic elegance.',
    category: 'winter-clothing',
    images: ['bonnet-laine-torsadee-noir-nordic-luxe'],
    reviews: [
        { author: 'Elsa', rating: 5, comment: 'Très chaud et la laine ne gratte pas. J\'adore !'}
    ]
  },
  {
    id: 'acc-9',
    name: 'Winter Essential Mütze',
    name_fr: 'Bonnet Winter Essential',
    name_en: 'Winter Essential Beanie',
    slug: 'bonnet-epais-gris-winter-essential',
    price: 65,
    description: 'Schlichtheit und Funktionalität. Diese dicke Mütze in neutralem Grau ist das unverzichtbare Accessoire, das sich leicht mit all Ihren Wintermänteln kombinieren lässt, um stilvoll warm zu bleiben.',
    description_fr: 'La simplicité et l\'efficacité. Ce bonnet épais d\'un gris neutre est l\'accessoire essentiel qui s\'associe facilement à tous vos manteaux d\'hiver pour rester au chaud avec style.',
    description_en: 'Simplicity and efficiency. This thick, neutral grey beanie is the essential accessory that easily pairs with all your winter coats to stay warm in style.',
    category: 'winter-clothing',
    images: ['bonnet-epais-gris-winter-essential'],
    reviews: [
        { author: 'Martin', rating: 5, comment: 'Simple, chaud, efficace. Exactement ce que je cherchais.'}
    ]
  },
  {
    id: 'acc-10',
    name: 'Alpine Soft Schal',
    name_fr: 'Écharpe Alpine Soft',
    name_en: 'Alpine Soft Scarf',
    slug: 'echarpe-laine-vierge-premium-alpine-soft',
    price: 150,
    description: 'Hüllen Sie sich in einen Kokon aus Weichheit. Dieser Schal aus reiner Schurwolle bietet eine unvergleichliche Wärme und ein Gefühl von zartem Luxus auf der Haut. Das perfekte Accessoire für die kältesten Tage.',
    description_fr: 'Enveloppez-vous dans un cocon de douceur. Cette écharpe en pure laine vierge offre une chaleur inégalée et une sensation de luxe délicat contre la peau. L\'accessoire parfait pour les jours les plus froids.',
    description_en: 'Wrap yourself in a cocoon of softness. This pure virgin wool scarf offers unparalleled warmth and a feeling of delicate luxury against the skin. The perfect accessory for the coldest days.',
    category: 'winter-clothing',
    images: ['echarpe-laine-vierge-premium-alpine-soft'],
    reviews: [
        { author: 'Isabelle', rating: 5, comment: 'Une douceur incroyable, c\'est comme un câlin.'}
    ]
  },
  {
    id: 'acc-11',
    name: 'Winter Shield Snood',
    name_fr: 'Snood Winter Shield',
    name_en: 'Winter Shield Snood',
    slug: 'snood-polaire-winter-shield-premium',
    price: 75,
    description: 'Eine moderne und praktische Alternative zum Schal. Dieser Fleece-Snood bietet optimalen Schutz vor Wind und Kälte und bewahrt dabei einen klaren und urbanen Stil. Perfekt für Ihre Outdoor-Aktivitäten.',
    description_fr: 'Une alternative moderne et pratique à l\'écharpe. Ce snood en polaire offre une protection optimale contre le vent et le froid, tout en conservant un style épuré et urbain. Parfait pour vos activités extérieures.',
    description_en: 'A modern and practical alternative to the scarf. This fleece snood offers optimal protection against wind and cold, while maintaining a clean and urban style. Perfect for your outdoor activities.',
    category: 'winter-clothing',
    images: ['snood-polaire-winter-shield-premium'],
    reviews: [
        { author: 'Romain', rating: 5, comment: 'Très pratique et bien plus chaud que je ne le pensais.'}
    ]
  },
  {
    id: 'acc-12',
    name: 'Urban Knit Mütze',
    name_fr: 'Bonnet Urban Knit',
    name_en: 'Urban Knit Beanie',
    slug: 'bonnet-streetwear-a-revers-urban-knit',
    price: 55,
    description: 'Das Markenzeichen des urbanen Stils. Diese Mütze mit ihrem charakteristischen Umschlag ist das unverzichtbare Accessoire, um jedem lässigen Outfit einen trendigen und modernen Streetwear-Touch zu verleihen.',
    description_fr: 'La marque de fabrique du style urbain. Ce bonnet à revers caractéristique est l\'accessoire indispensable pour ajouter une touche streetwear tendance et moderne à n\'importe quelle tenue décontractée.',
    description_en: 'The hallmark of urban style. This cuffed beanie is the essential accessory to add a trendy and modern streetwear touch to any casual outfit.',
    category: 'accessories',
    images: ['bonnet-streetwear-a-revers-urban-knit'],
    reviews: [
        { author: 'Dylan', rating: 5, comment: 'Style parfait, je le porte tout le temps.'}
    ]
  },
  {
    id: 'acc-13',
    name: 'Tech Gloves',
    name_fr: 'Gants Tech Gloves',
    name_en: 'Tech Gloves',
    slug: 'gants-tactiles-thermiques-tech-gloves',
    price: 95,
    description: 'Kombinieren Sie Wärme und Konnektivität. Diese Thermohandschuhe sind mit einer speziellen Technologie ausgestattet, mit der Sie Ihre Touchscreens bedienen können, ohne sie ausziehen zu müssen. Nie wieder kalte Hände, um in Verbindung zu bleiben.',
    description_fr: 'Alliez chaleur et connectivité. Ces gants thermiques sont dotés d\'une technologie spécifique vous permettant d\'utiliser vos écrans tactiles sans les retirer. Ne plus jamais avoir froid aux mains pour rester connecté.',
    description_en: 'Combine warmth and connectivity. These thermal gloves are equipped with a special technology that allows you to use your touch screens without taking them off. Never have cold hands to stay connected again.',
    category: 'winter-clothing',
    images: ['gants-tactiles-thermiques-tech-gloves'],
    reviews: [
        { author: 'Laura', rating: 5, comment: 'Enfin des gants qui fonctionnent vraiment avec mon téléphone !'}
    ]
  },
  {
    id: 'acc-14',
    name: 'Slimfold Premium Portemonnaie',
    name_fr: 'Portefeuille Slimfold Premium',
    name_en: 'Slimfold Premium Wallet',
    slug: 'portefeuille-cuir-veritable-slimfold-premium',
    price: 120,
    description: 'Eleganz in Ihrer Tasche. Dieses schlanke Portemonnaie aus echtem Leder ist so konzipiert, dass es sich diskret in Ihre Tasche schmiegt und gleichzeitig Ihre wichtigsten Karten und Geldscheine mit Raffinesse organisiert.',
    description_fr: 'L\'élégance dans votre poche. Ce portefeuille slim en cuir véritable est conçu pour se glisser discrètement dans votre poche tout en organisant vos cartes et billets essentiels avec raffinement.',
    description_en: 'Elegance in your pocket. This slim genuine leather wallet is designed to discreetly slip into your pocket while organizing your essential cards and cash with refinement.',
    category: 'accessories',
    images: ['portefeuille-cuir-veritable-slimfold-premium'],
    reviews: [
        { author: 'Vincent', rating: 5, comment: 'Très fin et le cuir est de grande qualité. Parfait.'}
    ]
  },
  {
    id: 'acc-15',
    name: 'Executive Umhängetasche',
    name_fr: 'Sacoche bandoulière Executive',
    name_en: 'Executive Crossbody Bag',
    slug: 'sacoche-bandouliere-cuir-premium-executive-bag',
    price: 350,
    description: 'Der ideale Partner für den modernen Geschäftsmann. Diese Umhängetasche aus hochwertigem Leder vereint Funktionalität und Eleganz. Ihre durchdachten Fächer ermöglichen es Ihnen, Ihre täglichen Essentials mit Stil zu organisieren.',
    description_fr: 'Le partenaire idéal de l\'homme d\'affaires moderne. Cette sacoche en bandoulière, fabriquée dans un cuir de première qualité, allie fonctionnalité et élégance. Ses compartiments bien pensés vous permettent d\'organiser vos essentiels quotidiens avec style.',
    description_en: 'The ideal partner for the modern businessman. This premium leather crossbody bag combines functionality and elegance. Its well-thought-out compartments allow you to organize your daily essentials with style.',
    category: 'accessories',
    images: ['sacoche-bandouliere-cuir-premium-executive-bag'],
    reviews: [
        { author: 'Alexandre', rating: 5, comment: 'Taille parfaite et très professionnelle. Je recommande.'}
    ]
  },
  {
    id: 'acc-16',
    name: 'Golden Lady Uhr',
    name_fr: 'Montre Golden Lady',
    name_en: 'Golden Lady Watch',
    slug: 'montre-elegante-doree-golden-lady',
    price: 480,
    description: 'Ein Schmuckstück, das die Zeit anzeigt. Diese vergoldete Uhr ist eine Ode an die Weiblichkeit. Ihr strahlendes Finish und ihr raffiniertes Design machen sie zum perfekten Accessoire, um jedes Outfit mit einem Hauch von Glamour zu erleuchten.',
    description_fr: 'Un bijou qui donne l\'heure. Cette montre plaquée or est une ode à la féminité. Sa finition éclatante et son design raffiné en font l\'accessoire parfait pour illuminer chaque tenue d\'une touche de glamour.',
    description_en: 'A jewel that tells time. This gold-plated watch is an ode to femininity. Its radiant finish and refined design make it the perfect accessory to illuminate any outfit with a touch of glamour.',
    category: 'accessories',
    images: ['montre-elegante-doree-golden-lady'],
    reviews: [
        { author: 'Marie', rating: 5, comment: 'Absolument magnifique, je l\'adore ! Elle est encore plus belle en vrai.' },
        { author: 'Juliette', rating: 5, comment: 'Un vrai bijou. Je reçois des compliments à chaque fois que je la porte.'}
    ]
  },
  {
    id: 'acc-17',
    name: 'Silver Pure Uhr',
    name_fr: 'Montre Silver Pure',
    name_en: 'Silver Pure Watch',
    slug: 'montre-argentee-minimaliste-silver-pure',
    price: 350,
    description: 'Die Kunst der Schlichtheit. Diese minimalistische, versilberte Uhr verkörpert reine und zeitlose Eleganz. Ihr schlichtes Design und ihre makellose Verarbeitung machen sie zu einem vielseitigen Accessoire für jeden Anlass.',
    description_fr: 'L\'art de la simplicité. Cette montre minimaliste en métal argenté incarne une élégance pure et intemporelle. Son design épuré et sa finition impeccable en font un accessoire polyvalent pour toutes les occasions.',
    description_en: 'The art of simplicity. This minimalist silver-plated watch embodies pure and timeless elegance. Its clean design and flawless finish make it a versatile accessory for any occasion.',
    category: 'accessories',
    images: ['montre-argentee-minimaliste-silver-pure'],
    reviews: [
      { author: 'Clara', rating: 5, comment: 'Simple, élégante, parfaite. C\'est exactement ce que je voulais.'}
    ]
  },
  {
    id: 'acc-18',
    name: 'Soft Elegance Uhr',
    name_fr: 'Montre Soft Elegance',
    name_en: 'Soft Elegance Watch',
    slug: 'montre-cuir-beige-soft-elegance',
    price: 320,
    description: 'Eine sanfte und raffinierte Note für Ihr Handgelenk. Das Armband aus weichem beigem Leder und das schlichte Zifferblatt dieser Uhr schaffen eine Harmonie von subtiler und femininer Eleganz.',
    description_fr: 'Une touche de douceur et de raffinement pour votre poignet. Le bracelet en cuir beige souple et le cadran épuré de cette montre créent une harmonie d\'élégance subtile et féminine.',
    description_en: 'A touch of softness and refinement for your wrist. The soft beige leather strap and the clean dial of this watch create a harmony of subtle and feminine elegance.',
    category: 'accessories',
    images: ['montre-cuir-beige-soft-elegance'],
    reviews: [
        { author: 'Audrey', rating: 5, comment: 'La couleur est très douce et la montre est très confortable.'}
    ]
  },
  {
    id: 'acc-19',
    name: 'Rose Queen Uhr',
    name_fr: 'Montre Rose Queen',
    name_en: 'Rose Queen Watch',
    slug: 'montre-rose-gold-maille-milanaise-rose-queen',
    price: 420,
    description: 'Die Königin der Uhren an Ihrem Handgelenk. Das Milanaise-Armband aus Roségold schmiegt sich elegant an die Haut, während das funkelnde Zifferblatt bei jeder Bewegung das Licht einfängt. Eine Uhr für die moderne Königin.',
    description_fr: 'La reine des montres à votre poignet. Son bracelet en maille milanaise couleur or rose épouse élégamment la peau, tandis que son cadran étincelant capture la lumière à chaque mouvement. Une montre pour la reine moderne.',
    description_en: 'The queen of watches on your wrist. Its rose gold milanese mesh strap elegantly hugs the skin, while its sparkling dial captures the light with every movement. A watch for the modern queen.',
    category: 'accessories',
    images: ['montre-rose-gold-maille-milanaise-rose-queen'],
    reviews: [
        { author: 'Manon', rating: 5, comment: 'Je suis amoureuse de cette montre. Le bracelet est magnifique.'}
    ]
  },
  {
    id: 'acc-20',
    name: 'Cozy Glam Mütze',
    name_fr: 'Bonnet Cozy Glam',
    name_en: 'Cozy Glam Beanie',
    slug: 'bonnet-laine-pompon-fourrure-synthetique-cozy-glam',
    price: 90,
    description: 'Vereinen Sie Wärme und Glamour. Diese Wollmütze ist mit einem weichen Bommel aus hochwertigem Kunstpelz versehen, der Ihrem Winterlook einen Hauch von verspieltem Luxus verleiht.',
    description_fr: 'Alliez chaleur et glamour. Ce bonnet en laine est surmonté d\'un pompon doux en fausse fourrure de haute qualité, ajoutant une touche de luxe ludique à votre look d\'hiver.',
    description_en: 'Combine warmth and glamour. This wool beanie is topped with a soft, high-quality faux fur pom-pom, adding a touch of playful luxury to your winter look.',
    category: 'winter-clothing',
    images: ['bonnet-laine-pompon-fourrure-synthetique-cozy-glam'],
    reviews: [
        { author: 'Jessica', rating: 5, comment: 'Très doux et le pompon est adorable !'}
    ]
  },
  {
    id: 'acc-21',
    name: 'Urban Chic Mütze',
    name_fr: 'Bonnet Urban Chic',
    name_en: 'Urban Chic Beanie',
    slug: 'bonnet-long-oversize-urban-chic',
    price: 70,
    description: 'Für einen lässigen und trendigen Stil. Diese lange Oversize-Mütze kann auf verschiedene Arten getragen werden, um Ihren urbanen und schicken Look zu vervollkommnen. Ein starkes Stück für einen selbstbewussten Stil.',
    description_fr: 'Pour un style décontracté et tendance. Ce bonnet long et oversize peut être porté de différentes manières pour parfaire votre look urbain et chic. Une pièce forte pour un style affirmé.',
    description_en: 'For a casual and trendy style. This long and oversized beanie can be worn in different ways to perfect your urban and chic look. A strong piece for an assertive style.',
    category: 'accessories',
    images: ['bonnet-long-oversize-urban-chic'],
    reviews: [
        { author: 'Mathieu', rating: 4, comment: 'Bonnet sympa, le style oversize est cool.'}
    ]
  },
  {
    id: 'acc-22',
    name: 'Winter Pearl Mütze',
    name_fr: 'Bonnet Winter Pearl',
    name_en: 'Winter Pearl Beanie',
    slug: 'bonnet-tricote-perle-winter-pearl',
    price: 85,
    description: 'Ein Hauch von Zartheit im Herzen des Winters. Diese gestrickte Mütze ist subtil mit kleinen Perlen verziert, die einen Hauch von Licht und winterlicher Poesie in Ihre Garderobe bringen.',
    description_fr: 'Une touche de délicatesse au cœur de l\'hiver. Ce bonnet tricoté est subtilement orné de petites perles, apportant un éclat de lumière et une poésie hivernale à votre garde-robe.',
    description_en: 'A touch of delicacy in the heart of winter. This knitted beanie is subtly adorned with small pearls, bringing a splash of light and winter poetry to your wardrobe.',
    category: 'winter-clothing',
    images: ['bonnet-tricote-perle-winter-pearl'],
    reviews: [
        { author: 'Amélie', rating: 5, comment: 'Très original et féminin. J\'aime beaucoup les petites perles.'}
    ]
  },
  {
    id: 'acc-23',
    name: 'Luxe Soft Schal',
    name_fr: 'Écharpe Luxe Soft',
    name_en: 'Luxe Soft Scarf',
    slug: 'echarpe-oversize-fausse-fourrure-luxe-soft',
    price: 180,
    description: 'Hüllen Sie sich in extremen Luxus. Dieser Oversize-Schal aus hochwertigem Kunstpelz bietet eine unvergleichliche Weichheit und einen Hauch von opulentem Glamour für Ihre Winteroutfits.',
    description_fr: 'Drapez-vous dans un luxe extrême. Cette écharpe oversize en fausse fourrure de haute qualité offre une douceur inégalée et une touche de glamour opulent à vos tenues d\'hiver.',
    description_en: 'Drape yourself in extreme luxury. This oversized scarf in high-quality faux fur offers unparalleled softness and a touch of opulent glamour to your winter outfits.',
    category: 'winter-clothing',
    images: ['echarpe-oversize-fausse-fourrure-luxe-soft'],
    reviews: [
        { author: 'Caroline', rating: 5, comment: 'Incroyablement douce et luxueuse. C\'est magnifique.'}
    ]
  },
  {
    id: 'acc-24',
    name: 'Warm Plush Schal',
    name_fr: 'Écharpe Warm Plush',
    name_en: 'Warm Plush Scarf',
    slug: 'echarpe-maille-torsadee-warm-plush',
    price: 130,
    description: 'Die zeitlose Eleganz von Zopfstrick. Dieser dicke und weiche Schal umhüllt Sie mit stilvoller Wärme. Seine reiche Textur und großzügigen Abmessungen machen ihn zum perfekten Verbündeten gegen die Winterkälte.',
    description_fr: 'L\'élégance intemporelle de la maille torsadée. Cette écharpe épaisse et moelleuse vous enveloppe de chaleur avec style. Sa texture riche et ses dimensions généreuses en font l\'alliée parfaite contre le froid hivernal.',
    description_en: 'The timeless elegance of cable knit. This thick and soft scarf envelops you in warmth with style. Its rich texture and generous dimensions make it the perfect ally against the winter cold.',
    category: 'winter-clothing',
    images: ['echarpe-maille-torsadee-warm-plush'],
    reviews: [
        { author: 'Nicolas', rating: 5, comment: 'Écharpe de grande qualité, très chaude et confortable.'}
    ]
  },
  {
    id: 'acc-25',
    name: 'Elegant Wrap Stola',
    name_fr: 'Châle Elegant Wrap',
    name_en: 'Elegant Wrap Shawl',
    slug: 'chale-hiver-motif-elegant-elegant-wrap',
    price: 160,
    description: 'Mehr als nur ein Accessoire, ein Statement. Diese große Winterstola mit ihrem raffinierten und eleganten Muster wertet jedes Outfit auf, vom einfachen Mantel bis zum Abendkleid.',
    description_fr: 'Plus qu\'un accessoire, une déclaration de style. Ce grand châle d\'hiver, avec son motif raffiné et élégant, sublime n\'importe quelle tenue, du simple manteau à la robe de soirée.',
    description_en: 'More than an accessory, a style statement. This large winter shawl, with its refined and elegant pattern, enhances any outfit, from a simple coat to an evening dress.',
    category: 'winter-clothing',
    images: ['chale-hiver-motif-elegant-elegant-wrap'],
    reviews: [
        { author: 'Béatrice', rating: 5, comment: 'Les motifs sont superbes et il est très grand et enveloppant.'}
    ]
  },
  {
    id: 'acc-26',
    name: 'Cashmere Touch Foulard',
    name_fr: 'Foulard Cashmere Touch',
    name_en: 'Cashmere Touch Scarf',
    slug: 'foulard-cachemire-imprime-cashmere-touch',
    price: 220,
    description: 'Die Weichheit von Kaschmir, die Kühnheit eines Drucks. Dieser Schal aus einem Kaschmirgemisch bietet ein luxuriöses Gefühl und einen Hauch von Farbe, um Ihre Looks in der Zwischensaison aufzuwerten.',
    description_fr: 'La douceur du cachemire, l\'audace d\'un imprimé. Ce foulard en mélange de cachemire offre un toucher luxueux et une touche de couleur pour rehausser vos looks de mi-saison.',
    description_en: 'The softness of cashmere, the boldness of a print. This cashmere blend scarf offers a luxurious feel and a touch of color to enhance your mid-season looks.',
    category: 'accessories',
    images: ['foulard-cachemire-imprime-cashmere-touch'],
    reviews: [
        { author: 'Diane', rating: 5, comment: 'Très doux et les couleurs sont magnifiques.'}
    ]
  },
  {
    id: 'acc-27',
    name: 'Lady Warm Handschuhe',
    name_fr: 'Gants Lady Warm',
    name_en: 'Lady Warm Gloves',
    slug: 'gants-cuir-doubles-polaire-lady-warm',
    price: 110,
    description: 'Die perfekte Allianz zwischen Eleganz und Komfort. Diese Handschuhe aus geschmeidigem Leder sind mit einem weichen Fleece gefüttert, um Ihre Hände warm zu halten, ohne auf einen raffinierten Stil zu verzichten.',
    description_fr: 'L\'alliance parfaite entre l\'élégance et le confort. Ces gants en cuir souple sont doublés d\'une polaire douce pour garder vos mains au chaud sans sacrifier un style raffiné.',
    description_en: 'The perfect alliance between elegance and comfort. These supple leather gloves are lined with soft fleece to keep your hands warm without sacrificing a refined style.',
    category: 'winter-clothing',
    images: ['gants-cuir-doubles-polaire-lady-warm'],
    reviews: [
        { author: 'Hélène', rating: 5, comment: 'Très chauds et le cuir est d\'une grande souplesse. Parfaits.'}
    ]
  },
  {
    id: 'acc-28',
    name: 'Mini Glam Handtasche',
    name_fr: 'Petit sac à main Mini Glam',
    name_en: 'Mini Glam Handbag',
    slug: 'petit-sac-a-main-chic-mini-glam',
    price: 450,
    description: 'Das unverzichtbare Accessoire für Ihre Abende. Diese schicke Minitasche mit ihren goldenen Details ist so konzipiert, dass sie Ihre wichtigsten Dinge aufnimmt und Ihrem Abendoutfit einen Hauch von Glamour verleiht.',
    description_fr: 'L\'accessoire indispensable de vos soirées. Ce mini sac chic, avec ses détails dorés, est conçu pour contenir juste l\'essentiel et ajouter une touche de glamour à votre tenue de soirée.',
    description_en: 'The essential accessory for your evenings. This chic mini bag, with its golden details, is designed to hold just the essentials and add a touch of glamour to your evening outfit.',
    category: 'accessories',
    images: ['petit-sac-a-main-chic-mini-glam'],
    reviews: [
        { author: 'Camille', rating: 5, comment: 'Adorable et juste assez grand pour mon téléphone et mon rouge à lèvres.'}
    ]
  },
  {
    id: 'acc-29',
    name: 'Shine Drop Ohrringe',
    name_fr: 'Boucles d\'oreilles Shine Drop',
    name_en: 'Shine Drop Earrings',
    slug: 'boucles-oreilles-pendantes-argentees-shine-drop',
    price: 180,
    description: 'Ein Tropfen Licht, um Ihr Gesicht zu erhellen. Diese hängenden Ohrringe aus poliertem Silber fangen das Licht bei jeder Bewegung ein und verleihen Ihrem Look einen subtilen und raffinierten Glanz.',
    description_fr: 'Une goutte de lumière pour illuminer votre visage. Ces boucles d\'oreilles pendantes en argent poli capturent la lumière à chaque mouvement, ajoutant un éclat subtil et raffiné à votre allure.',
    description_en: 'A drop of light to illuminate your face. These dangling polished silver earrings capture the light with every movement, adding a subtle and refined sparkle to your look.',
    category: 'accessories',
    images: ['boucles-oreilles-pendantes-argentees-shine-drop'],
    reviews: [
        { author: 'Marion', rating: 5, comment: 'Elles sont magnifiques et très légères à porter.'}
    ]
  },
  {
    id: 'acc-30',
    name: 'Shine Night Clutch',
    name_fr: 'Pochette Shine Night',
    name_en: 'Shine Night Clutch',
    slug: 'pochette-soiree-shine-night-premium',
    price: 250,
    description: 'Die perfekte Ergänzung zu Ihrem Abendkleid. Diese Clutch mit ihrem funkelnden Finish und ihrer eleganten Struktur ist so konzipiert, dass Sie Ihre wichtigsten Dinge aufnehmen und gleichzeitig ein modisches Statement setzen.',
    description_fr: 'Le complément parfait de votre robe de soirée. Cette pochette à la finition scintillante et à la structure élégante est conçue pour contenir vos essentiels tout en étant une déclaration de mode à part entière.',
    description_en: 'The perfect complement to your evening gown. This clutch with its sparkling finish and elegant structure is designed to hold your essentials while being a fashion statement in its own right.',
    category: 'accessories',
    images: ['pochette-soiree-shine-night-premium'],
    reviews: [
        { author: 'Eva', rating: 5, comment: 'Parfaite pour un mariage. J\'ai reçu beaucoup de compliments.'}
    ]
  },
    {
    id: 'prod-21',
    name: 'Robe pull en cachemire',
    name_fr: 'Robe pull en cachemire',
    name_en: 'Cashmere Sweater Dress',
    slug: 'robe-pull-en-cachemire-max-mara',
    price: 1200,
    description: 'Eine luxuriöse Pulloverkleid aus reinem Kaschmir, für eine komfortable und warme Eleganz. Seine lockere Passform und die Weichheit des Materials machen es zu einem Kokon des Luxus für den Winter.',
    description_fr: 'Une robe pull luxueuse en pur cachemire, pour une élégance confortable et chaleureuse. Sa coupe décontractée et la douceur de sa maille en font un cocon de luxe pour l\'hiver.',
    description_en: 'A luxurious sweater dress in pure cashmere, for comfortable and warm elegance. Its relaxed fit and the softness of its knit make it a cocoon of luxury for the winter.',
    category: 'womens-clothing',
    images: ['robe-pull-en-cachemire-max-mara'],
    reviews: [
      { author: 'Elodie', rating: 5, comment: 'Incroyablement douce et confortable, tout en restant très chic.' },
    ]
  },
  {
    id: 'prod-22',
    name: 'Pantalon en cuir',
    name_fr: 'Pantalon en cuir',
    name_en: 'Leather Trousers',
    slug: 'pantalon-en-cuir-saint-laurent',
    price: 1500,
    description: 'Ein Statement-Stück par excellence. Dieser Slim-Fit-Hose aus geschmeidigem Lammleder formt die Silhouette für einen entschieden rockigen und schicken Look. Ein starkes Stück, das die Zeiten überdauert.',
    description_fr: 'La pièce forte par excellence. Ce pantalon slim en cuir d\'agneau souple sculpte la silhouette pour un look résolument rock et chic. Une pièce forte qui traverse les époques.',
    description_en: 'The ultimate statement piece. These slim-fit trousers in supple lambskin sculpt the silhouette for a resolutely rock and chic look. A strong piece that stands the test of time.',
    category: 'womens-clothing',
    images: ['pantalon-en-cuir-saint-laurent'],
    reviews: [
      { author: 'Victoria', rating: 5, comment: 'Un cuir de rêve, souple et confortable. La coupe est parfaite.' },
    ]
  },
  {
    id: 'prod-23',
    name: 'Jupe plissée midi',
    name_fr: 'Jupe plissée midi',
    name_en: 'Pleated Midi Skirt',
    slug: 'jupe-plissee-midi-valentino',
    price: 850,
    description: 'Eine Ode an die Weiblichkeit und Bewegung. Dieser fließende und leichte Midirock mit Sonnenplissee tanzt bei jedem Schritt und schafft eine anmutige und luftige Silhouette.',
    description_fr: 'Une ode à la féminité et au mouvement. Cette jupe midi plissée soleil, fluide et légère, danse à chacun de vos pas, créant une silhouette gracieuse et aérienne.',
    description_en: 'An ode to femininity and movement. This fluid and light sunray pleated midi skirt dances with every step, creating a graceful and airy silhouette.',
    category: 'womens-clothing',
    images: ['jupe-plissee-midi-valentino'],
    reviews: [
      { author: 'Olivia', rating: 5, comment: 'Le mouvement de cette jupe est magique. Très élégante.' },
    ]
  },
  {
    id: 'prod-24',
    name: 'T-shirt brodé logo',
    name_fr: 'T-shirt brodé logo',
    name_en: 'Logo Embroidered T-shirt',
    slug: 't-shirt-brode-logo-gucci',
    price: 450,
    description: 'Ein Luxus-Basic. Dieses T-Shirt aus hochwertiger Baumwolle wird durch das ikonische Logo des Hauses, das sorgfältig auf der Brust gestickt ist, aufgewertet. Ein Symbol für Zugehörigkeit und lässigen Stil.',
    description_fr: 'Le basique de luxe. Ce t-shirt en coton de qualité supérieure est rehaussé du logo emblématique de la maison, minutieusement brodé sur la poitrine. Un symbole d\'appartenance et de style décontracté.',
    description_en: 'The luxury basic. This high-quality cotton T-shirt is enhanced by the house\'s iconic logo, meticulously embroidered on the chest. A symbol of belonging and casual style.',
    category: 'womens-clothing',
    images: ['t-shirt-brode-logo-gucci'],
    reviews: [
      { author: 'Anna', rating: 5, comment: 'Même pour un t-shirt, la qualité est incroyable. Très confortable.' },
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
