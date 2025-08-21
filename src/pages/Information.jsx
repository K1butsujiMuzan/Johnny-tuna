import useHead from "@/hooks/useHead";

function Information() {
  useHead({
    title: "Джонни Тунец | Правовая информация",
    description: "Информация о правах производителя и потребителя",
    keywords: "права, информация, условия"
  })
  return(
    <>
      <h1>Информация</h1>
    </>
  )
}

export default Information