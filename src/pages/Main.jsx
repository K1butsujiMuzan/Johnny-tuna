import useHead from "@/hooks/useHead";

function Main() {
  useHead({
    title: "Джонни Тунец | Главная",
    description: "🍕 Пицца и 🍣 роллы с доставкой за 60 минут! Акции каждый день. Бесплатная доставка от 1500 руб.",
    keywords: "пицца, роллы, доставка еды, кафе, еда на дом"
  })
  return(
    <>
      <h1>Главная</h1>
    </>
  )
}

export default Main