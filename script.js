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
    seedCost: 200,
    sellPrice: 225,
    growSeconds: 45, // 45 segundos total, 3 etapas = 15s cada
    description: "Rápido e consistente. Cresce em 45 segundos (3 etapas).",
    color: "#d4af37",
  },
  milho: {
    id: "milho",
    nome: "Milho",
    emoji: "🌽",
    seedCost: 1500,
    sellPrice: 1750,
    growSeconds: 75, // 75 segundos total, 3 etapas = 25s cada
    description: "Rende um pouco mais. Cresce em 75 segundos (3 etapas).",
    color: "#ffd700",
  },
  uva: {
    id: "uva",
    nome: "Uva",
    emoji: "🍇",
    seedCost: 10000,
    sellPrice: 11000,
    growSeconds: 120, // 120 segundos total, 3 etapas = 40s cada
    description: "Demora mas vale ouro. Cresce em 120 segundos (3 etapas).",
    color: "#9370db",
  },
  morango: {
    id: "morango",
    nome: "Morango",
    emoji: "🍓",
    seedCost: 50000,
    sellPrice: 53500,
    growSeconds: 170, // 170 segundos total, 3 etapas = ~57s cada
    description: "Doce e valioso. Cresce em 170 segundos (3 etapas).",
    color: "#ff1744",
  },
  abacaxi: {
    id: "abacaxi",
    nome: "Abacaxi",
    emoji: "🍍",
    seedCost: 350000,
    sellPrice: 385000,
    growSeconds: 200, // 200 segundos total, 3 etapas = ~67s cada
    description: "Exótico e lucrativo. Cresce em 200 segundos (3 etapas).",
    color: "#ffd700",
  },
  melancia: {
    id: "melancia",
    nome: "Melancia",
    emoji: "🍉",
    seedCost: 2000000,
    sellPrice: 2150000,
    growSeconds: 290, // 290 segundos total, 3 etapas = ~97s cada
    description: "Grande e refrescante. Cresce em 290 segundos (3 etapas).",
    color: "#c41e3a",
  },
  ananas: {
    id: "ananas",
    nome: "Ananás",
    emoji: "🥭",
    seedCost: 20000000,
    sellPrice: 21000000,
    growSeconds: 360, // 360 segundos total, 3 etapas = 120s cada
    description: "Raro e precioso. Cresce em 360 segundos (3 etapas).",
    color: "#ff8c00",
  },
  ouro: {
    id: "ouro",
    nome: "Planta de Ouro",
    emoji: "🥇",
    seedCost: 100000000,
    sellPrice: 105000000,
    growSeconds: 450, // 450 segundos total, 3 etapas = 150s cada
    description: "Literalmente vale ouro. Cresce em 450 segundos (3 etapas).",
    color: "#ffd700",
  },
  diamante: {
    id: "diamante",
    nome: "Planta de Diamante",
    emoji: "💎",
    seedCost: 250000000,
    sellPrice: 275000000,
    growSeconds: 540, // 540 segundos total, 3 etapas = 180s cada
    description: "O mais valioso de todos. Cresce em 540 segundos (3 etapas).",
    color: "#b9f2ff",
  },
  esmeralda: {
    id: "esmeralda",
    nome: "Planta de Esmeralda",
    emoji: "💚",
    seedCost: 1000000000, // 1B
    sellPrice: 1050000000,
    growSeconds: 800, // 800 segundos total, 3 etapas = ~267s cada
    description: "Verde e preciosa. Cresce em 800 segundos (3 etapas).",
    color: "#50c878",
  },
  rubi: {
    id: "rubi",
    nome: "Planta de Rubi",
    emoji: "❤️",
    seedCost: 5000000000, // 5B
    sellPrice: 5250000000,
    growSeconds: 900, // 900 segundos total, 3 etapas = 300s cada
    description: "Vermelha e rara. Cresce em 900 segundos (3 etapas).",
    color: "#e0115f",
  },
  safira: {
    id: "safira",
    nome: "Planta de Safira",
    emoji: "💙",
    seedCost: 25000000000, // 25B
    sellPrice: 27000000000,
    growSeconds: 1050, // 1050 segundos total, 3 etapas = 350s cada
    description: "Azul e valiosa. Cresce em 1050 segundos (3 etapas).",
    color: "#0f52ba",
  },
  trilhao: {
    id: "trilhao",
    nome: "Planta do Trilhão",
    emoji: "💜",
    seedCost: 1000000000000, // 1T
    sellPrice: 1050000000000,
    growSeconds: 1100, // 1100 segundos total, 3 etapas = ~367s cada
    description: "Ultra rara. Cresce em 1100 segundos (3 etapas).",
    color: "#9966cc",
  },
  quadrilhao: {
    id: "quadrilhao",
    nome: "Planta do Quadrilhão",
    emoji: "🖤",
    seedCost: 5000000000000000, // 5Q
    sellPrice: 5150000000000000,
    growSeconds: 1280, // 1280 segundos total, 3 etapas = ~427s cada
    description: "Extremamente rara. Cresce em 1280 segundos (3 etapas).",
    color: "#000000",
  },
  quintilhao: {
    id: "quintilhao",
    nome: "Planta do Quintilhão",
    emoji: "🤍",
    seedCost: 2500000000000000000, // 2.5 Quintillion
    sellPrice: 2750000000000000000,
    growSeconds: 1460, // 1460 segundos total, 3 etapas = ~487s cada
    description: "Lendária. Cresce em 1460 segundos (3 etapas).",
    color: "#ffffff",
  },
  sextilhao: {
    id: "sextilhao",
    nome: "Planta do Sextilhão",
    emoji: "🌟",
    seedCost: 1000000000000000000000, // 1 Sextillion
    sellPrice: 1100000000000000000000,
    growSeconds: 1640, // 1640 segundos total, 3 etapas = ~547s cada
    description: "Mítica. Cresce em 1640 segundos (3 etapas).",
    color: "#ffd700",
  },
  septilhao: {
    id: "septilhao",
    nome: "Planta do Septilhão",
    emoji: "✨",
    seedCost: 5000000000000000000000000, // 5 Septillion
    sellPrice: 5500000000000000000000000,
    growSeconds: 1850, // 1850 segundos total, 3 etapas = ~617s cada
    description: "Divina. Cresce em 1850 segundos (3 etapas).",
    color: "#ff69b4",
  },
  octilhao: {
    id: "octilhao",
    nome: "Planta do Octilhão",
    emoji: "🔥",
    seedCost: 2500000000000000000000000000, // 2.5 Octillion
    sellPrice: 2750000000000000000000000000,
    growSeconds: 2200, // 2200 segundos total, 3 etapas = ~733s cada
    description: "Épica. Cresce em 2200 segundos (3 etapas).",
    color: "#ff4500",
  },
  nonilhao: {
    id: "nonilhao",
    nome: "Planta do Nonilhão",
    emoji: "⚡",
    seedCost: 1000000000000000000000000000000, // 1 Nonillion
    sellPrice: 1100000000000000000000000000000,
    growSeconds: 2500, // 2500 segundos total, 3 etapas = ~833s cada
    description: "Transcendente. Cresce em 2500 segundos (3 etapas).",
    color: "#ffff00",
  },
  decilhao: {
    id: "decilhao",
    nome: "Planta do Decilhão",
    emoji: "👑",
    seedCost: 5000000000000000000000000000000000, // 5 Decillion
    sellPrice: 5500000000000000000000000000000000,
    growSeconds: 3200, // 3200 segundos total, 3 etapas = ~1067s cada
    description: "Suprema. Cresce em 3200 segundos (3 etapas).",
    color: "#ffd700",
  },
  undecilhao: {
    id: "undecilhao",
    nome: "Planta do Undecilhão",
    emoji: "🌌",
    seedCost: 2500000000000000000000000000000000000, // 2.5 Undecillion
    sellPrice: 2750000000000000000000000000000000000,
    growSeconds: 4200, // 4200 segundos total, 3 etapas = 1400s cada
    description: "Ultimate. Cresce em 4200 segundos (3 etapas).",
    color: "#4b0082",
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
  } else if (num < 1000000000000000) {
    // Trillions
    const t = num / 1000000000000;
    return t % 1 === 0 ? `${t}T` : `${t.toFixed(1)}T`;
  } else if (num < 1000000000000000000) {
    // Quadrillions
    const q = num / 1000000000000000;
    return q % 1 === 0 ? `${q}Q` : `${q.toFixed(1)}Q`;
  } else if (num < 1000000000000000000000) {
    // Quintillions
    const qi = num / 1000000000000000000;
    return qi % 1 === 0 ? `${qi}Qi` : `${qi.toFixed(1)}Qi`;
  } else if (num < 1000000000000000000000000) {
    // Sextillions
    const sx = num / 1000000000000000000000;
    return sx % 1 === 0 ? `${sx}Sx` : `${sx.toFixed(1)}Sx`;
  } else if (num < 1000000000000000000000000000) {
    // Septillions
    const sp = num / 1000000000000000000000000;
    return sp % 1 === 0 ? `${sp}Sp` : `${sp.toFixed(1)}Sp`;
  } else if (num < 1000000000000000000000000000000) {
    // Octillions
    const oc = num / 1000000000000000000000000000;
    return oc % 1 === 0 ? `${oc}Oc` : `${oc.toFixed(1)}Oc`;
  } else if (num < 1000000000000000000000000000000000) {
    // Nonillions
    const no = num / 1000000000000000000000000000000;
    return no % 1 === 0 ? `${no}No` : `${no.toFixed(1)}No`;
  } else if (num < 1000000000000000000000000000000000000) {
    // Decillions
    const dc = num / 1000000000000000000000000000000000;
    return dc % 1 === 0 ? `${dc}Dc` : `${dc.toFixed(1)}Dc`;
  } else {
    // Undecillions and beyond
    const ud = num / 1000000000000000000000000000000000000;
    return ud % 1 === 0 ? `${ud}Ud` : `${ud.toFixed(1)}Ud`;
  }
}

// Format grow time (seconds to minutes if > 60)
function formatGrowTime(seconds) {
  if (seconds >= 60) {
    const minutes = seconds / 60;
    return minutes % 1 === 0 ? `${minutes} minutos` : `${minutes.toFixed(1)} minutos`;
  } else {
    return `${seconds} segundos`;
  }
}

// Fertilizer types
const fertilizers = {
  basic: {
    id: "basic",
    name: "Fertilizante Básico",
    reduction: 0.10, // 10% reduction
    price: 5000,
    emoji: "🌱",
    desc: "Reduz 10% do tempo de crescimento",
  },
  improved: {
    id: "improved",
    name: "Fertilizante Melhorado",
    reduction: 0.20, // 20% reduction
    price: 50000,
    emoji: "🌿",
    desc: "Reduz 20% do tempo de crescimento",
  },
  quality: {
    id: "quality",
    name: "Fertilizante de Qualidade",
    reduction: 0.30, // 30% reduction
    price: 1000000,
    emoji: "🍃",
    desc: "Reduz 30% do tempo de crescimento",
  },
  deluxe: {
    id: "deluxe",
    name: "Fertilizante Deluxe",
    reduction: 0.40, // 40% reduction
    price: 1000000000,
    emoji: "🌳",
    desc: "Reduz 40% do tempo de crescimento",
  },
  premium: {
    id: "premium",
    name: "Fertilizante Premium",
    reduction: 0.50, // 50% reduction
    price: 1000000000000,
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
  {
    id: "seed_esmeralda",
    label: "Semente de Planta de Esmeralda",
    type: "seed",
    crop: "esmeralda",
    price: crops.esmeralda.seedCost,
    desc: crops.esmeralda.description,
    emoji: "💚",
  },
  {
    id: "seed_rubi",
    label: "Semente de Planta de Rubi",
    type: "seed",
    crop: "rubi",
    price: crops.rubi.seedCost,
    desc: crops.rubi.description,
    emoji: "❤️",
  },
  {
    id: "seed_safira",
    label: "Semente de Planta de Safira",
    type: "seed",
    crop: "safira",
    price: crops.safira.seedCost,
    desc: crops.safira.description,
    emoji: "💙",
  },
  {
    id: "seed_trilhao",
    label: "Semente de Planta do Trilhão",
    type: "seed",
    crop: "trilhao",
    price: crops.trilhao.seedCost,
    desc: crops.trilhao.description,
    emoji: "💜",
  },
  {
    id: "seed_quadrilhao",
    label: "Semente de Planta do Quadrilhão",
    type: "seed",
    crop: "quadrilhao",
    price: crops.quadrilhao.seedCost,
    desc: crops.quadrilhao.description,
    emoji: "🖤",
  },
  {
    id: "seed_quintilhao",
    label: "Semente de Planta do Quintilhão",
    type: "seed",
    crop: "quintilhao",
    price: crops.quintilhao.seedCost,
    desc: crops.quintilhao.description,
    emoji: "🤍",
  },
  {
    id: "seed_sextilhao",
    label: "Semente de Planta do Sextilhão",
    type: "seed",
    crop: "sextilhao",
    price: crops.sextilhao.seedCost,
    desc: crops.sextilhao.description,
    emoji: "🌟",
  },
  {
    id: "seed_septilhao",
    label: "Semente de Planta do Septilhão",
    type: "seed",
    crop: "septilhao",
    price: crops.septilhao.seedCost,
    desc: crops.septilhao.description,
    emoji: "✨",
  },
  {
    id: "seed_octilhao",
    label: "Semente de Planta do Octilhão",
    type: "seed",
    crop: "octilhao",
    price: crops.octilhao.seedCost,
    desc: crops.octilhao.description,
    emoji: "🔥",
  },
  {
    id: "seed_nonilhao",
    label: "Semente de Planta do Nonilhão",
    type: "seed",
    crop: "nonilhao",
    price: crops.nonilhao.seedCost,
    desc: crops.nonilhao.description,
    emoji: "⚡",
  },
  {
    id: "seed_decilhao",
    label: "Semente de Planta do Decilhão",
    type: "seed",
    crop: "decilhao",
    price: crops.decilhao.seedCost,
    desc: crops.decilhao.description,
    emoji: "👑",
  },
  {
    id: "seed_undecilhao",
    label: "Semente de Planta do Undecilhão",
    type: "seed",
    crop: "undecilhao",
    price: crops.undecilhao.seedCost,
    desc: crops.undecilhao.description,
    emoji: "🌌",
  },
];

const toolsShop = [
  {
    id: "sprinkler_lvl_1",
    label: "Sprinkler Básico",
    type: "sprinkler",
    level: 1,
    price: 5000,
    desc: "Irriga automaticamente uma área 3x3.",
    emoji: "💧",
  },
  {
    id: "sprinkler_lvl_2",
    label: "Sprinkler de Cobre",
    type: "sprinkler",
    level: 2,
    price: 50000,
    desc: "Irriga automaticamente uma área 5x5.",
    emoji: "💧",
  },
  {
    id: "sprinkler_lvl_3",
    label: "Sprinkler de Aço",
    type: "sprinkler",
    level: 3,
    price: 1000000,
    desc: "Irriga automaticamente uma área 7x7.",
    emoji: "💧",
  },
  {
    id: "sprinkler_lvl_4",
    label: "Sprinkler de Ouro",
    type: "sprinkler",
    level: 4,
    price: 1000000000,
    desc: "Irriga automaticamente uma área 9x9.",
    emoji: "💧",
  },
  {
    id: "sprinkler_lvl_5",
    label: "Sprinkler de Platina",
    type: "sprinkler",
    level: 5,
    price: 1000000000000,
    desc: "Irriga automaticamente uma área 11x11.",
    emoji: "💧",
  },
  {
    id: "hoe_lvl_2",
    label: "Enxada de Cobre",
    type: "hoe",
    level: 2,
    price: 10000,
    desc: "Tilha uma área 2x2.",
    emoji: "🔨",
  },
  {
    id: "hoe_lvl_3",
    label: "Enxada de Aço",
    type: "hoe",
    level: 3,
    price: 50000,
    desc: "Tilha até 3x3 de uma vez.",
    emoji: "🔨",
  },
  {
    id: "hoe_lvl_4",
    label: "Enxada de Ouro",
    type: "hoe",
    level: 4,
    price: 500000,
    desc: "Tilha até 4x4 de uma vez.",
    emoji: "🔨",
  },
  {
    id: "hoe_lvl_5",
    label: "Enxada de Platina",
    type: "hoe",
    level: 5,
    price: 50000000,
    desc: "Tilha até 5x5 de uma vez.",
    emoji: "🔨",
  },
  {
    id: "hoe_lvl_6",
    label: "Enxada de Diamante",
    type: "hoe",
    level: 6,
    price: 5000000000,
    desc: "Tilha até 6x6 de uma vez.",
    emoji: "🔨",
  },
  {
    id: "hoe_lvl_7",
    label: "Enxada Mítica",
    type: "hoe",
    level: 7,
    price: 500000000000,
    desc: "Tilha até 7x7 de uma vez.",
    emoji: "🔨",
  },
  {
    id: "harvest_lvl_2",
    label: "Foice de Cobre",
    type: "harvest",
    level: 2,
    price: 10000,
    desc: "Colhe uma área 2x2.",
    emoji: "⚔️",
  },
  {
    id: "harvest_lvl_3",
    label: "Foice de Aço",
    type: "harvest",
    level: 3,
    price: 50000,
    desc: "Colhe até 3x3 de uma vez.",
    emoji: "⚔️",
  },
  {
    id: "harvest_lvl_4",
    label: "Foice de Ouro",
    type: "harvest",
    level: 4,
    price: 500000,
    desc: "Colhe até 4x4 de uma vez.",
    emoji: "⚔️",
  },
  {
    id: "harvest_lvl_5",
    label: "Foice de Platina",
    type: "harvest",
    level: 5,
    price: 50000000,
    desc: "Colhe até 5x5 de uma vez.",
    emoji: "⚔️",
  },
  {
    id: "harvest_lvl_6",
    label: "Foice de Diamante",
    type: "harvest",
    level: 6,
    price: 5000000000,
    desc: "Colhe até 6x6 de uma vez.",
    emoji: "⚔️",
  },
  {
    id: "harvest_lvl_7",
    label: "Foice Mítica",
    type: "harvest",
    level: 7,
    price: 500000000000,
    desc: "Colhe até 7x7 de uma vez.",
    emoji: "⚔️",
  },
  {
    id: "fertilizer_tool_lvl_2",
    label: "Aplicador de Fertilizante de Cobre",
    type: "fertilizer_tool",
    level: 2,
    price: 10000,
    desc: "Aplica fertilizante em área 2x2.",
    emoji: "🌿",
  },
  {
    id: "fertilizer_tool_lvl_3",
    label: "Aplicador de Fertilizante de Aço",
    type: "fertilizer_tool",
    level: 3,
    price: 50000,
    desc: "Aplica fertilizante em área 3x3.",
    emoji: "🌿",
  },
  {
    id: "fertilizer_tool_lvl_4",
    label: "Aplicador de Fertilizante de Ouro",
    type: "fertilizer_tool",
    level: 4,
    price: 500000,
    desc: "Aplica fertilizante em área 4x4.",
    emoji: "🌿",
  },
  {
    id: "fertilizer_tool_lvl_5",
    label: "Aplicador de Fertilizante de Platina",
    type: "fertilizer_tool",
    level: 5,
    price: 50000000,
    desc: "Aplica fertilizante em área 5x5.",
    emoji: "🌿",
  },
  {
    id: "fertilizer_tool_lvl_6",
    label: "Aplicador de Fertilizante de Diamante",
    type: "fertilizer_tool",
    level: 6,
    price: 5000000000,
    desc: "Aplica fertilizante em área 6x6.",
    emoji: "🌿",
  },
  {
    id: "fertilizer_tool_lvl_7",
    label: "Aplicador de Fertilizante Mítico",
    type: "fertilizer_tool",
    level: 7,
    price: 500000000000,
    desc: "Aplica fertilizante em área 7x7.",
    emoji: "🌿",
  },
  {
    id: "auto_harvester_lvl_1",
    label: "Auto Harvester Básico",
    type: "auto_harvester",
    level: 1,
    price: 10000,
    desc: "Colhe automaticamente plantas prontas em área 3x3 e vende tudo.",
    emoji: "🤖",
  },
  {
    id: "auto_harvester_lvl_2",
    label: "Auto Harvester de Cobre",
    type: "auto_harvester",
    level: 2,
    price: 50000,
    desc: "Colhe automaticamente plantas prontas em área 5x5 e vende tudo.",
    emoji: "🤖",
  },
  {
    id: "auto_harvester_lvl_3",
    label: "Auto Harvester de Aço",
    type: "auto_harvester",
    level: 3,
    price: 1000000,
    desc: "Colhe automaticamente plantas prontas em área 7x7 e vende tudo.",
    emoji: "🤖",
  },
  {
    id: "auto_harvester_lvl_4",
    label: "Auto Harvester de Ouro",
    type: "auto_harvester",
    level: 4,
    price: 1000000000,
    desc: "Colhe automaticamente plantas prontas em área 9x9 e vende tudo.",
    emoji: "🤖",
  },
  {
    id: "auto_harvester_lvl_5",
    label: "Auto Harvester de Platina",
    type: "auto_harvester",
    level: 5,
    price: 1000000000000,
    desc: "Colhe automaticamente plantas prontas em área 11x11 e vende tudo.",
    emoji: "🤖",
  },
  {
    id: "auto_planter_lvl_1",
    label: "Auto Planter Básico",
    type: "auto_planter",
    level: 1,
    price: 10000,
    desc: "Planta automaticamente sementes em área 3x3. Clique para configurar.",
    emoji: "🌱",
  },
  {
    id: "auto_planter_lvl_2",
    label: "Auto Planter de Cobre",
    type: "auto_planter",
    level: 2,
    price: 50000,
    desc: "Planta automaticamente sementes em área 5x5. Clique para configurar.",
    emoji: "🌱",
  },
  {
    id: "auto_planter_lvl_3",
    label: "Auto Planter de Aço",
    type: "auto_planter",
    level: 3,
    price: 1000000,
    desc: "Planta automaticamente sementes em área 7x7. Clique para configurar.",
    emoji: "🌱",
  },
  {
    id: "auto_planter_lvl_4",
    label: "Auto Planter de Ouro",
    type: "auto_planter",
    level: 4,
    price: 1000000000,
    desc: "Planta automaticamente sementes em área 9x9. Clique para configurar.",
    emoji: "🌱",
  },
  {
    id: "auto_planter_lvl_5",
    label: "Auto Planter de Platina",
    type: "auto_planter",
    level: 5,
    price: 1000000000000,
    desc: "Planta automaticamente sementes em área 11x11. Clique para configurar.",
    emoji: "🌱",
  },
  {
    id: "removal_tool",
    label: "Ferramenta de Remoção",
    type: "removal_tool",
    price: 5000,
    desc: "Remove sprinklers, chests, auto harvesters e auto planters.",
    emoji: "🗑️",
  },
];

const blocksShop = [
  {
    id: "chest",
    label: "Chest",
    type: "chest",
    price: 1000,
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
      y: TILE_SIZE * 6,
      type: "seed_shop",
      name: "Vendedor de Sementes",
      emoji: "🌱",
    },
    {
      x: TILE_SIZE * 20,
      y: TILE_SIZE * 6,
      type: "tool_shop",
      name: "Ferreiro",
      emoji: "🔧",
    },
    {
      x: TILE_SIZE * 25,
      y: TILE_SIZE * 6,
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
  logVisible: true, // Whether the log panel is visible
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
  
  // Define shop zone area (where NPCs are located)
  const shopZoneStartRow = 4;
  const shopZoneEndRow = 9;
  const shopZoneStartCol = 13;
  const shopZoneEndCol = 28;
  
  // Generate lakes with different sizes and shapes (avoid shop zone and starting area)
  const lakes = [];
  const numLakes = 8 + Math.floor(Math.random() * 5); // 8-12 lakes
  for (let i = 0; i < numLakes; i++) {
    let lakeRow, lakeCol, lakeWidth, lakeHeight, lakeShape;
    let attempts = 0;
    do {
      lakeRow = Math.floor(Math.random() * (GRID_SIZE - 15)) + 5;
      lakeCol = Math.floor(Math.random() * (GRID_SIZE - 15)) + 5;
      
      // Different lake shapes: circle, oval, rectangle, irregular
      const shapeType = Math.random();
      if (shapeType < 0.3) {
        // Circle
        const radius = 2 + Math.floor(Math.random() * 4); // 2-5 tiles radius
        lakeWidth = radius * 2;
        lakeHeight = radius * 2;
        lakeShape = "circle";
      } else if (shapeType < 0.6) {
        // Oval
        lakeWidth = 3 + Math.floor(Math.random() * 5); // 3-7 tiles
        lakeHeight = 2 + Math.floor(Math.random() * 4); // 2-5 tiles
        lakeShape = "oval";
      } else if (shapeType < 0.85) {
        // Rectangle
        lakeWidth = 2 + Math.floor(Math.random() * 6); // 2-7 tiles
        lakeHeight = 2 + Math.floor(Math.random() * 6); // 2-7 tiles
        lakeShape = "rectangle";
      } else {
        // Irregular (L-shaped or T-shaped)
        lakeWidth = 3 + Math.floor(Math.random() * 4); // 3-6 tiles
        lakeHeight = 3 + Math.floor(Math.random() * 4); // 3-6 tiles
        lakeShape = "irregular";
      }
      
      attempts++;
    } while (
      attempts < 50 && (
        // Avoid shop zone
        (lakeRow >= shopZoneStartRow - lakeHeight && lakeRow <= shopZoneEndRow + lakeHeight &&
         lakeCol >= shopZoneStartCol - lakeWidth && lakeCol <= shopZoneEndCol + lakeWidth) ||
        // Avoid starting area
        (lakeRow >= 4 && lakeRow <= 6 && lakeCol >= 4 && lakeCol <= 6) ||
        // Avoid overlapping with existing lakes
        lakes.some(l => {
          const distX = Math.abs(l.col - lakeCol);
          const distY = Math.abs(l.row - lakeRow);
          const maxDistX = Math.max(l.width || l.size, lakeWidth) / 2;
          const maxDistY = Math.max(l.height || l.size, lakeHeight) / 2;
          return distX < maxDistX + 2 && distY < maxDistY + 2;
        })
      )
    );
    
    if (attempts < 50) {
      lakes.push({ 
        row: lakeRow, 
        col: lakeCol, 
        width: lakeWidth, 
        height: lakeHeight, 
        shape: lakeShape,
        size: Math.max(lakeWidth, lakeHeight)
      });
    }
  }
  
  for (let row = 0; row < GRID_SIZE; row++) {
    for (let col = 0; col < GRID_SIZE; col++) {
      // Check if tile is in shop zone
      const isShopZone = row >= shopZoneStartRow && row <= shopZoneEndRow &&
                         col >= shopZoneStartCol && col <= shopZoneEndCol;
      
      // Check if tile is in shop buffer zone (2 tiles around shop zone - no trees allowed)
      const isShopBuffer = row >= shopZoneStartRow - 2 && row <= shopZoneEndRow + 2 &&
                           col >= shopZoneStartCol - 2 && col <= shopZoneEndCol + 2;
      
      // Check if tile is in a lake (with different shapes)
      const isLake = lakes.some(lake => {
        const relRow = row - lake.row;
        const relCol = col - lake.col;
        const centerRow = (lake.height || lake.size) / 2;
        const centerCol = (lake.width || lake.size) / 2;
        
        if (lake.shape === "circle") {
          const radius = Math.max(lake.width || lake.size, lake.height || lake.size) / 2;
          const dist = Math.sqrt(Math.pow(relRow - centerRow, 2) + Math.pow(relCol - centerCol, 2));
          return dist <= radius;
        } else if (lake.shape === "oval") {
          const a = (lake.width || lake.size) / 2;
          const b = (lake.height || lake.size) / 2;
          const dist = Math.pow((relCol - centerCol) / a, 2) + Math.pow((relRow - centerRow) / b, 2);
          return dist <= 1;
        } else if (lake.shape === "rectangle") {
          return relRow >= 0 && relRow < (lake.height || lake.size) &&
                 relCol >= 0 && relCol < (lake.width || lake.size);
        } else if (lake.shape === "irregular") {
          const w = lake.width || lake.size;
          const h = lake.height || lake.size;
          if (relRow >= 0 && relRow < h && relCol >= 0 && relCol < w) {
            return true;
          }
          return (relRow >= h - 2 && relRow < h && relCol >= w - 2 && relCol < w + 2) ||
                 (relRow >= h - 2 && relRow < h + 2 && relCol >= w - 2 && relCol < w);
        } else {
          const radius = (lake.size || 2) / 2;
          const dist = Math.sqrt(Math.pow(relRow - centerRow, 2) + Math.pow(relCol - centerCol, 2));
          return dist <= radius;
        }
      });
      
      // Add trees randomly (but not too many, not in starting area, not in shop zone, not in shop buffer, and not in lakes)
      const hasTree = !isShopZone && !isShopBuffer && !isLake && Math.random() < 0.12 && 
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
        autoHarvester: 0, // 0 = no harvester, 1-3 = harvester levels
        autoPlanter: 0, // 0 = no planter, 1-3 = planter levels
        planterSeedType: null, // Seed type configured for auto planter
        fertilizer: null, // null = no fertilizer, otherwise fertilizer id
        chest: null,
        tree: hasTree,
        tileType: isLake ? "lake" : (isShopZone ? "shop_zone" : "normal"), // Mark tile types
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
  if (item.type === "seed" || item.type === "sprinkler" || item.type === "chest" || item.type === "fertilizer" ||
      item.type === "auto_harvester" || item.type === "auto_planter") {
    for (let i = 0; i < state.inventory.length; i++) {
      if (state.inventory[i] && 
          state.inventory[i].type === item.type &&
          (item.type === "seed" ? state.inventory[i].crop === item.crop :
           item.type === "fertilizer" ? state.inventory[i].fertilizerType === item.fertilizerType :
           item.type === "sprinkler" ? state.inventory[i].level === item.level :
           item.type === "auto_harvester" ? state.inventory[i].level === item.level :
           item.type === "auto_planter" ? state.inventory[i].level === item.level :
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
// For area tools, checks if player is within the tool's area of effect
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
  
  // For area tools, check if the tile is within the tool's area
  // and if the player is also within that area
  const radius = toolLevel - 1;
  const frontTile = getTileInFront();
  if (!frontTile) return false;
  
  const { row: centerRow, col: centerCol } = frontTile;
  
  // Check if target tile is within the tool's area
  const tileInArea = Math.abs(tile.row - centerRow) <= radius && 
                     Math.abs(tile.col - centerCol) <= radius;
  
  // Check if player is within the tool's area
  const playerInArea = Math.abs(playerTileY - centerRow) <= radius && 
                       Math.abs(playerTileX - centerCol) <= radius;
  
  return tileInArea && playerInArea;
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
  
  // Check for tree and lake collision
  const playerTileX = Math.floor(finalX / TILE_SIZE);
  const playerTileY = Math.floor(finalY / TILE_SIZE);
  const playerTile = getTileAt(playerTileY, playerTileX);
  
  if (playerTile) {
    if (playerTile.tree || playerTile.tileType === "lake") {
      // Can't move into tree or lake, keep old position
      finalX = player.x;
      finalY = player.y;
    }
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
    if (tile) {
      if (tile.tree || tile.tileType === "lake") {
        finalX = player.x;
        finalY = player.y;
        break;
      }
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

  // Get tool level for range check
  let toolLevel = 1;
  if (item.type === "hoe") {
    toolLevel = item.level || state.hoeLevel || 1;
  } else if (item.type === "harvest" || item.type === "scythe") {
    toolLevel = item.level || state.harvestLevel || 1;
  } else if (item.type === "fertilizer_tool") {
    toolLevel = item.level || state.fertilizerToolLevel || 1;
  }

  // Check if player is within range
  if (!isWithinRange(tile, toolLevel)) {
    addLog("Muito longe! Aproxime-se mais.");
    return;
  }

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

  const item = getSelectedItem();
  
  // If removal tool is selected, prioritize removal over other interactions
  if (item && item.type === "removal_tool") {
    // Check if player is within range (removal tool doesn't need level, but check basic range)
    if (!isWithinRange(tile, 1)) {
      addLog("Muito longe! Aproxime-se mais.");
      return;
    }
    removeItem(tile);
    renderInventory();
    renderStats();
    return;
  }

  // Check for auto planter interaction (click on auto planter to configure)
  // Only if removal tool is NOT selected
  if (tile.autoPlanter > 0) {
    openPlanterMenu(tile);
    return;
  }

  // Check for chest interaction
  if (tile.chest) {
    openChest(tile.chest);
    return;
  }

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

  // Check if player is within range
  if (!isWithinRange(tile, toolLevel)) {
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
  } else if (item.type === "auto_harvester") {
    placeAutoHarvester(tile, item);
  } else if (item.type === "auto_planter") {
    placeAutoPlanter(tile, item);
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
  const tileType = tile.tileType || "normal";
  if (tileType === "shop_zone") {
    addLog("Não pode preparar o solo na zona de shops!");
    return;
  }
  
  const radius = level - 1;
  const { row, col } = tile;

  for (let r = row - radius; r <= row + radius; r++) {
    for (let c = col - radius; c <= col + radius; c++) {
      const t = getTileAt(r, c);
      if (t) {
        const tType = t.tileType || "normal";
        // Only till normal tiles, not shop zones
        if (tType === "normal") {
          t.tilled = true;
        }
      }
    }
  }
  addLog(`A enxada nivel ${level} preparou o solo!`);
}

function plantSeed(tile, item) {
  const tileType = tile.tileType || "normal";
  if (tileType === "lake" || tileType === "shop_zone") {
    addLog("Não pode plantar aqui!");
    return;
  }
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
  // Não pode plantar em cima de sprinklers, harvesters ou planters
  if (tile.sprinkler > 0 || tile.autoHarvester > 0 || tile.autoPlanter > 0) {
    addLog("Não pode plantar aqui! Há um equipamento neste espaço.");
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
    timeElapsed: 0,
    stage: 0, // 0 = recém plantado, 1 = primeira etapa, 2 = segunda etapa, 3 = pronto
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
  if (tile.crop || tile.sprinkler > 0 || tile.autoHarvester > 0 || tile.autoPlanter > 0 || tile.tilled) {
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

function placeAutoHarvester(tile, item) {
  const tileType = tile.tileType || "normal";
  if (tileType === "lake" || tileType === "shop_zone") {
    addLog("Não pode colocar harvester aqui!");
    return;
  }
  if (tile.autoHarvester > 0) {
    addLog("Já existe um auto harvester aqui.");
    return;
  }
  if (tile.crop || tile.sprinkler > 0 || tile.autoPlanter > 0 || tile.chest) {
    addLog("Não pode colocar aqui.");
    return;
  }
  
  const slotIndex = state.hotbarSelection;
  if (state.inventory[slotIndex] === null || state.inventory[slotIndex].count <= 0) {
    addLog("Você não possui auto harvesters.");
    return;
  }
  
  const level = item.level || 1;
  removeItemFromInventory(slotIndex, 1);
  tile.autoHarvester = level;
  addLog(`Auto Harvester nível ${level} colocado! Colherá automaticamente plantas prontas.`);
}

function placeAutoPlanter(tile, item) {
  const tileType = tile.tileType || "normal";
  if (tileType === "lake" || tileType === "shop_zone") {
    addLog("Não pode colocar planter aqui!");
    return;
  }
  if (tile.autoPlanter > 0) {
    addLog("Já existe um auto planter aqui.");
    return;
  }
  if (tile.crop || tile.sprinkler > 0 || tile.autoHarvester > 0 || tile.chest) {
    addLog("Não pode colocar aqui.");
    return;
  }
  
  const slotIndex = state.hotbarSelection;
  if (state.inventory[slotIndex] === null || state.inventory[slotIndex].count <= 0) {
    addLog("Você não possui auto planters.");
    return;
  }
  
  const level = item.level || 1;
  removeItemFromInventory(slotIndex, 1);
  tile.autoPlanter = level;
  tile.planterSeedType = null; // Semente configurada (null = não configurado ainda)
  addLog(`Auto Planter nível ${level} colocado! Clique nele para configurar a semente.`);
}

function removeItem(tile) {
  if (!tile) {
    addLog("Nenhum tile selecionado.");
    return;
  }
  
  let removed = false;
  let itemName = "";
  
  if (tile.sprinkler > 0) {
    const level = tile.sprinkler;
    tile.sprinkler = 0;
    removed = true;
    itemName = `Sprinkler nível ${level}`;
  } else if (tile.autoHarvester > 0) {
    const level = tile.autoHarvester;
    tile.autoHarvester = 0;
    removed = true;
    itemName = `Auto Harvester nível ${level}`;
  } else if (tile.autoPlanter > 0) {
    const level = tile.autoPlanter;
    tile.autoPlanter = 0;
    tile.planterSeedType = null;
    removed = true;
    itemName = `Auto Planter nível ${level}`;
  } else if (tile.chest) {
    // Remove chest from state.chests array
    const chestIndex = state.chests.findIndex(c => c.id === tile.chest.id);
    if (chestIndex !== -1) {
      state.chests.splice(chestIndex, 1);
    }
    tile.chest = null;
    removed = true;
    itemName = "Chest";
  }
  
  if (removed) {
    addLog(`${itemName} removido e destruído!`);
    render(); // Force re-render to show removal
  } else {
    addLog("Não há nada para remover aqui.");
  }
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
  
  // Check if there are planters that should replant automatically
  checkAndPlantAfterHarvest(tile);
  
  return true;
}

// Check and plant automatically after harvest
function checkAndPlantAfterHarvest(harvestedTile) {
  // Look for planters nearby that have seed configured
  state.farmland.forEach((planterTile) => {
    if (planterTile.autoPlanter > 0 && planterTile.planterSeedType) {
      const radius = planterTile.autoPlanter;
      const { row, col } = planterTile;
      
      // Check if harvested tile is in this planter's area
      const inArea = harvestedTile.row >= row - radius &&
                      harvestedTile.row <= row + radius &&
                      harvestedTile.col >= col - radius &&
                      harvestedTile.col <= col + radius;
      
      if (inArea && !harvestedTile.crop && !harvestedTile.sprinkler && 
          !harvestedTile.autoHarvester && !harvestedTile.autoPlanter && 
          !harvestedTile.chest && !harvestedTile.tree) {
        const seedType = planterTile.planterSeedType;
        const cropData = crops[seedType];
        
        if (cropData && state.money >= cropData.seedCost) {
          // Prepare soil if needed
          if (!harvestedTile.tilled) {
            harvestedTile.tilled = true;
          }
          
          // Plant automatically
          state.money -= cropData.seedCost;
          harvestedTile.crop = {
            type: seedType,
            timeElapsed: 0,
            stage: 0,
            ready: false,
          };
          harvestedTile.watered = false;
        }
      }
    }
  });
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
    
    const tileType = tile.tileType || "normal";

    // Base tile color based on tile type
    if (tileType === "lake") {
      // Lake - water blue with variation
      const waterVariation = Math.sin((tile.row + tile.col) * 0.5) * 0.1;
      ctx.fillStyle = `rgba(30, 144, 255, ${0.7 + waterVariation})`;
      ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
      // Add water ripple effect
      ctx.fillStyle = `rgba(100, 200, 255, ${0.3 + waterVariation * 0.2})`;
      ctx.fillRect(x + 2, y + 2, TILE_SIZE - 4, TILE_SIZE - 4);
    } else if (tileType === "shop_zone") {
      // Shop zone - decorative stone/cobblestone floor
      ctx.fillStyle = "#9ca3af";
      ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
      
      // Decorative pattern - cobblestone tiles
      const patternOffset = (tile.row + tile.col) % 2;
      if (patternOffset === 0) {
        ctx.fillStyle = "#6b7280";
        ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
      }
      
      // Add decorative stone texture lines
      ctx.strokeStyle = "#4b5563";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x, y + TILE_SIZE / 2);
      ctx.lineTo(x + TILE_SIZE, y + TILE_SIZE / 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + TILE_SIZE / 2, y);
      ctx.lineTo(x + TILE_SIZE / 2, y + TILE_SIZE);
      ctx.stroke();
      
      // Add border highlight
      ctx.strokeStyle = "#d1d5db";
      ctx.lineWidth = 1;
      ctx.strokeRect(x, y, TILE_SIZE, TILE_SIZE);
    } else if (tile.tilled) {
      // Normal farmland - tilled
      ctx.fillStyle = tile.watered ? "#5a7c3a" : "#8b6f47";
      ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
    } else {
      // Normal farmland - grass/soil
      ctx.fillStyle = "#3d2817";
      ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
    }

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
      // Calculate effective grow seconds considering fertilizer
      let effectiveGrowSeconds = crop.growSeconds;
      if (tile.fertilizer) {
        const fertilizer = fertilizers[tile.fertilizer];
        if (fertilizer) {
          effectiveGrowSeconds = Math.ceil(effectiveGrowSeconds * (1 - fertilizer.reduction));
        }
      }
      const progress = tile.crop.timeElapsed / effectiveGrowSeconds;
      const stage = tile.crop.stage || 0;
      
      if (tile.crop.ready) {
        // Fully grown - show full emoji
        ctx.fillStyle = crop.color;
        ctx.fillRect(x + 8, y + 8, TILE_SIZE - 16, TILE_SIZE - 16);
        ctx.fillStyle = "#fff";
        ctx.font = "20px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(crop.emoji, x + TILE_SIZE / 2, y + TILE_SIZE / 2);
      } else {
        // Show growth based on stage (0, 1, 2) - just a growing square, no text
        const stageSize = 8 + (stage / 3) * 24; // Size increases with stage
        ctx.fillStyle = crop.color;
        ctx.fillRect(
          x + (TILE_SIZE - stageSize) / 2,
          y + (TILE_SIZE - stageSize) / 2,
          stageSize,
          stageSize
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

    // Draw auto harvester
    if (tile.autoHarvester > 0) {
      ctx.fillStyle = "#ef4444";
      ctx.beginPath();
      ctx.arc(x + TILE_SIZE / 2, y + TILE_SIZE / 2, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#dc2626";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.fillStyle = "#fff";
      ctx.font = "16px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("🤖", x + TILE_SIZE / 2, y + TILE_SIZE / 2);
    }

    // Draw auto planter
    if (tile.autoPlanter > 0) {
      ctx.fillStyle = "#22c55e";
      ctx.beginPath();
      ctx.arc(x + TILE_SIZE / 2, y + TILE_SIZE / 2, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#16a34a";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.fillStyle = "#fff";
      ctx.font = "16px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("🌱", x + TILE_SIZE / 2, y + TILE_SIZE / 2);
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

  // Draw shop area decorations (borders, pillars, roof) - drawn after tiles
  // Shop zone: row 4-9 (6 rows), col 13-28 (15 cols)
  const shopAreaStartX = TILE_SIZE * 13 + TILE_SIZE * 0.5; // Moved half tile to the right
  const shopAreaStartY = TILE_SIZE * 4 ; // Moved 3 tiles down
  const shopAreaWidth = TILE_SIZE * 15; // 15 columns (13 to 28 inclusive)
  const shopAreaHeight = TILE_SIZE * 6- TILE_SIZE * 0.5; // 6 rows (4 to 9 inclusive)
  
  // Draw decorative wooden border around shop zone
  ctx.strokeStyle = "#8b6f47";
  ctx.lineWidth = 4;
  ctx.strokeRect(shopAreaStartX - TILE_SIZE * 0.5, shopAreaStartY - TILE_SIZE * 0.5, 
                 shopAreaWidth + TILE_SIZE, shopAreaHeight + TILE_SIZE);
  
  // Draw decorative wooden pillars/columns
  ctx.fillStyle = "#8b6f47";
  const pillarWidth = TILE_SIZE * 0.8;
  const pillarHeight = TILE_SIZE * 0.6;
  
  // Left pillars
  ctx.fillRect(shopAreaStartX - TILE_SIZE * 0.5 - pillarWidth, shopAreaStartY - TILE_SIZE * 0.5, 
               pillarWidth, pillarHeight);
  ctx.fillRect(shopAreaStartX - TILE_SIZE * 0.5 - pillarWidth, 
               shopAreaStartY + shopAreaHeight - pillarHeight + TILE_SIZE * 0.5, 
               pillarWidth, pillarHeight);
  
  // Right pillars
  ctx.fillRect(shopAreaStartX + shopAreaWidth + TILE_SIZE * 0.5, shopAreaStartY - TILE_SIZE * 0.5, 
               pillarWidth, pillarHeight);
  ctx.fillRect(shopAreaStartX + shopAreaWidth + TILE_SIZE * 0.5, 
               shopAreaStartY + shopAreaHeight - pillarHeight + TILE_SIZE * 0.5, 
               pillarWidth, pillarHeight);
  
  // Draw decorative wooden roof/awning
  const roofHeight = TILE_SIZE * 0.7 + TILE_SIZE * 0.5; // Original height + half tile
  ctx.fillStyle = "#6b5b4f";
  ctx.fillRect(shopAreaStartX - TILE_SIZE * 0.5 - pillarWidth, shopAreaStartY - TILE_SIZE * 1.2, 
               shopAreaWidth + TILE_SIZE + pillarWidth * 2, roofHeight);
  ctx.strokeStyle = "#5a4a3e";
  ctx.lineWidth = 3;
  ctx.strokeRect(shopAreaStartX - TILE_SIZE * 0.5 - pillarWidth, shopAreaStartY - TILE_SIZE * 1.2, 
                 shopAreaWidth + TILE_SIZE + pillarWidth * 2, roofHeight);
  
  // Add decorative roof tiles pattern
  ctx.fillStyle = "#7a6a5e";
  for (let x = shopAreaStartX - TILE_SIZE * 0.5 - pillarWidth; 
       x < shopAreaStartX + shopAreaWidth + TILE_SIZE * 0.5  + pillarWidth; 
       x += TILE_SIZE * 0.8) {
    ctx.fillRect(x, shopAreaStartY - TILE_SIZE * 1.2, TILE_SIZE * 0.4, roofHeight);
  }

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
          // Calculate player tile position
          const playerTileX = Math.floor(state.player.x / TILE_SIZE);
          const playerTileY = Math.floor(state.player.y / TILE_SIZE);
          
          // Check if mouse tile is within range of player (not based on facing direction)
          const distanceX = Math.abs(playerTileX - mouseTile.col);
          const distanceY = Math.abs(playerTileY - mouseTile.row);
          
          // For single-tile tools (level 1), check if adjacent or same tile
          let isInRange = false;
          if (previewLevel === 1) {
            isInRange = distanceX <= 1 && distanceY <= 1;
          } else {
            // For area tools, check if mouse tile is within the tool's area
            const radius = previewLevel - 1;
            isInRange = distanceX <= radius && distanceY <= radius;
          }
          
          if (isInRange) {
            const radius = previewLevel - 1;
            const { row, col } = mouseTile;
            
            // Draw preview area centered on mouse tile
            // Show ALL tiles in the area, not just those within player range
            // This matches how tillArea() works - it affects all tiles in the area
            for (let r = row - radius; r <= row + radius; r++) {
              for (let c = col - radius; c <= col + radius; c++) {
                const t = getTileAt(r, c);
                if (t) {
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
        // Build description with formatted grow time
        const formattedTime = formatGrowTime(crop.growSeconds);
        // Replace the time part in description with formatted time
        let processedDesc = crop.description.replace(/\d+\s*segundos/, formattedTime);
        desc = `${crop.nome}\n${processedDesc}\nVende por ${formatNumber(crop.sellPrice)} gold.`;
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
  currentShopCategory = "all"; // Reset category when opening shop
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

// Auto Planter Menu
let currentPlanterTile = null;

function openPlanterMenu(tile) {
  state.openModal = "planter_select";
  currentPlanterTile = tile;
  document.getElementById("planter-modal").style.display = "flex";
  renderPlanterMenu();
}

function closePlanterMenu() {
  state.openModal = null;
  currentPlanterTile = null;
  document.getElementById("planter-modal").style.display = "none";
}

function renderPlanterMenu() {
  const container = document.getElementById("planter-seeds");
  if (!container || !currentPlanterTile) return;
  container.innerHTML = "";
  
  const level = currentPlanterTile.autoPlanter || 1;
  const radius = level; // 1 = 1 tile radius (3x3), 2 = 2 tile radius (5x5), etc.
  const areaSize = (radius * 2 + 1) * (radius * 2 + 1);
  
  // Calculate how many tiles can be planted
  let plantableTiles = 0;
  const { row, col } = currentPlanterTile;
  for (let r = row - radius; r <= row + radius; r++) {
    for (let c = col - radius; c <= col + radius; c++) {
      const t = getTileAt(r, c);
      if (t && t !== currentPlanterTile && !t.crop && !t.sprinkler && 
          !t.autoHarvester && !t.autoPlanter && !t.chest && !t.tree && 
          t.tileType !== "lake" && t.tileType !== "shop_zone") {
        plantableTiles++;
      }
    }
  }
  
  const title = document.querySelector("#planter-modal h2");
  if (title) {
    title.textContent = `Auto Planter Nível ${level} - Área ${radius * 2 + 1}x${radius * 2 + 1}`;
  }
  
  const areaInfo = document.getElementById("planter-area-info");
  const costInfo = document.getElementById("planter-cost-info");
  if (areaInfo) {
    areaInfo.textContent = `Tiles plantáveis na área: ${plantableTiles}`;
  }
  
  Object.keys(crops).forEach((cropKey) => {
    const cropData = crops[cropKey];
    const totalCost = cropData.seedCost * plantableTiles;
    const isSelected = currentPlanterTile.planterSeedType === cropKey;
    
    const card = document.createElement("div");
    card.className = `shop-card ${isSelected ? "selected" : ""}`;
    card.style.border = isSelected ? "2px solid #22c55e" : "";
    card.innerHTML = `
      <div class="shop-card-info">
        <strong>${cropData.emoji} ${cropData.nome}</strong>
        <small>${cropData.description}</small>
        <small>Custo por semente: ${formatNumber(cropData.seedCost)} gold</small>
        <small style="color: ${state.money >= totalCost ? '#22c55e' : '#ef4444'}; font-weight: 600;">
          Custo total para ${plantableTiles} tiles: ${formatNumber(totalCost)} gold ${state.money < totalCost ? '(Dinheiro insuficiente)' : ''}
        </small>
        ${isSelected ? '<small style="color: #22c55e; font-weight: 600;">✓ Configurado - Plantará automaticamente quando colhido</small>' : ''}
      </div>
    `;
    
    const btn = document.createElement("button");
    const hasExistingConfig = currentPlanterTile.planterSeedType !== null;
    btn.textContent = isSelected ? "Desconfigurar" : (hasExistingConfig ? "Trocar Configuração" : "Configurar e Plantar");
    // Permitir desconfigurar ou trocar sempre, mesmo sem tiles vazias
    // Só exigir tiles vazias e dinheiro na primeira configuração
    btn.disabled = !isSelected && !hasExistingConfig && (plantableTiles === 0 || state.money < totalCost);
    btn.onclick = () => {
      if (isSelected) {
        currentPlanterTile.planterSeedType = null;
        addLog("Auto Planter desconfigurado.");
        closePlanterMenu();
      } else {
        // Se já existe uma configuração, apenas trocar sem replantar tudo
        if (hasExistingConfig) {
          currentPlanterTile.planterSeedType = cropKey;
          addLog(`${cropData.nome} configurado! O Auto Planter replantará ${cropData.nome} automaticamente quando as plantas forem colhidas.`);
          renderStats();
          closePlanterMenu();
        } else {
          // Se não há configuração, plantar tudo de uma vez (comportamento original)
          if (state.money >= totalCost && plantableTiles > 0) {
            // Plantar tudo de uma vez
            let planted = 0;
            let totalSpent = 0;
            const { row, col } = currentPlanterTile;
            for (let r = row - radius; r <= row + radius; r++) {
              for (let c = col - radius; c <= col + radius; c++) {
                const t = getTileAt(r, c);
                if (t && t !== currentPlanterTile && !t.crop && !t.sprinkler && 
                    !t.autoHarvester && !t.autoPlanter && !t.chest && !t.tree && 
                    t.tileType !== "lake" && t.tileType !== "shop_zone") {
                  // Prepare soil if needed
                  if (!t.tilled) {
                    t.tilled = true;
                  }
                  // Plant
                  state.money -= cropData.seedCost;
                  totalSpent += cropData.seedCost;
                  t.crop = {
                    type: cropKey,
                    timeElapsed: 0,
                    stage: 0,
                    ready: false,
                  };
                  t.watered = false;
                  planted++;
                }
              }
            }
            currentPlanterTile.planterSeedType = cropKey;
            addLog(`${cropData.nome} configurado! Plantou ${planted} tiles por ${formatNumber(totalSpent)} gold. Replantará automaticamente quando colhido.`);
            renderStats();
            closePlanterMenu();
          } else {
            addLog("Dinheiro insuficiente para plantar tudo! Não foi configurado.");
          }
        }
      }
    };
    card.appendChild(btn);
    container.appendChild(card);
  });
}

function plantAllWithPlanter(planterTile, cropType, seedCost, maxTiles) {
  if (!planterTile.planterSeedType || planterTile.planterSeedType !== cropType) {
    return;
  }
  
  const level = planterTile.autoPlanter || 1;
  const radius = level;
  const { row, col } = planterTile;
  let planted = 0;
  let totalCost = 0;
  
  for (let r = row - radius; r <= row + radius; r++) {
    for (let c = col - radius; c <= col + radius; c++) {
      if (planted >= maxTiles) break;
      
      const t = getTileAt(r, c);
      if (t && t !== planterTile && !t.crop && !t.sprinkler && 
          !t.autoHarvester && !t.autoPlanter && !t.chest && !t.tree && 
          t.tileType !== "lake" && t.tileType !== "shop_zone") {
        // Prepare soil if needed
        if (!t.tilled) {
          t.tilled = true;
        }
        
        // Plant automatically
        if (state.money >= seedCost) {
          state.money -= seedCost;
          totalCost += seedCost;
          t.crop = {
            type: cropType,
            timeElapsed: 0,
            stage: 0,
            ready: false,
          };
          t.watered = false;
          planted++;
        }
      }
    }
    if (planted >= maxTiles) break;
  }
  
  if (planted > 0) {
    addLog(`Auto Planter plantou ${planted} ${crops[cropType].nome} automaticamente!`);
    renderStats();
  }
}

// Shop category filter
let currentShopCategory = "all";

function renderShop() {
  const shop = document.getElementById("shop-items");
  const shopTabs = document.getElementById("shop-tabs");
  const shopTitle = document.querySelector("#shop-modal h2");
  shop.innerHTML = "";
  
  // Get the correct shop items based on type
  let items = [];
  let title = "Loja";
  let showTabs = false;
  let categories = [];
  
  if (state.currentShopType === "seed_shop") {
    items = [...seedsShop, ...fertilizerShop];
    title = "Loja de Sementes";
    showTabs = true;
    categories = [
      { id: "all", label: "Todos", emoji: "📦" },
      { id: "seeds", label: "Sementes", emoji: "🌱" },
      { id: "fertilizers", label: "Fertilizantes", emoji: "🌿" },
    ];
  } else if (state.currentShopType === "tool_shop") {
    items = toolsShop;
    title = "Ferreiro";
    showTabs = true;
    categories = [
      { id: "all", label: "Todos", emoji: "📦" },
      { id: "tools", label: "Ferramentas", emoji: "🔨" },
      { id: "automation", label: "Automação", emoji: "🤖" },
    ];
  } else if (state.currentShopType === "block_shop") {
    items = blocksShop;
    title = "Carpinteiro";
    showTabs = false;
  }
  
  if (shopTitle) {
    shopTitle.textContent = title;
  }
  
  // Render tabs for shops that need them
  if (showTabs && shopTabs) {
    shopTabs.style.display = "flex";
    shopTabs.innerHTML = "";
    
    categories.forEach((cat) => {
      const tab = document.createElement("button");
      tab.className = `shop-tab ${currentShopCategory === cat.id ? "active" : ""}`;
      tab.innerHTML = `${cat.emoji} ${cat.label}`;
      tab.onclick = () => {
        currentShopCategory = cat.id;
        renderShop();
      };
      shopTabs.appendChild(tab);
    });
    
    // Filter items by category
    if (state.currentShopType === "seed_shop") {
      if (currentShopCategory === "seeds") {
        items = items.filter(item => item.type === "seed");
      } else if (currentShopCategory === "fertilizers") {
        items = items.filter(item => item.type === "fertilizer");
      }
    } else if (state.currentShopType === "tool_shop") {
      if (currentShopCategory === "tools") {
        items = items.filter(item => 
          item.type === "hoe" || item.type === "harvest" || item.type === "fertilizer_tool" || item.type === "removal_tool"
        );
      } else if (currentShopCategory === "automation") {
        items = items.filter(item => 
          item.type === "sprinkler" || item.type === "auto_harvester" || item.type === "auto_planter"
        );
      }
    }
  } else if (shopTabs) {
    shopTabs.style.display = "none";
    currentShopCategory = "all";
  }
  
  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "shop-card";
    // Process description for seeds to format grow time
    let processedDesc = item.desc;
    if (item.type === "seed" && item.crop && crops[item.crop]) {
      const crop = crops[item.crop];
      const formattedTime = formatGrowTime(crop.growSeconds);
      processedDesc = item.desc.replace(/\d+\s*segundos/, formattedTime);
    }
    card.innerHTML = `
      <div class="shop-card-info">
        <strong>${item.emoji} ${item.label} - ${formatNumber(item.price)} gold</strong>
        <small>${processedDesc}</small>
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
  } else if (item.type === "auto_harvester") {
    const newItem = {
      type: "auto_harvester",
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
  } else if (item.type === "auto_planter") {
    const newItem = {
      type: "auto_planter",
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
  } else if (item.type === "removal_tool") {
    const newItem = {
      type: "removal_tool",
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

function toggleLog() {
  state.logVisible = !state.logVisible;
  const logPanel = document.querySelector(".log-panel");
  if (logPanel) {
    logPanel.style.display = state.logVisible ? "block" : "none";
  }
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
          if (t && t.tilled && !t.sprinkler && !t.autoHarvester && !t.autoPlanter) {
            t.watered = true;
          }
        }
      }
    }
  });
}

// Auto Harvester - colhe plantas prontas automaticamente e vende tudo
function applyAutoHarvesters() {
  state.farmland.forEach((tile) => {
    if (tile.autoHarvester > 0) {
      const radius = tile.autoHarvester; // 1 = 1 tile radius (3x3), 2 = 2 tile radius (5x5), etc.
      const { row, col } = tile;
      let totalEarned = 0;
      let harvestedCount = 0;
      const moneyBefore = state.money;
      
      for (let r = row - radius; r <= row + radius; r++) {
        for (let c = col - radius; c <= col + radius; c++) {
          const t = getTileAt(r, c);
          // Não colher no próprio tile do harvester
          // Só colher se o tile estiver preparado e a planta estiver pronta
          if (t && t !== tile && t.tilled && t.crop && t.crop.ready) {
            const cropData = crops[t.crop.type];
            if (cropData) {
              const harvestLevel = state.harvestLevel;
              const qualityBonus = 1 + (harvestLevel - 1) * 0.15;
              const payout = Math.round(cropData.sellPrice * qualityBonus);
              state.money += payout;
              totalEarned += payout;
              harvestedCount++;
              
              // Remove crop
              t.crop = null;
              t.fertilizer = null;
              t.tilled = false;
              t.watered = false;
              
              // Check if there are planters that should replant automatically
              checkAndPlantAfterHarvest(t);
            }
          }
        }
      }
      
      if (harvestedCount > 0) {
        addLog(`Auto Harvester colheu ${harvestedCount} planta(s) e vendeu por ${formatNumber(totalEarned)} gold!`);
        renderStats();
      }
    }
  });
}

function progressDay() {
  // Day progression disabled - crops now grow in real-time seconds
  addLog("Sistema de dias desabilitado. As plantas crescem em tempo real!");
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
      else if (state.openModal === "planter_select") closePlanterMenu();
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
  if (key === "l") {
    e.preventDefault();
    toggleLog();
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
document.getElementById("close-planter").onclick = closePlanterMenu;

// Save/Load button handlers
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
      else if (state.openModal === "planter_select") closePlanterMenu();
    }

    // Initialize farm and add initial items
    initFarm();

    // Reset camera
    state.camera.x = state.player.x - canvas.width / 2 + PLAYER_SIZE / 2;
    state.camera.y = state.player.y - canvas.height / 2 + PLAYER_SIZE / 2;

    // Only clamp if world is larger than canvas (keep player centered)
    const worldWidth = GRID_SIZE * TILE_SIZE;
    const worldHeight = GRID_SIZE * TILE_SIZE;
    if (worldWidth > canvas.width) {
      const maxCameraX = worldWidth - canvas.width;
      state.camera.x = Math.max(0, Math.min(maxCameraX, state.camera.x));
    }
    if (worldHeight > canvas.height) {
      const maxCameraY = worldHeight - canvas.height;
      state.camera.y = Math.max(0, Math.min(maxCameraY, state.camera.y));
    }

    // Refresh UI
    renderStats();
    renderHotbar();
    renderLog();
    renderInventory();
    
    // Save new game immediately
    saveGame();
    
    addLog("Novo jogo iniciado!");
  }
}

// Button handlers will be set up in bootstrap() after DOM is ready

// Game Loop
let lastCropUpdateTime = Date.now();

function gameLoop() {
  if (!state.openModal) {
    updatePlayer();
  }
  
  // Update crop growth every second
  const currentTime = Date.now();
  if (currentTime - lastCropUpdateTime >= 1000) {
    updateCropGrowth();
    lastCropUpdateTime = currentTime;
  }
  
  render();
  requestAnimationFrame(gameLoop);
}

// Update crop growth
function updateCropGrowth() {
  // Apply sprinklers first
  applySprinklers();
  
  // Apply auto harvesters (colhem plantas prontas)
  applyAutoHarvesters();
  
  // Update crop growth (every second)
  state.farmland.forEach((tile) => {
    if (!tile.crop) return;
    
    const cropData = crops[tile.crop.type];
    if (!cropData) return;
    
    // Calculate effective grow seconds considering fertilizer
    let effectiveGrowSeconds = cropData.growSeconds;
    if (tile.fertilizer) {
      const fertilizer = fertilizers[tile.fertilizer];
      if (fertilizer) {
        effectiveGrowSeconds = Math.ceil(effectiveGrowSeconds * (1 - fertilizer.reduction));
      }
    }
    
    // Only grow if watered
    if (tile.watered && !tile.crop.ready) {
      tile.crop.timeElapsed = (tile.crop.timeElapsed || 0) + 1;
      
      // Calculate stage based on time elapsed (3 stages: 0, 1, 2, 3 = ready)
      const secondsPerStage = effectiveGrowSeconds / 3;
      const newStage = Math.floor(tile.crop.timeElapsed / secondsPerStage);
      
      // If stage changed, remove water
      if (newStage > (tile.crop.stage || 0)) {
        tile.crop.stage = newStage;
        tile.watered = false; // Remove water when stage changes
        if (tile.crop.stage < 3) {
          addLog(`${cropData.nome} cresceu para etapa ${tile.crop.stage + 1}/3! Precisa regar novamente.`);
        }
      }
      
      // Check if ready (stage 3)
      if (tile.crop.stage >= 3 || tile.crop.timeElapsed >= effectiveGrowSeconds) {
        tile.crop.ready = true;
        tile.crop.stage = 3;
        addLog(`${cropData.nome} está pronto para colher!`);
      }
    }
  });
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
        autoHarvester: tile.autoHarvester || 0,
        autoPlanter: tile.autoPlanter || 0,
        planterSeedType: tile.planterSeedType || null,
        fertilizer: tile.fertilizer,
        chest: tile.chest ? {
          id: tile.chest.id,
          items: tile.chest.items
        } : null,
        tree: tile.tree,
        tileType: tile.tileType || "normal",
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
          crop: null,
          sprinkler: tileData.sprinkler || 0,
          autoHarvester: tileData.autoHarvester || 0,
          autoPlanter: tileData.autoPlanter || 0,
          planterSeedType: tileData.planterSeedType || null,
          fertilizer: tileData.fertilizer || null,
          chest: null,
          tree: tileData.tree || false,
          tileType: tileData.tileType || "normal",
        };
        
        // Migrate old crop format (daysWatered) to new format (timeElapsed, stage)
        if (tileData.crop) {
          if (tileData.crop.daysWatered !== undefined) {
            // Old format - convert to new format
            const cropData = crops[tileData.crop.type];
            if (cropData) {
              const oldGrowDays = cropData.growDays || cropData.growSeconds || 30;
              const progress = tileData.crop.daysWatered / oldGrowDays;
              const newGrowSeconds = cropData.growSeconds || 30;
              tile.crop = {
                type: tileData.crop.type,
                timeElapsed: Math.floor(progress * newGrowSeconds),
                stage: Math.min(3, Math.floor(progress * 3)),
                ready: tileData.crop.ready || false,
              };
            } else {
              tile.crop = tileData.crop;
            }
          } else {
            // New format - use as is
            tile.crop = {
              type: tileData.crop.type,
              timeElapsed: tileData.crop.timeElapsed || 0,
              stage: tileData.crop.stage || 0,
              ready: tileData.crop.ready || false,
            };
          }
        }
        
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
  
  // Set up button handlers
  const newGameBtn = document.getElementById("new-game-btn");
  if (newGameBtn) {
    newGameBtn.onclick = startNewGame;
  }
  const saveBtn = document.getElementById("save-btn");
  if (saveBtn) {
    saveBtn.onclick = () => openSaveSlotsModal("save");
  }
  const loadBtn = document.getElementById("load-btn");
  if (loadBtn) {
    loadBtn.onclick = () => openSaveSlotsModal("load");
  }
  
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
