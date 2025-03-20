export default function (props) {
    return (
        <section className="home flex-container">
            <h1>{String(props.player).toUpperCase()}</h1>
            <div className="score-container">
                <h2>{props.Score}</h2>
            </div>
            <div className="btn-container">
                <button onClick={() => props.handleClick(String(props.player), 1)}>+1</button>
                <button onClick={() => props.handleClick(String(props.player), 2)}>+2</button>
                <button onClick={() => props.handleClick(String(props.player), 3)}>+3</button>
            </div>
        </section>
    )
}