const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

let users = [
    {
        name: "",
        email: "",
        password: ""
    }
];

app.post("/register", (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.send("something went wrong")
    }

    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        return res.send("registration successfull")
    }

    users.push({
        name,
        email,
        password
    });

   res.send("registration successfull")
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});