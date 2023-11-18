import { SaveToDatabase } from "../services/JokeService"
import "./Input.css"

export const Input = ({ setInput, input, reFetchJokes }) => {
    return (
        <div>
            <h2>Add Joke</h2>
            <div className="joke-add-form">
                <input className="joke-input"
                    type="text"
                    placeholder="New One Liner"
                    value={input}
                    onChange={(event) => {
                        setInput(event.target.value)
                    }}>
                </input>
                <button
                    className="joke-input-submit"
                    onClick={() => {
                        SaveToDatabase(input).then((response) => {
                            reFetchJokes()
                        })
                        setInput("")
                    }}>
                    Save
                </button>
            </div>
        </div>
    )
}