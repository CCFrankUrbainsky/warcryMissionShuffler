import React, { useEffect, useState } from 'react'
import * as O from 'fp-ts/Option'
import './App.css'
import './bootstrap-grid.min.css'
import { Col, Container, Row } from 'react-bootstrap'
import {
  AvailableDeckName, getAvailableDecks, Card, FlipCard, Deck, CardsTest, CardType, DefaultCard,
} from './Cards'
import Checkbox from './Checkbox'

const MAIN_DECK_KEY = 'selectedMainDecks'
const TERRAIN_DECK_KEY = 'selectedTerrainDecks'

function App() {
  const [selectedMainDecks, setSelectedMainDecks] = useState<AvailableDeckName[]>([])
  const [selectedTerrainDecks, setSelectedTerrainDecks] = useState<AvailableDeckName[]>([])
  const [setupDone, setSetupDone] = useState<boolean>(false)
  const [showCards, setShowCards] = useState<boolean>(false)
  const [shuffling, setShuffling] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<boolean>(false)
  const [showAllCards, setShowAllCards] = useState<boolean>(false)
  const [selectedMainDeck, setSelectedMainDeck] = useState<Deck>()
  const [selectedTerrainDeck, setSelectedTerrainDeck] = useState<Deck>()
  const [terrainCard, setTerrainCard] = useState<Card>(DefaultCard)
  const [deploymentCard, setDeploymentCard] = useState<Card>(DefaultCard)
  const [victoryCard, setVictoryCard] = useState<Card>(DefaultCard)
  const [twistCard, setTwistCard] = useState<Card>(DefaultCard)


  useEffect(() => {
    const storedMainDecks = localStorage.getItem(MAIN_DECK_KEY)
    if (storedMainDecks) {
      try {
        setSelectedMainDecks(JSON.parse(storedMainDecks))
      } catch {
        console.error('Could not parse local storage main decks', storedMainDecks)
      }
    }
    const storedTerrainDecks = localStorage.getItem(TERRAIN_DECK_KEY)
    if (storedTerrainDecks) {
      try {
        setSelectedTerrainDecks(JSON.parse(storedTerrainDecks))
      } catch {
        console.error('Could not parse local storage terrain decks', storedTerrainDecks)
      }
    }
  }, [])


  const decks = getAvailableDecks()

  const toggleMainDeck = (deckName: AvailableDeckName, selected: boolean): void => {
    if (selected) {
      setSelectedMainDecks([...selectedMainDecks, deckName])
    } else {
      setSelectedMainDecks(selectedMainDecks.filter((deck) => deck !== deckName))
    }
    localStorage.setItem(MAIN_DECK_KEY, JSON.stringify(selectedMainDecks))
  }

  const toggleTerrainDeck = (deckName: AvailableDeckName, selected: boolean): void => {
    if (selected) {
      setSelectedTerrainDecks([...selectedTerrainDecks, deckName])
    } else {
      setSelectedTerrainDecks(selectedTerrainDecks.filter((deck) => deck !== deckName))
    }
    localStorage.setItem(TERRAIN_DECK_KEY, JSON.stringify(selectedTerrainDecks))
  }

  function selectRandom<T>(arr: Array<T>): T {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  const shuffleCards = () => {
    const randomMainDeckName = selectRandom(selectedMainDecks)
    const randomTerrainDeckName = selectRandom(selectedTerrainDecks)

    const selectedDeck = decks.find((deck) => deck.name === randomMainDeckName)
    const selectedSubDeck = decks.find((deck) => deck.name === randomTerrainDeckName)
    setSelectedMainDeck(selectedDeck)
    setSelectedTerrainDeck(selectedSubDeck)
    if (selectedDeck === undefined || selectedSubDeck === undefined) {
      return console.error('something horrible has happened')
    }
    setTerrainCard(selectRandom(selectedSubDeck.terrain))
    if (O.isSome(selectedDeck.deployment)) {
      setDeploymentCard(selectRandom(selectedDeck.deployment.value))
    }
    if (O.isSome(selectedDeck.victory)) {
      setVictoryCard(selectRandom(selectedDeck.victory.value))
    }
    if (O.isSome(selectedDeck.twist)) {
      setTwistCard(selectRandom(selectedDeck.twist.value))
    }

    setShowCards(true)
    setShuffling(true)
    setTimeout(() => { setShuffling(false) }, 50)
  }

  const shuffleCard = (type: CardType) => {
    switch (type) {
      case 'deployment': {
        if (selectedMainDeck && O.isSome(selectedMainDeck.deployment)) {
          const lastCard = deploymentCard.index
          let newCard = deploymentCard
          while (lastCard === newCard.index) {
            newCard = selectRandom(selectedMainDeck.deployment.value)
          }
          setDeploymentCard(newCard)
        }
        return
      }
      case 'twist': {
        if (selectedMainDeck && O.isSome(selectedMainDeck.twist)) {
          const lastCard = twistCard.index
          let newCard = twistCard
          while (lastCard === newCard.index) {
            newCard = selectRandom(selectedMainDeck.twist.value)
          }
          setTwistCard(newCard)
        }
        return
      }
      case 'victory': {
        if (selectedMainDeck && O.isSome(selectedMainDeck.victory)) {
          const lastCard = victoryCard.index
          let newCard = victoryCard
          while (lastCard === newCard.index) {
            newCard = selectRandom(selectedMainDeck.victory.value)
          }
          setVictoryCard(newCard)
        }
        return
      }
      default: {
        if (selectedTerrainDeck) {
          const lastCard = terrainCard.index
          let newCard = terrainCard
          while (lastCard === newCard.index) {
            newCard = selectRandom(selectedTerrainDeck.terrain)
          }
          setTerrainCard(newCard)
        }
      }
    }
  }

  const checkSetup = () => {
    if (selectedMainDecks.length === 0 || selectedTerrainDecks.length === 0) {
      setErrorMessage(true)
      return
    }
    setErrorMessage(false)
    setSetupDone(true)
    shuffleCards()
  }

  return (
    <Container className="App">
      <Row>
        <Col xs={0} md={4} />
        <Col xs={12} md={4}>
          <img src="warcry-logo.png" alt="Warcry logo" style={{ maxWidth: '100%', margin: '10px 0 25px' }} />
          <h1 style={{ textAlign: 'center', marginTop: '-0.5em' }}>Mission Shuffler</h1>

        </Col>
      </Row>
      {!setupDone && (
        <>
          <Row>
            <Col><h2>What Decks do you want to use?</h2></Col>
          </Row>
          <Row>
            <Col xs={12} md>
              <h3>Deployment / Victory / Twist Decks</h3>
              {decks.map((deck) => {
                if (O.isSome(deck.victory)) {
                  return (
                    <div key={`${deck.name}main`}>
                      <Checkbox
                        label={deck.name}
                        onChange={toggleMainDeck}
                        value={selectedMainDecks.includes(deck.name)}
                      />
                    </div>
                  )
                }
              })}
            </Col>
            <Col xs={12} md>
              <h3>Terrain Decks</h3>
              {decks.map((deck) => (
                <div key={`${deck.name}main`}>
                  <Checkbox
                    label={deck.name}
                    onChange={toggleTerrainDeck}
                    value={selectedTerrainDecks.includes(deck.name)}
                  />
                </div>
              ))}
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <Row>
            {errorMessage && (
              <>
                <div>Please select at least one set of mission and terrain cards.</div>
                <br />
                <br />
              </>
            )}
            <button type="button" onClick={() => { checkSetup() }}>Continue</button>
          </Row>
        </>
      )}
      {setupDone && (
        <Row>
          <button type="button" onClick={() => { setSetupDone(false); setShowCards(false) }}>Back to deck selection</button>
        </Row>
      )}
      {process.env.NODE_ENV === 'development' && (
        <Row>
          <button type="button" onClick={() => { setShowAllCards(true) }}>[DEBUG] show all cards</button>
        </Row>
      )}
      {showAllCards && (
        <div>
          <CardsTest decks={decks} />
        </div>
      )}
      {showCards && (
        <div>
          <h2>
            {selectedMainDeck?.name}
            {' '}
            with terrain from
            {' '}
            {selectedTerrainDeck?.name}
          </h2>
          <Row>
            <Col xs={12} md>
              <FlipCard card={terrainCard} shuffle={shuffling} shuffleCard={shuffleCard} />
            </Col>
            <Col xs={12} md>
              <FlipCard card={deploymentCard} shuffle={shuffling} shuffleCard={shuffleCard} />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md>
              <FlipCard card={victoryCard} shuffle={shuffling} shuffleCard={shuffleCard} />
            </Col>
            <Col xs={12} md>
              <FlipCard card={twistCard} shuffle={shuffling} shuffleCard={shuffleCard} />
            </Col>
          </Row>
          <Row>
            <button type="button" onClick={() => { shuffleCards() }}>Shuffle</button>
          </Row>
        </div>
      )}
    </Container>
  )
}

export default App
