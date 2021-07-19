import { offers, types, generateOptionPrice, getRandomInteger } from '../../src/data.js';
import {createElement} from '../utils.js';

const createEventTypeTemplate = types.map((type) => {
  const typeToLowerCase = type.toLowerCase();
  return (`<div class="event__type-item">
  <input id="event-type-${typeToLowerCase}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${typeToLowerCase}">
  <label class="event__type-label  event__type-label--${typeToLowerCase}" for="event-type-taxi-1">${type}</label>
  </div>
`);
}).join('');

const offersList = offers.slice(getRandomInteger(0, offers.length - 1));

const createEventOfferTemplate = offersList.map((offer) => {
  const price = generateOptionPrice();
  return (`
    <div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train">
    <label class="event__offer-label" for="event-offer-train-1">
    <span class="event__offer-title">${offer}</span>
     &plus;&euro;&nbsp;
    <span class="event__offer-price">${price}</span>
    </label>
    </div>
  `);
}).join('');


const createNewEventTemplate = (event = {}) => {


  return (
    `<form class="event event--edit" action="#" method="post">
    <header class="event__header">
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="img/icons/${event.type}.png" alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>
            ${createEventTypeTemplate}
          </fieldset>
        </div>
      </div>

      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-1">
          ${event.type}
        </label>
        <input class="event__input  event__input--destination" id="event-destination-1" type="text"
          name="event-destination" value="${event.description.name}" list="destination-list-1">
      </div>

      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">From</label>
        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time"
          value="19/03/19 00:00">
        &mdash;
        <label class="visually-hidden" for="event-end-time-1">To</label>
        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time"
          value="19/03/19 00:00">
      </div>

      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-1">
          <span class="visually-hidden">Price</span>
          ${event.base_price}
          &euro;
        </label>
        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">
      </div>

      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
      <button class="event__reset-btn" type="reset">Cancel</button>
    </header>
    <section class="event__details">
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

        <div class="event__available-offers">
          ${createEventOfferTemplate}
      </section>

      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">${event.description.name}</h3>
        <p class="event__destination-description">${event.description.description}</p>
        <div class="event__photos-container">
          <div class="event__photos-tape">
            ${event.description.pictures}
          </div>
        </div>
      </section>
    </section>
  </form>`
  );
};

export default class NewEvent {
  constructor(event) {
    this._event = event;
    this._element = null;
  }

  getTemplate() {
    return createNewEventTemplate(this._event);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

