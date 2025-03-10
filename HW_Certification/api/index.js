const express = require('express');
const joi = require('joi');
const { checkBody, checkParams } = require('./validation/validator');
const { userScheme, userId } = require('./validation/schema');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(express.json());

let uniqueID = 0;

try {
    const users = JSON.parse(fs.readFileSync(path.join(__dirname, 'users.json'), 'utf-8'));
    if (users.length > 0) {
        uniqueID = Math.max(...users.map(user => user.id)) || 0
    }
} catch (error) {
    uniqueID = 0
}

app.get('/users', (req, res) => {
    try {
        let users = [];

        try {
            users = JSON.parse(fs.readFileSync(path.join(__dirname, 'users.json'), 'utf-8'));
        } catch (error) {
            users = [];
        }

        if (users.length === 0) {
            return res.status(404).send({ error: 'Пользователи не найдены' });
        }

        res.send({ users });
    } catch (error) {
        res.status(500).send({ error: 'Произошла ошибка' });
    }
});

app.get('/users/:id', checkParams(userId), (req, res) => {
    try {
        let users = [];
            
        try {
            users = JSON.parse(fs.readFileSync(path.join(__dirname, 'users.json'), 'utf-8'));
        } catch (error) {
            users = [];
        }

        const id = +req.params.id;
        const user = users.find((user) => user.id === id);

        if (user) {
            res.send({ user });
        } else {
            res.status(404).send({ error: 'Пользователь не найден' })
        }
    } catch (error) {
       res.status(500).send({ error: 'Произошла ошибка' })
    }
});

app.post('/users', checkBody(userScheme), (req, res) => {
    try {
        let users = [];

        try {
            users = JSON.parse(fs.readFileSync(path.join(__dirname, 'users.json'), 'utf-8'));
        } catch (error) {
            users = [];
        }
        
        uniqueID += 1;

        const newUser = {
            id: uniqueID,
            ...req.body
        };

        users.push(newUser);

        fs.writeFileSync(path.join(__dirname, 'users.json'), JSON.stringify(users));
    
        res.send({ id: uniqueID });
    } catch (error) {
        res.status(500).send({ error: 'Произошла ошибка' })
    }
});

app.put('/users/:id', checkParams(userId), checkBody(userScheme), (req, res) => {
    try {
        let usersPut = [];

        try {
            usersPut = JSON.parse(fs.readFileSync(path.join(__dirname, 'users.json'), 'utf-8'));
        } catch (error) {
            usersPut = [];
        }

        const userId = +req.params.id;
        const userIndex = usersPut.findIndex((user) => user.id === userId);
    
        if (userIndex !== -1) {
            usersPut[userIndex] = {
                id: userId,
                ...req.body
            };

            fs.writeFileSync(path.join(__dirname, 'users.json'), JSON.stringify(usersPut));

            res.send({ user: usersPut[userIndex] });

        } else {
            res.status(404).send({ user: null })
        }
    } catch (error) {
        res.status(500).send({ error: 'Произошла ошибка' })
    }
});

app.delete('/users/:id', checkParams(userId), (req, res) => {
    try {
        let usersDel = [];

        try {
            usersDel = JSON.parse(fs.readFileSync(path.join(__dirname, 'users.json'), 'utf-8'))
        } catch (error) {
            usersDel = [];
        }

        const userId = +req.params.id;
        const userIndex = usersDel.findIndex((user) => user.id === userId);
    
        if (userIndex !== -1) {
            usersDel.splice(userIndex, 1);
            
            fs.writeFileSync(path.join(__dirname, 'users.json'), JSON.stringify(usersDel));

            res.send({ message: 'Пользователь успешно удален' });
        } else {
            res.status(404).send({ error: 'Пользователь не найден' })
        }
    } catch (error) {
        res.status(500).send({ error: 'Произошла ошибка' })
    }
});

app.listen(3000);