import { MOCKS, PARAMETERS } from './const.js';
import { getRandomArrayElement, getRandomInteger, getRandomlyRandomArray, getRandomFloatingPoint } from './util.js';

const createAdvert = () => ({
  author: {
    avatar: `img/avatars/user${(`0${getRandomInteger(1, 10)}`).slice(-2)}.png`,
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
    arrayOfAdverts[currentAdvert] = createAdvert();
    arrayOfAdverts[currentAdvert].offer.address = `${arrayOfAdverts[currentAdvert].location.lat}, ${arrayOfAdverts[currentAdvert].location.lng}`;
  }
  return arrayOfAdverts;
};

export { createArrayOfAdverts };
