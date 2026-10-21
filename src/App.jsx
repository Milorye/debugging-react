import { useState } from 'react'
import './App.css'

function Counter({ total, onAddTwo }) {
  return (
    <div className="counter-panel">
      <p className="label">Current total</p>
      <h2>{total}</h2>
      <button type="button" onClick={onAddTwo}>
        Add two items
      </button>
    </div>
  )
}

function App() {
  const [items, setItems] = useState(0)
  const teamMembers = ['Nora', 'Leo', 'Ava']

  const addTwoItems = () => {
    setItems((current) => current + 1)
    setItems((current) => current + 1)
  }

  return (
    <main className="app-shell">
      <section className="card">
        <p className="eyebrow">Debugging demo</p>
        <h1>Project status</h1>
        <Counter total={items} onAddTwo={addTwoItems} />
        <p className="summary">Team members: {teamMembers.join(', ')}</p>
      </section>
    </main>
  )
}

export default App
