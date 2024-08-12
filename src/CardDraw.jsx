import React, { useState, useEffect } from 'react';

const CardDraw = () => {
    const [deckId, setDeckId] = useState(null);
    const [cards, setCards] = useState([]);
    const [remaining, setRemaining] = useState(52);
    const [error, setError] = useState("");
    const [isShuffling, setIsShuffling] = useState(false);

    useEffect(() => {
        const fetchDeck = async () => {
            const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
            const data = await response.json();
            setDeckId(data.deck_id);
        };
        fetchDeck();
    }, []);

    const drawCard = async () => {
        if (remaining === 0) {
            setError("Error: no cards remaining!");
            return;
        }
        setError("");
        const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
        const data = await response.json();
        setCards([...cards, ...data.cards]);
        setRemaining(data.remaining);
    };

    const shuffleDeck = async () => {
        setIsShuffling(true);
        const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`);
        const data = await response.json();
        setCards([]);
        setRemaining(52);
        setIsShuffling(false);
    };

    return (
        <div className="card-draw-container">
            <button onClick={drawCard} disabled={isShuffling}>Gimme a Card!</button>
            <button onClick={shuffleDeck} disabled={isShuffling}>Shuffle Deck</button>
            {error && <p>{error}</p>}
            <div className="card-stack">
                {cards.map((card, index) => (
                    <img
                        key={index}
                        src={card.image}
                        alt={`${card.value} of ${card.suit}`}
                        className="card"
                        style={{
                            transform: `rotate(${Math.random() * 30 - 15}deg)`,
                            zIndex: index,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardDraw;
