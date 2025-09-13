import useHead from "@/hooks/useHead";
import InformationContainer
  from "@components/Containers/InformationContainer/InformationContainer";

function Information() {
  useHead({
    title: "Джонни Тунец | Правовая информация",
    description: "Информация о правах производителя и потребителя",
    keywords: "права, информация, условия"
  })
  return(
    <>
      <InformationContainer/>
    </>
  )
}

export default Information