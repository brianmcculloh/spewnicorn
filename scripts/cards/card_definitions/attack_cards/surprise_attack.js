export default {
  id: "surprise_attack",
  name: "Surprise Attack",
  type: "attack",
  target: "monster",
  mana: 1,
  tier: "uncommon",
  weight: 7,
  dmg: [2, 3, 4],
  sound: "attack9",
  draw: {
    dmg: [2],
    actions: [{ action: "addCard", value: 1, what: "slash", to: "handCards" }],
  },
  slots: 1,
  shardUpgrades: {
    draw: {
      dmg: [4],
      actions: [
        {
          action: "addCard",
          value: 2,
          what: "slash",
          to: "handCards",
          with: ["flame"],
        },
      ],
    },
  },
};
