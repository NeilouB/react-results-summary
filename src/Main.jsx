import data from "./data.json"

export default function Main() {
    const elements = data.map(element => {
        return (
            <li key={element.category} className={`category-${element.category.toLowerCase()}`}>
                <img src={element.icon} alt={`${element.category} icon`} />
                <h5>{element.category}</h5>
                <p><span>{element.score}</span> / 100</p>
            </li>
        )
            
    })
    return(
        <main>
            <h3>Summary</h3>
            <ul role="list">{elements}</ul>
            <button>Continue</button>
        </main>
    )
}