import {create} from './create.js'

const dataItems = [
  {
    name: 'Dart',
    img: 'public/assets/img/technology-dart.png',
    category: 'web',
  },
  {
    name: 'Vie.js',
    img: 'public/assets/img/technology-vue.png',
    category: 'web',
  },
  {
    name: 'PHP',
    img: 'public/assets/img/technology-php.png',
    category: 'web',
  },
  {
    name: 'Swift',
    img: 'public/assets/img/technology-Swift.png',
    category: 'mobile',
  },
  {
    name: 'Redis',
    img: 'public/assets/img/technology-Redis.png',
    category: 'web',
  },
  {
    name: 'IOS',
    img: 'public/assets/img/technology-IOS.png',
    category: 'mobile',
  },
  {
    name: 'AWS',
    img: 'public/assets/img/technology-AWS.png',
    category: 'web',
  },
  {
    name: 'Node.js',
    img: 'public/assets/img/technology-Node.png',
    category: 'web',
  },
  {
    name: 'Laravel',
    img: 'public/assets/img/technology-Laravel.png',
    category: 'web',
  },
  {
    name: 'Gitlab',
    img: 'public/assets/img/technology-Gitlab.png',
    category: 'web',
  },
  {
    name: 'Stripe',
    img: 'public/assets/img/technology-Stripe.png',
    category: 'web',
  },
  {
    name: 'jQuery',
    img: 'public/assets/img/technology-jQuery.png',
    category: 'web',
  },
  {
    name: 'Angular',
    img: 'public/assets/img/technology-Angular.png',
    category: 'web',
  },
  {
    name: 'Android',
    img: 'public/assets/img/technology-Android.png',
    category: 'mobile',
  },
  {
    name: 'React JS',
    img: 'public/assets/img/technology-React.png',
    category: 'web',
  },
  {
    name: 'Kotlin',
    img: 'public/assets/img/technology-Kotlin.png',
    category: 'mobile',
  },
  {
    name: 'MariaDB',
    img: 'public/assets/img/technology-MariaDB.png',
    category: 'web',
  },
  {
    name: 'MongoDB',
    img: 'public/assets/img/technology-MongoDB.png',
    category: 'web',
  },
  {
    name: 'Firebase',
    img: 'public/assets/img/technology-Firebase.png',
    category: 'web',
  },
  {
    name: 'Flutter',
    img: 'public/assets/img/technology-Flutter.png',
    category: 'mobile',
  },
  {
    name: 'Illustrator',
    img: 'public/assets/img/technology-Illustrator.png',
    category: 'design',
  },
  {
    name: 'Jenkins',
    img: 'public/assets/img/technology-Jenkins.png',
    category: 'web',
  },
  {
    name: 'XMind',
    img: 'public/assets/img/technology-XMind.png',
    category: 'design',
  },
  {
    name: 'Figma',
    img: 'public/assets/img/technology-Figma.png',
    category: 'design',
  },
  {
    name: 'Bootstrap',
    img: 'public/assets/img/technology-Bootstrap.png',
    category: 'web',
  },
  {
    name: 'JavaScript',
    img: 'public/assets/img/technology-JavaScript.png',
    category: 'web',
  },
  {
    name: 'TypeScript',
    img: 'public/assets/img/technology-TypeScript.png',
    category: 'web',
  },
  {
    name: 'PostgreSQL',
    img: 'public/assets/img/technology-PostgreSQL.png',
    category: 'web',
  },
  {
    name: 'Photoshop',
    img: 'public/assets/img/technology-Photoshop.png',
    category: 'design',
  },
]

const wrap = document.querySelector('.technologies');

export function technologies(){
  for( let i = 0; i < dataItems.length; i++){
    const item = create('div', 'technologies-item');
    item.classList.add(dataItems[i].category);
    const wrapImg = create('div', 'technology-img-wrap');
    const img = create('img', 'technology-img', { src: dataItems[i].img})
    const name = create('p', 'technology-name', {innerHTML: dataItems[i].name})

    wrap.append(item);
    item.append(wrapImg);
    wrapImg.append(img);
    item.append(name);
  }
}

