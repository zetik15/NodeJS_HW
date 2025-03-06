# 🎲 GenerateRandomMath

<div align="center">
  
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)

</div>

<p align="center">
  <b>Простая и мощная JavaScript библиотека для генерации случайных значений</b>
</p>

---

## 📋 Содержание

- [✨ Возможности](#-возможности)
- [📦 Установка](#-установка)
- [🚀 Использование](#-использование)
- [📖 API](#-api)
- [👨‍💻 Автор](#-автор)
- [📄 Лицензия](#-лицензия)

---

## ✨ Возможности

- 🔢 **Генерация случайных чисел** в заданном диапазоне
- 📊 **Создание массивов** случайных чисел
- ✅ **Генерация булевых значений** с настраиваемой вероятностью
- 🎨 **Генерация случайных цветов** в формате HEX

---

## 📦 Установка

```bash
npm install generate-random-math
```

---

## 🚀 Использование

```javascript
const random = require('generate-random-math');

// Генерация случайного целого числа
const randomInt = random.getRandomInt(1, 100);
console.log('Случайное число:', randomInt); // Например: 42

// Генерация массива случайных чисел
const randomArray = random.getRandomArray(5, 1, 100);
console.log('Массив случайных чисел:', randomArray); // Например: [23, 45, 12, 87, 36]

// Генерация случайного булева значения
const randomBoolean = random.getRandomBoolean(0.7); // 70% вероятность true
console.log('Случайное булево значение:', randomBoolean); // true или false

// Генерация случайного цвета в формате HEX
const randomColor = random.getRandomColor();
console.log('Случайный цвет:', randomColor); // Например: "#1A2B3C"
```

---

## 📖 API

### `getRandomInt(min, max)`

Генерирует случайное целое число в диапазоне от `min` до `max` включительно.

#### Параметры:
- `min` (number): Минимальное значение диапазона
- `max` (number): Максимальное значение диапазона

#### Возвращает:
- (number): Случайное целое число

#### Пример:
```javascript
const num = random.getRandomInt(1, 10); // Число от 1 до 10
```

### `getRandomArray(length, min, max)`

Создает массив указанной длины, заполненный случайными целыми числами в диапазоне от `min` до `max`.

#### Параметры:
- `length` (number): Длина массива
- `min` (number): Минимальное значение для чисел
- `max` (number): Максимальное значение для чисел

#### Возвращает:
- (Array): Массив случайных чисел

#### Пример:
```javascript
const arr = random.getRandomArray(5, 1, 100); // [23, 45, 12, 87, 36]
```

### `getRandomBoolean(probability = 0.5)`

Генерирует случайное булево значение (true/false) с указанной вероятностью получения true.

#### Параметры:
- `probability` (number, optional): Вероятность получения true (от 0 до 1). По умолчанию: 0.5

#### Возвращает:
- (boolean): Случайное булево значение

#### Пример:
```javascript
const bool = random.getRandomBoolean(0.7); // 70% вероятность true
```

### `getRandomColor()`

Генерирует случайный цвет в формате HEX.

#### Возвращает:
- (string): Строка с HEX-цветом (например, "#FF5733")

#### Пример:
```javascript
const color = random.getRandomColor(); // "#1A2B3C"
```

---

## 👨‍💻 Автор

**axaero**

---

## 📄 Лицензия

Copyright © 2025 [axaero](https://github.com/axaero).

Этот проект лицензирован под [ISC License](https://opensource.org/licenses/ISC).

---

<div align="center">
  <sub>Сделано с ❤️ в России</sub>
</div>