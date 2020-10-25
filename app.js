const express = require("express");

const app = express();

let users = {
    1: {
        id: '1',
        username: 'Jane Doe',
    },
    2: {
        id: '2',
        username: 'Joe Doe',
    },
};

let messages = {
    1: {
        id: '1',
        text: 'Hello World',
        userId: '1',
    },
    2: {
        id: '2',
        text: 'Goodbye World',
        userId: '2',
    },
};

app.get('/expressjs', (req, res) => {
    return res.send(Object.values(users));
});

app.get('/expressjs/users', (req, res) => {
    return res.send(Object.values(users));
});

app.get('/expressjs/users/:userId', (req, res) => {
    return res.send(users[req.params.userId]);
});

app.get('/expressjs/messages', (req, res) => {
    return res.send(Object.values(messages));
});

app.get('/expressjs/messages/:messageId', (req, res) => {
    return res.send(messages[req.params.messageId]);
});

const server = app.listen(0, () => {
    console.log('Example app listening on port:', server.address().port);
});