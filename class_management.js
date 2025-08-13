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

// app.get(`/`, (req, res)=>{
// res.send(`<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <h1>
//         class management
//     </h1>
// </body>
// </html>
    
//     `);
// });

// app.listen(PORT,()=>{

// console.log(`server is running on http://localhost:${PORT}`);


// });

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Under Maintenance</title>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap" rel="stylesheet">
            <style>
                body {
                    background: linear-gradient(135deg, #232526 0%, #414345 100%);
                    min-height: 100vh;
                    margin: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-family: 'Montserrat', Arial, sans-serif;
                }
                .card {
                    background: rgba(34, 40, 49, 0.95);
                    border-radius: 1.5rem;
                    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
                    padding: 3rem 4rem;
                    text-align: center;
                    color: #fff;
                    max-width: 400px;
                    width: 100%;
                    border: 1px solid rgba(255,255,255,0.08);
                    backdrop-filter: blur(6px);
                }
                .icon {
                    font-size: 3.5rem;
                    margin-bottom: 1.2rem;
                    color: #00adb5;
                }
                .card h1 {
                    font-size: 2.2rem;
                    font-weight: 700;
                    margin-bottom: 0.7rem;
                    letter-spacing: 1px;
                }
                .card p {
                    color: #bfc9d1;
                    font-size: 1.1rem;
                    margin-bottom: 0.5rem;
                }
                .card .subtext {
                    color: #00adb5;
                    font-size: 0.95rem;
                    margin-top: 1.5rem;
                }
                @media (max-width: 600px) {
                    .card {
                        padding: 2rem 1rem;
                    }
                }
            </style>
        </head>
        <body>
            <div class="card">
                // <div class="icon">⚡</div>
                // // <h1>We'll Be Back Soon</h1>
                // // <p>Our site is getting a fresh update.<br/>Thank you for your patience!</p>
                // <div class="subtext">&mdash; Dev Team</div>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

