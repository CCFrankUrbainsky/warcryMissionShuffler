import React, { useEffect } from 'react'
import { useState } from 'react'

type CardParams = {
  front: string
  back: string
  className?: string
  shuffle: boolean
}

export const FlipCard = ({ front, back, className, shuffle }: CardParams) => {
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
          <img src={back} alt={back} onClick={flipCard} />
        </div>
        <div className="flip-card-back">
          <img src={front} alt={front} onClick={flipCard} />
        </div>
      </div>
    </div>
  )
}