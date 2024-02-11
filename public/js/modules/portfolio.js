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
export function portfolio() {
  const wrap = document.querySelector('.portfolio__wrap');

  const addPortfolioItems = (numItemsToAdd) => {
    const moreButton = document.querySelector('.portfolio-more');
    const portfolioItems = wrap.querySelectorAll('.portfolio__item');
    const currentPosition = portfolioItems.length;

    for (let i = currentPosition; i < currentPosition + numItemsToAdd && i < dataItemsProject.length; i++) {
      if (portfolioItems.length < dataItemsProject.length) {
        const item = create('div', 'portfolio__item');
        item.classList.add(dataItemsProject[i].category);
        item.style.background = dataItemsProject[i].bg;

        const logoWrap = create('div', 'portfolio__logo-wrap');
        const logo = create('img', 'portfolio__logo', { src: dataItemsProject[i].logo });
        const name = create('p', 'portfolio__name', { innerHTML: dataItemsProject[i].name });
        const text = create('p', 'portfolio__description', { innerHTML: dataItemsProject[i].text });
        const imgWrap = create('div', 'portfolio__img-wrap');
        const img = create('img', 'portfolio__img', { src: dataItemsProject[i].img });

        logoWrap.appendChild(logo);
        imgWrap.appendChild(img);
        item.appendChild(logoWrap);
        item.appendChild(name);
        item.appendChild(text);
        item.appendChild(imgWrap);

        wrap.appendChild(item);
      }
    }
    
    let renderedItem = document.getElementsByClassName('portfolio__item')
    
    if (renderedItem.length >= dataItemsProject.length) {
      moreButton.classList.remove('btn');
      moreButton.classList.add('btn-disabled');
      moreButton.disabled = true;
    } else {
      moreButton.classList.add('btn');
      moreButton.classList.remove('btn-disabled');
      moreButton.disabled = false;
    }
  };

  window.addEventListener('load', () => {
    if (window.innerWidth >= 1440) {
      addPortfolioItems(3);
    } else {
      addPortfolioItems(2);
    }
  });

  const moreButton = document.querySelector('.portfolio-more');
  moreButton.addEventListener('click', () => {
    if (window.innerWidth >= 1440) {
      addPortfolioItems(3);
    } else if (window.innerWidth >= 320) {
      addPortfolioItems(2);
    }
  });

  const buttons = document.querySelectorAll(".portfolio-option");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => {
        btn.classList.remove("section-option--active");
      });
      button.classList.add("section-option--active");

      const currentCategory = button.dataset.filter;
      const allItems = Array.from(wrap.getElementsByClassName("portfolio__item"));

      allItems.forEach((item) => {
        const isItemFiltered = !item.classList.contains(currentCategory);
        const isShowAll = currentCategory === "all";
        if (isItemFiltered && !isShowAll) {
          item.classList.add("hide");
        } else {
          item.classList.remove("hide");
        }
      });
    });
  });
}

