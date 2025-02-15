const http = require('http');
const fs = require('fs');

let homeCount = 0;
let aboutCount = 0;

const server = http.createServer((req, res) => {
    console.log('Запрос получен');

    if (req.url === '/') {
        increment('home');
        res.writeHead(200, {
            'Content-type': 'text/html; charset=UTF-8',
        });
        res.end(`<h1>Добро пожаловать на мой сайт</h1><a href="/about">Почитайте обо мне</a><h2>Посещений: ${getValue('home')}</h2>`);
    } else if (req.url === '/about') {
        increment('about');
        res.writeHead(200, {
            'Content-type': 'text/html; charset=UTF-8',
        });
        res.end(`<h1>Я катаю на PROGASl</h1><a href="/">На главную</a><h2>Посещений: ${getValue('about')}</h2>`);
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html; charset=UTF-8',
        });
        res.end('<h1>Страница не найдена</h1>');
    }
})

const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
})

function getValue(page) {
    if (page === 'home') {
        return homeCount;
    } else {
        return aboutCount;
    }
}

function increment(page) {
    if (page === 'home') {
        homeCount++;
    } else {
        aboutCount++;
    }
    
    try {
        fs.writeFileSync('count.json', JSON.stringify({ 
            home: homeCount, 
            about: aboutCount 
        }));
    } catch (error) {
        console.error('Ошибка сохранения:', error);
    }
}

try {
    const data = fs.readFileSync('count.json', 'utf8');
    const counts = JSON.parse(data);
    homeCount = counts.home;
    aboutCount = counts.about;
} catch (error) {
    console.error('Ошибка чтения файла:', error);
}