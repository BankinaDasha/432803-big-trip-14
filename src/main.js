import {createListFilterTemplate} from './view/list-filter.js';
import {createNavTemplate} from './view/nav.js';
import {createInfoTripTemplate} from './view/trip-info.js';
import {createTripSortTemplate} from './view/trip-sort.js';
import {createTripEventTemplate} from './view/trip-event.js';

const TRIP_EVENT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const sitePageHeader = document.querySelector('.page-header');
const sitePageMain = document.querySelector('.page-main');

const siteFilterElement = sitePageHeader.querySelector('.trip-controls__filters');
const siteNavElement= sitePageHeader.querySelector('.trip-controls__navigation');
const siteInfoTripElement = sitePageHeader.querySelector('.trip-main');
const siteTripSortElement = sitePageMain.querySelector('.trip-events');
const siteTripEventElement = sitePageMain.querySelector('.trip-events');

render(siteInfoTripElement, createInfoTripTemplate(), 'afterbegin');
render(siteFilterElement, createListFilterTemplate(), 'beforeend');
render(siteNavElement, createNavTemplate(), 'beforeend');
render(siteTripSortElement, createTripSortTemplate(), 'beforeend');

for (let i = 0; i < TRIP_EVENT; i++) {
  render(siteTripEventElement, createTripEventTemplate(), 'beforeend');
}

