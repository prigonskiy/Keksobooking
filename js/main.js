const MOCKS = {
  titles: [
    'Красивый дом',
    'Дыра',
    'Избушка на курьих ножках',
    'Человейник',
    'Вы не сбежите из Омска',
    'Хорошо там где нас нет',
    'А когда новый альбом System of a Down?',
    'Не скучаю по старой работе',
    'Смотрю фильм про нищую Индию прямо сейчас',
    'Девочку зовут Вишенка',
  ],
  photos: [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
  ],
  descriptions: [
    'Пыщь-пыщь, дом-мечта',
    'Cozy home',
    'Квартира. Просторная, тёплая, светлая',
    'Квартира. Ужасная дыра, тёмная и холодная',
    'Солнечный город, только ещё хуже',
    'ЕВРОРЕМОНТ как в Ереване АХАХА',
    'Карина шутит, что работала агентом по недвижимости',
  ],
  location: {
    lat: {
      min: 35.65000,
      max: 35.70000,
    },
    lng: {
      min: 139.70000,
      max: 139.80000,
    },
  },
  price: {
    min: 1,
    max: 500000,
  },
  rooms: {
    min: 1,
    max: 10,
  },
  guests: {
    min: 1,
    max: 100,
  },
  maxId: 10,
};

const PARAMETERS = {
  type: [
    'palace',
    'flat',
    'house',
    'bungalow',
    'hotel',
  ],
  check: [
    '12:00',
    '13:00',
    '14:00',
  ],
  features: [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner',
  ],
  decimalSigns: 5,
};

// Получение рандомного целого числа из диапазона
const getRandomInteger = (firstValue, secondValue) => {
  let min = firstValue < secondValue ? firstValue : secondValue;
  let max = firstValue >= secondValue ? firstValue : secondValue;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно. Будет использоваться для генерации временных географических координат в следующем задании.
const getRandomFloatingPoint = (firstValue, secondValue, numberOfDecimalSigns) => {
  const min = firstValue < secondValue ? firstValue : secondValue;
  const max = firstValue >= secondValue ? firstValue : secondValue;
  return +(Math.random() * (max - min) + min).toFixed(numberOfDecimalSigns);
};

// Получение рандомного элемента массива
const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

// Получение массива из случайного количества случайных элементов массива
const getRandomlyRandomArray = (array) => {
  const randomArray = [];
  for (let currentElement = 0; currentElement < array.length; currentElement++) {
    if (getRandomInteger(0, 1)) {
      randomArray.push(array[currentElement]);
    }
  }
  return randomArray;
};

//
const createAdvert = (advertId) => ({
  author: {
    avatar: `img/avatars/user${(`0${advertId + 1}`).slice(-2)}.png`,
  },
  offer: {
    title: getRandomArrayElement(MOCKS.titles),
    price: getRandomInteger(MOCKS.price.min, MOCKS.price.max),
    type: getRandomArrayElement(PARAMETERS.type),
    rooms: getRandomInteger(MOCKS.rooms.min, MOCKS.rooms.max),
    guests: getRandomInteger(MOCKS.guests.min, MOCKS.guests.max),
    checkin: getRandomArrayElement(PARAMETERS.check),
    checkout: getRandomArrayElement(PARAMETERS.check),
    features: getRandomlyRandomArray(PARAMETERS.features),
    description: getRandomArrayElement(MOCKS.descriptions),
    photos: getRandomlyRandomArray(MOCKS.photos),
  },
  location: {
    lat: getRandomFloatingPoint(MOCKS.location.lat.min, MOCKS.location.lat.max, PARAMETERS.decimalSigns),
    lng: getRandomFloatingPoint(MOCKS.location.lng.min, MOCKS.location.lng.max, PARAMETERS.decimalSigns),
  },
});

const createArrayOfAdverts = () => {
  const arrayOfAdverts = [];
  for (let currentAdvert = 0; currentAdvert < MOCKS.maxId; currentAdvert++) {
    arrayOfAdverts[currentAdvert] = createAdvert(currentAdvert);
    arrayOfAdverts[currentAdvert].offer.address = `${arrayOfAdverts[currentAdvert].location.lat}, ${arrayOfAdverts[currentAdvert].location.lng}`;
  }
  return arrayOfAdverts;
};
