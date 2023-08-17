import { useState } from 'react'
import questions from './data'
import './App.css'
import Question from './Question'

function App() {
  
  const [questionsData, setQuestionsData] = useState(questions)
  // console.log(questionsData)

  return (
    <main className='container p-4'>
      <h1 >Questions and Answers about login</h1>
      <section>
        {
          questionsData.map((object) => {
            const {id} = object
            return <Question key={id} {...object} />
          })
        }
      </section>
    </main>
  )
}

export default App
