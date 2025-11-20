// Game Constants
const TILE_SIZE = 48;
const GRID_SIZE = 100; // Mapa muito maior
const PLAYER_SIZE = 32;
const PLAYER_SPEED = 2.5;
const INVENTORY_SIZE = 32;
const HOTBAR_SIZE = 9;

// Game Data
const crops = {
  trigo: {
    id: "trigo",
    nome: "Trigo",
    emoji: "🌾",
    seedCost: 150,
    sellPrice: 200,
    growDays: 3,
    description: "Rápido e consistente",
    color: "#d4af37",
  },
  milho: {
    id: "milho",
    nome: "Milho",
    emoji: "🌽",
    seedCost: 500,
    sellPrice: 750,
    growDays: 4,
    description: "Rende um pouco mais",
    color: "#ffd700",
  },
  uva: {
    id: "uva",
    nome: "Uva",
    emoji: "🍇",
    seedCost: 1200,
    sellPrice: 1600,
    growDays: 5,
    description: "Demora mas vale ouro",
    color: "#9370db",
  },
  morango: {
    id: "morango",
    nome: "Morango",
    emoji: "🍓",
    seedCost: 30000,
    sellPrice: 35000,
    growDays: 7,
    description: "Doce e valioso",
    color: "#ff1744",
  },
  abacaxi: {
    id: "abacaxi",
    nome: "Abacaxi",
    emoji: "🍍",
    seedCost: 200000,
    sellPrice: 250000,
    growDays: 12,
    description: "Exótico e lucrativo",
    color: "#ffd700",
  },
  melancia: {
    id: "melancia",
    nome: "Melancia",
    emoji: "🍉",
    seedCost: 1000000,
    sellPrice: 1250000,
    growDays: 15,
    description: "Grande e refrescante",
    color: "#c41e3a",
  },
  ananas: {
    id: "ananas",
    nome: "Ananás",
    emoji: "🥭",
    seedCost: 10000000,
    sellPrice: 12500000,
    growDays: 20,
    description: "Raro e precioso",
    color: "#ff8c00",
  },
  ouro: {
    id: "ouro",
    nome: "Planta de Ouro",
    emoji: "🥇",
    seedCost: 50000000,
    sellPrice: 75000000,
    growDays: 25,
    description: "Literalmente vale ouro",
    color: "#ffd700",
  },
  diamante: {
    id: "diamante",
    nome: "Planta de Diamante",
    emoji: "💎",
    seedCost: 100000000,
    sellPrice: 150000000,
    growDays: 30,
    description: "O mais valioso de todos",
    color: "#b9f2ff",
  },
};

const hoeLabels = ["Básica", "Cobre", "Aço", "Ouro", "Platina", "Diamante", "Mítica"];
const harvestLabels = ["Básica", "Cobre", "Aço", "Ouro", "Platina", "Diamante", "Mítica"];
const fertilizerToolLabels = ["Básico", "Cobre", "Aço", "Ouro", "Platina", "Diamante", "Mítica"];
const sprinklerLabels = ["Básico", "Cobre", "Aço", "Ouro", "Platina"];

// Format large numbers for display
function formatNumber(num) {
  if (num < 1000) {
    return num.toString();
  } else if (num < 1000000) {
    // Thousands
    const k = num / 1000;
    return k % 1 === 0 ? `${k}k` : `${k.toFixed(1)}k`;
  } else if (num < 1000000000) {
    // Millions
    const m = num / 1000000;
    return m % 1 === 0 ? `${m}M` : `${m.toFixed(1)}M`;
  } else if (num < 1000000000000) {
    // Billions
    const b = num / 1000000000;
    return b % 1 === 0 ? `${b}B` : `${b.toFixed(1)}B`;
  } else {
    // Trillions
    const t = num / 1000000000000;
    return t % 1 === 0 ? `${t}T` : `${t.toFixed(1)}T`;
  }
}

// Fertilizer types
const fertilizers = {
  basic: {
    id: "basic",
    name: "Fertilizante Básico",
    reduction: 0.10, // 10% reduction
    price: 100,
    emoji: "🌱",
    desc: "Reduz 10% do tempo de crescimento",
  },
  improved: {
    id: "improved",
    name: "Fertilizante Melhorado",
    reduction: 0.20, // 20% reduction
    price: 500,
    emoji: "🌿",
    desc: "Reduz 20% do tempo de crescimento",
  },
  quality: {
    id: "quality",
    name: "Fertilizante de Qualidade",
    reduction: 0.30, // 30% reduction
    price: 2500,
    emoji: "🍃",
    desc: "Reduz 30% do tempo de crescimento",
  },
  deluxe: {
    id: "deluxe",
    name: "Fertilizante Deluxe",
    reduction: 0.40, // 40% reduction
    price: 12500,
    emoji: "🌳",
    desc: "Reduz 40% do tempo de crescimento",
  },
  premium: {
    id: "premium",
    name: "Fertilizante Premium",
    reduction: 0.50, // 50% reduction
    price: 62500,
    emoji: "🌲",
    desc: "Reduz 50% do tempo de crescimento",
  },
};

// Shop items separated by category
const seedsShop = [
  {
    id: "seed_trigo",
    label: "Semente de Trigo",
    type: "seed",
    crop: "trigo",
    price: crops.trigo.seedCost,
    desc: crops.trigo.description,
    emoji: "🌾",
  },
  {
    id: "seed_milho",
    label: "Semente de Milho",
    type: "seed",
    crop: "milho",
    price: crops.milho.seedCost,
    desc: crops.milho.description,
    emoji: "🌽",
  },
  {
    id: "seed_uva",
    label: "Semente de Uva",
    type: "seed",
    crop: "uva",
    price: crops.uva.seedCost,
    desc: crops.uva.description,
    emoji: "🍇",
  },
  {
    id: "seed_morango",
    label: "Semente de Morango",
    type: "seed",
    crop: "morango",
    price: crops.morango.seedCost,
    desc: crops.morango.description,
    emoji: "🍓",
  },
  {
    id: "seed_abacaxi",
    label: "Semente de Abacaxi",
    type: "seed",
    crop: "abacaxi",
    price: crops.abacaxi.seedCost,
    desc: crops.abacaxi.description,
    emoji: "🍍",
  },
  {
    id: "seed_melancia",
    label: "Semente de Melancia",
    type: "seed",
    crop: "melancia",
    price: crops.melancia.seedCost,
    desc: crops.melancia.description,
    emoji: "🍉",
  },
  {
    id: "seed_ananas",
    label: "Semente de Ananás",
    type: "seed",
    crop: "ananas",
    price: crops.ananas.seedCost,
    desc: crops.ananas.description,
    emoji: "🥭",
  },
  {
    id: "seed_ouro",
    label: "Semente de Planta de Ouro",
    type: "seed",
    crop: "ouro",
    price: crops.ouro.seedCost,
    desc: crops.ouro.description,
    emoji: "🥇",
  },
  {
    id: "seed_diamante",
    label: "Semente de Planta de Diamante",
    type: "seed",
    crop: "diamante",
    price: crops.diamante.seedCost,
    desc: crops.diamante.description,
    emoji: "💎",
  },
];

const toolsShop = [
  {
    id: "sprinkler_lvl_1",
    label: "Sprinkler Básico",
    type: "sprinkler",
    level: 1,
    price: 1000,
    desc: "Irriga automaticamente uma área 3x3.",
    emoji: "💧",
  },
  {
    id: "sprinkler_lvl_2",
    label: "Sprinkler de Cobre",
    type: "sprinkler",
    level: 2,
    price: 5000,
    desc: "Irriga automaticamente uma área 5x5.",
    emoji: "💧",
  },
  {
    id: "sprinkler_lvl_3",
    label: "Sprinkler de Aço",
    type: "sprinkler",
    level: 3,
    price: 20000,
    desc: "Irriga automaticamente uma área 7x7.",
    emoji: "💧",
  },
  {
    id: "sprinkler_lvl_4",
    label: "Sprinkler de Ouro",
    type: "sprinkler",
    level: 4,
    price: 100000,
    desc: "Irriga automaticamente uma área 9x9.",
    emoji: "💧",
  },
  {
    id: "sprinkler_lvl_5",
    label: "Sprinkler de Platina",
    type: "sprinkler",
    level: 5,
    price: 500000,
    desc: "Irriga automaticamente uma área 11x11.",
    emoji: "💧",
  },
  {
    id: "hoe_lvl_2",
    label: "Enxada de Cobre",
    type: "hoe",
    level: 2,
    price: 3000,
    desc: "Tilha uma área 2x2.",
    emoji: "🔨",
  },
  {
    id: "hoe_lvl_3",
    label: "Enxada de Aço",
    type: "hoe",
    level: 3,
    price: 10000,
    desc: "Tilha até 3x3 de uma vez.",
    emoji: "🔨",
  },
  {
    id: "hoe_lvl_4",
    label: "Enxada de Ouro",
    type: "hoe",
    level: 4,
    price: 50000,
    desc: "Tilha até 4x4 de uma vez.",
    emoji: "🔨",
  },
  {
    id: "hoe_lvl_5",
    label: "Enxada de Platina",
    type: "hoe",
    level: 5,
    price: 250000,
    desc: "Tilha até 5x5 de uma vez.",
    emoji: "🔨",
  },
  {
    id: "hoe_lvl_6",
    label: "Enxada de Diamante",
    type: "hoe",
    level: 6,
    price: 1000000,
    desc: "Tilha até 6x6 de uma vez.",
    emoji: "🔨",
  },
  {
    id: "hoe_lvl_7",
    label: "Enxada Mítica",
    type: "hoe",
    level: 7,
    price: 5000000,
    desc: "Tilha até 7x7 de uma vez.",
    emoji: "🔨",
  },
  {
    id: "harvest_lvl_2",
    label: "Foice de Cobre",
    type: "harvest",
    level: 2,
    price: 3000,
    desc: "Colhe uma área 2x2.",
    emoji: "⚔️",
  },
  {
    id: "harvest_lvl_3",
    label: "Foice de Aço",
    type: "harvest",
    level: 3,
    price: 10000,
    desc: "Colhe até 3x3 de uma vez.",
    emoji: "⚔️",
  },
  {
    id: "harvest_lvl_4",
    label: "Foice de Ouro",
    type: "harvest",
    level: 4,
    price: 50000,
    desc: "Colhe até 4x4 de uma vez.",
    emoji: "⚔️",
  },
  {
    id: "harvest_lvl_5",
    label: "Foice de Platina",
    type: "harvest",
    level: 5,
    price: 250000,
    desc: "Colhe até 5x5 de uma vez.",
    emoji: "⚔️",
  },
  {
    id: "harvest_lvl_6",
    label: "Foice de Diamante",
    type: "harvest",
    level: 6,
    price: 1000000,
    desc: "Colhe até 6x6 de uma vez.",
    emoji: "⚔️",
  },
  {
    id: "harvest_lvl_7",
    label: "Foice Mítica",
    type: "harvest",
    level: 7,
    price: 5000000,
    desc: "Colhe até 7x7 de uma vez.",
    emoji: "⚔️",
  },
  {
    id: "fertilizer_tool_lvl_2",
    label: "Aplicador de Fertilizante de Cobre",
    type: "fertilizer_tool",
    level: 2,
    price: 5000,
    desc: "Aplica fertilizante em área 2x2.",
    emoji: "🌿",
  },
  {
    id: "fertilizer_tool_lvl_3",
    label: "Aplicador de Fertilizante de Aço",
    type: "fertilizer_tool",
    level: 3,
    price: 20000,
    desc: "Aplica fertilizante em área 3x3.",
    emoji: "🌿",
  },
  {
    id: "fertilizer_tool_lvl_4",
    label: "Aplicador de Fertilizante de Ouro",
    type: "fertilizer_tool",
    level: 4,
    price: 100000,
    desc: "Aplica fertilizante em área 4x4.",
    emoji: "🌿",
  },
  {
    id: "fertilizer_tool_lvl_5",
    label: "Aplicador de Fertilizante de Platina",
    type: "fertilizer_tool",
    level: 5,
    price: 500000,
    desc: "Aplica fertilizante em área 5x5.",
    emoji: "🌿",
  },
  {
    id: "fertilizer_tool_lvl_6",
    label: "Aplicador de Fertilizante de Diamante",
    type: "fertilizer_tool",
    level: 6,
    price: 2000000,
    desc: "Aplica fertilizante em área 6x6.",
    emoji: "🌿",
  },
  {
    id: "fertilizer_tool_lvl_7",
    label: "Aplicador de Fertilizante Mítico",
    type: "fertilizer_tool",
    level: 7,
    price: 10000000,
    desc: "Aplica fertilizante em área 7x7.",
    emoji: "🌿",
  },
];

const blocksShop = [
  {
    id: "chest",
    label: "Chest",
    type: "chest",
    price: 150,
    desc: "Armazena itens.",
    emoji: "📦",
  },
];

const fertilizerShop = [
  {
    id: "fertilizer_basic",
    label: "Fertilizante Básico",
    type: "fertilizer",
    fertilizerType: "basic",
    price: fertilizers.basic.price,
    desc: fertilizers.basic.desc,
    emoji: fertilizers.basic.emoji,
  },
  {
    id: "fertilizer_improved",
    label: "Fertilizante Melhorado",
    type: "fertilizer",
    fertilizerType: "improved",
    price: fertilizers.improved.price,
    desc: fertilizers.improved.desc,
    emoji: fertilizers.improved.emoji,
  },
  {
    id: "fertilizer_quality",
    label: "Fertilizante de Qualidade",
    type: "fertilizer",
    fertilizerType: "quality",
    price: fertilizers.quality.price,
    desc: fertilizers.quality.desc,
    emoji: fertilizers.quality.emoji,
  },
  {
    id: "fertilizer_deluxe",
    label: "Fertilizante Deluxe",
    type: "fertilizer",
    fertilizerType: "deluxe",
    price: fertilizers.deluxe.price,
    desc: fertilizers.deluxe.desc,
    emoji: fertilizers.deluxe.emoji,
  },
  {
    id: "fertilizer_premium",
    label: "Fertilizante Premium",
    type: "fertilizer",
    fertilizerType: "premium",
    price: fertilizers.premium.price,
    desc: fertilizers.premium.desc,
    emoji: fertilizers.premium.emoji,
  },
];

// Game State
const state = {
  day: 1,
  money: 350,
  hoeLevel: 1,
  harvestLevel: 1,
  fertilizerToolLevel: 1,
  inventory: Array(INVENTORY_SIZE).fill(null),
  hotbarSelection: 0,
  farmland: [],
  chests: [],
  log: ["Bem-vindo! Use WASD para mover, E para inventário e Espaço para interagir."],
  player: {
    x: TILE_SIZE * 5,
    y: TILE_SIZE * 5,
    facing: "down",
  },
  keys: {},
  camera: {
    x: 0,
    y: 0,
  },
  npcs: [
    {
      x: TILE_SIZE * 15,
      y: TILE_SIZE * 3,
      type: "seed_shop",
      name: "Vendedor de Sementes",
      emoji: "🌱",
    },
    {
      x: TILE_SIZE * 20,
      y: TILE_SIZE * 3,
      type: "tool_shop",
      name: "Ferreiro",
      emoji: "🔧",
    },
    {
      x: TILE_SIZE * 25,
      y: TILE_SIZE * 3,
      type: "block_shop",
      name: "Carpinteiro",
      emoji: "🪵",
    },
  ],
  selectedInventorySlot: null,
  draggedItem: null,
  draggedFromSlot: null,
  draggedFromChest: false,
  openModal: null, // "inventory", "shop", "chest", "fertilizer_select", "save_slots"
  openChest: null,
  currentShopType: null, // "seed_shop", "tool_shop", "block_shop"
  selectedFertilizerType: null, // Selected fertilizer type for application
  fertilizerTargetTile: null, // Tile where fertilizer will be applied
  currentSaveSlot: 1, // Current save slot (1-3)
  mouseWorldX: -1, // Mouse position in world coordinates (-1 means not on canvas)
  mouseWorldY: -1, // Mouse position in world coordinates (-1 means not on canvas)
};

// Canvas Setup
const canvas = document.getElementById("game-canvas");
if (!canvas) {
  console.error("Canvas not found!");
}
const ctx = canvas.getContext("2d");
if (!ctx) {
  console.error("Could not get 2d context!");
}

function resizeCanvas() {
  const oldWidth = canvas.width;
  const oldHeight = canvas.height;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  // Recalculate camera position after resize
  if (oldWidth > 0 && oldHeight > 0) {
    const maxCameraX = GRID_SIZE * TILE_SIZE - canvas.width;
    const maxCameraY = GRID_SIZE * TILE_SIZE - canvas.height;
    state.camera.x = Math.max(0, Math.min(maxCameraX, state.camera.x));
    state.camera.y = Math.max(0, Math.min(maxCameraY, state.camera.y));
  } else {
    // First time initialization
    state.camera.x = state.player.x - canvas.width / 2 + PLAYER_SIZE / 2;
    state.camera.y = state.player.y - canvas.height / 2 + PLAYER_SIZE / 2;
    const maxCameraX = GRID_SIZE * TILE_SIZE - canvas.width;
    const maxCameraY = GRID_SIZE * TILE_SIZE - canvas.height;
    state.camera.x = Math.max(0, Math.min(maxCameraX, state.camera.x));
    state.camera.y = Math.max(0, Math.min(maxCameraY, state.camera.y));
  }
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Initialize Farm
function initFarm() {
  state.farmland = [];
  for (let row = 0; row < GRID_SIZE; row++) {
    for (let col = 0; col < GRID_SIZE; col++) {
      // Add trees randomly (but not too many, and not in starting area)
      const hasTree = Math.random() < 0.12 && 
                      row > 3 && row < GRID_SIZE - 4 && 
                      col > 3 && col < GRID_SIZE - 4 &&
                      !(row >= 4 && row <= 6 && col >= 4 && col <= 6); // Keep starting area clear
      
      state.farmland.push({
        row,
        col,
        tilled: false,
        watered: false,
        crop: null,
        sprinkler: 0, // 0 = no sprinkler, 1-5 = sprinkler levels
        fertilizer: null, // null = no fertilizer, otherwise fertilizer id
        chest: null,
        tree: hasTree,
      });
    }
  }
  
  // Add initial items to inventory
  addItemToInventory({ type: "hoe", level: 1, emoji: "🔨", name: "Enxada Básica" });
  addItemToInventory({ type: "water", emoji: "💧", name: "Regador" });
  addItemToInventory({ type: "harvest", level: 1, emoji: "⚔️", name: "Foice Básica" });
  addItemToInventory({ type: "fertilizer_tool", level: 1, emoji: "🌿", name: "Aplicador de Fertilizante Básico" });
  addItemToInventory({ type: "axe", emoji: "🪓", name: "Machado" });
  addItemToInventory({ type: "seed", crop: "trigo", emoji: "🌾", name: "Semente de Trigo" }, 3);
}

// Inventory System
function addItemToInventory(item, count = 1) {
  // Try to stack with existing items
  if (item.type === "seed" || item.type === "sprinkler" || item.type === "chest" || item.type === "fertilizer") {
    for (let i = 0; i < state.inventory.length; i++) {
      if (state.inventory[i] && 
          state.inventory[i].type === item.type &&
          (item.type === "seed" ? state.inventory[i].crop === item.crop :
           item.type === "fertilizer" ? state.inventory[i].fertilizerType === item.fertilizerType :
           true)) {
        state.inventory[i].count += count;
        return true;
      }
    }
  }
  
  // Find empty slot
  for (let i = 0; i < state.inventory.length; i++) {
    if (state.inventory[i] === null) {
      state.inventory[i] = { ...item, count };
      return true;
    }
  }
  return false; // Inventory full
}

function removeItemFromInventory(slotIndex, count = 1) {
  if (state.inventory[slotIndex] === null) return false;
  state.inventory[slotIndex].count -= count;
  if (state.inventory[slotIndex].count <= 0) {
    state.inventory[slotIndex] = null;
  }
  return true;
}

function getSelectedItem() {
  const slotIndex = state.hotbarSelection;
  if (slotIndex < HOTBAR_SIZE && state.inventory[slotIndex]) {
    return state.inventory[slotIndex];
  }
  return null;
}

// Get tile at grid coordinates
function getTileAt(row, col) {
  if (row < 0 || col < 0 || row >= GRID_SIZE || col >= GRID_SIZE) return null;
  return state.farmland[row * GRID_SIZE + col];
}

// Get tile at world coordinates
function getTileAtWorld(x, y) {
  const col = Math.floor(x / TILE_SIZE);
  const row = Math.floor(y / TILE_SIZE);
  return getTileAt(row, col);
}

// Get tile player is facing
function getTileInFront() {
  const { x, y, facing } = state.player;
  let targetX = x;
  let targetY = y;

  switch (facing) {
    case "up":
      targetY -= TILE_SIZE;
      break;
    case "down":
      targetY += TILE_SIZE;
      break;
    case "left":
      targetX -= TILE_SIZE;
      break;
    case "right":
      targetX += TILE_SIZE;
      break;
  }

  return getTileAtWorld(targetX, targetY);
}

// Check if player is within range of a target tile
// For area tools, checks if player is within the tool's area of effect centered on the target tile
function isWithinRange(tile, toolLevel = 1) {
  if (!tile) return false;
  
  const playerTileX = Math.floor(state.player.x / TILE_SIZE);
  const playerTileY = Math.floor(state.player.y / TILE_SIZE);
  
  // For single-tile tools (level 1), check if adjacent or same tile
  if (toolLevel === 1) {
    const distanceX = Math.abs(playerTileX - tile.col);
    const distanceY = Math.abs(playerTileY - tile.row);
    return distanceX <= 1 && distanceY <= 1;
  }
  
  // For area tools, check if the player is within the tool's area
  // centered on the target tile (not the tile in front of player)
  const radius = toolLevel - 1;
  const { row: centerRow, col: centerCol } = tile;
  
  // Check if player is within the tool's area centered on the target tile
  const playerInArea = Math.abs(playerTileY - centerRow) <= radius && 
                       Math.abs(playerTileX - centerCol) <= radius;
  
  return playerInArea;
}

// Player Movement
function updatePlayer() {
  const { player, keys } = state;
  let dx = 0;
  let dy = 0;

  if (keys["w"] || keys["ArrowUp"]) {
    dy = -PLAYER_SPEED;
    player.facing = "up";
  }
  if (keys["s"] || keys["ArrowDown"]) {
    dy = PLAYER_SPEED;
    player.facing = "down";
  }
  if (keys["a"] || keys["ArrowLeft"]) {
    dx = -PLAYER_SPEED;
    player.facing = "left";
  }
  if (keys["d"] || keys["ArrowRight"]) {
    dx = PLAYER_SPEED;
    player.facing = "right";
  }

  // Normalize diagonal movement
  if (dx !== 0 && dy !== 0) {
    dx *= 0.707;
    dy *= 0.707;
  }

  // Boundary check
  const newX = player.x + dx;
  const newY = player.y + dy;
  const minX = 0;
  const minY = 0;
  const maxX = GRID_SIZE * TILE_SIZE - PLAYER_SIZE;
  const maxY = GRID_SIZE * TILE_SIZE - PLAYER_SIZE;

  let finalX = Math.max(minX, Math.min(maxX, newX));
  let finalY = Math.max(minY, Math.min(maxY, newY));
  
  // Check for tree collision
  const playerTileX = Math.floor(finalX / TILE_SIZE);
  const playerTileY = Math.floor(finalY / TILE_SIZE);
  const playerTile = getTileAt(playerTileY, playerTileX);
  
  if (playerTile && playerTile.tree) {
    // Can't move into tree, keep old position
    finalX = player.x;
    finalY = player.y;
  }
  
  // Also check adjacent tiles for collision
  const checkTiles = [
    { row: Math.floor((finalY + PLAYER_SIZE / 2) / TILE_SIZE), col: Math.floor((finalX + PLAYER_SIZE / 2) / TILE_SIZE) },
    { row: Math.floor(finalY / TILE_SIZE), col: Math.floor(finalX / TILE_SIZE) },
    { row: Math.floor((finalY + PLAYER_SIZE) / TILE_SIZE), col: Math.floor(finalX / TILE_SIZE) },
    { row: Math.floor(finalY / TILE_SIZE), col: Math.floor((finalX + PLAYER_SIZE) / TILE_SIZE) },
  ];
  
  for (const check of checkTiles) {
    const tile = getTileAt(check.row, check.col);
    if (tile && tile.tree) {
      finalX = player.x;
      finalY = player.y;
      break;
    }
  }
  
  player.x = finalX;
  player.y = finalY;

  // Update camera to follow player (always centered)
  state.camera.x = player.x - canvas.width / 2 + PLAYER_SIZE / 2;
  state.camera.y = player.y - canvas.height / 2 + PLAYER_SIZE / 2;
  
  // Clamp camera to world bounds
  const maxCameraX = Math.max(0, GRID_SIZE * TILE_SIZE - canvas.width);
  const maxCameraY = Math.max(0, GRID_SIZE * TILE_SIZE - canvas.height);
  state.camera.x = Math.max(0, Math.min(maxCameraX, state.camera.x));
  state.camera.y = Math.max(0, Math.min(maxCameraY, state.camera.y));
}

// Check if player is near NPC
function isNearNPC() {
  const { player } = state;
  for (const npc of state.npcs) {
    const dx = player.x - npc.x;
    const dy = player.y - npc.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < TILE_SIZE * 1.5) {
      return npc;
    }
  }
  return null;
}

// Interaction System
function interact() {
  if (state.openModal) return; // Don't interact when modal is open
  
  const npc = isNearNPC();
  if (npc && (npc.type === "seed_shop" || npc.type === "tool_shop" || npc.type === "block_shop")) {
    openShop(npc.type);
    return;
  }

  const tile = getTileInFront();
  if (!tile) return;

  // Check for chest interaction (no item needed)
  if (tile.chest) {
    openChest(tile.chest);
    return;
  }

  const item = getSelectedItem();
  if (!item) {
    addLog("Nenhum item selecionado!");
    return;
  }

  // Get tool level for range check
  let toolLevel = 1;
  if (item.type === "hoe") {
    toolLevel = item.level || state.hoeLevel || 1;
  } else if (item.type === "harvest" || item.type === "scythe") {
    toolLevel = item.level || state.harvestLevel || 1;
  } else if (item.type === "fertilizer_tool") {
    toolLevel = item.level || state.fertilizerToolLevel || 1;
  }

  // Check if player is within range (for area tools, use toolLevel; for single-tile actions, use 1)
  const rangeLevel = (item.type === "hoe" || item.type === "harvest" || item.type === "scythe" || item.type === "fertilizer_tool") ? toolLevel : 1;
  if (!isWithinRange(tile, rangeLevel)) {
    addLog("Muito longe! Aproxime-se mais.");
    return;
  }

  if (item.type === "hoe") {
    tillArea(tile, item.level || state.hoeLevel || 1);
  } else if (item.type === "water") {
    waterTile(tile);
  } else if (item.type === "seed") {
    plantSeed(tile, item);
  } else if (item.type === "sprinkler") {
    placeSprinkler(tile, item);
  } else if (item.type === "chest") {
    placeChest(tile, item);
  } else if (item.type === "scythe" || item.type === "harvest") {
    harvestArea(tile, item.level || state.harvestLevel || 1);
  } else if (item.type === "axe") {
    chopTree(tile);
  } else if (item.type === "fertilizer_tool") {
    openFertilizerSelect(tile, item.level || state.fertilizerToolLevel || 1);
  } else {
    addLog(`Item ${item.type} não pode ser usado aqui.`);
  }
}

// Track mouse position for preview
canvas.addEventListener("mousemove", (e) => {
  if (state.openModal) return;
  
  const rect = canvas.getBoundingClientRect();
  state.mouseWorldX = e.clientX - rect.left + state.camera.x;
  state.mouseWorldY = e.clientY - rect.top + state.camera.y;
});

// Reset mouse position when leaving canvas (hides preview)
canvas.addEventListener("mouseleave", () => {
  state.mouseWorldX = -1;
  state.mouseWorldY = -1;
});

// Handle mouse click on canvas
canvas.addEventListener("click", (e) => {
  if (state.openModal) return;
  
  const rect = canvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left + state.camera.x;
  const mouseY = e.clientY - rect.top + state.camera.y;
  
  const tile = getTileAtWorld(mouseX, mouseY);
  if (!tile) return;

  // Check for chest interaction (no item needed)
  if (tile.chest) {
    openChest(tile.chest);
    return;
  }

  const item = getSelectedItem();
  if (!item) return;

  // Get tool level for range check
  let toolLevel = 1;
  if (item.type === "hoe") {
    toolLevel = item.level || state.hoeLevel || 1;
  } else if (item.type === "harvest" || item.type === "scythe") {
    toolLevel = item.level || state.harvestLevel || 1;
  } else if (item.type === "fertilizer_tool") {
    toolLevel = item.level || state.fertilizerToolLevel || 1;
  }

  // Check if player is within range (for area tools, use toolLevel; for single-tile actions, use 1)
  const rangeLevel = (item.type === "hoe" || item.type === "harvest" || item.type === "scythe" || item.type === "fertilizer_tool") ? toolLevel : 1;
  if (!isWithinRange(tile, rangeLevel)) {
    addLog("Muito longe! Aproxime-se mais.");
    return;
  }

  if (item.type === "hoe") {
    tillArea(tile, item.level || state.hoeLevel || 1);
  } else if (item.type === "water") {
    waterTile(tile);
  } else if (item.type === "seed") {
    plantSeed(tile, item);
  } else if (item.type === "sprinkler") {
    placeSprinkler(tile, item);
  } else if (item.type === "chest") {
    placeChest(tile, item);
  } else if (item.type === "scythe" || item.type === "harvest") {
    harvestArea(tile, item.level || state.harvestLevel || 1);
  } else if (item.type === "axe") {
    chopTree(tile);
  } else if (item.type === "fertilizer_tool") {
    openFertilizerSelect(tile, item.level || state.fertilizerToolLevel || 1);
  }
  
  renderInventory();
  renderStats();
});

// Farm Actions
function tillArea(tile, level) {
  const radius = level - 1;
  const { row, col } = tile;

  for (let r = row - radius; r <= row + radius; r++) {
    for (let c = col - radius; c <= col + radius; c++) {
      const t = getTileAt(r, c);
      if (t) {
        t.tilled = true;
      }
    }
  }
  addLog(`A enxada nivel ${level} preparou o solo!`);
}

function plantSeed(tile, item) {
  if (!tile.tilled) {
    addLog("Precisa preparar o solo antes de plantar!");
    return;
  }
  if (tile.crop) {
    addLog("Este espaço já possui uma plantação.");
    return;
  }
  if (tile.tree) {
    addLog("Precisa cortar a árvore primeiro!");
    return;
  }
  if (!item.crop) {
    addLog("Item inválido para plantar.");
    return;
  }
  
  const slotIndex = state.hotbarSelection;
  if (state.inventory[slotIndex] === null || state.inventory[slotIndex].count <= 0) {
    addLog("Sem sementes suficientes.");
    return;
  }
  
  removeItemFromInventory(slotIndex, 1);
  tile.crop = {
    type: item.crop,
    daysWatered: 0,
    ready: false,
  };
  tile.watered = false;
  addLog(`${crops[item.crop].nome} plantado! Não esqueça de regar.`);
}

function placeSprinkler(tile, item) {
  if (tile.sprinkler > 0) {
    addLog("Já existe um sprinkler aqui.");
    return;
  }
  if (tile.crop || tile.chest) {
    addLog("Não pode colocar aqui.");
    return;
  }
  
  const slotIndex = state.hotbarSelection;
  if (state.inventory[slotIndex] === null || state.inventory[slotIndex].count <= 0) {
    addLog("Você não possui sprinklers.");
    return;
  }
  
  const level = item.level || 1;
  removeItemFromInventory(slotIndex, 1);
  tile.sprinkler = level;
  addLog(`Sprinkler nível ${level} colocado! Esta área será irrigada automaticamente.`);
}

function placeChest(tile, item) {
  if (tile.chest) {
    addLog("Já existe um chest aqui.");
    return;
  }
  if (tile.crop || tile.sprinkler > 0 || tile.tilled) {
    addLog("Não pode colocar aqui.");
    return;
  }
  
  const slotIndex = state.hotbarSelection;
  if (state.inventory[slotIndex] === null || state.inventory[slotIndex].count <= 0) {
    addLog("Você não possui chests.");
    return;
  }
  
  removeItemFromInventory(slotIndex, 1);
  const chest = {
    id: Date.now(),
    items: Array(16).fill(null),
  };
  tile.chest = chest;
  state.chests.push(chest);
  addLog("Chest colocado!");
}

function waterTile(tile) {
  if (!tile.tilled) {
    addLog("Tílhe primeiro para manter a água.");
    return;
  }
  tile.watered = true;
  addLog("Regou o solo.");
}

function harvestCrop(tile, level = null) {
  if (!tile.crop) {
    return false;
  }
  if (!tile.crop.ready) {
    return false;
  }
  const cropData = crops[tile.crop.type];
  const harvestLevel = level || state.harvestLevel;
  const qualityBonus = 1 + (harvestLevel - 1) * 0.15;
  const payout = Math.round(cropData.sellPrice * qualityBonus);
  state.money += payout;
  tile.crop = null;
  tile.fertilizer = null; // Remove fertilizer when crop is harvested
  tile.tilled = false; // Transform into soil tile instead of keeping it hoed
  tile.watered = false;
  return true;
}

function harvestArea(tile, level) {
  const radius = level - 1;
  const { row, col } = tile;
  let harvested = 0;
  const moneyBefore = state.money;

  for (let r = row - radius; r <= row + radius; r++) {
    for (let c = col - radius; c <= col + radius; c++) {
      const t = getTileAt(r, c);
      if (t && isWithinRange(t, level)) {
        if (harvestCrop(t, level)) {
          harvested++;
        }
      }
    }
  }

  const totalPayout = state.money - moneyBefore;

  if (harvested > 0) {
    addLog(`Colheu ${harvested} plantação(ões) e recebeu ${formatNumber(totalPayout)} gold!`);
    renderStats();
  } else {
    addLog("Não há nada para colher aqui.");
  }
}

function chopTree(tile) {
  if (!tile.tree) {
    addLog("Não há árvore aqui para cortar.");
    return;
  }
  tile.tree = false;
  tile.tilled = false; // Transform into soil tile
  tile.watered = false;
  tile.crop = null;
  // Give some wood/money for chopping
  state.money += 10;
  addLog("Árvore cortada! O solo está pronto para plantar.");
  renderStats();
  // Force re-render to show tree removal
  render();
}

// Rendering
function render() {
  if (!canvas || !ctx) {
    console.error("Canvas or context not available!");
    return;
  }
  
  // Clear canvas with visible background
  ctx.fillStyle = "#1a3a2e";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Apply camera transform first
  ctx.save();
  ctx.translate(-state.camera.x, -state.camera.y);

  // Draw grid background (entire world)
  ctx.fillStyle = "#2d5016";
  ctx.fillRect(0, 0, GRID_SIZE * TILE_SIZE, GRID_SIZE * TILE_SIZE);

  // Draw tiles
  state.farmland.forEach((tile) => {
    const x = tile.col * TILE_SIZE;
    const y = tile.row * TILE_SIZE;

    // Base tile color
    if (tile.tilled) {
      ctx.fillStyle = tile.watered ? "#5a7c3a" : "#8b6f47";
    } else {
      ctx.fillStyle = "#3d2817";
    }
    ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);

    // Draw tree
    if (tile.tree) {
      ctx.fillStyle = "#2d5016";
      ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
      // Tree trunk
      ctx.fillStyle = "#654321";
      ctx.fillRect(x + TILE_SIZE / 2 - 4, y + TILE_SIZE - 12, 8, 12);
      // Tree leaves
      ctx.fillStyle = "#228B22";
      ctx.beginPath();
      ctx.arc(x + TILE_SIZE / 2, y + TILE_SIZE / 2, TILE_SIZE / 2 - 4, 0, Math.PI * 2);
      ctx.fill();
    }

    // Draw tree
    if (tile.tree) {
      // Tree trunk
      ctx.fillStyle = "#654321";
      ctx.fillRect(x + TILE_SIZE / 2 - 3, y + TILE_SIZE - 10, 6, 10);
      // Tree leaves
      ctx.fillStyle = "#228B22";
      ctx.beginPath();
      ctx.arc(x + TILE_SIZE / 2, y + TILE_SIZE / 2, TILE_SIZE / 2 - 2, 0, Math.PI * 2);
      ctx.fill();
    }

    // Tile border
    ctx.strokeStyle = "rgba(0, 0, 0, 0.3)";
    ctx.lineWidth = 1;
    ctx.strokeRect(x, y, TILE_SIZE, TILE_SIZE);

    // Draw crop
    if (tile.crop) {
      const crop = crops[tile.crop.type];
      // Calculate effective grow days considering fertilizer
      let effectiveGrowDays = crop.growDays;
      if (tile.fertilizer) {
        const fertilizer = fertilizers[tile.fertilizer];
        if (fertilizer) {
          effectiveGrowDays = Math.ceil(effectiveGrowDays * (1 - fertilizer.reduction));
        }
      }
      const progress = tile.crop.daysWatered / effectiveGrowDays;
      
      if (tile.crop.ready) {
        ctx.fillStyle = crop.color;
        ctx.fillRect(x + 8, y + 8, TILE_SIZE - 16, TILE_SIZE - 16);
        ctx.fillStyle = "#fff";
        ctx.font = "20px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(crop.emoji, x + TILE_SIZE / 2, y + TILE_SIZE / 2);
      } else {
        const size = 8 + progress * 16;
        ctx.fillStyle = crop.color;
        ctx.fillRect(
          x + (TILE_SIZE - size) / 2,
          y + (TILE_SIZE - size) / 2,
          size,
          size
        );
      }
    }

    // Draw sprinkler
    if (tile.sprinkler > 0) {
      // Different colors for different levels
      const colors = {
        1: { fill: "#38bdf8", stroke: "#0ea5e9" },
        2: { fill: "#f59e0b", stroke: "#d97706" },
        3: { fill: "#6366f1", stroke: "#4f46e5" },
        4: { fill: "#fbbf24", stroke: "#f59e0b" },
        5: { fill: "#e5e7eb", stroke: "#9ca3af" },
      };
      const color = colors[tile.sprinkler] || colors[1];
      ctx.fillStyle = color.fill;
      ctx.beginPath();
      ctx.arc(x + TILE_SIZE / 2, y + TILE_SIZE / 2, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = color.stroke;
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    // Draw fertilizer indicator
    if (tile.fertilizer && tile.tilled) {
      const fertilizer = fertilizers[tile.fertilizer];
      if (fertilizer) {
        // Small green indicator in corner
        ctx.fillStyle = fertilizer.emoji === "🌱" ? "#22c55e" : 
                       fertilizer.emoji === "🌿" ? "#16a34a" :
                       fertilizer.emoji === "🍃" ? "#15803d" :
                       fertilizer.emoji === "🌳" ? "#166534" : "#14532d";
        ctx.fillRect(x + TILE_SIZE - 14, y + 2, 12, 12);
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 1;
        ctx.strokeRect(x + TILE_SIZE - 14, y + 2, 12, 12);
      }
    }

    // Draw chest
    if (tile.chest) {
      ctx.fillStyle = "#8b4513";
      ctx.fillRect(x + 8, y + 8, TILE_SIZE - 16, TILE_SIZE - 16);
      ctx.strokeStyle = "#654321";
      ctx.lineWidth = 2;
      ctx.strokeRect(x + 8, y + 8, TILE_SIZE - 16, TILE_SIZE - 16);
      ctx.fillStyle = "#fff";
      ctx.font = "24px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("📦", x + TILE_SIZE / 2, y + TILE_SIZE / 2);
    }
  });

  // Draw NPCs
  state.npcs.forEach((npc) => {
    const npcX = npc.x;
    const npcY = npc.y;
    
    // Different colors for different shop types
    let npcColor = "#8b4513";
    let borderColor = "#654321";
    
    if (npc.type === "seed_shop") {
      npcColor = "#90EE90"; // Light green
      borderColor = "#228B22"; // Forest green
    } else if (npc.type === "tool_shop") {
      npcColor = "#CD853F"; // Peru (brown/orange)
      borderColor = "#8B4513"; // Saddle brown
    } else if (npc.type === "block_shop") {
      npcColor = "#DEB887"; // Burlywood
      borderColor = "#A0522D"; // Sienna
    }
    
    ctx.fillStyle = npcColor;
    ctx.fillRect(npcX, npcY, PLAYER_SIZE, PLAYER_SIZE);
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = 2;
    ctx.strokeRect(npcX, npcY, PLAYER_SIZE, PLAYER_SIZE);
    ctx.fillStyle = "#fff";
    ctx.font = "20px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(npc.emoji || "👤", npcX + PLAYER_SIZE / 2, npcY + PLAYER_SIZE / 2);
  });

  // Draw player
  const playerX = state.player.x;
  const playerY = state.player.y;
  
  // Player shadow
  ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
  ctx.fillRect(playerX + 2, playerY + PLAYER_SIZE - 4, PLAYER_SIZE, 4);
  
  // Player body with direction-based appearance
  ctx.fillStyle = "#4a90e2";
  ctx.fillRect(playerX, playerY, PLAYER_SIZE, PLAYER_SIZE);
  
  // Player border
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 3;
  ctx.strokeRect(playerX, playerY, PLAYER_SIZE, PLAYER_SIZE);
  
  // Draw player direction indicator (arrow/triangle pointing in facing direction)
  ctx.fillStyle = "#ffeb3b";
  ctx.beginPath();
  const centerX = playerX + PLAYER_SIZE / 2;
  const centerY = playerY + PLAYER_SIZE / 2;
  const arrowSize = 8;
  
  switch (state.player.facing) {
    case "up":
      ctx.moveTo(centerX, playerY + 6);
      ctx.lineTo(centerX - arrowSize, playerY + 6 + arrowSize);
      ctx.lineTo(centerX + arrowSize, playerY + 6 + arrowSize);
      break;
    case "down":
      ctx.moveTo(centerX, playerY + PLAYER_SIZE - 6);
      ctx.lineTo(centerX - arrowSize, playerY + PLAYER_SIZE - 6 - arrowSize);
      ctx.lineTo(centerX + arrowSize, playerY + PLAYER_SIZE - 6 - arrowSize);
      break;
    case "left":
      ctx.moveTo(playerX + 6, centerY);
      ctx.lineTo(playerX + 6 + arrowSize, centerY - arrowSize);
      ctx.lineTo(playerX + 6 + arrowSize, centerY + arrowSize);
      break;
    case "right":
      ctx.moveTo(playerX + PLAYER_SIZE - 6, centerY);
      ctx.lineTo(playerX + PLAYER_SIZE - 6 - arrowSize, centerY - arrowSize);
      ctx.lineTo(playerX + PLAYER_SIZE - 6 - arrowSize, centerY + arrowSize);
      break;
  }
  ctx.closePath();
  ctx.fill();
  
  // Draw tool preview area (follows mouse)
  if (!state.openModal) {
    const selectedItem = getSelectedItem();
    if (selectedItem) {
      let previewLevel = 1;
      let previewType = null;
      
      if (selectedItem.type === "hoe") {
        previewLevel = selectedItem.level || state.hoeLevel || 1;
        previewType = "hoe";
      } else if (selectedItem.type === "harvest" || selectedItem.type === "scythe") {
        previewLevel = selectedItem.level || state.harvestLevel || 1;
        previewType = "harvest";
      } else if (selectedItem.type === "fertilizer_tool") {
        previewLevel = selectedItem.level || state.fertilizerToolLevel || 1;
        previewType = "fertilizer";
      } else if (selectedItem.type === "seed") {
        previewType = "seed";
      } else if (selectedItem.type === "water") {
        previewType = "water";
      }
      
      if (previewType && state.mouseWorldX >= 0 && state.mouseWorldY >= 0) {
        // Get tile under mouse cursor
        const mouseTile = getTileAtWorld(state.mouseWorldX, state.mouseWorldY);
        if (mouseTile) {
          // Check if mouse tile is within range
          const isInRange = isWithinRange(mouseTile, previewLevel);
          
          if (isInRange) {
            const radius = previewLevel - 1;
            const { row, col } = mouseTile;
            
            // Draw preview area centered on mouse tile
            for (let r = row - radius; r <= row + radius; r++) {
              for (let c = col - radius; c <= col + radius; c++) {
                const t = getTileAt(r, c);
                if (t) {
                  // Check if this tile is within range
                  const tileInRange = isWithinRange(t, previewLevel);
                  if (tileInRange) {
                    const tileX = c * TILE_SIZE;
                    const tileY = r * TILE_SIZE;
                    
                    let previewColor = "rgba(255, 255, 0, 0.3)";
                    if (previewType === "seed") {
                      previewColor = "rgba(34, 197, 94, 0.3)"; // Green for planting
                    } else if (previewType === "harvest") {
                      previewColor = "rgba(251, 191, 36, 0.3)"; // Orange/yellow for harvest
                    } else if (previewType === "fertilizer") {
                      previewColor = "rgba(34, 197, 94, 0.3)"; // Green for fertilizer
                    } else if (previewType === "water") {
                      previewColor = "rgba(59, 130, 246, 0.3)"; // Blue for water
                    }
                    
                    ctx.fillStyle = previewColor;
                    ctx.fillRect(tileX, tileY, TILE_SIZE, TILE_SIZE);
                    ctx.strokeStyle = previewColor.replace("0.3", "0.8");
                    ctx.lineWidth = 2;
                    ctx.strokeRect(tileX, tileY, TILE_SIZE, TILE_SIZE);
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  ctx.restore();
}

// UI Rendering
// Tooltip functions
function getItemDescription(item) {
  if (!item) return "";
  
  let desc = "";
  const name = item.name || "Item Desconhecido";
  
  switch (item.type) {
    case "hoe":
      const hoeLevel = item.level || state.hoeLevel || 1;
      const hoeArea = hoeLevel === 1 ? "1x1" : `${hoeLevel}x${hoeLevel}`;
      desc = `Enxada nível ${hoeLevel} (${hoeLabels[hoeLevel - 1] || "???"})\nTilha uma área ${hoeArea}.`;
      break;
    case "harvest":
      const harvestLevel = item.level || state.harvestLevel || 1;
      const harvestArea = harvestLevel === 1 ? "1x1" : `${harvestLevel}x${harvestLevel}`;
      desc = `Foice nível ${harvestLevel} (${harvestLabels[harvestLevel - 1] || "???"})\nColhe uma área ${harvestArea}.`;
      break;
    case "fertilizer_tool":
      const fertLevel = item.level || state.fertilizerToolLevel || 1;
      const fertArea = fertLevel === 1 ? "1x1" : `${fertLevel}x${fertLevel}`;
      desc = `Aplicador de Fertilizante nível ${fertLevel} (${fertilizerToolLabels[fertLevel - 1] || "???"})\nAplica fertilizante em área ${fertArea}.`;
      break;
    case "water":
      desc = "Regador\nRega o solo preparado.";
      break;
    case "axe":
      desc = "Machado\nCorta árvores.";
      break;
    case "seed":
      if (item.crop && crops[item.crop]) {
        const crop = crops[item.crop];
        desc = `${crop.nome}\n${crop.description}\nCresce em ${crop.growDays} dias.\nVende por ${formatNumber(crop.sellPrice)} gold.`;
      } else {
        desc = "Semente\nPlanta no solo preparado.";
      }
      break;
    case "sprinkler":
      const sprinklerLevel = item.level || 1;
      const sprinklerRadius = sprinklerLevel;
      const sprinklerSize = (sprinklerRadius * 2 + 1);
      desc = `Sprinkler nível ${sprinklerLevel} (${sprinklerLabels[sprinklerLevel - 1] || "???"})\nIrriga automaticamente uma área ${sprinklerSize}x${sprinklerSize}.`;
      break;
    case "chest":
      desc = "Chest\nArmazena até 16 itens.\nColoque no chão para usar.";
      break;
    case "fertilizer":
      if (item.fertilizerType && fertilizers[item.fertilizerType]) {
        const fertilizer = fertilizers[item.fertilizerType];
        desc = `${fertilizer.name}\n${fertilizer.desc}`;
      } else {
        desc = "Fertilizante\nReduz o tempo de crescimento das plantas.";
      }
      break;
    default:
      desc = name;
  }
  
  if (item.count > 1) {
    desc += `\nQuantidade: ${item.count}`;
  }
  
  return { name, desc };
}

function showTooltip(event, item) {
  if (!item) return;
  
  const tooltip = document.getElementById("item-tooltip");
  const tooltipName = document.getElementById("tooltip-name");
  const tooltipDesc = document.getElementById("tooltip-desc");
  
  const { name, desc } = getItemDescription(item);
  
  tooltipName.textContent = name;
  tooltipDesc.textContent = desc;
  tooltip.style.display = "block";
  
  updateTooltipPosition(event);
}

function hideTooltip() {
  const tooltip = document.getElementById("item-tooltip");
  tooltip.style.display = "none";
}

function updateTooltipPosition(event) {
  const tooltip = document.getElementById("item-tooltip");
  const x = event.clientX + 10;
  const y = event.clientY + 10;
  
  tooltip.style.left = `${x}px`;
  tooltip.style.top = `${y}px`;
  
  // Adjust if tooltip goes off screen
  const rect = tooltip.getBoundingClientRect();
  if (rect.right > window.innerWidth) {
    tooltip.style.left = `${event.clientX - rect.width - 10}px`;
  }
  if (rect.bottom > window.innerHeight) {
    tooltip.style.top = `${event.clientY - rect.height - 10}px`;
  }
}

function renderStats() {
  document.getElementById("stat-day").textContent = `Dia ${state.day}`;
  document.getElementById("stat-money").textContent = `Dinheiro: ${formatNumber(state.money)} gold`;
  document.getElementById(
    "stat-hoe"
  ).textContent = `Enxada: ${hoeLabels[state.hoeLevel - 1] ?? "???"}`;
}

function renderHotbar() {
  const hotbar = document.getElementById("hotbar");
  hotbar.innerHTML = "";
  
  for (let i = 0; i < HOTBAR_SIZE; i++) {
    const slot = document.createElement("div");
    slot.className = `hotbar-slot ${state.hotbarSelection === i ? "active" : ""}`;
    
    const number = document.createElement("div");
    number.className = "slot-number";
    number.textContent = i + 1;
    slot.appendChild(number);
    
    if (state.inventory[i]) {
      const content = document.createElement("div");
      content.className = "slot-content";
      content.textContent = state.inventory[i].emoji || "?";
      slot.appendChild(content);
      
      if (state.inventory[i].count > 1) {
        const count = document.createElement("div");
        count.className = "slot-count";
        count.textContent = state.inventory[i].count;
        slot.appendChild(count);
      }
    }
    
    // Click handler for the entire slot
    slot.onclick = () => {
      state.hotbarSelection = i;
      renderHotbar();
    };
    
    // Also allow clicking on the number to select
    number.onclick = (e) => {
      e.stopPropagation();
      state.hotbarSelection = i;
      renderHotbar();
    };
    
    // Tooltip handlers
    if (state.inventory[i]) {
      slot.addEventListener("mouseenter", (e) => {
        showTooltip(e, state.inventory[i]);
      });
      slot.addEventListener("mousemove", (e) => {
        updateTooltipPosition(e);
      });
      slot.addEventListener("mouseleave", () => {
        hideTooltip();
      });
    }
    
    hotbar.appendChild(slot);
  }
}

function renderInventory() {
  const grid = document.getElementById("inventory-grid");
  if (!grid) return;
  grid.innerHTML = "";
  
  for (let i = 0; i < INVENTORY_SIZE; i++) {
    const slot = document.createElement("div");
    slot.className = `inventory-slot ${state.draggedFromSlot === i ? "dragging" : ""}`;
    slot.dataset.slotIndex = i;
    
    if (state.inventory[i]) {
      const content = document.createElement("div");
      content.className = "slot-content";
      content.textContent = state.inventory[i].emoji || "?";
      slot.appendChild(content);
      
      if (state.inventory[i].count > 1) {
        const count = document.createElement("div");
        count.className = "slot-count";
        count.textContent = state.inventory[i].count;
        slot.appendChild(count);
      }
    }
    
    // Drag and drop handlers
    slot.addEventListener("mousedown", (e) => {
      if (state.inventory[i]) {
        state.draggedItem = state.inventory[i];
        state.draggedFromSlot = i;
        slot.style.opacity = "0.5";
        e.preventDefault();
      }
    });
    
    slot.addEventListener("mouseenter", (e) => {
      if (state.draggedItem && state.draggedFromSlot !== i) {
        slot.classList.add("drop-target");
      } else if (state.inventory[i] && !state.draggedItem) {
        showTooltip(e, state.inventory[i]);
      }
    });
    
    slot.addEventListener("mousemove", (e) => {
      if (state.inventory[i] && !state.draggedItem) {
        updateTooltipPosition(e);
      }
    });
    
    slot.addEventListener("mouseleave", () => {
      slot.classList.remove("drop-target");
      hideTooltip();
    });
    
    slot.addEventListener("mouseup", () => {
      if (state.draggedItem) {
        if (state.draggedFromChest) {
          // Moving from chest to inventory
          if (state.inventory[i] === null) {
            state.inventory[i] = state.draggedItem;
            const chestIndex = state.draggedFromSlot;
            state.openChest.items[chestIndex] = null;
          } else {
            // Swap items
            const temp = state.inventory[i];
            state.inventory[i] = state.draggedItem;
            const chestIndex = state.draggedFromSlot;
            state.openChest.items[chestIndex] = temp;
          }
          state.draggedFromChest = false;
          renderChest();
        } else if (state.draggedFromSlot !== null) {
          // Moving within inventory
          if (state.draggedFromSlot !== i) {
            // Swap items
            const temp = state.inventory[i];
            state.inventory[i] = state.draggedItem;
            state.inventory[state.draggedFromSlot] = temp;
          }
        }
        state.draggedItem = null;
        state.draggedFromSlot = null;
        renderInventory();
        renderHotbar();
      }
    });
    
    grid.appendChild(slot);
  }
  
  // Clear drag state on mouse up anywhere
  document.addEventListener("mouseup", () => {
    if (state.draggedItem) {
      state.draggedItem = null;
      state.draggedFromSlot = null;
      renderInventory();
    }
  }, { once: true });
  
  renderHotbar();
}

function openInventory() {
  state.openModal = "inventory";
  document.getElementById("inventory-modal").style.display = "flex";
  renderInventory();
}

function closeInventory() {
  state.openModal = null;
  state.selectedInventorySlot = null;
  document.getElementById("inventory-modal").style.display = "none";
}

function openShop(shopType) {
  state.openModal = "shop";
  state.currentShopType = shopType;
  document.getElementById("shop-modal").style.display = "flex";
  renderShop();
}

function closeShop() {
  state.openModal = null;
  state.currentShopType = null;
  document.getElementById("shop-modal").style.display = "none";
}

function openChest(chest) {
  state.openModal = "chest";
  state.openChest = chest;
  document.getElementById("chest-modal").style.display = "flex";
  // Also open inventory when opening chest
  document.getElementById("inventory-modal").style.display = "flex";
  renderChest();
  renderInventory();
}

function closeChest() {
  state.openModal = null;
  state.openChest = null;
  state.draggedItem = null;
  state.draggedFromSlot = null;
  document.getElementById("chest-modal").style.display = "none";
  document.getElementById("inventory-modal").style.display = "none";
}

function renderShop() {
  const shop = document.getElementById("shop-items");
  const shopTitle = document.querySelector("#shop-modal h2");
  shop.innerHTML = "";
  
  // Get the correct shop items based on type
  let items = [];
  let title = "Loja";
  
  if (state.currentShopType === "seed_shop") {
    items = [...seedsShop, ...fertilizerShop];
    title = "Loja de Sementes";
  } else if (state.currentShopType === "tool_shop") {
    items = toolsShop;
    title = "Ferreiro";
  } else if (state.currentShopType === "block_shop") {
    items = blocksShop;
    title = "Carpinteiro";
  }
  
  if (shopTitle) {
    shopTitle.textContent = title;
  }
  
  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "shop-card";
    card.innerHTML = `
      <div class="shop-card-info">
        <strong>${item.emoji} ${item.label} - ${formatNumber(item.price)} gold</strong>
        <small>${item.desc}</small>
      </div>
    `;
    const btn = document.createElement("button");
    btn.textContent = "Comprar";
    btn.disabled = !canPurchase(item);
    btn.onclick = () => purchase(item);
    card.appendChild(btn);
    
    // Tooltip for shop items
    card.addEventListener("mouseenter", (e) => {
      const shopItem = {
        name: item.label,
        type: item.type,
        level: item.level,
        crop: item.crop,
        fertilizerType: item.fertilizerType,
        emoji: item.emoji,
      };
      showTooltip(e, shopItem);
    });
    card.addEventListener("mousemove", (e) => {
      updateTooltipPosition(e);
    });
    card.addEventListener("mouseleave", () => {
      hideTooltip();
    });
    
    shop.appendChild(card);
  });
}

function renderChest() {
  const grid = document.getElementById("chest-grid");
  const invGrid = document.getElementById("chest-inventory-grid");
  if (!grid || !state.openChest) return;
  grid.innerHTML = "";
  
  // Also render inventory in chest modal
  if (invGrid) {
    invGrid.innerHTML = "";
    for (let i = 0; i < INVENTORY_SIZE; i++) {
      const slot = document.createElement("div");
      slot.className = `inventory-slot ${state.draggedFromSlot === i && !state.draggedFromChest ? "dragging" : ""}`;
      slot.dataset.slotIndex = i;
      
      if (state.inventory[i]) {
        const content = document.createElement("div");
        content.className = "slot-content";
        content.textContent = state.inventory[i].emoji || "?";
        slot.appendChild(content);
        
        if (state.inventory[i].count > 1) {
          const count = document.createElement("div");
          count.className = "slot-count";
          count.textContent = state.inventory[i].count;
          slot.appendChild(count);
        }
      }
      
      // Drag handlers for inventory in chest modal
      slot.addEventListener("mousedown", (e) => {
        if (state.inventory[i]) {
          state.draggedItem = state.inventory[i];
          state.draggedFromSlot = i;
          state.draggedFromChest = false;
          slot.style.opacity = "0.5";
          e.preventDefault();
        }
      });
      
      slot.addEventListener("mouseenter", (e) => {
        if (state.draggedItem && (state.draggedFromChest || state.draggedFromSlot !== i)) {
          slot.classList.add("drop-target");
        } else if (state.inventory[i] && !state.draggedItem) {
          showTooltip(e, state.inventory[i]);
        }
      });
      
      slot.addEventListener("mousemove", (e) => {
        if (state.inventory[i] && !state.draggedItem) {
          updateTooltipPosition(e);
        }
      });
      
      slot.addEventListener("mouseleave", () => {
        slot.classList.remove("drop-target");
        hideTooltip();
      });
      
      slot.addEventListener("mouseup", () => {
        if (state.draggedItem) {
          if (state.draggedFromChest) {
            // Moving from chest to inventory
            if (state.inventory[i] === null) {
              state.inventory[i] = state.draggedItem;
              const chestIndex = state.draggedFromSlot;
              state.openChest.items[chestIndex] = null;
            } else {
              // Swap items
              const temp = state.inventory[i];
              state.inventory[i] = state.draggedItem;
              const chestIndex = state.draggedFromSlot;
              state.openChest.items[chestIndex] = temp;
            }
            state.draggedFromChest = false;
            renderChest();
          } else if (state.draggedFromSlot !== null) {
            // Moving within inventory
            if (state.draggedFromSlot !== i) {
              const temp = state.inventory[i];
              state.inventory[i] = state.draggedItem;
              state.inventory[state.draggedFromSlot] = temp;
            }
          }
          state.draggedItem = null;
          state.draggedFromSlot = null;
          renderChest();
          renderHotbar();
        }
      });
      
      invGrid.appendChild(slot);
    }
  }
  
  for (let i = 0; i < state.openChest.items.length; i++) {
    const slot = document.createElement("div");
    slot.className = "chest-slot";
    slot.dataset.chestSlotIndex = i;
    
    if (state.openChest.items[i]) {
      const content = document.createElement("div");
      content.className = "slot-content";
      content.textContent = state.openChest.items[i].emoji || "?";
      slot.appendChild(content);
      
      if (state.openChest.items[i].count > 1) {
        const count = document.createElement("div");
        count.className = "slot-count";
        count.textContent = state.openChest.items[i].count;
        slot.appendChild(count);
      }
    }
    
    // Drag and drop from inventory to chest
    slot.addEventListener("mouseenter", (e) => {
      if (state.draggedItem && state.draggedFromSlot !== null) {
        slot.classList.add("drop-target");
      } else if (state.openChest.items[i] && !state.draggedItem) {
        showTooltip(e, state.openChest.items[i]);
      }
    });
    
    slot.addEventListener("mousemove", (e) => {
      if (state.openChest.items[i] && !state.draggedItem) {
        updateTooltipPosition(e);
      }
    });
    
    slot.addEventListener("mouseleave", () => {
      slot.classList.remove("drop-target");
      hideTooltip();
    });
    
    slot.addEventListener("mouseup", () => {
      if (state.draggedItem && state.draggedFromSlot !== null) {
        // Move item from inventory to chest
        if (state.openChest.items[i] === null) {
          state.openChest.items[i] = state.draggedItem;
          state.inventory[state.draggedFromSlot] = null;
        } else {
          // Swap items
          const temp = state.openChest.items[i];
          state.openChest.items[i] = state.draggedItem;
          state.inventory[state.draggedFromSlot] = temp;
        }
        state.draggedItem = null;
        state.draggedFromSlot = null;
        renderChest();
        renderInventory();
      }
    });
    
    // Drag from chest to inventory
    slot.addEventListener("mousedown", (e) => {
      if (state.openChest.items[i]) {
        state.draggedItem = state.openChest.items[i];
        state.draggedFromSlot = i;
        state.draggedFromChest = true;
        slot.style.opacity = "0.5";
        e.preventDefault();
      }
    });
    
    grid.appendChild(slot);
  }
  
  // Handle drag from chest to inventory slots
  document.addEventListener("mouseup", () => {
    if (state.draggedItem && state.draggedFromChest) {
      // This will be handled by inventory slot mouseup
      state.draggedFromChest = false;
    }
  }, { once: true });
}

function canPurchase(item) {
  if (state.money < item.price) return false;
  if (item.type === "hoe" && state.hoeLevel >= item.level) return false;
  if (item.type === "harvest" && state.harvestLevel >= item.level) return false;
  if (item.type === "fertilizer_tool" && state.fertilizerToolLevel >= item.level) return false;
  return true;
}

function purchase(item) {
  if (!canPurchase(item)) return;
  state.money -= item.price;
  
  if (item.type === "seed") {
    const newItem = {
      type: "seed",
      crop: item.crop,
      emoji: item.emoji,
      name: item.label,
      count: 1,
    };
    if (!addItemToInventory(newItem, 1)) {
      addLog("Inventário cheio!");
      state.money += item.price; // Refund
      return;
    }
    addLog(`Comprou ${item.label}.`);
  } else if (item.type === "sprinkler") {
    const newItem = {
      type: "sprinkler",
      level: item.level || 1,
      emoji: item.emoji,
      name: item.label,
      count: 1,
    };
    if (!addItemToInventory(newItem, 1)) {
      addLog("Inventário cheio!");
      state.money += item.price;
      return;
    }
    addLog(`Comprou ${item.label}!`);
  } else if (item.type === "chest") {
    const newItem = {
      type: "chest",
      emoji: item.emoji,
      name: item.label,
      count: 1,
    };
    if (!addItemToInventory(newItem, 1)) {
      addLog("Inventário cheio!");
      state.money += item.price;
      return;
    }
    addLog("Comprou um chest!");
  } else if (item.type === "hoe") {
    state.hoeLevel = item.level;
    // Update hoe in inventory
    for (let i = 0; i < state.inventory.length; i++) {
      if (state.inventory[i] && state.inventory[i].type === "hoe") {
        state.inventory[i].level = item.level;
        state.inventory[i].name = item.label;
        break;
      }
    }
    addLog(`Enxada melhorada para nível ${item.level}!`);
  } else if (item.type === "harvest") {
    state.harvestLevel = item.level;
    // Update harvest tool in inventory
    for (let i = 0; i < state.inventory.length; i++) {
      if (state.inventory[i] && (state.inventory[i].type === "harvest" || state.inventory[i].type === "scythe")) {
        state.inventory[i].type = "harvest";
        state.inventory[i].level = item.level;
        state.inventory[i].name = item.label;
        break;
      }
    }
    addLog(`Foice melhorada para nível ${item.level}!`);
  } else if (item.type === "fertilizer_tool") {
    state.fertilizerToolLevel = item.level;
    // Update fertilizer tool in inventory
    for (let i = 0; i < state.inventory.length; i++) {
      if (state.inventory[i] && state.inventory[i].type === "fertilizer_tool") {
        state.inventory[i].level = item.level;
        state.inventory[i].name = item.label;
        state.inventory[i].emoji = item.emoji;
        break;
      }
    }
    addLog(`Aplicador de Fertilizante melhorado para nível ${item.level}!`);
  } else if (item.type === "fertilizer") {
    const newItem = {
      type: "fertilizer",
      fertilizerType: item.fertilizerType,
      emoji: item.emoji,
      name: item.label,
      count: 1,
    };
    if (!addItemToInventory(newItem, 1)) {
      addLog("Inventário cheio!");
      state.money += item.price;
      return;
    }
    addLog(`Comprou ${item.label}!`);
  }
  
  renderInventory();
  renderStats();
  renderShop();
}

function addLog(message) {
  state.log.unshift(`Dia ${state.day}: ${message}`);
  if (state.log.length > 8) state.log.pop();
  renderLog();
}

function renderLog() {
  const logEl = document.getElementById("log");
  logEl.innerHTML = "";
  state.log.forEach((entry) => {
    const div = document.createElement("div");
    div.className = "log-entry";
    div.textContent = entry;
    logEl.appendChild(div);
  });
}

// Day Progression
function applySprinklers() {
  state.farmland.forEach((tile) => {
    if (tile.sprinkler > 0) {
      // Water area around sprinkler based on level
      // Level 1: 3x3, Level 2: 5x5, Level 3: 7x7, Level 4: 9x9, Level 5: 11x11
      const radius = tile.sprinkler; // 1 = 1 tile radius (3x3), 2 = 2 tile radius (5x5), etc.
      const { row, col } = tile;
      for (let r = row - radius; r <= row + radius; r++) {
        for (let c = col - radius; c <= col + radius; c++) {
          const t = getTileAt(r, c);
          if (t && t.tilled) {
            t.watered = true;
          }
        }
      }
    }
  });
}

function progressDay() {
  if (state.openModal) return;
  
  applySprinklers();
  state.farmland.forEach((tile) => {
    if (!tile.crop) {
      tile.watered = tile.sprinkler > 0;
      return;
    }
    if (tile.watered) {
      tile.crop.daysWatered += 1;
      // Calculate effective grow days considering fertilizer
      let effectiveGrowDays = crops[tile.crop.type].growDays;
      if (tile.fertilizer) {
        const fertilizer = fertilizers[tile.fertilizer];
        if (fertilizer) {
          effectiveGrowDays = Math.ceil(effectiveGrowDays * (1 - fertilizer.reduction));
        }
      }
      if (tile.crop.daysWatered >= effectiveGrowDays) {
        tile.crop.ready = true;
      }
      tile.watered = tile.sprinkler > 0;
    } else {
      addLog(`${crops[tile.crop.type].nome} não cresceu por falta de água.`);
    }
  });
  state.day += 1;
  addLog("Novo dia amanheceu!");
  renderStats();
}

// Input Handling
document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();
  
  // Hotbar selection - always works (even with modals open)
  const num = parseInt(key);
  if (!isNaN(num) && num >= 1 && num <= 9) {
    state.hotbarSelection = num - 1;
    renderHotbar();
    e.preventDefault();
    // Don't return here, allow other processing if modal is not open
  }
  
  if (state.openModal) {
    if (key === "e" || key === "escape") {
      if (state.openModal === "inventory") closeInventory();
      else if (state.openModal === "shop") closeShop();
      else if (state.openModal === "chest") closeChest();
      else if (state.openModal === "fertilizer_select") closeFertilizerSelect();
      else if (state.openModal === "save_slots") closeSaveSlotsModal();
      return;
    }
    // If modal is open, only process hotbar and close keys
    return;
  }
  
  // Store both lowercase and original key
  state.keys[key] = true;
  if (e.key !== key) {
    state.keys[e.key] = true;
  }

  if (key === " " || key === "spacebar") {
    e.preventDefault();
    interact();
    return;
  }
  if (key === "e") {
    e.preventDefault();
    if (state.openModal === "inventory") {
      closeInventory();
    } else {
      openInventory();
    }
    return;
  }
  if (key === "q") {
    e.preventDefault();
    progressDay();
    return;
  }
});

document.addEventListener("keyup", (e) => {
  const key = e.key.toLowerCase();
  delete state.keys[key];
  if (e.key !== key) {
    delete state.keys[e.key];
  }
});

// Close button handlers
document.getElementById("close-inventory").onclick = closeInventory;
document.getElementById("close-shop").onclick = closeShop;
document.getElementById("close-chest").onclick = closeChest;
document.getElementById("close-fertilizer").onclick = closeFertilizerSelect;
document.getElementById("close-save-slots").onclick = closeSaveSlotsModal;

// New Game function
function startNewGame() {
  if (confirm("Tem certeza que deseja começar um novo jogo? Todo o progresso será perdido!")) {
    // Clear all save slots
    for (let slot = 1; slot <= 3; slot++) {
      localStorage.removeItem(`stardewClone_save_${slot}`);
    }
    // Also clear old save format if exists
    localStorage.removeItem('stardewClone_save');
    
    // Reset state to initial values
    state.day = 1;
    state.money = 350;
    state.hoeLevel = 1;
    state.harvestLevel = 1;
    state.fertilizerToolLevel = 1;
    state.inventory = Array(INVENTORY_SIZE).fill(null);
    state.hotbarSelection = 0;
    state.farmland = [];
    state.chests = [];
    state.log = ["Bem-vindo! Use WASD para mover, E para inventário e Espaço para interagir."];
    state.player = {
      x: TILE_SIZE * 5,
      y: TILE_SIZE * 5,
      facing: "down",
    };
    state.currentSaveSlot = 1;
    state.mouseWorldX = -1;
    state.mouseWorldY = -1;
    
    // Close any open modals
    if (state.openModal) {
      if (state.openModal === "inventory") closeInventory();
      else if (state.openModal === "shop") closeShop();
      else if (state.openModal === "chest") closeChest();
      else if (state.openModal === "fertilizer_select") closeFertilizerSelect();
      else if (state.openModal === "save_slots") closeSaveSlotsModal();
    }
    
    // Initialize farm
    initFarm();
    
    // Reset camera
    state.camera.x = state.player.x - canvas.width / 2 + PLAYER_SIZE / 2;
    state.camera.y = state.player.y - canvas.height / 2 + PLAYER_SIZE / 2;
    const maxCameraX = Math.max(0, GRID_SIZE * TILE_SIZE - canvas.width);
    const maxCameraY = Math.max(0, GRID_SIZE * TILE_SIZE - canvas.height);
    state.camera.x = Math.max(0, Math.min(maxCameraX, state.camera.x));
    state.camera.y = Math.max(0, Math.min(maxCameraY, state.camera.y));
    
    // Refresh UI
    renderStats();
    renderHotbar();
    renderLog();
    renderInventory();
    
    addLog("Novo jogo iniciado!");
  }
}

// Save/Load button handlers
document.getElementById("new-game-btn").onclick = startNewGame;
document.getElementById("save-btn").onclick = () => openSaveSlotsModal("save");
document.getElementById("load-btn").onclick = () => openSaveSlotsModal("load");

// Game Loop
function gameLoop() {
  if (!state.openModal) {
    updatePlayer();
  }
  render();
  requestAnimationFrame(gameLoop);
}

// Fertilizer Functions
function applyFertilizer(tile, fertilizerType) {
  if (!tile.tilled) {
    return false;
  }
  // Only allow fertilizer if there's no crop, or if crop doesn't have fertilizer yet
  if (tile.crop && tile.fertilizer) {
    return false;
  }
  if (!tile.crop && tile.fertilizer) {
    return false;
  }
  
  // Check if player has the fertilizer in inventory
  const fertilizer = fertilizers[fertilizerType];
  if (!fertilizer) {
    return false;
  }
  
  // Find fertilizer in inventory
  let foundFertilizer = false;
  for (let i = 0; i < state.inventory.length; i++) {
    if (state.inventory[i] && 
        state.inventory[i].type === "fertilizer" && 
        state.inventory[i].fertilizerType === fertilizerType) {
      removeItemFromInventory(i, 1);
      foundFertilizer = true;
      break;
    }
  }
  
  if (!foundFertilizer) {
    return false;
  }
  
  tile.fertilizer = fertilizerType;
  return true;
}

function applyFertilizerArea(tile, fertilizerType, level) {
  const radius = level - 1;
  const { row, col } = tile;
  let applied = 0;
  
  // Check if player has enough fertilizer
  const fertilizer = fertilizers[fertilizerType];
  if (!fertilizer) {
    addLog("Tipo de fertilizante inválido.");
    return;
  }
  
  // Count how many tiles need fertilizer (must be within range of player)
  let tilesNeedingFertilizer = 0;
  for (let r = row - radius; r <= row + radius; r++) {
    for (let c = col - radius; c <= col + radius; c++) {
      const t = getTileAt(r, c);
      if (t && isWithinRange(t, level) && t.tilled && !t.fertilizer) {
        tilesNeedingFertilizer++;
      }
    }
  }
  
  if (tilesNeedingFertilizer === 0) {
    addLog("Nenhum tile válido para aplicar fertilizante nesta área.");
    return;
  }
  
  // Check if player has enough fertilizer
  let fertilizerCount = 0;
  for (let i = 0; i < state.inventory.length; i++) {
    if (state.inventory[i] && 
        state.inventory[i].type === "fertilizer" && 
        state.inventory[i].fertilizerType === fertilizerType) {
      fertilizerCount += state.inventory[i].count || 1;
    }
  }
  
  if (fertilizerCount < tilesNeedingFertilizer) {
    addLog(`Você não possui fertilizante suficiente! Precisa de ${tilesNeedingFertilizer}, tem ${fertilizerCount}.`);
    return;
  }
  
  // Apply fertilizer to all tiles in area (that are within range)
  for (let r = row - radius; r <= row + radius; r++) {
    for (let c = col - radius; c <= col + radius; c++) {
      const t = getTileAt(r, c);
      if (t && isWithinRange(t, level)) {
        if (applyFertilizer(t, fertilizerType)) {
          applied++;
        }
      }
    }
  }
  
  if (applied > 0) {
    addLog(`${fertilizer.name} aplicado em ${applied} tile(s)! Reduz ${(fertilizer.reduction * 100).toFixed(0)}% do tempo de crescimento.`);
  } else {
    addLog("Nenhum tile válido para aplicar fertilizante.");
  }
}

function openFertilizerSelect(tile, level) {
  state.openModal = "fertilizer_select";
  state.fertilizerTargetTile = tile;
  state.fertilizerToolLevel = level;
  document.getElementById("fertilizer-modal").style.display = "flex";
  renderFertilizerSelect();
}

function closeFertilizerSelect() {
  state.openModal = null;
  state.fertilizerTargetTile = null;
  document.getElementById("fertilizer-modal").style.display = "none";
}

function renderFertilizerSelect() {
  const container = document.getElementById("fertilizer-items");
  container.innerHTML = "";
  
  const level = state.fertilizerToolLevel || 1;
  const areaSize = level === 1 ? "1x1" : `${level}x${level}`;
  
  Object.values(fertilizers).forEach((fertilizer) => {
    // Check if player has this fertilizer in inventory
    const hasFertilizer = state.inventory.some(item => 
      item && item.type === "fertilizer" && item.fertilizerType === fertilizer.id
    );
    
    const card = document.createElement("div");
    card.className = "shop-card";
    card.innerHTML = `
      <div class="shop-card-info">
        <strong>${fertilizer.emoji} ${fertilizer.name}</strong>
        <small>${fertilizer.desc}</small>
        <small>Área: ${areaSize}</small>
        ${!hasFertilizer ? '<small style="color: #ef4444;">Você não possui este fertilizante</small>' : ''}
      </div>
    `;
    const btn = document.createElement("button");
    btn.textContent = hasFertilizer ? "Aplicar" : "Sem estoque";
    btn.disabled = !hasFertilizer;
    btn.onclick = () => {
      if (hasFertilizer && state.fertilizerTargetTile) {
        applyFertilizerArea(state.fertilizerTargetTile, fertilizer.id, level);
        closeFertilizerSelect();
        renderInventory();
      }
    };
    card.appendChild(btn);
    container.appendChild(card);
  });
}

// Save/Load System using localStorage with slots
function saveGame(slot = null) {
  const saveSlot = slot || state.currentSaveSlot;
  try {
    const saveData = {
      day: state.day,
      money: state.money,
      hoeLevel: state.hoeLevel,
      harvestLevel: state.harvestLevel,
      fertilizerToolLevel: state.fertilizerToolLevel,
      inventory: state.inventory,
      hotbarSelection: state.hotbarSelection,
      farmland: state.farmland.map(tile => ({
        row: tile.row,
        col: tile.col,
        tilled: tile.tilled,
        watered: tile.watered,
        crop: tile.crop,
        sprinkler: tile.sprinkler,
        fertilizer: tile.fertilizer,
        chest: tile.chest ? {
          id: tile.chest.id,
          items: tile.chest.items
        } : null,
        tree: tile.tree,
      })),
      chests: state.chests.map(chest => ({
        id: chest.id,
        items: chest.items
      })),
      player: {
        x: state.player.x,
        y: state.player.y,
        facing: state.player.facing,
      },
      log: state.log,
      version: "1.0",
      timestamp: Date.now(),
    };
    
    localStorage.setItem(`stardewClone_save_${saveSlot}`, JSON.stringify(saveData));
    state.currentSaveSlot = saveSlot;
    addLog(`Jogo guardado no slot ${saveSlot} com sucesso!`);
    return true;
  } catch (error) {
    console.error("Erro ao guardar:", error);
    addLog("Erro ao guardar o jogo!");
    return false;
  }
}

function loadGame(slot = null) {
  const saveSlot = slot || state.currentSaveSlot;
  try {
    const saveDataStr = localStorage.getItem(`stardewClone_save_${saveSlot}`);
    if (!saveDataStr) {
      console.log(`Nenhum save encontrado no slot ${saveSlot}!`);
      return false;
    }
    
    const saveData = JSON.parse(saveDataStr);
    
    // Restore state
    state.day = saveData.day || state.day;
    state.money = saveData.money || state.money;
    state.hoeLevel = saveData.hoeLevel || state.hoeLevel;
    state.harvestLevel = saveData.harvestLevel || state.harvestLevel;
    state.fertilizerToolLevel = saveData.fertilizerToolLevel || state.fertilizerToolLevel;
    state.inventory = saveData.inventory || state.inventory;
    state.hotbarSelection = saveData.hotbarSelection || state.hotbarSelection;
    
    // Restore farmland
    if (saveData.farmland && saveData.farmland.length > 0) {
      state.farmland = saveData.farmland.map(tileData => {
        const tile = {
          row: tileData.row,
          col: tileData.col,
          tilled: tileData.tilled || false,
          watered: tileData.watered || false,
          crop: tileData.crop || null,
          sprinkler: tileData.sprinkler || 0,
          fertilizer: tileData.fertilizer || null,
          chest: null,
          tree: tileData.tree || false,
        };
        
        if (tileData.chest) {
          tile.chest = {
            id: tileData.chest.id,
            items: tileData.chest.items || Array(16).fill(null),
          };
        }
        
        return tile;
      });
    } else {
      // Initialize empty farmland if no save data
      state.farmland = [];
      for (let row = 0; row < GRID_SIZE; row++) {
        for (let col = 0; col < GRID_SIZE; col++) {
          const hasTree = Math.random() < 0.12 && 
                          row > 3 && row < GRID_SIZE - 4 && 
                          col > 3 && col < GRID_SIZE - 4 &&
                          !(row >= 4 && row <= 6 && col >= 4 && col <= 6);
          
          state.farmland.push({
            row,
            col,
            tilled: false,
            watered: false,
            crop: null,
            sprinkler: 0,
            fertilizer: null,
            chest: null,
            tree: hasTree,
          });
        }
      }
    }
    
    // Restore chests
    if (saveData.chests) {
      state.chests = saveData.chests.map(chestData => ({
        id: chestData.id,
        items: chestData.items || Array(16).fill(null),
      }));
      
      // Link chests to tiles
      state.farmland.forEach(tile => {
        if (tile.chest && tile.chest.id) {
          const chest = state.chests.find(c => c.id === tile.chest.id);
          if (chest) {
            tile.chest = chest;
          }
        }
      });
    }
    
    // Restore player position
    if (saveData.player) {
      state.player.x = saveData.player.x || state.player.x;
      state.player.y = saveData.player.y || state.player.y;
      state.player.facing = saveData.player.facing || state.player.facing;
    }
    
    // Restore log
    if (saveData.log) {
      state.log = saveData.log;
    }
    
    state.currentSaveSlot = saveSlot;
    
    // Update camera
    state.camera.x = state.player.x - canvas.width / 2 + PLAYER_SIZE / 2;
    state.camera.y = state.player.y - canvas.height / 2 + PLAYER_SIZE / 2;
    const maxCameraX = Math.max(0, GRID_SIZE * TILE_SIZE - canvas.width);
    const maxCameraY = Math.max(0, GRID_SIZE * TILE_SIZE - canvas.height);
    state.camera.x = Math.max(0, Math.min(maxCameraX, state.camera.x));
    state.camera.y = Math.max(0, Math.min(maxCameraY, state.camera.y));
    
    // Refresh UI
    renderStats();
    renderHotbar();
    renderLog();
    renderInventory();
    
    addLog(`Jogo carregado do slot ${saveSlot} com sucesso!`);
    return true;
  } catch (error) {
    console.error("Erro ao carregar:", error);
    addLog("Erro ao carregar o jogo!");
    return false;
  }
}

// Save Slots Management
function getSaveSlotInfo(slot) {
  const saveDataStr = localStorage.getItem(`stardewClone_save_${slot}`);
  if (!saveDataStr) {
    return null;
  }
  try {
    const saveData = JSON.parse(saveDataStr);
    return {
      slot,
      day: saveData.day || 1,
      money: saveData.money || 0,
      timestamp: saveData.timestamp || 0,
      exists: true,
    };
  } catch (error) {
    return null;
  }
}

function openSaveSlotsModal(mode = "save") {
  state.openModal = "save_slots";
  state.saveSlotsMode = mode;
  document.getElementById("save-slots-modal").style.display = "flex";
  renderSaveSlots();
}

function closeSaveSlotsModal() {
  state.openModal = null;
  state.saveSlotsMode = null;
  document.getElementById("save-slots-modal").style.display = "none";
}

function renderSaveSlots() {
  const container = document.getElementById("save-slots-container");
  const title = document.getElementById("save-slots-title");
  const mode = state.saveSlotsMode || "save";
  
  title.textContent = mode === "save" ? "Selecionar Slot para Guardar" : "Selecionar Slot para Carregar";
  
  container.innerHTML = "";
  
  for (let slot = 1; slot <= 3; slot++) {
    const slotInfo = getSaveSlotInfo(slot);
    const slotDiv = document.createElement("div");
    slotDiv.className = "save-slot-card";
    slotDiv.style.cssText = `
      padding: 15px;
      margin: 10px;
      border: 2px solid ${slot === state.currentSaveSlot ? "#4a90e2" : "#666"};
      border-radius: 8px;
      background: ${slotInfo ? "#2a2a2a" : "#1a1a1a"};
      cursor: pointer;
      min-width: 200px;
    `;
    
    if (slotInfo) {
      const date = new Date(slotInfo.timestamp);
      slotDiv.innerHTML = `
        <h3>Slot ${slot} ${slot === state.currentSaveSlot ? "(Atual)" : ""}</h3>
        <p>Dia: ${slotInfo.day}</p>
        <p>Dinheiro: ${formatNumber(slotInfo.money)}</p>
        <p style="font-size: 12px; color: #aaa;">${date.toLocaleString("pt-PT")}</p>
      `;
    } else {
      slotDiv.innerHTML = `
        <h3>Slot ${slot}</h3>
        <p style="color: #888;">Vazio</p>
      `;
    }
    
    slotDiv.onclick = () => {
      if (mode === "save") {
        if (confirm(`Guardar no slot ${slot}? ${slotInfo ? "Isto irá sobrescrever o save existente." : ""}`)) {
          saveGame(slot);
          closeSaveSlotsModal();
        }
      } else {
        if (slotInfo) {
          if (confirm(`Carregar do slot ${slot}? O progresso atual será perdido!`)) {
            loadGame(slot);
            closeSaveSlotsModal();
          }
        } else {
          addLog("Este slot está vazio!");
        }
      }
    };
    
    container.appendChild(slotDiv);
  }
}

// Auto-save every 30 seconds
let autoSaveInterval = null;
function startAutoSave() {
  if (autoSaveInterval) clearInterval(autoSaveInterval);
  autoSaveInterval = setInterval(() => {
    saveGame(); // Uses currentSaveSlot
  }, 30000); // 30 seconds
}

// Initialize
function bootstrap() {
  if (!canvas) {
    console.error("Canvas element not found!");
    return;
  }
  
  // Check if there's a save file in slot 1 (default) or old save format
  const hasSaveSlot1 = localStorage.getItem('stardewClone_save_1') !== null;
  const hasOldSave = localStorage.getItem('stardewClone_save') !== null;
  
  // Migrate old save to slot 1 if exists
  if (hasOldSave && !hasSaveSlot1) {
    try {
      const oldSave = localStorage.getItem('stardewClone_save');
      localStorage.setItem('stardewClone_save_1', oldSave);
      localStorage.removeItem('stardewClone_save');
      console.log("Save antigo migrado para o slot 1!");
    } catch (error) {
      console.error("Erro ao migrar save antigo:", error);
    }
  }
  
  // Determine if we should load a save
  const finalHasSave = localStorage.getItem('stardewClone_save_1') !== null;
  
  if (!finalHasSave) {
    // No save exists, initialize new game
    console.log("Inicializando novo jogo...");
    initFarm();
  } else {
    // Try to load save
    console.log("A carregar save do slot 1...");
    const loaded = loadGame(1);
    if (!loaded) {
      console.log("Falha ao carregar save, inicializando novo jogo...");
      initFarm();
    } else {
      console.log("Save carregado com sucesso! Farmland tem", state.farmland.length, "tiles");
      // Check if inventory is empty or missing initial items
      const hasInitialItems = state.inventory.some(item => 
        item && (item.type === "hoe" || item.type === "water" || item.type === "harvest" || item.type === "fertilizer_tool" || item.type === "axe")
      );
      if (!hasInitialItems) {
        console.log("Inventário vazio ou sem itens iniciais, adicionando itens iniciais...");
        // Add initial items if inventory is empty
        addItemToInventory({ type: "hoe", level: 1, emoji: "🔨", name: "Enxada Básica" });
        addItemToInventory({ type: "water", emoji: "💧", name: "Regador" });
        addItemToInventory({ type: "harvest", level: 1, emoji: "⚔️", name: "Foice Básica" });
        addItemToInventory({ type: "fertilizer_tool", level: 1, emoji: "🌿", name: "Aplicador de Fertilizante Básico" });
        addItemToInventory({ type: "axe", emoji: "🪓", name: "Machado" });
        addItemToInventory({ type: "seed", crop: "trigo", emoji: "🌾", name: "Semente de Trigo" }, 3);
      }
    }
  }
  
  // Ensure farmland is initialized
  if (state.farmland.length === 0) {
    console.error("Farmland está vazio após inicialização! Inicializando...");
    initFarm();
  }
  
  // Ensure canvas is sized
  resizeCanvas();
  
  // Initialize camera to center on player
  state.camera.x = state.player.x - canvas.width / 2 + PLAYER_SIZE / 2;
  state.camera.y = state.player.y - canvas.height / 2 + PLAYER_SIZE / 2;
  
  // Clamp camera to world bounds
  const maxCameraX = Math.max(0, GRID_SIZE * TILE_SIZE - canvas.width);
  const maxCameraY = Math.max(0, GRID_SIZE * TILE_SIZE - canvas.height);
  state.camera.x = Math.max(0, Math.min(maxCameraX, state.camera.x));
  state.camera.y = Math.max(0, Math.min(maxCameraY, state.camera.y));
  
  renderStats();
  renderHotbar();
  renderLog();
  
  // Start auto-save
  startAutoSave();
  
  // Initial render
  render();
  
  gameLoop();
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}