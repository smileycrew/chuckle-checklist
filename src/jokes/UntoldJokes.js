import { ChangeInDatabase, DeleteJokeFromDatabase } from "../services/JokeService"
import "./ToldJokes.css"

export const UntoldJokes = ({ untoldJokes, reFetchJokes }) => {
    return (
        <div className="joke-list-container">
            <div className="untold-count">{untoldJokes.length}</div>
            <h2>Untold Jokes</h2>
            <div className="">
                {untoldJokes.map((untoldJoke) => {
                    return (
                        <div className=""
                            key={untoldJoke.id}>
                            <li className="joke-list-item">
                                <p className="joke-list-item-text">{untoldJoke.text}</p>
                                <div className="joke-list-action-toggle">
                                    <button className=""
                                        onClick={() => {
                                            ChangeInDatabase(untoldJoke).then(() => {
                                                reFetchJokes()
                                            })
                                        }}>
                                        Move
                                    </button>
                                </div>
                                <div className="joke-list-action-delete">
                                    <button className=""
                                        onClick={() => {
                                            DeleteJokeFromDatabase(untoldJoke).then(() => {
                                                reFetchJokes()
                                            })
                                        }}>
                                        Delete
                                    </button>
                                </div>
                            </li>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}