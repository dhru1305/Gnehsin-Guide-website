const genshinCharacterTemplate = {
    id: "", // Character ID
    name: "", // Character Name
    imgSrc: "", // Character Image Path
    avtSrc: "", // Avatar Image Path
    vaEn: "", // English Voice Actor
    vaJp: "", // Japanese Voice Actor
    description1: "", // Short Character Description
    element: "", // Element Type (Pyro, Hydro, etc.)
    weaponType: "", // Weapon Type (Sword, Bow, etc.)
    officialWeapon: "", // Character's Signature Weapon
    best5StarWeapons: [], // Recommended 5★ Weapons
    best4StarWeapons: [], // Recommended 4★ Weapons
    best3StarWeapons: [], // Recommended 3★ Weapons
    rarity: "", // Character Rarity (4★, 5★)
    quote: "", // Character Quote
    region: "", // Region (Mondstadt, Liyue, etc.)
    releaseDate: "", // Initial Release Date
    rerunDay: "", // Rerun Information
    rerunTimes: 0, // Number of Times Rerun

    stats: {
        level1: { hp: 0, atk: 0, def: 0, ascensionStat: "", ascensionValue: "" },
        level20: { hp: 0, atk: 0, def: 0, ascensionStat: "", ascensionValue: "" },
        level40: { hp: 0, atk: 0, def: 0, ascensionStat: "", ascensionValue: "" },
        level50: { hp: 0, atk: 0, def: 0, ascensionStat: "", ascensionValue: "" },
        level60: { hp: 0, atk: 0, def: 0, ascensionStat: "", ascensionValue: "" },
        level70: { hp: 0, atk: 0, def: 0, ascensionStat: "", ascensionValue: "" },
        level80: { hp: 0, atk: 0, def: 0, ascensionStat: "", ascensionValue: "" },
        level90: { hp: 0, atk: 0, def: 0, ascensionStat: "", ascensionValue: "" }
    },

    ascension: [
        { level: 20, materials: [] },
        { level: 40, materials: [] },
        { level: 50, materials: [] },
        { level: 60, materials: [] },
        { level: 70, materials: [] },
        { level: 80, materials: [] }
    ],

    ratings: {
        dps: { rating: 0, description: "", tier: "" },
        subDps: { rating: 0, description: "", tier: "" },
        support: { rating: 0, description: "", tier: "" },
        healer: { rating: 0, description: "", tier: "" },
        overallPlaystyle: { rating: "", tier: "" }
    }
};


const weapons = [
    {
        name: "Aquila Favonia",
        weaponType: "Sword",
        rarity: 5,
        imgSrc: "assets/weapons/aquila-favonia.png",
        baseATK: 48,
        maxATK: 674,
        substat: "Physical DMG Bonus",
        substatValue: "9.0%",
        maxSubstatValue: "41.3%",
        effect: "ATK is increased. Taking DMG regenerates HP.",
        refinementRanks: ["20%", "25%", "30%", "35%", "40%"],
        obtain: "Wishes (Gacha)",
        series: "Favonius Series",
        signatureFor: "Jean",
        ascension: [
            {
                level: 20,
                materials: [
                    { name: "Boreal Wolf’s Milk Tooth", quantity: 3 },
                    { name: "Chaos Device", quantity: 3 },
                    { name: "Divining Scroll", quantity: 2 }
                ]
            },
            {
                level: 40,
                materials: [
                    { name: "Boreal Wolf’s Cracked Tooth", quantity: 3 },
                    { name: "Chaos Device", quantity: 12 },
                    { name: "Divining Scroll", quantity: 8 }
                ]
            },
            {
                level: 50,
                materials: [
                    { name: "Boreal Wolf’s Cracked Tooth", quantity: 6 },
                    { name: "Chaos Circuit", quantity: 6 },
                    { name: "Sealed Scroll", quantity: 6 }
                ]
            },
            {
                level: 60,
                materials: [
                    { name: "Boreal Wolf’s Broken Fang", quantity: 3 },
                    { name: "Chaos Circuit", quantity: 12 },
                    { name: "Sealed Scroll", quantity: 9 }
                ]
            },
            {
                level: 70,
                materials: [
                    { name: "Boreal Wolf’s Broken Fang", quantity: 6 },
                    { name: "Chaos Core", quantity: 9 },
                    { name: "Forbidden Curse Scroll", quantity: 6 }
                ]
            },
            {
                level: 80,
                materials: [
                    { name: "Boreal Wolf’s Nostalgia", quantity: 4 },
                    { name: "Chaos Core", quantity: 18 },
                    { name: "Forbidden Curse Scroll", quantity: 12 }
                ]
            }
        ],
        specialNote: "One of the best swords for physical damage builds."
    }
];

const artifactTemplate = {
    flower: { 
        name: "Flower of Life", 
        imgSrc: "", 
        mainStats: ["Flat HP"], // Flower always has Flat HP
        substats: ["Flat HP", "Flat ATK", "Crit Rate", "Crit DMG", "ATK%", "DEF%", "HP%", "Elemental Mastery", "Energy Recharge"]
    },
    plume: { 
        name: "Plume of Death", 
        imgSrc: "", 
        mainStats: ["Flat ATK"], // Plume always has Flat ATK
        substats: ["Flat HP", "Flat ATK", "Crit Rate", "Crit DMG", "ATK%", "DEF%", "HP%", "Elemental Mastery", "Energy Recharge"]
    },
    sands: { 
        name: "Sands of Eon", 
        imgSrc: "", 
        mainStats: ["HP%", "ATK%", "DEF%", "Energy Recharge", "Elemental Mastery"],
        substats: ["Flat HP", "Flat ATK", "Crit Rate", "Crit DMG", "ATK%", "DEF%", "HP%", "Elemental Mastery", "Energy Recharge"]
    },
    goblet: { 
        name: "Goblet of Eonothem", 
        imgSrc: "", 
        mainStats: ["HP%", "ATK%", "DEF%", "Elemental Mastery", "Anemo DMG Bonus", "Pyro DMG Bonus", "Electro DMG Bonus", "Hydro DMG Bonus", "Cryo DMG Bonus", "Geo DMG Bonus", "Dendro DMG Bonus", "Physical DMG Bonus"],
        substats: ["Flat HP", "Flat ATK", "Crit Rate", "Crit DMG", "ATK%", "DEF%", "HP%", "Elemental Mastery", "Energy Recharge"]
    },
    circlet: { 
        name: "Circlet of Logos", 
        imgSrc: "", 
        mainStats: ["HP%", "ATK%", "DEF%", "Crit Rate", "Crit DMG", "Healing Bonus"],
        substats: ["Flat HP", "Flat ATK", "Crit Rate", "Crit DMG", "ATK%", "DEF%", "HP%", "Elemental Mastery", "Energy Recharge"]
    }
};

const artifacts = [
    {
        name: "Viridescent Venerer",
        imgSrc: "assets/artifacts/viridescent-venerer.png",
        twoPieceBonus: "Increases Anemo DMG Bonus by 15%.",
        fourPieceBonus: "Increases Swirl DMG by 60% and reduces opponent’s Elemental RES to the Swirled element by 40% for 10s.",
        bestFor: ["Jean", "Xiao", "Sucrose"],
        setPieces: Object.assign({}, artifactTemplate, {
            flower: { ...artifactTemplate.flower, name: "In Remembrance of Viridescent Fields", imgSrc: "assets/artifacts/viridescent-flower.png" },
            plume: { ...artifactTemplate.plume, name: "Viridescent Arrow Feather", imgSrc: "assets/artifacts/viridescent-plume.png" },
            sands: { ...artifactTemplate.sands, name: "Viridescent Venerer's Determination", imgSrc: "assets/artifacts/viridescent-sands.png" },
            goblet: { ...artifactTemplate.goblet, name: "Viridescent Venerer’s Vessel", imgSrc: "assets/artifacts/viridescent-goblet.png" },
            circlet: { ...artifactTemplate.circlet, name: "Viridescent Venerer’s Diadem", imgSrc: "assets/artifacts/viridescent-circlet.png" }
        })
    },
    {
        name: "Gladiator’s Finale",
        imgSrc: "assets/artifacts/gladiators-finale.png",
        twoPieceBonus: "ATK +18%.",
        fourPieceBonus: "If the wielder uses a Sword, Claymore, or Polearm, increases Normal Attack DMG by 35%.",
        bestFor: ["Jean", "Diluc", "Raiden Shogun"],
        setPieces: Object.assign({}, artifactTemplate, {
            flower: { ...artifactTemplate.flower, name: "Gladiator’s Nostalgia", imgSrc: "assets/artifacts/gladiator-flower.png" },
            plume: { ...artifactTemplate.plume, name: "Gladiator’s Destiny", imgSrc: "assets/artifacts/gladiator-plume.png" },
            sands: { ...artifactTemplate.sands, name: "Gladiator’s Longing", imgSrc: "assets/artifacts/gladiator-sands.png" },
            goblet: { ...artifactTemplate.goblet, name: "Gladiator’s Intoxication", imgSrc: "assets/artifacts/gladiator-goblet.png" },
            circlet: { ...artifactTemplate.circlet, name: "Gladiator’s Triumphus", imgSrc: "assets/artifacts/gladiator-circlet.png" }
        })
    }
];

const ascensionMaterials = [

 
    {
        name: "Dandelion Seed",
        imgSrc: "assets/materials/dandelion-seed.png",
        location: "Mondstadt Open World (Gathered from Dandelion Plants)",
        rarity: 1
    },
    {
        name: "Hurricane Seed",
        imgSrc: "assets/materials/hurricane-seed.png",
        location: "Dropped by Anemo Hypostasis (Mondstadt Boss)",
        rarity: 4
    },
    {
        name: "Vayuda Turquoise Sliver",
        imgSrc: "assets/materials/vayuda-turquoise-sliver.png",
        location: "Dropped by Anemo Bosses",
        rarity: 2
    },
    {
        name: "Vayuda Turquoise Fragment",
        imgSrc: "assets/materials/vayuda-turquoise-fragment.png",
        location: "Dropped by Anemo Bosses",
        rarity: 3
    },
    {
        name: "Vayuda Turquoise Chunk",
        imgSrc: "assets/materials/vayuda-turquoise-chunk.png",
        location: "Dropped by Anemo Bosses",
        rarity: 4
    },
    {
        name: "Vayuda Turquoise Gemstone",
        imgSrc: "assets/materials/vayuda-turquoise-gemstone.png",
        location: "Dropped by Anemo Bosses",
        rarity: 5
    },
    {
        name: "Damaged Mask",
        imgSrc: "assets/materials/damaged-mask.png",
        location: "Dropped by Hilichurls",
        rarity: 1
    },
    {
        name: "Stained Mask",
        imgSrc: "assets/materials/stained-mask.png",
        location: "Dropped by Hilichurls",
        rarity: 2
    },
    {
        name: "Ominous Mask",
        imgSrc: "assets/materials/ominous-mask.png",
        location: "Dropped by Hilichurls",
        rarity: 3
    },



    {
        name: "Boreal Wolf’s Milk Tooth",
        imgSrc: "assets/materials/boreal-wolf-milk-tooth.png",
        location: "Dropped by Andrius (Wolf of the North)",
        rarity: 2
    },
    {
        name: "Boreal Wolf’s Cracked Tooth",
        imgSrc: "assets/materials/boreal-wolf-cracked-tooth.png",
        location: "Dropped by Andrius (Wolf of the North)",
        rarity: 3
    },
    {
        name: "Boreal Wolf’s Broken Fang",
        imgSrc: "assets/materials/boreal-wolf-broken-fang.png",
        location: "Dropped by Andrius (Wolf of the North)",
        rarity: 4
    },
    {
        name: "Boreal Wolf’s Nostalgia",
        imgSrc: "assets/materials/boreal-wolf-nostalgia.png",
        location: "Dropped by Andrius (Wolf of the North)",
        rarity: 5
    },
    {
        name: "Chaos Device",
        imgSrc: "assets/materials/chaos-device.png",
        location: "Dropped by Ruin Guards & Ruin Hunters",
        rarity: 2
    },
    {
        name: "Chaos Circuit",
        imgSrc: "assets/materials/chaos-circuit.png",
        location: "Dropped by Ruin Guards & Ruin Hunters",
        rarity: 3
    },
    {
        name: "Chaos Core",
        imgSrc: "assets/materials/chaos-core.png",
        location: "Dropped by Ruin Guards & Ruin Hunters",
        rarity: 4
    }
];