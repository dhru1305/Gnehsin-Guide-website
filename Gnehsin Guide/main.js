document.addEventListener("DOMContentLoaded", () => {
    const characters = {
        Mondstadt: [
            {
                name: "Jean",
                imgSrc: "assets/jean-large.png",
                avtSrc: "assets/jean-avatar.png",
                vaEn: "Stephanie Southerland",
                vaJp: "Chiwa Saito",
                description1: "As the Acting Grand Master of the Knights,",
                description2: "Jean has always been devoted to her duties...",
                element: "Anemo",
                weapon: "Sword",
                rarity: 5,
                quote: "Wind, hear me!"
            },
            {
                name: "Diluc",
                imgSrc: "assets/diluc-large.png",
                avtSrc: "assets/diluc-avatar.png",
                vaEn: "Sean Chiplock",
                vaJp: "Kensho Ono",
                description1: "A former Knight of Favonius, now a solitary nobleman who battles evil from the shadows.",
                element: "Pyro",
                weapon: "Claymore",
                rarity: 5,
                quote: "Burn!"
            },
            {
                name: "Amber",
                imgSrc: "assets/amber-large.png",
                avtSrc: "assets/amber-avatar.png",
                vaEn: "Kelly Baskin",
                vaJp: "Manaka Iwami",
                description1: "A lively and cheerful Outrider of the Knights of Favonius, always ready for an adventure!",
                element: "Pyro",
                weapon: "Bow",
                rarity: 4,
                quote: "Always ready!"
            }
        ],
        Liyue: [
            {
                name: "Xiao",
                imgSrc: "assets/xiao-large.png",
                avtSrc: "assets/xiao-avatar.png",
                vaEn: "Laila Berzins",
                vaJp: "Yoshitsugu Matsuoka",
                description1: "A yaksha and adeptus sworn to protect Liyue, wielding the power of the Anemo element.",
                element: "Anemo",
                weapon: "Polearm",
                rarity: 5,
                quote: "Lament."
            },
            {
                name: "Ningguang",
                imgSrc: "assets/ningguang-large.png",
                avtSrc: "assets/ningguang-avatar.png",
                vaEn: "Erin Ebers",
                vaJp: "Sayaka Ohara",
                description1: "The Tianquan of Liyue Qixing, known for her sharp intellect and strategic mind.",
                element: "Geo",
                weapon: "Catalyst",
                rarity: 4,
                quote: "Trade is the lifeblood of Liyue."
            }
        ]
    };

    const weapons = [
        // ⭐⭐⭐ 3-Star Weapons
        {
            name: "White Tassel",
            rarity: 3,
            imgSrc: "assets/weapons/white-tassel.png",
            baseATK: 39, // Lv. 1
            maxATK: 401, // Lv. 90
            substat: "Crit Rate",
            substatValue: "5.1%", // Lv. 1
            maxSubstatValue: "23.4%", // Lv. 90
            effect: "Increases Normal Attack DMG by 24%.",
            obtain: "Treasure Chests"
        },
        {
            name: "Halberd",
            rarity: 3,
            imgSrc: "assets/weapons/halberd.png",
            baseATK: 40,
            maxATK: 448,
            substat: "ATK%",
            substatValue: "5.1%",
            maxSubstatValue: "23.4%",
            effect: "Normal Attacks deal an additional 160% DMG. Can only occur once every 10s.",
            obtain: "Treasure Chests, Random Drops"
        },
    
        // ⭐⭐⭐⭐ 4-Star Weapons
        {
            name: "Favonius Sword",
            rarity: 4,
            imgSrc: "assets/weapons/favonius-sword.png",
            baseATK: 41,
            maxATK: 454,
            substat: "Energy Recharge",
            substatValue: "13.3%",
            maxSubstatValue: "61.3%",
            effect: "CRIT Hits have a 60% chance to generate a small amount of Elemental Particles.",
            obtain: "Wishes (Gacha)"
        },
        {
            name: "The Flute",
            rarity: 4,
            imgSrc: "assets/weapons/the-flute.png",
            baseATK: 42,
            maxATK: 510,
            substat: "ATK%",
            substatValue: "9.0%",
            maxSubstatValue: "41.3%",
            effect: "Normal & Charged Attacks generate a Harmonic. At 5 Harmonics, they explode, dealing 100% ATK DMG.",
            obtain: "Wishes (Gacha)"
        },
    
        // ⭐⭐⭐⭐⭐ 5-Star Weapons
        {
            name: "Aquila Favonia",
            rarity: 5,
            imgSrc: "assets/weapons/aquila-favonia.png",
            baseATK: 48,
            maxATK: 674,
            substat: "Physical DMG Bonus",
            substatValue: "9.0%",
            maxSubstatValue: "41.3%",
            effect: "ATK is increased by 20%. Taking DMG regenerates HP equal to 100% of ATK.",
            obtain: "Wishes (Gacha)"
        },
        {
            name: "Freedom-Sworn",
            rarity: 5,
            imgSrc: "assets/weapons/freedom-sworn.png",
            baseATK: 46,
            maxATK: 608,
            substat: "Elemental Mastery",
            substatValue: "43",
            maxSubstatValue: "198",
            effect: "Increases DMG by 10%. When triggering Elemental Reactions, increases ATK by 20%.",
            obtain: "Wishes (Gacha)"
        }
    ];
    


    const elementImages = {
        Pyro: "assets/elements/pyro.png",
        Anemo: "assets/elements/anemo.png",
        Hydro: "assets/elements/hydro.png",
        Electro: "assets/elements/electro.png",
        Geo: "assets/elements/geo.png",
        Dendro: "assets/elements/dendro.png",
        Cryo: "assets/elements/cryo.png"
    };

    const regionBackgrounds = {
        Mondstadt: "assets/backgrounds/mondstadt.png",
        Liyue: "assets/backgrounds/liyue.png"
    };

    const regionList = document.querySelector(".region-list");
    const characterInfo = document.querySelector(".character-info");
    const characterImage = document.querySelector(".character-img");
    const characterSelector = document.querySelector(".character-selector");
    const characterSection = document.querySelector(".character-section");

    Object.keys(characters).forEach(region => {
        const regionItem = document.createElement("li");
        regionItem.textContent = region;
        regionItem.classList.add("region-item");
        regionList.appendChild(regionItem);

        regionItem.addEventListener("click", () => {
            document.querySelector(".active")?.classList.remove("active");
            regionItem.classList.add("active");
            loadCharacters(region);
            updateBackground(region);
        });
    });

    function loadCharacters(region) {
        characterSelector.innerHTML = "";
        characters[region].forEach(character => {
            const charCard = document.createElement("div");
            charCard.classList.add("character-card");
            charCard.innerHTML = `<img src="${character.avtSrc}" alt="${character.name}"><p>${character.name}</p>`;
            characterSelector.appendChild(charCard);

            charCard.addEventListener("click", () => {
                document.querySelector(".selected")?.classList.remove("selected");
                charCard.classList.add("selected");

                renderCharacterInfo(character);
            });
        });

        // Automatically select the first character safely
        const firstCharCard = document.querySelector(".character-card");
        if (firstCharCard) firstCharCard.click();
    }

    function renderCharacterInfo(character) {
        characterInfo.innerHTML = `
            <div class="element-container">
                <img src="${elementImages[character.element]}" class="element-bg" alt="${character.element}">
            </div>

            <div class="character-card-info">
             <h1 class="character-name">${character.name}</h1>
                  <div class="divider"></div>

                 <div class="va-container">
                <div class="va-box">
                    <span class="va-text" data-lang="en">${character.vaEn}</span>
                    <button class="lang-toggle">EN</button>
                </div>
            </div>

            <div class="description-box">
                <p class="character-description">${character.description1}</p>
                <p class="character-description">${character.description2}</p>
            </div>

            <div class="character-quote">
                <span class="quote-text">"${character.quote || "No quote available."}"</span>
            </div>
           </div>
        `;

        // Animate Character Image
        characterImage.classList.remove("active"); // Remove active to restart animation
        setTimeout(() => {
            characterImage.src = character.imgSrc;
            characterImage.classList.add("active");
        }, 70); // Small delay to allow transition reset

        // Add toggle functionality for language switch
        document.querySelector(".lang-toggle").addEventListener("click", function () {
            const vaText = document.querySelector(".va-text");
            const isJP = vaText.getAttribute("data-lang") === "jp";

            if (isJP) {
                vaText.textContent = character.vaEn;
                vaText.setAttribute("data-lang", "en");
                this.textContent = "EN";
            } else {
                vaText.textContent = character.vaJp;
                vaText.setAttribute("data-lang", "jp");
                this.textContent = "JP";
            }
        });
    }

    function updateBackground(region) {
        characterSection.style.backgroundImage = `url(${regionBackgrounds[region] || "assets/backgrounds/default.png"})`;
        characterSection.style.position = 'absolute';
        characterSection.style.top = '0';
        characterSection.style.bottom  = '0';
        characterSection.style.left  = '0';
        characterSection.style.right  = '0';
        characterSection.style.backgroundPosition  = 'center';
        characterSection.style.backgroundSize  = 'cover';
        characterSection.style.transformOrigin  = 'center';
    }

    // Automatically load the first region
    const firstRegion = document.querySelector(".region-item");
    if (firstRegion) firstRegion.click();
});
