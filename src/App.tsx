import {useState} from 'react'
import Counter from "./components/Counter"
import Heading from "./components/Heading"
import Section from "./components/Section"
import List from "./components/List"


function App() {
  
  const [count, setCount] = useState<number>(0)
  const clickHandler = () => {
    setCount(prev => prev + 1)
  }
  
  

  return(
    <>
      <Heading title={"My Title"}/>
      <Section title="unknown sub-heading title"/>
      <Counter
        count={count}
        clickHandler={clickHandler}
      />
      <List 
        items={['james', 'john', 'peter']}
        render={(item: string) => <p>{item}</p>}
      />
    </>
  )
}

export default App
