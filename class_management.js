const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.json());


let users = [
    { id: 1, lastName: 'Doe', firstName: 'John', section: 'BSIT 4C', status:'present' },
    { id: 2, lastName: 'Smith', firstName: 'Jane', section: 'BSIT 4C', status:'absent' },
];


app.get('/user', (req, res) => {
    const{lastName,firstName,section,status} = req.body;

    const userIndex= users.findIndex(user => user.lastName === lastName && user.firstName === firstName);

    if (userIndex !==-1) {

        users[userIndex].status = status;
        console.log('Update attendance for ${lastName} ${firstName} to: ${status}');
        res.status(200).json({message: 'Attendance for ${lastName} ${firstName} has beed updated to ${status}'})
    }

    else {
        const newUser ={
            id: users.length +1,
            lastName,
            firstName,
            section,
            status
        };
        users.push(newUser);
        console.log('New user succesfully added ${lastName} ${firstName} with : ${status}');
        res.status(201).json({message: 'New user succesfully added'});

    }
});

app.get('/users', (req, res) =>{
    res.status(200).json(users);
});

app.get('/', (req, res) => {
    res.send('Server is up and running');
});

module.exports =app;

app.listen(PORT, () => {
    console.log('server is listening at http://localhost${PORT}');
});

