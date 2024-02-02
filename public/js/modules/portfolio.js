import {create} from './create.js'

const dataItemsProject = [
  {
    bg: '#151515',
    logo: 'public/assets/ico/defu.svg',
    name: 'Furniture',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    img: 'public/assets/img/portfolio-1.jpg',
    category: 'design',
  },
  {
    bg: '#5C62EE',
    logo: 'public/assets/ico/RecipeRoute.svg',
    name: 'RecipeRoute',
    text: 'Create stunning, custom images with our neural network web service. Easy-to-use and perfect for advertising, design, and artistic expression',
    img: 'public/assets/img/portfolio-2.jpg',
    category: 'design',
  },
  {
    bg: '#E04E4E',
    logo: 'public/assets/ico/Leasi.svg',
    name: 'Leasi',
    text: 'Revolutionize your learning with our mobile app. Learn on-the-go with interactive quizzes, personalized recommendations, and social learning tools',
    img: 'public/assets/img/portfolio-3.jpg',
    category: 'mobile',
  },
  {
    bg: '#151515',
    logo: 'public/assets/ico/HealthHarbor.svg',
    name: 'HealthHarbor',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    img: 'public/assets/img/portfolio-4.jpg',
    category: 'web',
  },
  {
    bg: '#151515',
    logo: 'public/assets/ico/defu.svg',
    name: 'Furniture',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    img: 'public/assets/img/portfolio-1.jpg',
    category: 'design',
  },
  {
    bg: '#5C62EE',
    logo: 'public/assets/ico/RecipeRoute.svg',
    name: 'RecipeRoute',
    text: 'Create stunning, custom images with our neural network web service. Easy-to-use and perfect for advertising, design, and artistic expression',
    img: 'public/assets/img/portfolio-2.jpg',
    category: 'design',
  },
  {
    bg: '#E04E4E',
    logo: 'public/assets/ico/Leasi.svg',
    name: 'Leasi',
    text: 'Revolutionize your learning with our mobile app. Learn on-the-go with interactive quizzes, personalized recommendations, and social learning tools',
    img: 'public/assets/img/portfolio-3.jpg',
    category: 'mobile',
  },
  {
    bg: '#151515',
    logo: 'public/assets/ico/HealthHarbor.svg',
    name: 'HealthHarbor',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    img: 'public/assets/img/portfolio-4.jpg',
    category: 'web',
  },
]

const wrap = document.querySelector('.portfolio__wrap');

export function portfolio() {
  for( let i = 0; i < dataItemsProject.length; i++){
    const item = create('div', 'portfolio__item');
    item.classList.add(dataItemsProject[i].category);
    item.style.backgroundColor = dataItemsProject[i].bg;
    const logoWrap = create('div', 'portfolio__logo-wrap');
    const logo = create('img', 'portfolio__logo', {src: dataItemsProject[i].logo});
    const name = create('p', 'portfolio__name', {innerHTML: dataItemsProject[i].name});
    const text = create('p', 'portfolio__description', {innerHTML: dataItemsProject[i].text});
    const imgWrap = create('div', 'portfolio__img-wrap');
    const img = create('img', 'portfolio__img', {src: dataItemsProject[i].img});


    wrap.append(item);
    item.append(logoWrap);
    logoWrap.append(logo);
    item.append(name);
    item.append(text);
    item.append(imgWrap);
    imgWrap.append(img)
  }
}