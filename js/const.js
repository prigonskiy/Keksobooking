export const MOCKS = {
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

export const PARAMETERS = {
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

export const typesNames = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};
