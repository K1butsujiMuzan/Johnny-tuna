import useHead from "@/hooks/useHead";

function Contacts() {
  useHead({
    title: "Джонни Тунец | Контакты",
    description: "Контакты для поддержки и обратной связи",
    keywords: "контакты, поддержка, обратная связь, частые вопросы"
  })
  return(
    <>
      <h1>Контакты</h1>
    </>
  )
}

export default Contacts