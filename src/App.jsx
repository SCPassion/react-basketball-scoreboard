import React from 'react';
import Scoreboard from './components/Scoreboard';

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
            <Scoreboard
                player="home"
                Score={homeScore}
                handleClick={handleClick}
            />
            <Scoreboard
                player="guest"
                Score={guestScore}
                handleClick={handleClick}
            />
        </main>
    )
}