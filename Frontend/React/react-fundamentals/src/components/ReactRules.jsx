export default function ReactRules() {
    return(
        // HTML "class" attribute in React becomes "className"
        // class => className 
        // for => htmlFor 
        
        // Self closing tags in HTML:
        // img, br, hr, input should be closed in this way:
        // <img> => <img />

        // attribute values should be in "{}"

        <div className="container">
            <a href="https://www.google.com">Google</a>
            <label htmlFor="name">Name:</label>
            <input type="text" disabled={true} value={"Akshay Rao"} />
            <img src="https://www.mtdn.co.in/images/MTDlogo.png" alt="Tiger Image" />
        </div>
    )
}