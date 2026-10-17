// Props: Used to pass data from parent to child
// child can only read the data, but parent can send/write/pass the data  

// function FileName() {
//  return()
// }

// export default FileName;

function UserCard({ name, age, email, phone }) {
    return (
        <div className="card">
            <h1>User Registration Details:</h1>
            <ul>
                <li>Name: {name}</li>
                <li>Age: {age}</li>
                <li>Email: {email}</li>
                <li>Phone: {phone}</li>
            </ul>
        </div>
    );
}

export default UserCard;