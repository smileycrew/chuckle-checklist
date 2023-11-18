import { useEffect, useState } from "react"
import { fetchAllJokes } from "./services/JokeService"
import { Input } from "./inputs/Input"
import { ToldJokes } from "./jokes/ToldJokes"
import { UntoldJokes } from "./jokes/UntoldJokes"
import "./App.css"

export const App = () => {

  //*****STATE FUNCTIONS*****
  const [input, setInput] = useState("")
  const [allJokes, setAllJokes] = useState([])
  const [toldJokes, setToldJokes] = useState([])
  const [untoldJokes, setUntoldJokes] = useState([])

  //*****FUNCTIONS*****
  const reFetchJokes = () => {
    fetchAllJokes().then((jokes) => {
      setAllJokes(jokes)
    })
  }

  // *****USE EFFECTS*****
  useEffect(() => {
    reFetchJokes()
  }, [])
  useEffect(() => {
    const filterToldJokes = allJokes.filter(joke => joke.told)
    setToldJokes(filterToldJokes)
  }, [allJokes])
  useEffect(() => {
    const filterUntoldJokes = allJokes.filter(joke => joke.told === false)
    setUntoldJokes(filterUntoldJokes)
  }, [allJokes])

  // *****RETURN*****
  return (
    <div className="app-container">
      <header className="app-heading">
        <div className="app-heading-text ">Chuckle Checklist</div>
      </header>
      <div className="">
        <Input setInput={setInput} input={input} reFetchJokes={reFetchJokes} />
      </div>
      <div className="joke-lists-container">
        <ToldJokes toldJokes={toldJokes} reFetchJokes={reFetchJokes} />
        <UntoldJokes untoldJokes={untoldJokes} reFetchJokes={reFetchJokes} />
      </div>
    </div >
  )
}