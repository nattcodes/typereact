import { ReactElement} from "react"

type CounterProps = {
    count: number,
    clickHandler: any
}

const Counter = ({count, clickHandler}: CounterProps): ReactElement => {
    

  return (
    <div className='my-[3rem]'>
        <h1 className='text-[2rem]'>{count}</h1>
        <button className='bg-white text-black p-[.5rem]' onClick={clickHandler}>count</button>
    </div>
  )
}

export default Counter