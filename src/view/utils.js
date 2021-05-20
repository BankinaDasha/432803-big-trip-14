
import {cityList, eventPoint} from './data.js';

const getRandomItem = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const GenedateCity = () =>{
  const randomIndex = getRandomItem(0, cityList.length - 1);

  return (cityList[randomIndex]);
};

const GenedatePoint = () =>{
  const randomIndex = getRandomItem(0, eventPoint.length - 1);

  return (eventPoint[randomIndex]);
};


export {GenedateCity, GenedatePoint};
