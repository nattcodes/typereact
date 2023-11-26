import axios from "axios"
import { useEffect, useState } from "react"

// interface User {
//   id: number,
//   username: string
// }

function App() {
  const [userData, setUserData] = useState<any>([])

  useEffect(() => {
    fetcher()
  }, [])

  const fetcher = () => {
    axios.get('https://randomuser.me/api')
    .then((data) => {
      setUserData(JSON.stringify(data, null, 2))
  })

}

  // const [count, setCount] = useState<number>(0)
  // const [users, setUsers] = useState<User[] | null>(null)

  // useEffect(() => {
  //   console.log('first');

  //   return() => console.log("second")
  // }, [])
  //https://randomuser.me/api

  return(
    <>
      <h1>Fetch Api</h1>
      <p>{userData}</p>
      
    </>
  )
}

export default App
