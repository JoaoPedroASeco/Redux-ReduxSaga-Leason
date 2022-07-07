import { useState } from "react"
import { getUserRequest, useAppDispatch, useAppSelector } from "./store"
import { UserState } from "./store/reducers/user"

function App() {
  const dispatch = useAppDispatch()
  const userState = useAppSelector<UserState>(state => state.user)
  const [name, setName] = useState('')

  const handleFetchUser = () => {
    dispatch(getUserRequest(name))
  }

  return (
    <>
      <h1>Hello World</h1>
      <input type={'text'} value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={handleFetchUser} disabled={!name.length}>User Request</button>

      <div>
        <span>{userState.user?.message}</span>
        <span>{userState.user?.name}</span>
      </div>
    </>
  )
}

export default App
