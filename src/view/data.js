const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};


const generateTypeImg = () => {
  const TYPE = [
    'Taxi',
    'Bus',
    'Train',
    'Ship',
    'Transport',
    'Drive',
    'Flight',
    'Check-in',
    'Restaurant',
  ];

  const randomIndex = getRandomInteger(0, TYPE.length - 1);

  return (TYPE[randomIndex]);
};

const generateTypeTitle = () => {
  const CITY = [
    'Париж',
    'Москва',
    'Токио',
    'Мадрид',
    'Рим',
    'Дубай',
    'Сингапур',
    'Барселона',
  ];

  const randomIndex = getRandomInteger(0, CITY.length - 1);

  return (CITY[randomIndex]);
};

const generateOption = () => {
  const OPTIONS = [
    'Кофе',
    'Wi-fi',
    'Чай',
    'Тортик',
    'Кэшбек',
  ];

  const randomIndex = getRandomInteger(0, OPTIONS.length - 1);

  return (OPTIONS[randomIndex]);
};

const generateOptionPrice = () => {

  const randomIndex = getRandomInteger(20, 200);

  return (randomIndex);
};

const generateDate = () => {

  const randomYear = getRandomInteger(1990, 2021);
  const randomM = getRandomInteger(1, 12);
  const randomD = getRandomInteger(1, 31);
  const randomH = getRandomInteger(1, 24);
  const randomMin = getRandomInteger(1, 60);
  const startDate = new Date(randomYear, randomM, randomD, randomH, randomMin);

  return (startDate);
};

// const getStartTime = () => {
//   const startTime = generateDate().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' });
//   return (startTime);
// };

// const getFinishTime = () => {
//   const finishTime = generateDate().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' });
//   while (finishTime > getStartTime()) {
//     return (finishTime);
//   }
// };

// const getFullTime = () => {
//   const startTime = generateDate().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' });
//   const finishTime = generateDate().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' });
//   const fullTime = finishTime - startTime;
// };

const genetateDescription = () => {
  const descriptionText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.';
  const descriptionTextNew = descriptionText.slice(0, getRandomInteger(50, 600));
  return (descriptionTextNew);
};


const genetateDescriptionImg = () => {
  const imgArrey = [];
  for (let i = 0; i < getRandomInteger(1, 6); i++) {
    const descriptionImg = ` <img class="event__photo" src="http://picsum.photos/248/152?r=${getRandomInteger(1, 20)}" alt="Event photo">`;
    imgArrey.push(descriptionImg);
  }
  return (imgArrey);
};

const generateEvent = () => {
  return {
    type: {
      typeImg: generateTypeImg(),
      typeTitle: generateTypeTitle(),
    },
    time: {
      timeStart: generateDate().getHours(),
      timeFinish: generateDate().getHours(),
      timeOverall: getRandomInteger() - getRandomInteger(),
    },
    date: {
      dateDay: generateDate().getDate(),
      dateMonth: generateDate().toLocaleString('default', { month: 'short' }),
    },
    prise: getRandomInteger(20, 200),
    isFavorite: Boolean(getRandomInteger(0, 1)),
    options: {
      optionsTitle: generateOption(),
      optionsPrice: generateOptionPrice(),
    },
    descrioption: genetateDescription(),
    descriptionImg: genetateDescriptionImg(),
  };
};

export { generateEvent };

