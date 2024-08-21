import green from '../../assets/produtores/green.png';
import salad from '../../assets/produtores/salad.png';
import jennyJack from '../../assets/produtores/jenny-jack.png';
import grow from '../../assets/produtores/grow.png';
import potager from '../../assets/produtores/potager.png';

const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const produtores = {
  title: 'Produtores',
  list: [
    {
      name: 'Green',
      image: green,
      distance: randomNumber(1, 500),
      ranking: randomNumber(1, 5),
    },
    {
      name: 'Salad',
      image: salad,
      distance: randomNumber(1, 500),
      ranking: randomNumber(1, 5),
    },
    {
      name: 'Jenny Jack Farm',
      image: jennyJack,
      distance: randomNumber(1, 500),
      ranking: randomNumber(1, 5),
    },
    {
      name: 'Grow',
      image: grow,
      distance: randomNumber(1, 500),
      ranking: randomNumber(1, 5),
    },
    {
      name: 'Potager',
      image: potager,
      distance: randomNumber(1, 500),
      ranking: randomNumber(1, 5),
    },
  ],
};

export default produtores;
