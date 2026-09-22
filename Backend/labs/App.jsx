import { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email
                })
            });

            const data = await response.json();

            setMessage(data.message);
        } catch (error) {
            console.log(error);
            setMessage("Something went wrong");
        }
    };

    return (
        <div>
            <h1>User Form</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <br /><br />

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br /><br />

                <button type="submit">
                    Submit
                </button>
            </form>

            <h3>{message}</h3>
        </div>
    );
}

export default App;