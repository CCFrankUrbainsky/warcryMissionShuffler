import * as O from 'fp-ts/Option'
import { AvailableDeckName } from '.'

export type CardType = 'victory' | 'twist' | 'terrain' | 'deployment'
export type CardPack = 'base' | 'catacombs' | 'redHarvest'
export type TerrainCardPack = 'varanite mines' | 'souldrain forest' | 'eightpoints'
export type CardUrl = string

export type Card = {
    index: number
    front: CardUrl
    back: CardUrl
    type: CardType
}

export type Deck = {
    name: AvailableDeckName
    terrain: Card[]
    deployment: O.Option<Card[]>
    victory: O.Option<Card[]>
    twist: O.Option<Card[]>
}