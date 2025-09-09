import useHead from "@/hooks/useHead";
import DeliveryContainer from "@components/DeliveryContainer/DeliveryContainer";

function Delivery() {
  useHead({
    title: "Джонни Тунец | Доставка",
    description: "Оформление заказа и доставки на дом",
    keywords: "заказ, оплата, доставка"
  })
  return(
    <>
      <DeliveryContainer/>
    </>
  )
}

export default Delivery