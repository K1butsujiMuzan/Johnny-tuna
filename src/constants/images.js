//AboutUs
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

//Stocks
import img1_png from '@assets/images/Stocks/1.png'
import img2_png from '@assets/images/Stocks/2.png'
import img3_png from '@assets/images/Stocks/3.png'
import img4_png from '@assets/images/Stocks/4.png'
import img5_png from '@assets/images/Stocks/5.png'
import img6_png from '@assets/images/Stocks/6.png'
import img7_png from '@assets/images/Stocks/7.png'
import img8_png from '@assets/images/Stocks/8.png'
import img9_png from '@assets/images/Stocks/9.png'
import img1_webp from '@assets/images/Stocks/1.webp'
import img2_webp from '@assets/images/Stocks/2.webp'
import img3_webp from '@assets/images/Stocks/3.webp'
import img4_webp from '@assets/images/Stocks/4.webp'
import img5_webp from '@assets/images/Stocks/5.webp'
import img6_webp from '@assets/images/Stocks/6.webp'
import img7_webp from '@assets/images/Stocks/7.webp'
import img8_webp from '@assets/images/Stocks/8.webp'
import img9_webp from '@assets/images/Stocks/9.webp'
import img1_avif from '@assets/images/Stocks/1.avif'
import img2_avif from '@assets/images/Stocks/2.avif'
import img3_avif from '@assets/images/Stocks/3.avif'
import img4_avif from '@assets/images/Stocks/4.avif'
import img5_avif from '@assets/images/Stocks/5.avif'
import img6_avif from '@assets/images/Stocks/6.avif'
import img7_avif from '@assets/images/Stocks/7.avif'
import img8_avif from '@assets/images/Stocks/8.avif'
import img9_avif from '@assets/images/Stocks/9.avif'

//Slider
import slide1_png from '@assets/images/Slider/SliderImage1.png'
import slide1_webp from '@assets/images/Slider/SliderImage1.webp'
import slide1_avif from '@assets/images/Slider/SliderImage1.avif'
import slide2_png from '@assets/images/Slider/SliderImage2.png'
import slide2_webp from '@assets/images/Slider/SliderImage2.webp'
import slide2_avif from '@assets/images/Slider/SliderImage2.avif'
import slide3_png from '@assets/images/Slider/SliderImage3.png'
import slide3_webp from '@assets/images/Slider/SliderImage3.webp'
import slide3_avif from '@assets/images/Slider/SliderImage3.avif'

//Address
import map from '@assets/icons/Contacts/MapPin.svg'
import phone from '@assets/icons/Contacts/Phone.svg'
import mail from '@assets/icons/Contacts/Mail.svg'
import watch from '@assets/icons/Contacts/Watch.svg'

//Delivery
import clock from '@assets/icons/Delivery/clock.svg'
import foodBag from '@assets/icons/Delivery/foodBag.svg'
import bell from '@assets/icons/Delivery/bell.svg'
import phoneNum from '@assets/icons/Delivery/phone.svg'
import clockBackground from '@assets/icons/Delivery/clockBackground.svg'
import mapPoint from '@assets/icons/Delivery/map.svg'
import moneyBag from '@assets/icons/Delivery/moneyBag.svg'
import card from '@assets/icons/Delivery/card.svg'

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

export const stocksCards = [
  {
    source: [
      { srcSet: img1_avif, type: 'image/avif' },
      { srcSet: img1_webp, type: 'image/webp' },
    ],
    png: img1_png,
    alt: 'Гарантия качества',
    text: 'Акция - «Гарантия качества»',
  },
  {
    source: [
      { srcSet: img2_avif, type: 'image/avif' },
      { srcSet: img2_webp, type: 'image/webp' },
    ],
    png: img2_png,
    alt: 'Счастливые часы',
    text: 'Акция - «Счастливые часы 10%»',
  },
  {
    source: [
      { srcSet: img3_avif, type: 'image/avif' },
      { srcSet: img3_webp, type: 'image/webp' },
    ],
    png: img3_png,
    alt: 'Подарок за отзыв',
    text: 'Акция - «Подарки за отзыв»',
  },
  {
    source: [
      { srcSet: img4_avif, type: 'image/avif' },
      { srcSet: img4_webp, type: 'image/webp' },
    ],
    png: img4_png,
    alt: 'Топпинг Оплачивается отдельно',
    text: 'Внимание - Топпинги',
  },
  {
    source: [
      { srcSet: img5_avif, type: 'image/avif' },
      { srcSet: img5_webp, type: 'image/webp' },
    ],
    png: img5_png,
    alt: 'Подарок к заказу',
    text: 'Акция - «Подарок к первому заказу»',
  },
  {
    source: [
      { srcSet: img6_avif, type: 'image/avif' },
      { srcSet: img6_webp, type: 'image/webp' },
    ],
    png: img6_png,
    alt: 'Пицца за 1 рубль',
    text: 'Акция - «Пицца за 1₽»',
  },
  {
    source: [
      { srcSet: img7_avif, type: 'image/avif' },
      { srcSet: img7_webp, type: 'image/webp' },
    ],
    png: img7_png,
    alt: 'Получай кешбэк',
    text: 'Акция - «Кэшбэк»',
  },
  {
    source: [
      { srcSet: img8_avif, type: 'image/avif' },
      { srcSet: img8_webp, type: 'image/webp' },
    ],
    png: img8_png,
    alt: 'Самовывоз скидка 10%',
    text: 'Акция - «Самовывоз»',
  },
  {
    source: [
      { srcSet: img9_avif, type: 'image/avif' },
      { srcSet: img9_webp, type: 'image/webp' },
    ],
    png: img9_png,
    alt: 'Подарок на день рождения',
    text: 'Акция - «День рождения»',
  },
]

export const sliderImages = [
  {
    sources: [
      { srcSet: slide1_avif, type: 'image/avif' },
      { srcSet: slide1_webp, type: 'image/webp' },
    ],
    src: slide1_png,
    alt: 'Пицца в подарок по промокоду LETO25',
  },
  {
    sources: [
      { srcSet: slide2_avif, type: 'image/avif' },
      { srcSet: slide2_webp, type: 'image/webp' },
    ],
    src: slide2_png,
    alt: 'Закажи в пиццерии две пиццы - третью получи бесплатно',
  },
  {
    sources: [
      { srcSet: slide3_avif, type: 'image/avif' },
      { srcSet: slide3_webp, type: 'image/webp' },
    ],
    src: slide3_png,
    alt: 'День пиццы: только в пятницу каждая третья пицца бесплатно',
  },
]

export const addressInformation = [
  {
    text: 'Адрес: Быстринская ул., 22/1, Сургут, Ханты-Мансийский автономный округ, 628406',
    icon: map,
  },
  {
    text: 'Телефон: 8 (999) 000-99-99',
    icon: phone,
  },
  {
    text: 'Электронная почта: test@mail.ru',
    icon: mail,
  },
  {
    text: 'Время работы: 9:00 - 23:00',
    icon: watch,
  },
]

export const deliveryCards = [
  {
    icon: clock,
    title: 'Доставка 45-120 мин',
    paragraph: `
      Время доставки зависит от вашего адреса. Курьеру предоставляется +-15 
      минут от крайнего времени. В выходные и праздничные дни ожидание может 
      быть увеличено. При низкой температуре воздуха от - 30 , доставка платная. 
      Подробности по номеру +7 999 000 99 99.
    `,
  },
  {
    icon: foodBag,
    title: 'Самовывоз от 30 мин',
    paragraph: `
      Долго ждать доставку? Вы можете оформить самовывоз и забрать ваш заказ из 
      любого удобного ресторана.На самовывоз скидка 10%.
    `,
  },
  {
    icon: bell,
    title: 'Подтверждение заказа',
    paragraph: `
      Откажитесь от звонка оператора, чтобы быстрее передать Ваш заказ в 
      доставку.
    `,
  },
  {
    icon: phoneNum,
    title: '+7 (999) 000-99-99',
    paragraph: `
      Позвоните нам, если нужно изменить заказ, время доставки, узнать статус 
      заказа или отказаться.
    `,
  },
]

export const deliveryInformation = [
  {
    icon: clockBackground,
    title: 'Прием заказов',
    paragraph: `
      Ежедневно: 9:00 - 23:00 +7 (999) 000-99-99. Пт и Сб: 9:00 - 23:30.
    `,
  },
  {
    icon: mapPoint,
    title: 'Стоимость',
    paragraph: `
      Бесплатная от 700 руб и выше. Бесплатная в отдаленные районы от 1500 руб. 
      и выше. См. карту "Зоны доставки".
    `,
  },
  {
    icon: moneyBag,
    title: 'Онлайн оплата',
    paragraph: `
      Заказы в отдаленные районы города и все заказы с выше 5000, оплачиваются 
      онлайн.
    `,
  },
  {
    icon: card,
    title: 'Оплата',
    paragraph: `
      Картой, СБП, Yandex Pay, наличными. Расчетный счет.
    `,
  },
]
