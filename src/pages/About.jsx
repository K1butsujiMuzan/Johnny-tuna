import useHead from "@/hooks/useHead";

function About() {
  useHead({
    title: "Джонни Тунец | О нас",
    description: "Информация о нашем заведении, условиях оформления заказов и времени времени работы",
    keywords: "информация, время работы, условия, история, информация о заказах"
  })
  return(
    <>
      <h1>О нас</h1>
    </>
  )
}

export default About