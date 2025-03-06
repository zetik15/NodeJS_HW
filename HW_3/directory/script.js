const express = require('express');
const path = require('path');
const fs = require('fs')

const app = express();

app.get('/', (req, res) => {
    increment('home');
    const htmlContent = fs.readFileSync(path.join(__dirname, 'main.html'), 'utf-8');
    const countData = JSON.parse(fs.readFileSync(path.join(__dirname, 'count.json'), 'utf-8'));
    const newHtml = htmlContent.replace('<h2>Посещений: </h2>', `<h2>Посещений: ${countData.home}<br>`);
    res.send(newHtml);
});

app.get('/about', (req, res) => {
    increment('about');
    const htmlContent = fs.readFileSync(path.join(__dirname, 'about.html'), 'utf-8');
    const countData = JSON.parse(fs.readFileSync(path.join(__dirname, 'count.json'), 'utf-8'))
    const newHtml = htmlContent.replace('<h2>Посещений: </h2>', `<h2>Посещений: ${countData.about}<br>`);
    res.send(newHtml);
});

const port = 3000;

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});




function initFile() {
    if (path.join(__dirname, 'count.json')) {
        console.log('Всё гуд');
    } else {
        fs.writeFileSync(path.join(__dirname, 'count.json'), JSON.stringify({
            home: 0,
            about: 0
        }));
    };
};

function increment(page) {
    try {
        const countPages = JSON.parse(fs.readFileSync(path.join(__dirname, 'count.json'), 'utf-8'));

        if (page === 'about') {
            countPages.about++
        } else {
            countPages.home++
        };

        fs.writeFileSync(path.join(__dirname, 'count.json'), JSON.stringify(countPages));
    } catch (err) {
        console.error(`Ошибка: ${err.message}`);
    };
};

initFile();




