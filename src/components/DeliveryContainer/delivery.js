import clock from "@/assets/icons/Delivery/clock.svg"
import foodBag from "@/assets/icons/Delivery/foodBag.svg"
import bell from "@/assets/icons/Delivery/bell.svg"
import phone from "@/assets/icons/Delivery/phone.svg"

import clockBackground from "@/assets/icons/Delivery/clockBackground.svg"
import map from "@/assets/icons/Delivery/map.svg"
import moneyBag from "@/assets/icons/Delivery/moneyBag.svg"
import card from "@/assets/icons/Delivery/card.svg"

export const advantages = [
  {
    paragraph: "Минимальный заказ",
    title: "от 600 ₽"
  },
  {
    paragraph: "Время приготовления",
    title: "от 30 мин"
  },
  {
    paragraph: "Бесплатная доставка",
    title: "от 700 ₽"
  },
  {
    paragraph: "Время доставки",
    title: "от 45 мин"
  }
]

export const advantagesCards = [
  {
    icon: clock,
    title: "Доставка 45-120 мин",
    paragraph: `
      Время доставки зависит от вашего адреса. Курьеру предоставляется +-15 
      минут от крайнего времени. В выходные и праздничные дни ожидание может 
      быть увеличено. При низкой температуре воздуха от - 30 , доставка платная. 
      Подробности по номеру +7 999 000 99 99.
    `
  },
  {
    icon: foodBag,
    title: "Самовывоз от 30 мин",
    paragraph: `
      Долго ждать доставку? Вы можете оформить самовывоз и забрать ваш заказ из 
      любого удобного ресторана.На самовывоз скидка 10%.
    `
  },
  {
    icon: bell,
    title: "Подтверждение заказа",
    paragraph: `
      Откажитесь от звонка оператора, чтобы быстрее передать Ваш заказ в 
      доставку.
    `
  },
  {
    icon: phone,
    title: "+7 (999) 000-99-99",
    paragraph: `
      Позвоните нам, если нужно изменить заказ, время доставки, узнать статус 
      заказа или отказаться.
    `
  }
]

export const informationCards = [
  {
    icon: clockBackground,
    title: "Прием заказов",
    paragraph: `
      Ежедневно: 9:00 - 23:00 +7 (999) 000-99-99. Пт и Сб: 9:00 - 23:30.
    `
  },
  {
    icon: map,
    title: "Стоимость",
    paragraph: `
      Бесплатная от 700 руб и выше. Бесплатная в отдаленные районы от 1500 руб. 
      и выше. См. карту "Зоны доставки".
    `
  },
  {
    icon: moneyBag,
    title: "Онлайн оплата",
    paragraph: `
      Заказы в отдаленные районы города и все заказы с выше 5000, оплачиваются 
      онлайн.
    `
  },
  {
    icon: card,
    title: "Оплата",
    paragraph: `
      Картой, СБП, Yandex Pay, наличными. Расчетный счет.
    `
  }
]