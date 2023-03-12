/* eslint-disable no-unused-expressions */

import { typesNames } from './const.js';
import { createArrayOfAdverts } from './data.js';

const setFeatures = (featuresContainer, featuresData) => {
  const featuresList = featuresContainer.querySelectorAll('.popup__feature');
  const modifiers = featuresData.map((feature) => `popup__feature--${feature}`);

  featuresList.forEach((featuresListItem) => {
    const modifier = featuresListItem.classList[1];
    if (!modifiers.includes(modifier)) {
      featuresListItem.remove();
    }
  });
};

const setPhotos = (photosContainer, photosData) => {
  photosContainer.innerHTML = '';
  photosData.forEach((photo) => {
    const photoItem = document.createElement('img');
    photoItem.classList.add('popup__photo');
    photoItem.setAttribute('src', photo);
    photoItem.setAttribute('width', '45');
    photoItem.setAttribute('height', '40');
    photoItem.setAttribute('alt', 'Фотография жилья');
    photosContainer.append(photoItem);
  });
};

const hideParameter = (parameter) => {
  parameter.classList.add('hidden');
  parameter.innerHTML = '';
};

const showAdverts = () => {
  const similiarAdvertTemplate = document.querySelector('#card').content;
  const advertsContainer = document.querySelector('#map-canvas');
  const advertFragment = document.createDocumentFragment();
  const advertsArray = createArrayOfAdverts();

  advertsArray.forEach(({ author, offer }) => {
    const advertElement = similiarAdvertTemplate.cloneNode(true);
    const titleTemplate = advertElement.querySelector('.popup__title');
    const addressTemplate = advertElement.querySelector('.popup__text--address');
    const priceTemplate = advertElement.querySelector('.popup__text--price');
    const typeTemplate = advertElement.querySelector('.popup__type');
    const capacityTemplate = advertElement.querySelector('.popup__text--capacity');
    const timeTemplate = advertElement.querySelector('.popup__text--time');
    const avatarTemplate = advertElement.querySelector('.popup__avatar');
    const featuresContainer = advertElement.querySelector('.popup__features');
    const photosContainer = advertElement.querySelector('.popup__photos');

    offer.title ? titleTemplate.textContent = offer.title : hideParameter(titleTemplate);
    offer.address ? addressTemplate.textContent = offer.address : hideParameter(addressTemplate);
    offer.price ? priceTemplate.textContent = `${offer.price}  ₽/ночь` : hideParameter(priceTemplate);
    offer.type ? typeTemplate.textContent = typesNames[offer.type] : hideParameter(typeTemplate);
    offer.rooms && offer.guests ? capacityTemplate.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей` : hideParameter(capacityTemplate);
    offer.checkin && offer.checkout ? timeTemplate.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}` : hideParameter(timeTemplate);
    setFeatures(featuresContainer, offer.features);
    setPhotos(photosContainer, offer.photos);
    author.avatar ? avatarTemplate.setAttribute('src', author.avatar) : hideParameter(avatarTemplate);

    advertFragment.appendChild(advertElement);
  });

  advertsContainer.appendChild(advertFragment);
};

export { showAdverts };
