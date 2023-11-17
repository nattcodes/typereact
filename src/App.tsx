import {useState} from 'react'
import Counter from "./components/Counter"
import Heading from "./components/Heading"
import Section from "./components/Section"


function App() {
  
  const [count, setCount] = useState<number>(0)
  const clickHandler = () => {
    setCount(prev => prev + 1)
  }

  return(
    <>
      <Heading title={"My Title"}/>
      <Section title="unknown sub-heading title">Passing Children</Section>
      <Counter
        count={count}
        clickHandler={clickHandler}
      />
    </>
  )
}

export default App
