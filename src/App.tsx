import { useEffect, useState, useCallback, MouseEvent, useMemo } from "react"

interface User {
  id: number,
  username: string
}

type FibFunc = (n: number) => number

const fib: FibFunc = (n) => {
  if (n < 2) return n
  return fib(n - 1) + fib(n - 2)
}

const myNum: number = 37;

function App() {

  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<User[] | null>(null)

  useEffect(() => {
    console.log('first');
    console.log('Users: ', users)
    console.log(result)

    return() => console.log("second")
    
  
  }, [users])

  
 
  const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent): void => setCount( count + 1 ), [])

  const result = useMemo<number>(() => fib(myNum), [myNum])

  return(
    <div className="App">
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
    </div>
  )
}

export default App
