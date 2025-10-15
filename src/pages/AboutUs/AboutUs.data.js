import sushi from '@assets/images/AboutUs/Cards/Sushi.svg'
import pizza from '@assets/images/AboutUs/Cards/Pizza.svg'
import noodles from '@assets/images/AboutUs/Cards/Noodles.svg'
import salad from '@assets/images/AboutUs/Cards/Salad.svg'
import iceCream from '@assets/images/AboutUs/Cards/IceCream.svg'
import cola from '@assets/images/AboutUs/Cards/Cola.svg'
import fork from '@assets/images/AboutUs/WhyBlock/Fork.svg'
import check from '@assets/images/AboutUs/WhyBlock/CheckBadge.svg'
import heart from '@assets/images/AboutUs/WhyBlock/Heart.svg'
import rollsImage_png from '@assets/images/AboutUs/Galery/1.png'
import rollsImage_webp from '@assets/images/AboutUs/Galery/1.webp'
import rollsImage_avif from '@assets/images/AboutUs/Galery/1.avif'
import drinkImage_png from '@assets/images/AboutUs/Galery/2.png'
import drinkImage_webp from '@assets/images/AboutUs/Galery/2.webp'
import drinkImage_avif from '@assets/images/AboutUs/Galery/2.avif'
import pizzaImage_png from '@assets/images/AboutUs/Galery/3.png'
import pizzaImage_webp from '@assets/images/AboutUs/Galery/3.webp'
import pizzaImage_avif from '@assets/images/AboutUs/Galery/3.avif'
import noodlesImage_png from '@assets/images/AboutUs/Galery/4.png'
import noodlesImage_webp from '@assets/images/AboutUs/Galery/4.webp'
import noodlesImage_avif from '@assets/images/AboutUs/Galery/4.avif'
import dessertImage_png from '@assets/images/AboutUs/Galery/5.png'
import dessertImage_webp from '@assets/images/AboutUs/Galery/5.webp'
import dessertImage_avif from '@assets/images/AboutUs/Galery/5.avif'
import sushiImage_png from '@assets/images/AboutUs/Galery/6.png'
import sushiImage_webp from '@assets/images/AboutUs/Galery/6.webp'
import sushiImage_avif from '@assets/images/AboutUs/Galery/6.avif'

export const aboutFoodCards = [
  {
    text: 'Роллы и суши из лучших ингредиентов',
    image: sushi,
  },
  {
    text: 'Ароматные пиццы с хрустящей корочкой',
    image: pizza,
  },
  {
    text: 'Сытные воки с яркими азиатскими соусами',
    image: noodles,
  },
  {
    text: 'Лёгкие салаты и закуски для компании',
    image: salad,
  },
  {
    text: 'Нежные и изысканные десерты',
    image: iceCream,
  },
  {
    text: 'Освежающие и согревающие напитки',
    image: cola,
  },
]

export const aboutWhyCards = [
  {
    text: 'Разнообразное меню для любого повода',
    image: fork,
  },
  {
    text: 'Честные порции и доступные цены',
    image: check,
  },
  {
    text: 'Уютная атмосфера кафе для различных встреч',
    image: heart,
  },
]

export const aboutGallery = [
  [
    {
      sources: [
        { srcSet: rollsImage_avif, type: 'image/avif' },
        { srcSet: rollsImage_webp, type: 'image/webp' },
      ],
      png: rollsImage_png,
      width: 329,
      height: 247,
    },
    {
      sources: [
        { srcSet: drinkImage_avif, type: 'image/avif' },
        { srcSet: drinkImage_webp, type: 'image/webp' },
      ],
      png: drinkImage_png,
      width: 165,
      height: 247,
    },
  ],
  [
    {
      sources: [
        { srcSet: pizzaImage_avif, type: 'image/avif' },
        { srcSet: pizzaImage_webp, type: 'image/webp' },
      ],
      png: pizzaImage_png,
      width: 285,
      height: 157,
    },
    {
      sources: [
        { srcSet: noodlesImage_avif, type: 'image/avif' },
        { srcSet: noodlesImage_webp, type: 'image/webp' },
      ],
      png: noodlesImage_png,
      width: 235,
      height: 157,
    },
  ],
  [
    {
      sources: [
        { srcSet: dessertImage_avif, type: 'image/avif' },
        { srcSet: dessertImage_webp, type: 'image/webp' },
      ],
      png: dessertImage_png,
      width: 165,
      height: 248,
    },
    {
      sources: [
        { srcSet: sushiImage_avif, type: 'image/avif' },
        { srcSet: sushiImage_webp, type: 'image/webp' },
      ],
      png: sushiImage_png,
      width: 331,
      height: 248,
    },
  ],
]
