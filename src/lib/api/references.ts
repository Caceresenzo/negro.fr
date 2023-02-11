export enum Category {
    GENERAL_BUILDING_CONTRACTOR = "Entreprise générale en bâtiment",
    EXTERIOR_WOOD_FURNISHINGS = "Menuiseries extérieures",
    FACELIFT = "Ravalement"
}

export interface Image {
    source: string
    thumbnail?: string
}

export interface Reference {
    slug: string
    name: string
    shortName?: string
    address?: string
    client?: string
    description?: string
    cost?: string
    category: Category
    images: Array<Image>
    featuredOrder?: number
}

function fromStatic(reference: Omit<Reference, "images">, options: {
    imageCount: number,
    noThumbnail?: boolean
}): Reference {
    const base = `/images/references/${reference.slug}`

    return {
        ...reference,
        images: new Array(options.imageCount).fill(0).map((_, index) => ({
            source: `${base}/${index + 1}.jpg`,
            thumbnail: options?.noThumbnail ? undefined : `${base}/${index + 1}t.jpg`
        }))
    }
}

export const references = Object.freeze([
    fromStatic({
        slug: "villeneuve-le-roi",
        name: "Villeneuve le roi",
        category: Category.GENERAL_BUILDING_CONTRACTOR,
        featuredOrder: 2,
    }, { imageCount: 4 }),
    fromStatic({
        slug: "direction-des-services-fiscaux-vanves",
        name: "Direction des services fiscaux Vanves",
        shortName: "Direction des svc. fiscaux Vanves",
        address: "58 boulevard du lycée - 92170 Vanves",
        client: "Direction des services fiscaux des hauts de seine sud",
        description: "Réhabilitation du bâtiment tous corps d'états hors lots techniques.\nRestructuration d'un immeuble de bureaux.",
        cost: "1 030 131 € HT",
        category: Category.GENERAL_BUILDING_CONTRACTOR,
        featuredOrder: 3,
    }, { imageCount: 3 }),
    fromStatic({
        slug: "cic-paris",
        name: "CIC Paris",
        address: "4 rue de Gaillon - 75002 Paris",
        client: "Crédit mutuel CIC",
        description: "Travaux de maçonnerie, plâtrerie, carrelage, faïence et revêtement marbre dans le cadre d'une restructuration de bureaux et de parties communes.",
        cost: "2 850 000 € HT",
        category: Category.GENERAL_BUILDING_CONTRACTOR
    }, { imageCount: 7 }),
    fromStatic({
        slug: "immeuble-3",
        name: "Immeuble",
        address: "6, rue du docteur Lancereaux 75008 - Paris",
        client: "Crédit Agricole Indosuez",
        description: "Restructuration intérieure d'un immeuble, dont création d'une cage d'escalier du RdC au 5è étage.\nTravaux de cloisonnement, pierre, carrelage.",
        cost: "967.714",
        category: Category.GENERAL_BUILDING_CONTRACTOR
    }, { imageCount: 1, noThumbnail: true }),
    fromStatic({
        slug: "poterne-des-peupliers",
        name: "Poterne des peupliers",
        address: "8 rue Brillat Savarin 75013 Paris",
        client: "La poste",
        description: "Travaux de bardages et de menuiserie, pose de brises soleil.",
        cost: "459 325 € HT",
        category: Category.EXTERIOR_WOOD_FURNISHINGS,
        featuredOrder: 1,
    }, { imageCount: 3 }),
    fromStatic({
        slug: "copropriete-du-23-avenue-marceau-75016-paris",
        name: "Copropriété du 23 avenue Marceau 75016 Paris",
        address: "23 avenue Marceau - 75016 Paris",
        client: "SDC (syndicat de copropriétaires)",
        description: "Remplacement d'une facade rideau en aluminium avec châssis coulissants et vitrification de panneaux",
        cost: "225 551 € HT",
        category: Category.EXTERIOR_WOOD_FURNISHINGS
    }, { imageCount: 4 }),
    fromStatic({
        slug: "base-aerienne-de-villacoublay",
        name: "Base Aérienne de Villacoublay",
        address: "78 Velizy Villacoublay",
        client: "Ministère de la Défense",
        description: "Rénovation d'un Bâtiment de Bureaux avec remplacement de 250  menuiseries par des menuiseries PVC avec Brises soleil extérieurs",
        category: Category.EXTERIOR_WOOD_FURNISHINGS
    }, { imageCount: 6 }),
    fromStatic({
        slug: "ecole-st-simeon",
        name: "Ecole st Simeon",
        address: "14 rue de l'Horloge - 89000 Auxerre",
        client: "Ville d'Auxerre",
        description: "Traitement thermique de l'enveloppe avec Menuiseries Aluminium à rupture de pont thermique gamme de 70mm en ouvrant cadré et isolation par l'exterieur avec bardage composite TRESPA.\nTravaux de remplacement de garde corps\nInstallation d'un escalier de secours\nTravaux de Maçonnerie et de finitions Peinture",
        cost: "1 741 754 € HT",
        category: Category.EXTERIOR_WOOD_FURNISHINGS
    }, { imageCount: 3 }),
    {
        slug: "immeubles",
        name: "Immeubles",
        address: "17 à 25, rue de la Folie Regnault - 75011 Paris",
        client: "Régie Immobilière de la Ville de Paris",
        description: "Remplacement de 798 châssis PVC en rénovation dans les logements occupés.",
        cost: "403 201 € HT",
        category: Category.EXTERIOR_WOOD_FURNISHINGS,
        images: []
    },
    {
        slug: "hotel-des-impots",
        name: "Hôtel des Impôts",
        address: "6, rue Paganini - 75019 Paris",
        client: "Ministère des Finances",
        description: "Remplacement de 1098 châssis existants par des châssis en PVC.\nPose en rénovation.\nCompris mise en œuvre de stores d'occultation solaires.",
        cost: "1 304 023 € HT",
        category: Category.EXTERIOR_WOOD_FURNISHINGS,
        images: []
    },
    fromStatic({
        slug: "mac-mahon",
        name: "Mac Mahon",
        address: "29 avenue Mac Mahon - 75017 Paris",
        client: "CARMF",
        description: "Travaux de ravalement de la façade rue, et le remplacement des menuiseries extérieures sur façade rue et cour intérieure par des menuiseries en bois à l'ancienne.",
        cost: "601 358 € HT",
        category: Category.FACELIFT,
        featuredOrder: 4,
    }, { imageCount: 4 }),
    fromStatic({
        slug: "fondation-maginot",
        name: "Fondation Maginot",
        address: "24 bis Boulevard st Germain - Paris 75005",
        client: "Fédération nationale André Maginot - FNAM",
        description: "Ravalement de la façade cour et rue.",
        cost: "68 125 € HT",
        category: Category.FACELIFT
    }, { imageCount: 3 }),
    {
        slug: "immeuble-2",
        name: "Immeuble",
        address: "157, rue Lafayette 75010 - Paris",
        client: "Copropriété",
        description: "Ravalement d'un immeuble pierre et brique sur rue par hydrogommage et imperméabilisation I4 sur Cour.",
        cost: "88.151",
        category: Category.FACELIFT,
        images: []
    },
    {
        slug: "agf-immobilier",
        name: "AGF Immobilier",
        address: "39, rue Pergolèse - 75016 Paris",
        client: "AGF Immobilier",
        description: "Ravalement d'un immeuble Haussmannien en pierre de taille par hydrogommage et réparation d'une lucarne pierre.",
        cost: "97 048 € HT",
        category: Category.FACELIFT,
        images: []
    },
] as Array<Reference>)

export const categories = Object.values(Category);

export function getReferencesByCategory(category: Category) {
    return references
        .filter((reference) => reference.category === category)
}

export function getFeatured() {
    return references
        .filter(({ featuredOrder }) => !!featuredOrder)
        .sort(({ featuredOrder: a }, { featuredOrder: b }) => a! - b!)
}