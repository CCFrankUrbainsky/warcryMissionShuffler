import { Card, Deck, deckConfig, CardType, SubDeckConfig} from '.'
import * as O from 'fp-ts/Option'

export const getAvailableDecks = () : Deck[] => {
  const retDecks: Deck[] = [] 
  deckConfig.forEach( config => {
    const deck: Deck = {
      name: config.name,
      terrain: fillSubdeck(config.terrain, 'terrain'),
      deployment: O.none,
      victory: O.none,
      twist: O.none
    }
    if ( config.deployment && config.victory && config.twist ){
      deck.deployment = O.some(fillSubdeck(config.deployment, 'deployment'))
      deck.victory = O.some(fillSubdeck(config.victory, 'victory'))
      deck.twist = O.some(fillSubdeck(config.twist, 'twist'))
    }
    retDecks.push( deck )
  })
  return retDecks
}

const fillSubdeck = ( subConfig : SubDeckConfig, type: CardType ) : Card[] => {
  const cards : Card[] = []
  for ( let i = subConfig.startIndex || 1 ; i < subConfig.count + (subConfig.startIndex || 1); i++ ){
    cards.push( {
      index: i,
      front: `cards/${subConfig.folder}${subConfig.baseName}${i}${subConfig.filetype}`,
      back: `cards/${subConfig.folder}${subConfig.back}.jpg`,
      type
    })
  }
  return cards
}
