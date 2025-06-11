// Character Data for Each Region
const mondstadtCharacters = [
    {
        name: "Jean",
        imgSrc: "img/jean-large.png",
        avtSrc: "img/jean-avatar.png",
        vaEn: "Stephanie Southerland",
        vaJp: "Chiwa Saito",
        description: "As the Acting Grand Master of the Knights, Jean has always been devoted to her duties and maintaining peace in Mondstadt.",
        region: "Mondstadt",
        element: "Anemo",
        weapon: "Sword",
        rarity: 5
    },
    {
        name: "Diluc",
        imgSrc: "diluc-large.png",
        avtSrc: "img/jean-avatar.png",
        vaEn: "Sean Chiplock",
        vaJp: "Kensho Ono",
        description: "A former Knight of Favonius, now a solitary nobleman who battles evil from the shadows.",
        region: "Mondstadt",
        element: "Pyro",
        weapon: "Claymore",
        rarity: 5
    }
];

const liyueCharacters = [
    {
        name: "Xiao",
        imgSrc: "xiao-large.png",
        avtSrc: "img/jean-avatar.png",
        vaEn: "Laila Berzins",
        vaJp: "Matsuoka Yoshitsugu",
        description: "A Yaksha adeptus who defends Liyue from demonic forces.",
        region: "Liyue",
        element: "Anemo",
        weapon: "Polearm",
        rarity: 5
    }
];

const inazumaCharacters = [
    {
        name: "Raiden Shogun",
        imgSrc: "raiden-large.png",
        avtSrc: "img/jean-avatar.png",
        vaEn: "Anne Yatco",
        vaJp: "Miyuki Sawashiro",
        description: "The ruler of Inazuma who seeks eternity.",
        region: "Inazuma",
        element: "Electro",
        weapon: "Polearm",
        rarity: 5
    }
];

const sumeruCharacters = [
    {
        name: "Nahida",
        imgSrc: "nahida-large.png",
        avtSrc: "img/jean-avatar.png",
        vaEn: "Kimberley Anne Campbell",
        vaJp: "Yukari Tamura",
        description: "The current Dendro Archon and ruler of Sumeru.",
        region: "Sumeru",
        element: "Dendro",
        weapon: "Catalyst",
        rarity: 5
    }
];

const fontaineCharacters = [
    {
        name: "Neuvillette",
        imgSrc: "neuvillette-large.png",
        avtSrc: "img/jean-avatar.png",
        vaEn: "Ray Chase",
        vaJp: "Hiroshi Kamiya",
        description: "Chief Justice of Fontaine.",
        region: "Fontaine",
        element: "Hydro",
        weapon: "Catalyst",
        rarity: 5
    }
];

const natlanCharacters = [
    {
        name: "Xilonen",
        imgSrc: "xilonen-large.png",
        avtSrc: "img/jean-avatar.png",
        vaEn: "Beth Curry",
        vaJp: "N/A",
        description: "A roller-skating cat girl who is a blacksmith from Natlan.",
        region: "Natlan",
        element: "Geo",
        weapon: "Sword",
        rarity: 5
    }
];

// Merge All Characters
const allCharacters = [
    ...mondstadtCharacters,
    ...liyueCharacters,
    ...inazumaCharacters,
    ...sumeruCharacters,
    ...fontaineCharacters,
    ...natlanCharacters
];

// DOM Elements
const sidebarLinks = document.querySelectorAll(".sidebar a");
const characterBanner = document.querySelector(".character-banner");
const characterSelection = document.querySelector(".character-selection");

// Function to Update Character Banner
function updateCharacterBanner(character) {
    characterBanner.innerHTML = `
        <img src="${character.imgSrc}" alt="${character.name}" class="character-image">
        <div class="character-info">
            <h1 class="character-name">${character.name.toUpperCase()}</h1>
            <p class="character-va-en">VA (EN): ${character.vaEn}</p>
            <p class="character-va-jp">VA (JP): ${character.vaJp}</p>
            <p class="character-desc">${character.description}</p>
            <p class="character-element">Element: ${character.element}</p>
            <p class="character-weapon">Weapon: ${character.weapon}</p>
            <p class="character-rarity">Rarity: ${'★'.repeat(character.rarity)}</p>
        </div>
    `;
}

// Function to Display Characters in Selection
function displayCharacters(region = "Mondstadt") {
    characterSelection.innerHTML = ""; // Clear existing characters

    const filteredCharacters = allCharacters.filter(c => c.region === region);

    filteredCharacters.forEach(character => {
        const card = document.createElement("div");
        card.classList.add("character-card");
        card.setAttribute("data-name", character.name);

        card.innerHTML = `
            <img src="${character.avtSrc}" alt="${character.name}">
            <p>${character.name}</p>
        `;

        // Click event to update character banner
        card.addEventListener("click", () => updateCharacterBanner(character));

        characterSelection.appendChild(card);
    });

    // Show first character of selected region
    if (filteredCharacters.length > 0) {
        updateCharacterBanner(filteredCharacters[0]);
    }
}

// Add Event Listeners to Sidebar
sidebarLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const region = link.textContent.trim();
        displayCharacters(region);
    });
});

// 🛠 Load ONLY Mondstadt Characters on Page Load
displayCharacters("Mondstadt");

let currentPage = 1;
const charactersPerPage = 6;

// Function to Paginate Characters
function paginateCharacters(page) {
    const startIndex = (page - 1) * charactersPerPage;
    const endIndex = startIndex + charactersPerPage;
    const paginatedCharacters = allCharacters.slice(startIndex, endIndex);
    
    displayCharacters(paginatedCharacters);
}

// Create Pagination Controls
const paginationControls = document.createElement("div");
paginationControls.classList.add("pagination-controls");

const prevBtn = document.createElement("button");
prevBtn.textContent = "Previous";
prevBtn.classList.add("pagination-btn");
prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        paginateCharacters(currentPage);
    }
});

const nextBtn = document.createElement("button");
nextBtn.textContent = "Next";
nextBtn.classList.add("pagination-btn");
nextBtn.addEventListener("click", () => {
    if (currentPage * charactersPerPage < allCharacters.length) {
        currentPage++;
        paginateCharacters(currentPage);
    }
});

// Add Pagination to Sidebar
paginationControls.appendChild(prevBtn);
paginationControls.appendChild(nextBtn);
document.querySelector(".sidebar").appendChild(paginationControls);

// Load First Page
paginateCharacters(currentPage);











//-----------------------------------------------------------------
// All Characters 



// DOM Elements

const showAllBtn = document.getElementById("showAllBtn");
const elementButtons = document.querySelectorAll(".element-btn");
const sortDropdown = document.getElementById("sortDropdown");

// Function to Display Characters
function displayCharacters(characters) {
    characterSelection.innerHTML = ""; // Clear previous characters

    characters.forEach(character => {
        const card = document.createElement("div");
        card.classList.add("character-card");
        card.innerHTML = `
            <img src="${character.imgSrc}" alt="${character.name}">
            <p>${character.name}</p>
        `;
        characterSelection.appendChild(card);
    });
}

// Show All Characters by Default
displayCharacters(allCharacters);

// Event Listener for "Show All" Button
showAllBtn.addEventListener("click", () => {
    displayCharacters(allCharacters);
});

// Event Listener for Element Filter
elementButtons.forEach(button => {
    button.addEventListener("click", () => {
        const element = button.getAttribute("data-element");
        const filteredCharacters = allCharacters.filter(c => c.element === element);
        displayCharacters(filteredCharacters);
    });
});

// Event Listener for Sorting
sortDropdown.addEventListener("change", () => {
    let sortedCharacters = [...allCharacters];

    if (sortDropdown.value === "rarity") {
        sortedCharacters.sort((a, b) => b.rarity - a.rarity);
    } else if (sortDropdown.value === "name") {
        sortedCharacters.sort((a, b) => a.name.localeCompare(b.name));
    }

    displayCharacters(sortedCharacters);
});


//-----------------------------------------------------------------
// sharch 


// Create Search Input
const searchInput = document.createElement("input");
searchInput.setAttribute("type", "text");
searchInput.setAttribute("placeholder", "Search Character...");
searchInput.classList.add("search-input");

// Add Search Bar to Sidebar
document.querySelector(".sidebar").prepend(searchInput);

// Search Function
searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredCharacters = allCharacters.filter(c => 
        c.name.toLowerCase().includes(searchTerm)
    );
    displayCharacters(filteredCharacters);
});




//-----------------------------------------------------------------
// more dirails page

// Function to Open Character Page
function openCharacterPage(character) {
    window.location.href = `character.html?name=${character.name}`;
}

// Update Character Click Event
function displayCharacters(characters) {
    characterSelection.innerHTML = ""; // Clear previous characters

    characters.forEach(character => {
        const card = document.createElement("div");
        card.classList.add("character-card");
        card.innerHTML = `
            <img src="${character.imgSrc}" alt="${character.name}">
            <p>${character.name}</p>
        `;
        card.addEventListener("click", () => openCharacterPage(character));
        characterSelection.appendChild(card);
    });
}



//-----------------------------------------------------------------

// Get Character Name from URL
const urlParams = new URLSearchParams(window.location.search);
const characterName = urlParams.get("name");

// Find Character Data
const character = allCharacters.find(c => c.name === characterName);

// Update Page if Character Found
if (character) {
    document.getElementById("char-image").src = character.imgSrc;
    document.getElementById("char-name").textContent = character.name.toUpperCase();
    document.getElementById("char-va-en").textContent = `VA (EN): ${character.vaEn}`;
    document.getElementById("char-va-jp").textContent = `VA (JP): ${character.vaJp}`;
    document.getElementById("char-desc").textContent = character.description;
    document.getElementById("char-element").textContent = `Element: ${character.element}`;
    document.getElementById("char-weapon").textContent = `Weapon: ${character.weapon}`;
    document.getElementById("char-rarity").textContent = `Rarity: ${'★'.repeat(character.rarity)}`;
} else {
    document.querySelector(".character-details").innerHTML = "<h2>Character Not Found</h2>";
}


//------------------------------------------------------------------
// loding 

// Show Loading Screen Before Displaying Characters
const loadingScreen = document.getElementById("loading");

function showLoading() {
    loadingScreen.classList.remove("hidden");
    setTimeout(() => loadingScreen.classList.add("hidden"), 500);
}

// Modify displayCharacters to include loading
function displayCharacters(characters) {
    showLoading();
    setTimeout(() => {
        characterSelection.innerHTML = "";
        characters.forEach(character => {
            const card = document.createElement("div");
            card.classList.add("character-card");
            card.innerHTML = `<img src="${character.imgSrc}" alt="${character.name}"><p>${character.name}</p>`;
            card.addEventListener("click", () => openCharacterPage(character));
            characterSelection.appendChild(card);
        });
    }, 500);
}


//-----------------------------------------------------------------------
//favorites characters 

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// Function to Toggle Favorite
function toggleFavorite(character) {
    if (favorites.includes(character.name)) {
        favorites = favorites.filter(fav => fav !== character.name);
    } else {
        favorites.push(character.name);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    displayCharacters(allCharacters);
}

// Function to Display Characters (Updated to Show Favorites)
function displayCharacters(characters) {
    characterSelection.innerHTML = "";
    characters.forEach(character => {
        const card = document.createElement("div");
        card.classList.add("character-card");

        const isFavorite = favorites.includes(character.name);
        card.innerHTML = `
            <img src="${character.imgSrc}" alt="${character.name}">
            <p>${character.name}</p>
            <button class="favorite-btn ${isFavorite ? 'fav' : ''}" onclick="toggleFavorite('${character.name}')">
                ${isFavorite ? "★" : "☆"}
            </button>
        `;
        card.addEventListener("click", () => openCharacterPage(character));
        characterSelection.appendChild(card);
    });
}

// Function to Show Only Favorite Characters
function showFavorites() {
    const favoriteCharacters = allCharacters.filter(c => favorites.includes(c.name));
    displayCharacters(favoriteCharacters);
}

// Add "Show Favorites" Button
const favoritesBtn = document.createElement("button");
favoritesBtn.textContent = "Show Favorites";
favoritesBtn.classList.add("show-favorites-btn");
favoritesBtn.addEventListener("click", showFavorites);
document.querySelector(".sidebar").appendChild(favoritesBtn);


//--------------------------------------------
// Drak mode 


// Get Dark Mode Toggle Button
const darkModeToggle = document.getElementById("darkModeToggle");

// Check Local Storage for Dark Mode
let darkMode = localStorage.getItem("darkMode") === "enabled";

function enableDarkMode() {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
}

function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
}

// Apply Dark Mode on Load
if (darkMode) enableDarkMode();

// Toggle Dark Mode on Click
darkModeToggle.addEventListener("click", () => {
    darkMode = !darkMode;
    darkMode ? enableDarkMode() : disableDarkMode();
});


//---------------------------------------
//Character Comparison

let selectedCharacters = [];

function addToComparison(characterName) {
    if (selectedCharacters.length >= 2) selectedCharacters.shift();
    selectedCharacters.push(characterName);

    if (selectedCharacters.length === 2) showComparison();
}

function showComparison() {
    const comparisonContainer = document.getElementById("comparisonContainer");
    const char1 = allCharacters.find(c => c.name === selectedCharacters[0]);
    const char2 = allCharacters.find(c => c.name === selectedCharacters[1]);

    if (char1 && char2) {
        comparisonContainer.innerHTML = `
            <div class="comparison-card">
                <h3>${char1.name}</h3>
                <p>Element: ${char1.element}</p>
                <p>Weapon: ${char1.weapon}</p>
                <p>Rarity: ${'★'.repeat(char1.rarity)}</p>
            </div>
            <div class="comparison-card">
                <h3>${char2.name}</h3>
                <p>Element: ${char2.element}</p>
                <p>Weapon: ${char2.weapon}</p>
                <p>Rarity: ${'★'.repeat(char2.rarity)}</p>
            </div>
        `;
    }
}

// Add Compare Button to Each Character
function displayCharacters(characters) {
    characterSelection.innerHTML = "";
    characters.forEach(character => {
        const card = document.createElement("div");
        card.classList.add("character-card");

        card.innerHTML = `
            <img src="${character.imgSrc}" alt="${character.name}">
            <p>${character.name}</p>
            <button class="compare-btn-small" onclick="addToComparison('${character.name}')">Compare</button>
        `;
        card.addEventListener("click", () => openCharacterPage(character));
        characterSelection.appendChild(card);
    });
}


const elementSortDropdown = document.getElementById("elementSortDropdown");

elementSortDropdown.addEventListener("change", () => {
    if (elementSortDropdown.value === "default") {
        displayCharacters(allCharacters);
    } else {
        const sortedCharacters = allCharacters.filter(c => c.element === elementSortDropdown.value);
        displayCharacters(sortedCharacters);
    }
});


//--------------------------------------------------
// Tire list

const showTierListBtn = document.getElementById("showTierListBtn");
const tierListContainer = document.getElementById("tierListContainer");

// Show Tier List
showTierListBtn.addEventListener("click", () => {
    tierListContainer.classList.toggle("hidden");
});

// Allow Drag & Drop
document.querySelectorAll(".tier").forEach(tier => {
    tier.addEventListener("dragover", e => e.preventDefault());
    tier.addEventListener("drop", e => {
        const characterName = e.dataTransfer.getData("text");
        const characterCard = document.querySelector(`[data-name="${characterName}"]`);
        tier.appendChild(characterCard);
        saveTierList();
    });
});

// Allow Characters to be Dragged
function makeCharactersDraggable() {
    document.querySelectorAll(".character-card").forEach(card => {
        card.draggable = true;
        card.addEventListener("dragstart", e => {
            e.dataTransfer.setData("text", card.getAttribute("data-name"));
        });
    });
}

// Save Tier List in Local Storage
function saveTierList() {
    const tiers = {};
    document.querySelectorAll(".tier").forEach(tier => {
        tiers[tier.id] = Array.from(tier.children).map(child => child.getAttribute("data-name"));
    });
    localStorage.setItem("tierList", JSON.stringify(tiers));
}

// Load Saved Tier List
function loadTierList() {
    const savedTiers = JSON.parse(localStorage.getItem("tierList"));
    if (savedTiers) {
        Object.entries(savedTiers).forEach(([tierId, names]) => {
            names.forEach(name => {
                const card = document.querySelector(`[data-name="${name}"]`);
                document.getElementById(tierId).appendChild(card);
            });
        });
    }
}

// Call Functions
makeCharactersDraggable();
loadTierList();


//-----------------------------------
// tame bulider


let myTeam = JSON.parse(localStorage.getItem("myTeam")) || [];

// Function to Update Team Display
function updateTeamDisplay() {
    const teamContainer = document.getElementById("teamContainer");
    teamContainer.innerHTML = "";

    myTeam.forEach(characterName => {
        const character = allCharacters.find(c => c.name === characterName);
        const teamMember = document.createElement("div");
        teamMember.classList.add("team-member");
        teamMember.innerHTML = `<img src="${character.imgSrc}" alt="${character.name}"><p>${character.name}</p>`;
        teamContainer.appendChild(teamMember);
    });

    localStorage.setItem("myTeam", JSON.stringify(myTeam));
}

// Function to Add Character to Team
function addToTeam(characterName) {
    if (myTeam.length >= 4) return alert("Your team can only have 4 members.");
    if (!myTeam.includes(characterName)) {
        myTeam.push(characterName);
        updateTeamDisplay();
    }
}

// Function to Clear Team
document.getElementById("clearTeamBtn").addEventListener("click", () => {
    myTeam = [];
    updateTeamDisplay();
});

// Update Character Cards with "Add to Team" Button
function displayCharacters(characters) {
    characterSelection.innerHTML = "";
    characters.forEach(character => {
        const card = document.createElement("div");
        card.classList.add("character-card");
        card.innerHTML = `
            <img src="${character.imgSrc}" alt="${character.name}">
            <p>${character.name}</p>
            <button onclick="addToTeam('${character.name}')">Add to Team</button>
        `;
        characterSelection.appendChild(card);
    });
}

// Load Saved Team
updateTeamDisplay();
