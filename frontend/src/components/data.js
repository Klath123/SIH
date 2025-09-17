// data.js

export const geofencedRegions = [
  // 1 Kaziranga NP (detailed polygon)
  {
    id: 1,
    name: "Kaziranga National Park - Core Zone",
    coordinates: [
      [26.57, 93.15],
      [26.59, 93.18],
      [26.62, 93.21],
      [26.65, 93.25],
      [26.68, 93.29],
      [26.70, 93.33],
      [26.68, 93.37],
      [26.64, 93.40],
      [26.60, 93.38],
      [26.56, 93.34],
      [26.54, 93.29],
      [26.55, 93.22],
    ],
  },

  // 2 Majuli Island (river island)
  {
    id: 2,
    name: "Majuli Island - River Zone",
    coordinates: [
      [26.98, 94.19],
      [26.95, 94.22],
      [26.92, 94.26],
      [26.90, 94.30],
      [26.88, 94.28],
      [26.86, 94.24],
      [26.88, 94.20],
      [26.92, 94.16],
      [26.96, 94.15],
    ],
  },

  // 3 Manas National Park
  {
    id: 3,
    name: "Manas National Park",
    coordinates: [
      [26.75, 91.00],
      [26.78, 91.05],
      [26.82, 91.08],
      [26.86, 91.06],
      [26.88, 91.02],
      [26.86, 90.98],
      [26.82, 90.95],
      [26.78, 90.96],
      [26.74, 90.98],
    ],
  },

  // 4 Nameri National Park
  {
    id: 4,
    name: "Nameri National Park",
    coordinates: [
      [26.88, 92.94],
      [26.91, 92.98],
      [26.95, 93.02],
      [26.98, 93.01],
      [26.99, 92.97],
      [26.96, 92.92],
      [26.92, 92.90],
      [26.89, 92.91],
    ],
  },

  // 5 Orang National Park
  {
    id: 5,
    name: "Orang National Park",
    coordinates: [
      [26.47, 91.68],
      [26.50, 91.72],
      [26.53, 91.75],
      [26.55, 91.71],
      [26.54, 91.67],
      [26.51, 91.64],
      [26.48, 91.65],
    ],
  },

  // 6 Dibru-Saikhowa National Park
  {
    id: 6,
    name: "Dibru-Saikhowa National Park",
    coordinates: [
      [27.34, 95.18],
      [27.36, 95.21],
      [27.38, 95.25],
      [27.40, 95.28],
      [27.39, 95.30],
      [27.36, 95.29],
      [27.33, 95.25],
      [27.31, 95.20],
    ],
  },

  // 7 Shillong (city)
  {
    id: 7,
    name: "Shillong - City Area",
    coordinates: [
      [25.58, 91.88],
      [25.60, 91.90],
      [25.62, 91.93],
      [25.61, 91.96],
      [25.59, 91.98],
      [25.56, 91.96],
      [25.54, 91.93],
      [25.55, 91.90],
    ],
  },

  // 8 Cherrapunji / Sohra (waterfalls & living root bridges)
  {
    id: 8,
    name: "Cherrapunji (Sohra)",
    coordinates: [
      [25.27, 91.71],
      [25.29, 91.74],
      [25.31, 91.77],
      [25.33, 91.76],
      [25.34, 91.73],
      [25.32, 91.70],
      [25.29, 91.69],
      [25.27, 91.70],
    ],
  },

  // 9 Mawlynnong (Asia's cleanest village)
  {
    id: 9,
    name: "Mawlynnong Village",
    coordinates: [
      [25.11, 92.07],
      [25.12, 92.09],
      [25.14, 92.10],
      [25.15, 92.08],
      [25.14, 92.05],
      [25.12, 92.04],
    ],
  },

  // 10 Dawki (Umngot River)
  {
    id: 10,
    name: "Dawki (Umngot River)",
    coordinates: [
      [25.17, 92.43],
      [25.18, 92.45],
      [25.20, 92.47],
      [25.21, 92.46],
      [25.20, 92.44],
      [25.18, 92.42],
    ],
  },

  // 11 Umiam/Barapani Lake
  {
    id: 11,
    name: "Umiam Lake (Barapani)",
    coordinates: [
      [25.67, 91.90],
      [25.69, 91.92],
      [25.71, 91.95],
      [25.72, 91.98],
      [25.70, 91.99],
      [25.68, 91.97],
      [25.66, 91.94],
    ],
  },

  // 12 Laitlum Canyons (Shillong)
  {
    id: 12,
    name: "Laitlum Canyons",
    coordinates: [
      [25.55, 91.58],
      [25.57, 91.60],
      [25.59, 91.63],
      [25.60, 91.61],
      [25.58, 91.59],
      [25.56, 91.57],
    ],
  },

  // 13 Nohkalikai Falls
  {
    id: 13,
    name: "Nohkalikai Falls",
    coordinates: [
      [25.28, 91.72],
      [25.29, 91.74],
      [25.30, 91.76],
      [25.30, 91.73],
      [25.29, 91.71],
      [25.28, 91.71],
    ],
  },

  // 14 Elephant Falls (Shillong)
  {
    id: 14,
    name: "Elephant Falls",
    coordinates: [
      [25.56, 91.87],
      [25.57, 91.88],
      [25.58, 91.89],
      [25.57, 91.90],
      [25.56, 91.89],
      [25.55, 91.88],
    ],
  },

  // 15 Lakhimpur / Tezpur area (Assam tourist hub)
  {
    id: 15,
    name: "Tezpur / Brahmaputra Bend",
    coordinates: [
      [26.63, 92.79],
      [26.65, 92.82],
      [26.67, 92.85],
      [26.66, 92.87],
      [26.64, 92.85],
      [26.62, 92.81],
    ],
  },

  // 16 Sela Pass / Tawang approaches
  {
    id: 16,
    name: "Sela Pass Area (Tawang region)",
    coordinates: [
      [27.44, 92.02],
      [27.46, 92.05],
      [27.48, 92.08],
      [27.47, 92.11],
      [27.45, 92.10],
      [27.43, 92.07],
    ],
  },

  // 17 Tawang Monastery
  {
    id: 17,
    name: "Tawang Monastery",
    coordinates: [
      [27.59, 91.87],
      [27.60, 91.89],
      [27.62, 91.90],
      [27.61, 91.92],
      [27.59, 91.91],
      [27.58, 91.89],
    ],
  },

  // 18 Ziro Valley (Arunachal)
  {
    id: 18,
    name: "Ziro Valley",
    coordinates: [
      [27.63, 93.82],
      [27.65, 93.85],
      [27.67, 93.87],
      [27.66, 93.90],
      [27.64, 93.88],
      [27.62, 93.85],
      [27.61, 93.83],
    ],
  },

  // 19 Dirang Valley
  {
    id: 19,
    name: "Dirang Valley",
    coordinates: [
      [27.44, 92.95],
      [27.46, 92.97],
      [27.48, 93.00],
      [27.47, 93.02],
      [27.45, 93.01],
      [27.43, 92.98],
    ],
  },

  // 20 Bomdila
  {
    id: 20,
    name: "Bomdila - Viewpoint",
    coordinates: [
      [27.25, 92.45],
      [27.27, 92.47],
      [27.29, 92.49],
      [27.28, 92.51],
      [27.26, 92.50],
      [27.24, 92.48],
    ],
  },

  // 21 Gurudongmar Lake (North Sikkim)
  {
    id: 21,
    name: "Gurudongmar Lake",
    coordinates: [
      [27.68, 88.17],
      [27.69, 88.19],
      [27.70, 88.21],
      [27.69, 88.23],
      [27.68, 88.22],
      [27.67, 88.20],
    ],
  },

  // 22 Tsomgo (Changu) Lake
  {
    id: 22,
    name: "Tsomgo / Changu Lake",
    coordinates: [
      [27.33, 88.61],
      [27.34, 88.63],
      [27.35, 88.65],
      [27.34, 88.66],
      [27.33, 88.65],
      [27.32, 88.63],
    ],
  },

  // 23 Yumthang Valley (Sikkim)
  {
    id: 23,
    name: "Yumthang Valley",
    coordinates: [
      [27.64, 88.68],
      [27.66, 88.70],
      [27.68, 88.71],
      [27.69, 88.70],
      [27.67, 88.68],
      [27.65, 88.67],
    ],
  },

  // 24 Gangtok (city)
  {
    id: 24,
    name: "Gangtok - City / Ridge",
    coordinates: [
      [27.33, 88.61],
      [27.35, 88.63],
      [27.36, 88.65],
      [27.35, 88.67],
      [27.33, 88.66],
      [27.32, 88.64],
    ],
  },

  // 25 Nathula Pass (Sikkim - Indo-China border road)
  {
    id: 25,
    name: "Nathula Pass Area",
    coordinates: [
      [27.40, 88.95],
      [27.41, 88.97],
      [27.43, 88.99],
      [27.42, 89.01],
      [27.40, 89.00],
      [27.39, 88.98],
    ],
  },

  // 26 Pelling (Sikkim)
  {
    id: 26,
    name: "Pelling - Rabdentse / Views",
    coordinates: [
      [27.29, 88.33],
      [27.30, 88.35],
      [27.31, 88.36],
      [27.30, 88.38],
      [27.29, 88.37],
      [27.28, 88.35],
    ],
  },

  // 27 Lachung (approach to Yumthang)
  {
    id: 27,
    name: "Lachung - Village",
    coordinates: [
      [27.68, 88.67],
      [27.70, 88.69],
      [27.71, 88.71],
      [27.70, 88.72],
      [27.68, 88.71],
      [27.67, 88.69],
    ],
  },

  // 28 Lachen
  {
    id: 28,
    name: "Lachen - Mountain Village",
    coordinates: [
      [27.70, 88.64],
      [27.71, 88.66],
      [27.72, 88.68],
      [27.71, 88.69],
      [27.70, 88.68],
      [27.69, 88.66],
    ],
  },

  // 29 Zuluk / Silk Route viewpoint
  {
    id: 29,
    name: "Zuluk (Old Silk Route)",
    coordinates: [
      [27.07, 88.53],
      [27.09, 88.55],
      [27.10, 88.57],
      [27.09, 88.58],
      [27.07, 88.57],
      [27.06, 88.55],
    ],
  },

  // 30 Loktak Lake (Manipur)
  {
    id: 30,
    name: "Loktak Lake",
    coordinates: [
      [24.50, 93.80],
      [24.52, 93.82],
      [24.54, 93.85],
      [24.53, 93.87],
      [24.51, 93.86],
      [24.49, 93.83],
    ],
  },

  // 31 Keibul Lamjao / Floating National Park (Manipur)
  {
    id: 31,
    name: "Keibul Lamjao (Floating Park)",
    coordinates: [
      [24.49, 93.86],
      [24.51, 93.88],
      [24.52, 93.90],
      [24.51, 93.91],
      [24.49, 93.90],
      [24.48, 93.88],
    ],
  },

  // 32 Imphal (historic & cultural sites)
  {
    id: 32,
    name: "Imphal - Cultural Zone",
    coordinates: [
      [24.81, 93.95],
      [24.83, 93.97],
      [24.84, 93.99],
      [24.83, 94.01],
      [24.81, 94.00],
      [24.80, 93.98],
    ],
  },

  // 33 Dzukou Valley (Nagaland / Manipur)
  {
    id: 33,
    name: "Dzukou Valley",
    coordinates: [
      [25.68, 94.18],
      [25.70, 94.20],
      [25.72, 94.22],
      [25.71, 94.24],
      [25.69, 94.23],
      [25.67, 94.21],
    ],
  },

  // 34 Kohima (Nagaland)
  {
    id: 34,
    name: "Kohima - City & WWII memorial",
    coordinates: [
      [25.67, 94.10],
      [25.69, 94.12],
      [25.70, 94.14],
      [25.69, 94.15],
      [25.67, 94.14],
      [25.66, 94.12],
    ],
  },

  // 35 Japfu Peak / Mount Japfu (Nagaland)
  {
    id: 35,
    name: "Japfu Peak Area",
    coordinates: [
      [25.80, 94.16],
      [25.82, 94.18],
      [25.84, 94.20],
      [25.83, 94.21],
      [25.81, 94.20],
      [25.79, 94.18],
    ],
  },

  // 36 Reiek (Mizoram)
  {
    id: 36,
    name: "Reiek Viewpoint (Mizoram)",
    coordinates: [
      [23.73, 92.71],
      [23.75, 92.73],
      [23.76, 92.75],
      [23.75, 92.76],
      [23.73, 92.75],
      [23.72, 92.73],
    ],
  },

  // 37 Vantawng Falls (Mizoram)
  {
    id: 37,
    name: "Vantawng Falls",
    coordinates: [
      [23.13, 92.74],
      [23.15, 92.76],
      [23.16, 92.78],
      [23.15, 92.79],
      [23.13, 92.78],
      [23.12, 92.76],
    ],
  },

  // 38 Aizawl (Mizoram capital)
  {
    id: 38,
    name: "Aizawl - City Ridge",
    coordinates: [
      [23.73, 92.72],
      [23.75, 92.74],
      [23.76, 92.76],
      [23.75, 92.78],
      [23.73, 92.77],
      [23.72, 92.75],
    ],
  },

  // 39 Agartala (Tripura)
  {
    id: 39,
    name: "Agartala - Ujjayanta Palace Area",
    coordinates: [
      [23.84, 91.27],
      [23.86, 91.29],
      [23.87, 91.31],
      [23.86, 91.32],
      [23.84, 91.31],
      [23.83, 91.29],
    ],
  },

  // 40 Neermahal (Tripura royal palace on lake)
  {
    id: 40,
    name: "Neermahal Palace (Lake)",
    coordinates: [
      [23.41, 91.67],
      [23.43, 91.69],
      [23.44, 91.71],
      [23.43, 91.72],
      [23.42, 91.71],
      [23.40, 91.69],
    ],
  },

  // 41 Unakoti rock-cut reliefs (Tripura)
  {
    id: 41,
    name: "Unakoti (Rock Reliefs)",
    coordinates: [
      [24.38, 92.02],
      [24.40, 92.04],
      [24.41, 92.06],
      [24.40, 92.07],
      [24.38, 92.06],
      [24.37, 92.04],
    ],
  },

  // 42 Sivasagar (Assam - Ahom heritage)
  {
    id: 42,
    name: "Sivasagar (Ahom Monuments)",
    coordinates: [
      [26.99, 94.63],
      [27.01, 94.65],
      [27.02, 94.67],
      [27.01, 94.68],
      [26.99, 94.67],
      [26.98, 94.65],
    ],
  },

  // 43 Hajo (Assam - pilgrimage site)
  {
    id: 43,
    name: "Hajo (Pilgrimage Zone)",
    coordinates: [
      [26.21, 91.60],
      [26.23, 91.62],
      [26.25, 91.64],
      [26.24, 91.66],
      [26.22, 91.65],
      [26.20, 91.63],
    ],
  },

  // 44 Sibsagar / Rang Ghar (expanded)
  {
    id: 44,
    name: "Rang Ghar (Sivasagar)",
    coordinates: [
      [26.99, 94.64],
      [27.00, 94.66],
      [27.01, 94.68],
      [26.99, 94.69],
      [26.98, 94.67],
      [26.98, 94.65],
    ],
  },

  // 45 Nohsngithiang Falls (Seven Sisters Falls, Meghalaya)
  {
    id: 45,
    name: "Seven Sisters Falls (Nohsngithiang)",
    coordinates: [
      [25.29, 91.70],
      [25.30, 91.72],
      [25.31, 91.74],
      [25.30, 91.75],
      [25.29, 91.74],
      [25.28, 91.72],
    ],
  },

  // 46 Khangchendzonga National Park (Sikkim region)
  {
    id: 46,
    name: "Khangchendzonga Region (buffer)",
    coordinates: [
      [27.70, 88.10],
      [27.72, 88.12],
      [27.74, 88.14],
      [27.73, 88.16],
      [27.71, 88.15],
      [27.69, 88.13],
    ],
  },

  // 47 Nuranang Falls (Jang falling, Arunachal near Tawang)
  {
    id: 47,
    name: "Nuranang Falls (Jang Falls)",
    coordinates: [
      [27.54, 92.12],
      [27.55, 92.14],
      [27.56, 92.16],
      [27.55, 92.17],
      [27.54, 92.16],
      [27.53, 92.14],
    ],
  },

  // 48 Sangti Valley (Arunachal)
  {
    id: 48,
    name: "Sangti Valley",
    coordinates: [
      [27.16, 92.87],
      [27.18, 92.89],
      [27.20, 92.91],
      [27.19, 92.92],
      [27.17, 92.91],
      [27.15, 92.89],
    ],
  },

  // 49 Teesta River Bend (Siliguri / Darjeeling approach)
  {
    id: 49,
    name: "Teesta River Scenic Bend",
    coordinates: [
      [26.68, 88.42],
      [26.70, 88.44],
      [26.72, 88.46],
      [26.71, 88.47],
      [26.69, 88.45],
      [26.67, 88.43],
    ],
  },

  // 50 Gorumara / Chapramari (doable day trip from Dooars)
  {
    id: 50,
    name: "Gorumara / Chapramari - Dooars",
    coordinates: [
      [26.86, 89.55],
      [26.88, 89.57],
      [26.90, 89.59],
      [26.89, 89.60],
      [26.87, 89.59],
      [26.85, 89.56],
    ],
  },
  {
    id: 51,
    name: "Ravangla Scenic Zone",
    coordinates: [
      [27.23, 88.37],
      [27.25, 88.39],
      [27.27, 88.41],
      [27.28, 88.44],
      [27.27, 88.47],
      [27.25, 88.46],
      [27.23, 88.44],
      [27.21, 88.42],
      [27.20, 88.40],
      [27.21, 88.38],
    ],
  },
  {
    id: 52,
    name: "Pakyong / Siddheshwar Dham Area",
    coordinates: [
      [27.11, 88.58],
      [27.12, 88.60],
      [27.14, 88.62],
      [27.15, 88.65],
      [27.14, 88.67],
      [27.12, 88.66],
      [27.11, 88.64],
      [27.10, 88.62],
      [27.09, 88.60],
      [27.10, 88.59],
    ],
  },
  {
    id: 53,
    name: "Namchi Hill / Char Dham Viewpoint",
    coordinates: [
      [27.16, 88.31],
      [27.18, 88.33],
      [27.20, 88.35],
      [27.21, 88.38],
      [27.20, 88.40],
      [27.18, 88.39],
      [27.16, 88.37],
      [27.15, 88.35],
      [27.14, 88.33],
      [27.14, 88.32],
    ],
  },
  {
    id: 54,
    name: "Gangtok Suburbs / Ridge Line",
    coordinates: [
      [27.33, 88.61],
      [27.34, 88.63],
      [27.36, 88.65],
      [27.38, 88.66],
      [27.39, 88.64],
      [27.38, 88.62],
      [27.36, 88.60],
      [27.34, 88.59],
      [27.32, 88.60],
      [27.32, 88.62],
    ],
  },
  {
    id: 55,
    name: "Tarku View / East Sikkim Hills",
    coordinates: [
      [27.33, 88.75],
      [27.34, 88.77],
      [27.35, 88.79],
      [27.36, 88.80],
      [27.35, 88.82],
      [27.33, 88.81],
      [27.32, 88.79],
      [27.31, 88.77],
      [27.31, 88.75],
      [27.32, 88.74],
    ],
  },
  {
    id: 56,
    name: "Zuluk Silk Route Lookout Expanded",
    coordinates: [
      [27.07, 88.53],
      [27.09, 88.55],
      [27.11, 88.57],
      [27.12, 88.59],
      [27.11, 88.61],
      [27.09, 88.60],
      [27.08, 88.58],
      [27.07, 88.56],
      [27.07, 88.54],
      [27.08, 88.52],
    ],
  },
  {
    id: 57,
    name: "Lachen-Lachung Pass Corridor",
    coordinates: [
      [27.69, 88.65],
      [27.70, 88.67],
      [27.72, 88.69],
      [27.73, 88.71],
      [27.72, 88.73],
      [27.70, 88.72],
      [27.68, 88.70],
      [27.67, 88.68],
      [27.68, 88.66],
      [27.69, 88.65],
    ],
  },
  {
    id: 58,
    name: "Pangolakha Wildlife Sanctuary Buffer",
    coordinates: [
      [27.26, 88.67],
      [27.27, 88.69],
      [27.28, 88.71],
      [27.29, 88.72],
      [27.29, 88.70],
      [27.28, 88.68],
      [27.27, 88.66],
      [27.26, 88.65],
      [27.25, 88.66],
      [27.25, 88.68],
    ],
  },
];
