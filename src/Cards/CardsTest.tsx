import React from 'react'
import { Deck } from '.'
import * as O from 'fp-ts/Option'

type TestParams = {
  decks: Deck[]
}
export const CardsTest = ({ decks }: TestParams) => {

  return (
    <div className={'cards-test'}>
      {decks.map(deck =>
        <div className="deck" key={deck.name}>
          <h3>{deck.name}</h3>
          <div className='card-categories'>
            <div className='card-category' style={{ display: 'flex', flexWrap: 'wrap' }}>
              <h4>Terrain</h4>
              <div className="cards">
                {deck.terrain.map(card =>
                  <img key={card.front} src={card.front} alt={card.front} style={{ width: '15vw' }}></img>
                )}
              </div>
            </div>
            {O.isSome(deck.deployment) && <>
              <div className='card-category' style={{ display: 'flex', flexWrap: 'wrap' }}>
                <h4>Deployment</h4>
                <div className="cards">
                  {deck.deployment.value.map(card =>
                    <img key={card.front} src={card.front} alt={card.front} style={{ width: '15vw' }}></img>
                  )}
                </div>
              </div>
            </>}
            {O.isSome(deck.victory) && <>
              <div className='card-category' style={{ display: 'flex', flexWrap: 'wrap' }}>
                <h4>Victory</h4>
                <div className="cards">
                  {deck.victory.value.map(card =>
                    <img key={card.front} src={card.front} alt={card.front} style={{ width: '15vw' }}></img>
                  )}
                </div>
              </div>
            </>}
            {O.isSome(deck.twist) && <>
              <div className='card-category' style={{ display: 'flex', flexWrap: 'wrap' }}>
                <h4>Twist</h4>
                <div className="cards">
                  {deck.twist.value.map(card =>
                    <img key={card.front} src={card.front} alt={card.front} style={{ width: '15vw' }}></img>
                  )}
                </div>
              </div>
            </>}
          </div>
        </div>
      )}
    </div>
  )
}