import data from "./data.json"

export default function Main() {
    const elements = data.map(element => {
        return (
            <div key={element.category} className={`category-${element.category.toLowerCase()}`}>
                <img src={element.icon} alt={`${element.category} icon`} />
                <h5>{element.category}</h5>
                <p><span>{element.score}</span> / 100</p>
            </div>
        )
    })
    return(
        <main>
            <h3>Summary</h3>
            {elements}
            <button>Continue</button>
        </main>
    )
}