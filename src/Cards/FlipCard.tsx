import React, { useEffect, useState } from 'react'
import { Card, CardType } from './types'

type CardParams = {
  card: Card
  className?: string
  shuffle: boolean
  shuffleCard: (type: CardType) => void
}

export const FlipCard = ({ card, className, shuffle, shuffleCard }: CardParams) => {
  const [flipped, setFlipped] = useState<boolean>(false)

  const flipCard = () => {
    setFlipped(!flipped)
  }

  useEffect(() => {
    if (shuffle && flipped) {
      setFlipped(false)
    }
  }, [shuffle])

  return (
    <div className={`flip-card ${flipped ? 'flipped' : ''} ${shuffle ? 'shuffled' : ''} ${className}`}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={card.back} alt={card.back} onClick={flipCard} />
        </div>
        <div className="flip-card-back">
          <img src={card.front} alt={card.front} onClick={flipCard} />
          <button type='button' className='shuffle-button' title='Shuffle' onClick={() => { shuffleCard(card.type) }}>🔀</button>
        </div>
      </div>
    </div>
  )
}