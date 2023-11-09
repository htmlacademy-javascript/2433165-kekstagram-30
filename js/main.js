const MIN_INDEX = 1;
const MAX_INDEX = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const NAMES = [
  'Олег','Вася','Максим','Пётр','Григорий','Константин','Валера','Эдик','Слава','Даня','Дима','Денис',
  'Кирилл','Захар','Андрей','Антон','Егор','Артём','Илья','Влад','Александр','Платон','Клим','Фёдор','Михаил'
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const Descriptions = [
  'Йо Sj тут просто супер. #chill #relax #photo #travel #summer',
  'Даже в WOW поиграл, отпуск считаю достойный. #chill #travel #photo #games #holidays',
  'На чиле, на расслабоне. #summer #fest #chill #friends #photo #fun',
  'Это было очень классно. #crazy #holidays #fun #friends #photo #travel',
  'Если отдых - то только на югах. #sea #photo #relax #travel #chill #summer',
  'А в Mayami реально горячая линия. #travel #HotLineMayami #chill #photo #fun',
  'Зацените где я! #newplace #travel #fun #holidays #friends #photo',
  'Для кого как, а для меня отдых - это DarkSouls. #DarkSouls #crazy #pain #rofls #fun #chill #screenshot',
  'Туса с друзьяшками на морях. #sea #dive #fun #friends #photo #travel #chill #summer'
];
let usesId = [];
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функция генератор рандомного имени пользователя
function getRandomName(){
  const randomIndex = getRandomInteger(MIN_INDEX, MAX_INDEX);
  return NAMES[randomIndex - 1];
}

// Функция генератор рандомного id пользователя
function getRandomId(){
  return getRandomInteger(MIN_INDEX, MAX_INDEX);
}

// Функция берущая рандомную картинку и ставящая её в объект
function getUrl(){
  return `img/avatar-${getRandomInteger(1, 6)}.svg`;
}

// Функция генератор рандомного коммента
function getMessage(){
  return MESSAGES[getRandomInteger(MIN_INDEX - 1, MESSAGES.length - 1)];
}

function getDescription(){
  return Descriptions[getRandomInteger(MIN_INDEX - 1, Descriptions.length - 1)];
}

// Функция генератор рандомного числа лайков
function getRandomLikes(){
  return getRandomInteger(MIN_LIKES, MAX_LIKES);
}
function createObject(){
  let currentObj = {
    id: getRandomId(),
    avatar: getUrl(),
    discription: getDescription(),
    likes: getRandomLikes(),
    message: getMessage(),
    name: getRandomName(),
    comments: getMessage()
  };
  return currentObj;
}
// Функция генертор массива из 25 объектов
function createArray(){
  let myArr = [];
  let obj;
  for(let i = 1; i <= MAX_INDEX; i++){
    obj = createObject();
    obj.id = i - 1;
    myArr.push(obj);
  }
  return myArr;
}
