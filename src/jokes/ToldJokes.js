import { ChangeInDatabase, DeleteJokeFromDatabase } from "../services/JokeService"
import "./ToldJokes.css"

export const ToldJokes = ({ toldJokes, reFetchJokes }) => {
    return (
        <div className="joke-list-container">
            <div className="told-count">{toldJokes.length}</div>
            <h2>Told Jokes</h2>
            <div>
                {toldJokes.map((toldJoke) => {
                    return (
                        <div className="joke-list-container"
                            key={toldJoke.id}>
                            <div classclassName="">
                                <li className="joke-list-item">
                                    <p className="joke-list-item-text">{toldJoke.text}</p>
                                    <div className="joke-list-action-toggle">
                                        <button
                                            onClick={() => {
                                                ChangeInDatabase(toldJoke).then(() => {
                                                    reFetchJokes()
                                                })
                                            }}>
                                            Move
                                        </button>
                                    </div>
                                    <div className="joke-list-action-delete">
                                        <button
                                            onClick={() => {
                                                DeleteJokeFromDatabase(toldJoke).then(() => {
                                                    reFetchJokes()
                                                })
                                            }}>
                                            Delete
                                        </button>
                                    </div>
                                </li>

                            </div>

                        </div>
                    )
                })}
            </div>
        </div >
    )
}