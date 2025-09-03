import { useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('Hello,Yash')
  const [cards, setCards] = useState([
    { title: 'Card Title', description: 'This is a card description.' },
    { title: 'Card Title', description: 'This is a card description.' },
    { title: 'Card Title', description: 'This is a card description.' },
  ])
  const [modal, setModal] = useState({ open: false, card: null });

  const createcard = () => {
    const handleCreate = (e) => {
      e.preventDefault();
      const title = e.target.elements.title.value;
      const description = e.target.elements.description.value;

      if (!title || !description) return;

      setCards([...cards, { title, description }])
      setMessage("Card Created Successfully")
      e.target.reset();
    }
    if (!description) return;
    setCards([...cards, { title, description }])
    setMessage("Card Created Successfully")
  }
  const deletecard = () => {
    setCards(cards.slice(0, -1));
    setMessage("Card Deleted Successfully")
  }

  const handleClickMe = (card) => {
    setModal({ open: true, card });
  };

  const closeModal = () => {
    setModal({ open: false, card: null });
  };

  return (
    <div>
      <p>{message}</p>
      <div id='body'>
        <button id='createcard' onClick={createcard}>
          Create New Card
        </button>
        <div className='card-container'>
          {cards.map((card, idx) => (
            <div className='card' key={idx}>
              <button id='delete' onClick={deletecard}>❌</button>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              <button onClick={() => handleClickMe(card)}>Click Me</button>
            </div>
          ))}
        </div>
        {modal.open && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal" onClick={e => e.stopPropagation()}>
              <h2>{modal.card.title}</h2>
              <p>{modal.card.description}</p>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App

