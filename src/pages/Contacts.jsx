import useHead from "@/hooks/useHead";
import ContactsContainer from "@components/Containers/ContactsContainer/ContactsContainer";

function Contacts() {
  useHead({
    title: "Джонни Тунец | Контакты",
    description: "Контакты для поддержки и обратной связи",
    keywords: "контакты, поддержка, обратная связь, частые вопросы"
  })
  return(
    <>
      <ContactsContainer/>
    </>
  )
}

export default Contacts