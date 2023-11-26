import { useEffect, useState } from "react"

interface User {
  id: number,
  username: string
}

function App() {

  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<User[] | null>(null)

  useEffect(() => {
    console.log('first');

    return() => console.log("second")
  }, [])


  return(
    <>
    </>
  )
}

export default App
