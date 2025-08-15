const express = require('express');

const app=express();
const PORT = 3000;

app.get('/', (req, res) => {
    app.use(express.json());

    });


app.use(express.json());


let users = [
    {id:1, lastName:'Doe', firstName: 'John', section:'BSIT 4C', status: "present"},
    {id:2, lastName:'Smith', firstName: 'Jane', section:'BSIT 4C', status: "absent"},
];


app.post('/users', (req, res)=>{
    // console.log('POST request recieved for /users');
    const {firstName, lastName, section, status} = req.body;

    const userIndex =users.findIndex(user => user.lastName === lastName && user.firstName === firstName);

    if (userIndex !==-1){
        
        user[userIndex].status = status;
        console.log(`Updated attendance for ${lastName} ${firstName} to : ${status}`);
        res.status(200).json ({message: `Attendance for ${lastName} ${firstName} has been updated to ${status}`});
    }
    else {
        const newUser ={
            id: users.length + 1, 
            firstName, 
            lastName,
            section,
            status
        };
    }
    users.push(newUser);
    console.log(`Added new user ${firstName} ${lastName} to ${section} with status ${status}`);
    res.status(201).json({message: `New user ${firstName} ${lastName} added to ${section} with status ${status}`});
    

    
});

app.get(`/users`, (req, res) => {
    res.send(users);
    console.log(`GET request recieved at /user`)
});


module.exports = app;

app.listen(PORT, () => {
    console.log(`server is listening at http://localhost:${PORT}`);

});












