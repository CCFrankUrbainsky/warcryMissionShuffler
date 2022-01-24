import React from 'react'
import { useState } from 'react'

type CardParams = {
  front: string
  back: string
  className?: string
}

export const FlipCard = ({ front, back, className }: CardParams) => {
  const [flipped, setFlipped] = useState<boolean>(false)

  const flipCard = () => {
    setFlipped(!flipped)
  }

  return (
    <div className={`flip-card ${flipped ? 'flipped' : ''} ${className}`}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={back} alt={back} onClick={flipCard} />
        </div>
        <div className="flip-card-back">
          <img src={front} alt={front} onClick={flipCard} />
        </div>
      </div>
    </div>
  )
}