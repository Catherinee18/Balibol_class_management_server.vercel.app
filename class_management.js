const express = require ('express');

const app = express();
const PORT = 3000;

// app.get('/',(req, res) => {
// app.use(express.json());

// });
// let users = [
//     {id:1, lastName:'Doe', firstName: 'John', section:'BSIT 4C'},
//     {id:2, lastName:'Smith', firstName: 'Jane', section:'BSIT 4C'},
// ];


// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);

// app.post('/users', (req, res)=>{
//     console.log('POST request recieved for /users');
//     const {firstName, lastName, section} = req.body;

//     if (!firstName || !lastName || section) {
//         return res.status(400).json({error: 'All fields are required.'});
//     }
//     const newUser={
//         id: users.length + 1, 
//         firstName, 
//         lastName,
//         section
    
//     }
// })
// });

app.get(`/`, (req, res)=>{
res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>
        class management
    </h1>
</body>
</html>
    
    `);
});

app.listen(PORT,()=>{

console.log(`server is running on http://localhost:${PORT}`);

});