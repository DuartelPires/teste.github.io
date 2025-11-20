// Game Constants
const TILE_SIZE = 48;
const GRID_SIZE = 50; // Mapa muito maior
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
    seedCost: 25,
    sellPrice: 55,
    growDays: 3,
    description: "Rápido e consistente",
    color: "#d4af37",
  },
  milho: {
    id: "milho",
    nome: "Milho",
    emoji: "🌽",
    seedCost: 45,
    sellPrice: 95,
    growDays: 4,
    description: "Rende um pouco mais",
    color: "#ffd700",
  },
  uva: {
    id: "uva",
    nome: "Uva",
    emoji: "🍇",
    seedCost: 65,
    sellPrice: 140,
    growDays: 5,
    description: "Demora mas vale ouro",
    color: "#9370db",
  },
};

const hoeLabels = ["Básica", "Cobre", "Aço"];

const shopItems = [
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
    id: "sprinkler",
    label: "Sprinkler",
    type: "sprinkler",
    price: 250,
    desc: "Irriga automaticamente o tile todo dia.",
    emoji: "💧",
  },
  {
    id: "hoe_lvl_2",
    label: "Enxada de Cobre",
    type: "hoe",
    level: 2,
    price: 400,
    desc: "Tilha uma área 2x2.",
    emoji: "🔨",
  },
  {
    id: "hoe_lvl_3",
    label: "Enxada de Aço",
    type: "hoe",
    level: 3,
    price: 900,
    desc: "Tilha até 3x3 de uma vez.",
    emoji: "🔨",
  },
  {
    id: "chest",
    label: "Chest",
    type: "chest",
    price: 150,
    desc: "Armazena itens.",
    emoji: "📦",
  },
];

// Game State
const state = {
  day: 1,
  money: 350,
  hoeLevel: 1,
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
      type: "shop",
      name: "Vendedor",
    },
  ],
  selectedInventorySlot: null,
  draggedItem: null,
  draggedFromSlot: null,
  draggedFromChest: false,
  openModal: null, // "inventory", "shop", "chest"
  openChest: null,
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
        sprinkler: false,
        chest: null,
        tree: hasTree,
      });
    }
  }
  
  // Add initial items to inventory
  addItemToInventory({ type: "hoe", level: 1, emoji: "🔨", name: "Enxada Básica" });
  addItemToInventory({ type: "water", emoji: "💧", name: "Regador" });
  addItemToInventory({ type: "scythe", emoji: "⚔️", name: "Foice" });
  addItemToInventory({ type: "axe", emoji: "🪓", name: "Machado" });
  addItemToInventory({ type: "seed", crop: "trigo", emoji: "🌾", name: "Semente de Trigo" }, 3);
}

// Inventory System
function addItemToInventory(item, count = 1) {
  // Try to stack with existing items
  if (item.type === "seed" || item.type === "sprinkler" || item.type === "chest") {
    for (let i = 0; i < state.inventory.length; i++) {
      if (state.inventory[i] && 
          state.inventory[i].type === item.type &&
          state.inventory[i].crop === item.crop) {
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
  if (npc && npc.type === "shop") {
    openShop();
    return;
  }

  const tile = getTileInFront();
  if (!tile) return;

  // Check for chest interaction
  if (tile.chest) {
    openChest(tile.chest);
    return;
  }

  const item = getSelectedItem();
  if (!item) {
    addLog("Nenhum item selecionado!");
    return;
  }

  if (item.type === "hoe") {
    tillArea(tile, item.level || 1);
  } else if (item.type === "water") {
    waterTile(tile);
  } else if (item.type === "seed") {
    plantSeed(tile, item);
  } else if (item.type === "sprinkler") {
    placeSprinkler(tile, item);
  } else if (item.type === "chest") {
    placeChest(tile, item);
  } else if (item.type === "scythe" || item.type === "harvest") {
    harvestCrop(tile);
  } else if (item.type === "axe") {
    chopTree(tile);
  } else {
    addLog(`Item ${item.type} não pode ser usado aqui.`);
  }
}

// Handle mouse click on canvas
canvas.addEventListener("click", (e) => {
  if (state.openModal) return;
  
  const rect = canvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left + state.camera.x;
  const mouseY = e.clientY - rect.top + state.camera.y;
  
  const tile = getTileAtWorld(mouseX, mouseY);
  if (!tile) return;

  // Check for chest interaction
  if (tile.chest) {
    openChest(tile.chest);
    return;
  }

  const item = getSelectedItem();
  if (!item) return;

  if (item.type === "hoe") {
    tillArea(tile, item.level || 1);
  } else if (item.type === "water") {
    waterTile(tile);
  } else if (item.type === "seed") {
    plantSeed(tile, item);
  } else if (item.type === "sprinkler") {
    placeSprinkler(tile, item);
  } else if (item.type === "chest") {
    placeChest(tile, item);
  } else if (item.type === "scythe" || item.type === "harvest") {
    harvestCrop(tile);
  } else if (item.type === "axe") {
    chopTree(tile);
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
  if (tile.sprinkler) {
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
  
  removeItemFromInventory(slotIndex, 1);
  tile.sprinkler = true;
  addLog("Sprinkler colocado! Esta área será irrigada automaticamente.");
}

function placeChest(tile, item) {
  if (tile.chest) {
    addLog("Já existe um chest aqui.");
    return;
  }
  if (tile.crop || tile.sprinkler || tile.tilled) {
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

function harvestCrop(tile) {
  if (!tile.crop) {
    addLog("Não há nada para colher aqui.");
    return;
  }
  if (!tile.crop.ready) {
    addLog("A plantação ainda não está pronta para colher.");
    return;
  }
  const cropData = crops[tile.crop.type];
  const qualityBonus = 1 + (state.hoeLevel - 1) * 0.15;
  const payout = Math.round(cropData.sellPrice * qualityBonus);
  state.money += payout;
  tile.crop = null;
  tile.tilled = false; // Transform into soil tile instead of keeping it hoed
  tile.watered = false;
  addLog(`Colheu ${cropData.nome} e recebeu ${payout}g!`);
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
      const progress = tile.crop.daysWatered / crop.growDays;
      
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
    if (tile.sprinkler) {
      ctx.fillStyle = "#38bdf8";
      ctx.beginPath();
      ctx.arc(x + TILE_SIZE / 2, y + TILE_SIZE / 2, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#0ea5e9";
      ctx.lineWidth = 2;
      ctx.stroke();
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
    ctx.fillStyle = "#8b4513";
    ctx.fillRect(npcX, npcY, PLAYER_SIZE, PLAYER_SIZE);
    ctx.strokeStyle = "#654321";
    ctx.lineWidth = 2;
    ctx.strokeRect(npcX, npcY, PLAYER_SIZE, PLAYER_SIZE);
    ctx.fillStyle = "#fff";
    ctx.font = "20px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("👤", npcX + PLAYER_SIZE / 2, npcY + PLAYER_SIZE / 2);
  });

  // Draw player
  const playerX = state.player.x;
  const playerY = state.player.y;
  
  // Player shadow
  ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
  ctx.fillRect(playerX + 2, playerY + PLAYER_SIZE - 4, PLAYER_SIZE, 4);
  
  // Player body
  ctx.fillStyle = "#4a90e2";
  ctx.fillRect(playerX, playerY, PLAYER_SIZE, PLAYER_SIZE);
  
  // Player border
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 3;
  ctx.strokeRect(playerX, playerY, PLAYER_SIZE, PLAYER_SIZE);
  
  // Inner border
  ctx.strokeStyle = "#1e3a5f";
  ctx.lineWidth = 1;
  ctx.strokeRect(playerX + 2, playerY + 2, PLAYER_SIZE - 4, PLAYER_SIZE - 4);
  
  // Player direction indicator
  ctx.fillStyle = "#ffeb3b";
  const indicatorSize = 10;
  switch (state.player.facing) {
    case "up":
      ctx.fillRect(
        playerX + PLAYER_SIZE / 2 - indicatorSize / 2,
        playerY + 4,
        indicatorSize,
        indicatorSize
      );
      break;
    case "down":
      ctx.fillRect(
        playerX + PLAYER_SIZE / 2 - indicatorSize / 2,
        playerY + PLAYER_SIZE - indicatorSize - 4,
        indicatorSize,
        indicatorSize
      );
      break;
    case "left":
      ctx.fillRect(
        playerX + 4,
        playerY + PLAYER_SIZE / 2 - indicatorSize / 2,
        indicatorSize,
        indicatorSize
      );
      break;
    case "right":
      ctx.fillRect(
        playerX + PLAYER_SIZE - indicatorSize - 4,
        playerY + PLAYER_SIZE / 2 - indicatorSize / 2,
        indicatorSize,
        indicatorSize
      );
      break;
  }

  // Draw interaction hint
  const frontTile = getTileInFront();
  if (frontTile && !state.openModal) {
    const tileX = frontTile.col * TILE_SIZE;
    const tileY = frontTile.row * TILE_SIZE;
    ctx.strokeStyle = "rgba(255, 255, 0, 0.6)";
    ctx.lineWidth = 3;
    ctx.strokeRect(tileX, tileY, TILE_SIZE, TILE_SIZE);
  }

  ctx.restore();
}

// UI Rendering
function renderStats() {
  document.getElementById("stat-day").textContent = `Dia ${state.day}`;
  document.getElementById("stat-money").textContent = `Dinheiro: ${state.money}g`;
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
    
    slot.addEventListener("mouseenter", () => {
      if (state.draggedItem && state.draggedFromSlot !== i) {
        slot.classList.add("drop-target");
      }
    });
    
    slot.addEventListener("mouseleave", () => {
      slot.classList.remove("drop-target");
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

function openShop() {
  state.openModal = "shop";
  document.getElementById("shop-modal").style.display = "flex";
  renderShop();
}

function closeShop() {
  state.openModal = null;
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
  shop.innerHTML = "";
  shopItems.forEach((item) => {
    const card = document.createElement("div");
    card.className = "shop-card";
    card.innerHTML = `
      <div class="shop-card-info">
        <strong>${item.emoji} ${item.label} - ${item.price}g</strong>
        <small>${item.desc}</small>
      </div>
    `;
    const btn = document.createElement("button");
    btn.textContent = "Comprar";
    btn.disabled = !canPurchase(item);
    btn.onclick = () => purchase(item);
    card.appendChild(btn);
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
      
      slot.addEventListener("mouseenter", () => {
        if (state.draggedItem && (state.draggedFromChest || state.draggedFromSlot !== i)) {
          slot.classList.add("drop-target");
        }
      });
      
      slot.addEventListener("mouseleave", () => {
        slot.classList.remove("drop-target");
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
    slot.addEventListener("mouseenter", () => {
      if (state.draggedItem && state.draggedFromSlot !== null) {
        slot.classList.add("drop-target");
      }
    });
    
    slot.addEventListener("mouseleave", () => {
      slot.classList.remove("drop-target");
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
      emoji: item.emoji,
      name: item.label,
      count: 1,
    };
    if (!addItemToInventory(newItem, 1)) {
      addLog("Inventário cheio!");
      state.money += item.price;
      return;
    }
    addLog("Comprou um sprinkler!");
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
    if (tile.sprinkler) {
      // Water 3x3 area around sprinkler
      const { row, col } = tile;
      for (let r = row - 1; r <= row + 1; r++) {
        for (let c = col - 1; c <= col + 1; c++) {
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
      tile.watered = tile.sprinkler;
      return;
    }
    if (tile.watered) {
      tile.crop.daysWatered += 1;
      if (tile.crop.daysWatered >= crops[tile.crop.type].growDays) {
        tile.crop.ready = true;
      }
      tile.watered = tile.sprinkler;
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

// Game Loop
function gameLoop() {
  if (!state.openModal) {
    updatePlayer();
  }
  render();
  requestAnimationFrame(gameLoop);
}

// Initialize
function bootstrap() {
  if (!canvas) {
    console.error("Canvas element not found!");
    return;
  }
  
  initFarm();
  
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
