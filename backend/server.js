import express from 'express';

const app = express();

// app.get('/', (req, res) => {
//     res.send('Server is ready');
// });

//get a list of 5 jokes
app.get('/api/jokes', (req, res) => {
   const jokes = [
        {
            "id": 1,
            "title": "Lost Bicycle",
            "content": {
                "question": "Why couldn't the bicycle find its way home?",
                "answer": "It lost its bearings."
            }
        },
        {
            "id": 2,
            "title": "Sad Math Book",
            "content": {
                "question": "Why was the math book sad?",
                "answer": "Because it had too many problems."
            }
        },
        {
            "id": 3,
            "title": "Talking Walls",
            "content": {
                "question": "What did one wall say to the other wall?",
                "answer": "I'll meet you at the corner!"
            }
        },
        {
            "id": 4,
            "title": "Untrustworthy Atoms",
            "content": {
                "question": "Why don't scientists trust atoms?",
                "answer": "Because they make up everything!"
            }
        }
    ];
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`)
}
);