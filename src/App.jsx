import React from 'react';

export default function () {
    const [score, setScore] = React.useState([0, 0])
    const [homeScore, guestScore] = score

    function handleClick(player, point) {
        setScore((prev) => {
            const [home, guest] = prev
            return player === "home" ?
                [home + point, guest] : [home, guest + point]
        })
    }

    return (
        <main>
            <section className="home flex-container">
                <h1>HOME</h1>
                <div className="score-container">
                    <h2>{homeScore}</h2>
                </div>
                <div className="btn-container">
                    <button onClick={() => handleClick("home", 1)}>+1</button>
                    <button onClick={() => handleClick("home", 2)}>+2</button>
                    <button onClick={() => handleClick("home", 3)}>+3</button>
                </div>
            </section>

            <section className="guess flex-container">
                <h1>GUEST</h1>
                <div className="score-container">
                    <h2>{guestScore}</h2>
                </div>
                <div className="btn-container">
                    <button onClick={() => handleClick("guess", 1)}>+1</button>
                    <button onClick={() => handleClick("guess", 2)}>+2</button>
                    <button onClick={() => handleClick("guess", 3)}>+3</button>
                </div>
            </section>
        </main>
    )
}