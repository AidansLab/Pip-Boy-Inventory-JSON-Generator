const weaponPresets = [
  {
    "name": "Shishkebab",
    "type": "weapon",
    "quantity": 1,
    "effect": "A flaming sword forged from a motorcycle gas tank and lawnmower blade.",
    "ammoType": null,
    "image": "Shishkebab_img.js",
    "damages": [
      {
        "type": "attack",
        "value": "13"
      },
      {
        "type": "fire",
        "value": "13"
      }
    ],
    "stats": {
      "Speed": "Medium",
      "Weight": "3.0",
      "Value": "100"
    }
  },
  {
    "name": "Laser Musket",
    "type": "weapon",
    "quantity": 1,
    "effect": "A powerful energy weapon. Crank to increase charge.",
    "ammoType": "Fusion Cell",
    "damages": [
      {
        "type": "energy",
        "value": "35"
      }
    ],
    "stats": {
      "Fusion Cell": "1",
      "Fire Rate": "1",
      "Range": "150",
      "Accuracy": "70",
      "Weight": "12.0",
      "Value": "500"
    }
  },
  {
    "name": "Laser Pistol (GRA)",
    "type": "weapon",
    "quantity": 1,
    "effect": "",
    "stats": {
      "Fire Rate": "50",
      "Range": "104",
      "Weight": "6.7",
      "Value": "427"
    },
    "damages": [
      {
        "type": "energy",
        "value": "44"
      }
    ],
    "ammoType": "Fusion Cell",
    "image": "LaserPistol_img.js"
  },
  {
    "name": "Plasma Rifle",
    "type": "weapon",
    "quantity": 1,
    "effect": "A multi-damage weapon firing bolts of superheated plasma.",
    "ammoType": "Plasma Cartridge",
    "damages": [
      {
        "type": "attack",
        "value": "15"
      },
      {
        "type": "energy",
        "value": "15"
      },
      {
        "type": "fire",
        "value": "10"
      }
    ],
    "stats": {
      "Plasma Cartridge": "1",
      "Fire Rate": "33",
      "Range": "95",
      "Accuracy": "71",
      "Weight": "3.9",
      "Value": "157"
    }
  },
  {
    "name": "Classic 10mm Pistol",
    "type": "weapon",
    "quantity": 1,
    "effect": "",
    "stats": {
      "Weight": "4.6",
      "Value": "50",
      "Fire Rate": "41",
      "Range": "119",
      "Magazine Size": "12"
    },
    "damages": [
      {
        "type": "attack",
        "value": "28"
      }
    ],
    "ammoType": "10mm Round"
  },
  {
    "name": "Combat Shotgun",
    "type": "weapon",
    "quantity": 1,
    "effect": "",
    "stats": {
      "Weight": "7",
      "Value": "65",
      "Fire Rate": "20",
      "Range": "47",
      "Magazine Size": "8"
    },
    "damages": [
      {
        "type": "attack",
        "value": "50"
      }
    ],
    "ammoType": "Shotgun Shell"
  },
  {
    "name": "Kellogg's Pistol",
    "type": "weapon",
    "quantity": 1,
    "effect": "Refills your Action Points on a Critical Hit",
    "stats": {
      "Weight": "4.3",
      "Value": "449",
      "Fire Rate": "6",
      "Range": "119",
      "Magazine Size": "6"
    },
    "damages": [
      {
        "type": "attack",
        "value": "48"
      }
    ],
    "ammoType": ".44 Round"
  },
  {
    "name": "Minigun",
    "type": "weapon",
    "quantity": 1,
    "effect": "",
    "stats": {
      "Weight": "27.4",
      "Value": "382",
      "Fire Rate": "272",
      "Range": "131",
      "Magazine Size": "500"
    },
    "damages": [
      {
        "type": "attack",
        "value": "8"
      }
    ],
    "ammoType": "5mm Round"
  },
  {
    "name": "Wazer Wifle",
    "type": "weapon",
    "quantity": 1,
    "effect": "Unlimited Ammo Capacity",
    "stats": {
      "Weight": "5.8",
      "Value": "329",
      "Fire Rate": "90",
      "Range": "203",
      "Magazine Size": "INF"
    },
    "damages": [
      {
        "type": "energy",
        "value": "20"
      }
    ],
    "ammoType": "None"
  }
,
  {
    "name": "New Weapon",
    "type": "weapon",
    "quantity": 1,
    "effect": "",
    "stats": {
      "Weight": "1.0",
      "Value": "10",
      "Fire Rate": "10",
      "Range": "50"
    },
    "damages": [
      {
        "type": "attack",
        "value": "5"
      }
    ],
    "ammoType": "None"
  }
];