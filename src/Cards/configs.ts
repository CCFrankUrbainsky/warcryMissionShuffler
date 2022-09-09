export type AvailableDeckName =
| 'Starter Set'
| 'Red Harvest'
| 'Catacombs'
| 'Heart of Ghur'
| 'Souldrain Forest'
| 'Souldrain Forest + Starter Set'
| 'Corpsewrack Mausoleum'
| 'Corpsewrack Mausoleum + Starter Set'
| 'Defiled Ruins'
| 'Defiled Ruins + Starter Set'
| 'Shattered Stormvault'
| 'Shattered Stormvault + Starter Set'

export type SubDeckConfig = {
    count: number
    startIndex?: number
    baseName: string
    folder: string
    back: string
    filetype: string
}

export type DeckConfig = {
    name: AvailableDeckName
    terrain: SubDeckConfig
    deployment?: SubDeckConfig
    victory?: SubDeckConfig
    twist?: SubDeckConfig
}

export const deckConfig : DeckConfig[] = [
  {
    name: 'Starter Set',
    terrain: {
      count: 36,
      baseName: 'WarcryCoreTerrain',
      folder: 'terrain/eightPoints/',
      back: 'back',
      filetype: '.jpg',
    },
    deployment: {
      count: 36,
      baseName: 'WarcryCoreDeployment',
      folder: 'deployment/core/',
      back: 'back',
      filetype: '.jpg',
    },
    victory: {
      count: 30,
      baseName: 'WarcryCoreVictory',
      folder: 'victory/core/',
      back: 'back',
      filetype: '.jpg',
    },
    twist: {
      count: 36,
      baseName: 'WarcryCoreTwist',
      folder: 'twist/core/',
      back: 'back',
      filetype: '.jpg',
    },
  }, {
    name: 'Catacombs',
    terrain: {
      count: 6,
      baseName: 'WarcryCatacombsTerrain',
      folder: 'terrain/catacombs/',
      back: 'back',
      filetype: '.png',
    },
    deployment: {
      count: 12,
      baseName: 'WarcryCatacombsDeployment',
      folder: 'deployment/catacombs/',
      back: 'back',
      filetype: '.jpg',
    },
    victory: {
      count: 12,
      baseName: 'WarcryCatacombsVictory',
      folder: 'victory/catacombs/',
      back: 'back',
      filetype: '.jpg',
    },
    twist: {
      count: 12,
      baseName: 'WarcryCatacombsTwist',
      folder: 'twist/catacombs/',
      back: 'back',
      filetype: '.jpg',
    },
  }, {
    name: 'Red Harvest',
    terrain: {
      count: 12,
      baseName: 'WarcryRHTerrain',
      folder: 'terrain/varaniteMines/',
      back: 'back',
      filetype: '.png',
    },
    deployment: {
      count: 12,
      baseName: 'WarcryRHDeployment',
      folder: 'deployment/redHarvest/',
      back: 'back',
      filetype: '.png',
    },
    victory: {
      count: 12,
      baseName: 'WarcryRHVictory',
      folder: 'victory/redHarvest/',
      back: 'back',
      filetype: '.png',
    },
    twist: {
      count: 12,
      baseName: 'WarcryRHTwist',
      folder: 'twist/redHarvest/',
      back: 'back',
      filetype: '.png',
    },
  }, {
    name: 'Heart of Ghur',
    terrain: {
      count: 24,
      baseName: 'HoGTerrain',
      folder: 'terrain/ghur/',
      back: 'back',
      filetype: '.png',
    },
    deployment: {
      count: 12,
      baseName: 'ghur-deployment-',
      folder: 'deployment/ghur/',
      back: 'back',
      filetype: '.png',
    },
    victory: {
      count: 12,
      baseName: '',
      folder: 'victory/ghur/',
      back: 'back',
      filetype: '.jpg',
    },
    twist: {
      count: 12,
      baseName: '',
      folder: 'twist/ghur/',
      back: 'back',
      filetype: '.png',
    },
  },{
    name: 'Souldrain Forest',
    terrain: {
      count: 24,
      startIndex: 13,
      baseName: 'WarcryForestTerrain',
      folder: 'terrain/souldrainForest/',
      back: 'back',
      filetype: '.png',
    },
  }, {
    name: 'Souldrain Forest + Starter Set',
    terrain: {
      count: 12,
      baseName: 'WarcryForestTerrain',
      folder: 'terrain/souldrainForest/',
      back: 'back',
      filetype: '.png',
    },
  }, {
    name: 'Corpsewrack Mausoleum',
    terrain: {
      count: 24,
      baseName: 'WarcryMausoleumTerrain',
      folder: 'terrain/corpsewrackMausoleum/',
      back: 'back',
      filetype: '.png',
    },
  }, {
    name: 'Corpsewrack Mausoleum + Starter Set',
    terrain: {
      count: 12,
      startIndex: 25,
      baseName: 'WarcryMausoleumTerrain',
      folder: 'terrain/corpsewrackMausoleum/',
      back: 'back',
      filetype: '.png',
    },
  }, {
    name: 'Defiled Ruins',
    terrain: {
      count: 24,
      baseName: 'WarcryRuinsTerrain',
      folder: 'terrain/defiledRuins/',
      back: 'back',
      filetype: '.png',
    },
  }, {
    name: 'Defiled Ruins + Starter Set',
    terrain: {
      count: 12,
      startIndex: 25,
      baseName: 'WarcryRuinsTerrain',
      folder: 'terrain/defiledRuins/',
      back: 'back',
      filetype: '.png',
    },
  }, {
    name: 'Shattered Stormvault',
    terrain: {
      count: 24,
      baseName: 'WarcryStormvaultTerrain',
      folder: 'terrain/shatteredStormvault/',
      back: 'back',
      filetype: '.png',
    },
  }, {
    name: 'Shattered Stormvault + Starter Set',
    terrain: {
      count: 12,
      startIndex: 25,
      baseName: 'WarcryStormvaultTerrain',
      folder: 'terrain/shatteredStormvault/',
      back: 'back',
      filetype: '.png',
    },
  },
]