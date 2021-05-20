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


const generateEvent = () => {
  return {
    //date: generateDate(),
    type: {
      typeImg: generateTypeImg(),
      typeTitle: generateTypeTitle(),
    },
    time: {
      timeStart: getRandomInteger(0, 24),
      timeFinish: getRandomInteger(0, 24),
      timeOverall: getRandomInteger() - getRandomInteger(),
    },
    prise: getRandomInteger(20, 200),
    isFavorite: Boolean(getRandomInteger(0, 1)),
    options: {
      optionsTitle: generateOption(),
      optionsPrice: generateOptionPrice(),
    },
  };
};


export { generateEvent };

