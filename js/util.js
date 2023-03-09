// Получение рандомного целого числа из диапазона
export const getRandomInteger = (firstValue, secondValue) => {
  let min = firstValue < secondValue ? firstValue : secondValue;
  let max = firstValue >= secondValue ? firstValue : secondValue;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно. Будет использоваться для генерации временных географических координат в следующем задании.
export const getRandomFloatingPoint = (firstValue, secondValue, numberOfDecimalSigns) => {
  const min = firstValue < secondValue ? firstValue : secondValue;
  const max = firstValue >= secondValue ? firstValue : secondValue;
  return +(Math.random() * (max - min) + min).toFixed(numberOfDecimalSigns);
};

// Получение рандомного элемента массива
export const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

// Получение массива из случайного количества случайных элементов массива
export const getRandomlyRandomArray = (array) => {
  const randomArray = [];
  for (let currentElement = 0; currentElement < array.length; currentElement++) {
    if (getRandomInteger(0, 1)) {
      randomArray.push(array[currentElement]);
    }
  }
  return randomArray;
};
