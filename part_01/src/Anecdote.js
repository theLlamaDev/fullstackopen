import { useState } from 'react'

const Anecdote = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  let [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(0)


  const voter = () => {
    let cVotes = [...votes]
    cVotes[selected] += 1
    setVotes(cVotes)
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>This quote has {votes[selected]} votes.</p>
      <button onClick={() => setSelected(Math.floor(Math.random()*anecdotes.length))} >Next</button>
      <button onClick = {() => voter()}>Vote</button>
      <h1>Annecdote with the most votes :</h1>
      <p>"{anecdotes[votes.indexOf(Math.max(...votes))]}" has {votes[votes.indexOf(Math.max(...votes))]} votes.</p>
    </div>
  )
}

export default Anecdote