// ===================================
// LOVELY SHOPPING - PRODUCTS DATABASE
// Base de données des produits
// ===================================

const PRODUCTS = [
    // === BEAUTÉ & PARFUMS ===
    {
        id: 1,
        name: "Parfum Rose Éternelle",
        description: "Un parfum envoûtant aux notes de rose de Damas, jasmin et musc blanc. Une fragrance féminine et élégante pour les occasions spéciales.",
        price: 89.99,
        oldPrice: 119.99,
        category: "parfums",
        categoryName: "Beauté & Parfums",
        stock: 15,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
            "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=400&h=400&fit=crop"
        ],
        isNew: true,
        isSale: true,
        rating: 4.8,
        reviews: 124
    },
    {
        id: 2,
        name: "Eau de Parfum Velours Nocturne",
        description: "Une fragrance mystérieuse et sensuelle avec des notes de vanille, ambre et bois de santal. Parfait pour les soirées.",
        price: 75.00,
        oldPrice: null,
        category: "parfums",
        categoryName: "Beauté & Parfums",
        stock: 23,
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=400&fit=crop"
        ],
        isNew: false,
        isSale: false,
        rating: 4.6,
        reviews: 89
    },
    {
        id: 3,
        name: "Brume Parfumée Fleur de Cerisier",
        description: "Une brume légère et fraîche aux notes de fleur de cerisier et pivoine. Idéale pour un usage quotidien.",
        price: 29.99,
        oldPrice: 39.99,
        category: "parfums",
        categoryName: "Beauté & Parfums",
        stock: 42,
        image: "https://images.unsplash.com/photo-1608528577891-eb055944f2e7?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1608528577891-eb055944f2e7?w=400&h=400&fit=crop"
        ],
        isNew: false,
        isSale: true,
        rating: 4.5,
        reviews: 201
    },

    // === BIJOUX ===
    {
        id: 4,
        name: "Collier Perles Dorées",
        description: "Un élégant collier avec des perles dorées et un pendentif en forme de cœur. Chaîne en acier inoxydable plaqué or.",
        price: 45.00,
        oldPrice: null,
        category: "bijoux",
        categoryName: "Bijoux",
        stock: 18,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop"
        ],
        isNew: true,
        isSale: false,
        rating: 4.9,
        reviews: 67
    },
    {
        id: 5,
        name: "Boucles d'Oreilles Cristal Rose",
        description: "Sublimes boucles d'oreilles ornées de cristaux roses Swarovski. Fermoir en argent 925.",
        price: 38.50,
        oldPrice: 55.00,
        category: "bijoux",
        categoryName: "Bijoux",
        stock: 8,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop"
        ],
        isNew: false,
        isSale: true,
        rating: 4.7,
        reviews: 156
    },
    {
        id: 6,
        name: "Bracelet Charme Infini",
        description: "Bracelet délicat avec symbole infini et petits cristaux. Ajustable, plaqué or rose.",
        price: 28.00,
        oldPrice: null,
        category: "bijoux",
        categoryName: "Bijoux",
        stock: 35,
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop"
        ],
        isNew: false,
        isSale: false,
        rating: 4.4,
        reviews: 98
    },
    {
        id: 7,
        name: "Bague Papillon Émeraude",
        description: "Bague ajustable en forme de papillon avec une pierre émeraude centrale. Acier inoxydable plaqué argent.",
        price: 32.00,
        oldPrice: null,
        category: "bijoux",
        categoryName: "Bijoux",
        stock: 22,
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop"
        ],
        isNew: true,
        isSale: false,
        rating: 4.6,
        reviews: 43
    },

    // === LINGERIE ===
    {
        id: 8,
        name: "Ensemble Dentelle Romantique",
        description: "Ensemble lingerie en dentelle française. Soutien-gorge push-up et culotte assortie. Disponible du 85B au 95D.",
        price: 59.99,
        oldPrice: 79.99,
        category: "lingerie",
        categoryName: "Lingerie",
        stock: 12,
        image: "https://images.unsplash.com/photo-1617331721458-bd3bd3f9c7f8?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1617331721458-bd3bd3f9c7f8?w=400&h=400&fit=crop"
        ],
        isNew: false,
        isSale: true,
        rating: 4.8,
        reviews: 234
    },
    {
        id: 9,
        name: "Nuisette Soie Champagne",
        description: "Nuisette élégante en soie champagne avec bordure en dentelle. Confortable et sensuelle.",
        price: 69.00,
        oldPrice: null,
        category: "lingerie",
        categoryName: "Lingerie",
        stock: 6,
        image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=400&h=400&fit=crop"
        ],
        isNew: true,
        isSale: false,
        rating: 4.9,
        reviews: 87
    },
    {
        id: 10,
        name: "Lot 5 Culottes Coton Bio",
        description: "Pack de 5 culottes en coton bio. Coloris pastels assortis. Confort et douceur au quotidien.",
        price: 35.00,
        oldPrice: 45.00,
        category: "lingerie",
        categoryName: "Lingerie",
        stock: 50,
        image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&h=400&fit=crop"
        ],
        isNew: false,
        isSale: true,
        rating: 4.5,
        reviews: 312
    },

    // === PAPETERIE ===
    {
        id: 11,
        name: "Stylo Plume Or Rose",
        description: "Stylo plume élégant avec corps en métal or rose et plume en acier inoxydable. Livré dans un écrin cadeau.",
        price: 42.00,
        oldPrice: null,
        category: "papeterie",
        categoryName: "Papeterie",
        stock: 25,
        image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=400&h=400&fit=crop"
        ],
        isNew: true,
        isSale: false,
        rating: 4.7,
        reviews: 56
    },
    {
        id: 12,
        name: "Set Stylos Gel Pastel",
        description: "Ensemble de 12 stylos gel aux couleurs pastel. Encre fluide et séchage rapide. Parfait pour le bullet journal.",
        price: 18.99,
        oldPrice: 24.99,
        category: "papeterie",
        categoryName: "Papeterie",
        stock: 38,
        image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&h=400&fit=crop"
        ],
        isNew: false,
        isSale: true,
        rating: 4.6,
        reviews: 189
    },
    {
        id: 13,
        name: "Carnet Cuir Végan Rose",
        description: "Carnet A5 avec couverture en cuir végan rose et pages lignées ivoire. 200 pages de qualité premium.",
        price: 24.50,
        oldPrice: null,
        category: "papeterie",
        categoryName: "Papeterie",
        stock: 30,
        image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&h=400&fit=crop"
        ],
        isNew: false,
        isSale: false,
        rating: 4.8,
        reviews: 145
    },
    {
        id: 14,
        name: "Set Bureau Marbre & Or",
        description: "Ensemble de bureau 5 pièces effet marbre blanc et détails dorés : pot à crayons, agrafeuse, dévidoir, range-trombones, porte-cartes.",
        price: 55.00,
        oldPrice: 75.00,
        category: "papeterie",
        categoryName: "Papeterie",
        stock: 10,
        image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=400&h=400&fit=crop"
        ],
        isNew: false,
        isSale: true,
        rating: 4.9,
        reviews: 78
    },

    // === IDÉES CADEAUX ===
    {
        id: 15,
        name: "Coffret Bien-Être Spa",
        description: "Coffret cadeau luxueux comprenant : bombe de bain, bougie parfumée, huile de massage, masque visage et bandeau.",
        price: 65.00,
        oldPrice: null,
        category: "cadeaux",
        categoryName: "Idées Cadeaux",
        stock: 15,
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=400&fit=crop"
        ],
        isNew: true,
        isSale: false,
        rating: 4.9,
        reviews: 203
    },
    {
        id: 16,
        name: "Box Surprise Beauté",
        description: "Box mystère contenant 6 produits beauté full-size. Maquillage, soin et accessoires. Valeur réelle +100€.",
        price: 49.99,
        oldPrice: null,
        category: "cadeaux",
        categoryName: "Idées Cadeaux",
        stock: 20,
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop"
        ],
        isNew: true,
        isSale: false,
        rating: 4.7,
        reviews: 156
    },
    {
        id: 17,
        name: "Album Photo Personnalisable",
        description: "Album photo premium avec couverture personnalisable. 50 pages autocollantes pour vos plus beaux souvenirs.",
        price: 34.99,
        oldPrice: 44.99,
        category: "cadeaux",
        categoryName: "Idées Cadeaux",
        stock: 28,
        image: "https://images.unsplash.com/photo-1528219089976-991faae97f7c?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1528219089976-991faae97f7c?w=400&h=400&fit=crop"
        ],
        isNew: false,
        isSale: true,
        rating: 4.6,
        reviews: 92
    },

    // === ACCESSOIRES ===
    {
        id: 18,
        name: "Sac à Main Élégance",
        description: "Sac à main en cuir végan avec détails dorés. Compartiments intérieurs, bandoulière amovible. Dimensions : 30x25x12cm.",
        price: 79.00,
        oldPrice: 99.00,
        category: "accessoires",
        categoryName: "Accessoires",
        stock: 7,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop"
        ],
        isNew: false,
        isSale: true,
        rating: 4.8,
        reviews: 167
    },
    {
        id: 19,
        name: "Écharpe Cachemire Rose",
        description: "Écharpe luxueuse en cachemire mélangé. Douce et chaude, parfaite pour l'hiver. Dimensions : 200x70cm.",
        price: 55.00,
        oldPrice: null,
        category: "accessoires",
        categoryName: "Accessoires",
        stock: 20,
        image: "https://images.unsplash.com/photo-1601379327928-bedfaf9da2d0?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1601379327928-bedfaf9da2d0?w=400&h=400&fit=crop"
        ],
        isNew: true,
        isSale: false,
        rating: 4.7,
        reviews: 84
    },
    {
        id: 20,
        name: "Lunettes de Soleil Glamour",
        description: "Lunettes de soleil oversize style cat-eye. Monture dorée et verres dégradés. Protection UV400.",
        price: 39.99,
        oldPrice: 59.99,
        category: "accessoires",
        categoryName: "Accessoires",
        stock: 32,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop"
        ],
        isNew: false,
        isSale: true,
        rating: 4.5,
        reviews: 203
    },
    {
        id: 21,
        name: "Montre Minimaliste Rosé",
        description: "Montre élégante avec cadran nacré et bracelet en acier inoxydable or rose. Mouvement quartz japonais.",
        price: 89.00,
        oldPrice: null,
        category: "accessoires",
        categoryName: "Accessoires",
        stock: 14,
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop"
        ],
        isNew: true,
        isSale: false,
        rating: 4.9,
        reviews: 128
    },
    {
        id: 22,
        name: "Pochette de Soirée Pailletée",
        description: "Pochette de soirée ornée de paillettes dorées. Chaînette amovible. Parfaite pour les occasions spéciales.",
        price: 35.00,
        oldPrice: 45.00,
        category: "accessoires",
        categoryName: "Accessoires",
        stock: 0,
        image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&h=400&fit=crop"
        ],
        isNew: false,
        isSale: true,
        rating: 4.6,
        reviews: 95
    },
    {
        id: 23,
        name: "Trousse Maquillage Velours",
        description: "Grande trousse de maquillage en velours rose avec compartiments. Fermeture éclair dorée. 25x15x10cm.",
        price: 28.00,
        oldPrice: null,
        category: "accessoires",
        categoryName: "Accessoires",
        stock: 45,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop"
        ],
        isNew: false,
        isSale: false,
        rating: 4.4,
        reviews: 178
    },
    {
        id: 24,
        name: "Set Pinceaux Maquillage Pro",
        description: "Ensemble de 12 pinceaux professionnels avec pochette de rangement. Poils synthétiques ultra-doux.",
        price: 42.00,
        oldPrice: 58.00,
        category: "accessoires",
        categoryName: "Accessoires",
        stock: 19,
        image: "https://images.unsplash.com/photo-1522338242042-2d1c53d19da2?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1522338242042-2d1c53d19da2?w=400&h=400&fit=crop"
        ],
        isNew: false,
        isSale: true,
        rating: 4.8,
        reviews: 267
    }
];

// Catégories
const CATEGORIES = [
    { id: 'all', name: 'Tous les produits', icon: '✨', count: PRODUCTS.length },
    { id: 'parfums', name: 'Beauté & Parfums', icon: '💄', count: PRODUCTS.filter(p => p.category === 'parfums').length },
    { id: 'bijoux', name: 'Bijoux', icon: '💍', count: PRODUCTS.filter(p => p.category === 'bijoux').length },
    { id: 'lingerie', name: 'Lingerie', icon: '👙', count: PRODUCTS.filter(p => p.category === 'lingerie').length },
    { id: 'papeterie', name: 'Papeterie', icon: '✏️', count: PRODUCTS.filter(p => p.category === 'papeterie').length },
    { id: 'cadeaux', name: 'Idées Cadeaux', icon: '🎁', count: PRODUCTS.filter(p => p.category === 'cadeaux').length },
    { id: 'accessoires', name: 'Accessoires', icon: '👜', count: PRODUCTS.filter(p => p.category === 'accessoires').length }
];

// Codes Promo
const PROMO_CODES = {
    'LOVE10': { discount: 10, type: 'percent', description: '10% de réduction' },
    'BIENVENUE20': { discount: 20, type: 'percent', description: '20% de réduction - Bienvenue !' },
    'SOLDES30': { discount: 30, type: 'percent', description: '30% de réduction - Soldes' },
    'LIVRAISON': { discount: 5.99, type: 'fixed', description: 'Livraison offerte' },
    'VIP50': { discount: 50, type: 'percent', description: '50% de réduction VIP' }
};

// Export pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PRODUCTS, CATEGORIES, PROMO_CODES };
}
