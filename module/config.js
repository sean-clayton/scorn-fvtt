/** @name CONFIG.Scorn */
export const Scorn = {};

Scorn.characterGenerator = {
  ability: "3d6",
  hitProtection: "1d6",
  gold: "3d6",
  name: {
    text: "{name} {surname}",
    items: {
      name: "scorn.character-creation-tables-srd;Names",
      surname: "scorn.character-traits;Surnames",
    },
  },
  background: "scorn.character-traits;Background",
  startingItems: [
    "scorn.expeditionary-gear;Rations;1",
    "scorn.expeditionary-gear;Torch;1",
  ],
  startingGear: [
    "scorn.character-creation-tables-srd;Starting Gear - Armor",
    "scorn.character-creation-tables-srd;Starting Gear - Helmet & Shields",
    "scorn.character-creation-tables-srd;Starting Gear - Weapons",
    "scorn.character-creation-tables-srd;Starting Gear - Expeditionary Gear",
    "scorn.character-creation-tables-srd;Starting Gear - Tools",
    "scorn.character-creation-tables-srd;Starting Gear - Trinkets",
    "scorn.character-creation-tables-srd;Starting Gear - Bonus Item",
  ],
  biography: {
    text: "I have a <strong>{physique}</strong> physique, <strong>{skin}</strong> skin, <strong>{hair}</strong> hair, and a <strong>{face}</strong> face. I speak in a <strong>{speech}</strong> manner and wear <strong>{clothing}</strong> clothing. I am <strong>{vice}</strong> yet <strong>{virtue}</strong>, and I am generally regarded as <strong>{reputation}</strong>. I have had the misfortune of being <strong>{misfortune}</strong>. I am <strong>{age}</strong> years old.",
    age: "2d20 + 10",
    items: {
      physique: "scorn.character-traits;Physique",
      skin: "scorn.character-traits;Skin",
      hair: "scorn.character-traits;Hair",
      face: "scorn.character-traits;Face",
      speech: "scorn.character-traits;Speech",
      clothing: "scorn.character-traits;Clothing",
      vice: "scorn.character-traits;Vice",
      virtue: "scorn.character-traits;Virtue",
      misfortune: "scorn.character-traits;Misfortunes",
      reputation: "scorn.character-traits;Reputation",
    },
  },
};

CONFIG.Scorn = Scorn;
