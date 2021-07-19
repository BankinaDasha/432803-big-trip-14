import ListFilter from './view/list-filter.js';
import SiteNavView from './view/nav.js';
import InfoTrip from './view/trip-info.js';
import TripSort from './view/trip-sort.js';
import EventList from './view/event-list.js';
import TripEvent from './view/trip-event.js';
import NewEvent from './view/add-event.js';
import {generateEvent} from './data.js';
import {renderElement, RenderPosition} from './utils.js';


const TRIP_EVENT = 20;

const events = new Array(TRIP_EVENT).fill().map(generateEvent);

const sitePageHeader = document.querySelector('.page-header');
const sitePageMain = document.querySelector('.page-main');
const siteFilterElement = sitePageHeader.querySelector('.trip-controls__filters');
const siteNavElement= sitePageHeader.querySelector('.trip-controls__navigation');
const siteInfoTripElement = sitePageHeader.querySelector('.trip-main');
const siteTripSortElement = sitePageMain.querySelector('.trip-events');

const renderEvent = (eventListElement, event) => {
  const eventComponent = new TripEvent(event);
  const eventEditComponent = new NewEvent(event);

  const replaceCardToForm = () => {
    eventListElement.replaceChild(eventEditComponent.getElement(), eventComponent.getElement());
  };

  const replaceFormToCard = () => {
    eventListElement.replaceChild(eventComponent.getElement(), eventEditComponent.getElement());
  };

  eventComponent.getElement().querySelector('.event__rollup-btn').addEventListener('click', () => {
    replaceCardToForm();
  });

  eventEditComponent.getElement().querySelector('form').addEventListener('submit', (evt) => {
    evt.preventDefault();
    replaceFormToCard();
  });

  renderElement(eventListElement, eventComponent.getElement(), RenderPosition.BEFOREEND);
};

renderElement(siteInfoTripElement, new InfoTrip().getElement(), RenderPosition.AFTERBEGIN);
renderElement(siteNavElement, new SiteNavView().getElement(), RenderPosition.BEFOREEND);
renderElement(siteFilterElement, new ListFilter().getElement(), RenderPosition.AFTERBEGIN);
renderElement(siteTripSortElement, new TripSort().getElement(), RenderPosition.BEFOREEND);
// renderElement(siteTripSortElement, new EventList().getElement(), RenderPosition.BEFOREEND);


const eventListComponent =  new EventList();
renderElement(siteTripSortElement, eventListComponent.getElement(), RenderPosition.BEFOREEND);

for (let i = 0; i < TRIP_EVENT; i++) {
  renderEvent(eventListComponent, new TripEvent(events[i]).getElement(), RenderPosition.BEFOREEND);
}

