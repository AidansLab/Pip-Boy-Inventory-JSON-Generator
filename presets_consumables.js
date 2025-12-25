const consumablePresets = [
  {
    "name": "Stimpak",
    "type": "consumable",
    "quantity": 1,
    "effect": "Restores 30% of your health.",
    "sounds": [
      "Stimpak.wav"
    ],
    "image": "Stimpak_img.js",
    "stats": {
      "Health": "30%",
      "Weight": "0.1",
      "Value": "48"
    }
  },
  {
    "name": "RadAway",
    "type": "consumable",
    "quantity": 1,
    "effect": "Removes 300 points of radiation over time.",
    "sounds": [
      "Radaway.wav"
    ],
    "image": "Radaway_img.js",
    "stats": {
      "Rads": {
        "value": "-300",
        "isTimed": true
      },
      "Weight": "0.1",
      "Value": "80"
    }
  },
  {
    "name": "Rad-X",
    "type": "consumable",
    "quantity": 1,
    "effect": "Increases radiation resistance by 75 for 3 minutes.",
    "sounds": [
      "RadX_01.wav",
      "RadX_02.wav"
    ],
    "image": "Rad-X_img.js",
    "stats": {
      "Rad Resist": {
        "value": "75",
        "isTimed": true
      },
      "Weight": "0.1",
      "Value": "40"
    }
  },
  {
    "name": "Nuka-Cola",
    "type": "consumable",
    "quantity": 1,
    "effect": "Refreshing! Restores 20 HP and provides a small AP boost.",
    "sounds": [
      "NukaCola.wav"
    ],
    "image": "NukaCola_img.js",
    "stats": {
      "Health": "20",
      "AP": "10",
      "Rads": "5",
      "Weight": "1.0",
      "Value": "20"
    }
  },
  {
    "name": "Purified Water",
    "type": "consumable",
    "quantity": 1,
    "effect": "",
    "stats": {
      "Health": "40",
      "Weight": "1.0",
      "Value": "20"
    },
    "sounds": [
      "Soda_01.wav",
      "Soda_02.wav",
      "Soda_03.wav"
    ],
    "image": "PurifiedWater_img.js"
  },
  {
    "name": "Mentats",
    "type": "consumable",
    "quantity": 1,
    "effect": "",
    "stats": {
      "INT": {
        "value": "2",
        "isTimed": true
      },
      "PER": {
        "value": "2",
        "isTimed": true
      },
      "CHA": {
        "value": "-1",
        "isTimed": true
      },
      "Weight": "0.1",
      "Value": "50"
    },
    "sounds": [
      "RadX_01.wav",
      "RadX_02.wav"
    ],
    "image": "Mentats_img.js"
  },
  {
    "name": "Jet",
    "type": "consumable",
    "quantity": 1,
    "effect": "",
    "stats": {
      "MAX AP": "30",
      "Weight": "0.5",
      "Value": "20"
    },
    "sounds": [
      "Jet_01.wav",
      "Jet_02.wav"
    ],
    "image": "Jet_img.js"
  },
  {
    "name": "Sugar Bombs",
    "type": "consumable",
    "quantity": 1,
    "effect": "",
    "stats": {
      "Health": "15",
      "Rads": "7",
      "Weight": "0.5",
      "Value": "11"
    },
    "sounds": [
      "Eating.wav"
    ],
    "image": "SugarBombs_img.js"
  },
  {
    "name": "Bottlecaps",
    "type": "consumable",
    "quantity": 1,
    "effect": "",
    "stats": {
      "Weight": "0",
      "Value": "62"
    },
    "image": "Bottlecap_img.js"
  },
  {
    "name": ".44 Round",
    "type": "",
    "quantity": 48,
    "effect": "",
    "stats": {
      "Value": "3"
    }
  },
  {
    "name": "10mm Round",
    "type": "",
    "quantity": 456,
    "effect": "",
    "stats": {
      "Value": "2"
    }
  },
  {
    "name": "5mm Round",
    "type": "",
    "quantity": 1042,
    "effect": "",
    "stats": {
      "Value": "1"
    }
  },
  {
    "name": "Fusion Cell",
    "type": "",
    "quantity": 1,
    "effect": "",
    "stats": {
      "Value": "3"
    }
  },
  {
    "name": "Shotgun Shell",
    "type": "",
    "quantity": 107,
    "effect": "",
    "stats": {
      "Value": "3"
    }
  }
,
  {
    "name": "Stimpak",
    "type": "consumable",
    "quantity": 1,
    "effect": "Restores 30% of your health.",
    "sounds": [
      "Stimpak.wav"
    ],
    "image": "Stimpak_img.js",
    "stats": {
      "Health": "30%",
      "Weight": "0.1",
      "Value": "48"
    }
  }
];

