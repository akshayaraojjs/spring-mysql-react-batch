// export default function FileName() {
    // return()
// }

export default function Greeting() {
    const name = "Akshay";
    const age = 25;
    return (
        <div>
            <h1>Hello, {name}</h1>
            <p>You're {age} years old.</p>
            <p>In 10 years you will be {age + 10}</p>
        </div>
    )
}