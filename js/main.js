// Получение рандомного целого числа из диапазона
const getRandomInteger = (firstValue, secondValue) => {
  let min = firstValue < secondValue ? firstValue : secondValue;
  let max = firstValue >= secondValue ? firstValue : secondValue;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно. Будет использоваться для генерации временных географических координат в следующем задании.
const getRandomFloatingPoint = (firstValue, secondValue, numberOfDecimalSigns) => {
  let min = firstValue < secondValue ? firstValue : secondValue;
  let max = firstValue >= secondValue ? firstValue : secondValue;
  return +(Math.random() * (max - min) + min).toFixed(numberOfDecimalSigns);
}
