export const fetchAllJokes = () => {
    return fetch("http://localhost:8088/jokes").then(response => response.json())
}
// DATABASE FUNCTIONS
export const SaveToDatabase = (text) => {
    if (text !== "") {
        const jokeObject = {
            "text": text,
            "told": false
        }
        const postOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jokeObject)
        }
        return fetch("http://localhost:8088/jokes", postOptions)
    }
}
export const ChangeInDatabase = (jokeObject) => {
    jokeObject.told = !jokeObject.told
    const putOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jokeObject)
    }
    return fetch(`http://localhost:8088/jokes/${jokeObject.id}`, putOptions)
}
export const DeleteJokeFromDatabase = (jokeObject) => {
    const deleteOptions = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jokeObject)
    }
    return fetch(`http://localhost:8088/jokes/${jokeObject.id}`, deleteOptions)
}